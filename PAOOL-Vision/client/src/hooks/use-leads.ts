import { useMutation } from "@tanstack/react-query";
import { api, type LeadInput } from "@shared/routes";
import { useToast } from "@/hooks/use-toast";

export function useCreateLead() {
  const { toast } = useToast();
  
  return useMutation({
    mutationFn: async (data: LeadInput) => {
      // Validate with Zod before sending (double check)
      const validated = api.leads.create.input.parse(data);
      
      const res = await fetch(api.leads.create.path, {
        method: api.leads.create.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validated),
      });

      if (!res.ok) {
        const errorData = await res.json();
        // Try to parse known error format, fallback to generic
        try {
          const error = api.leads.create.responses[400].parse(errorData);
          throw new Error(error.message);
        } catch (e) {
            // Check if it's a 500 error
             try {
                 const internalError = api.leads.create.responses[500].parse(errorData);
                 throw new Error(internalError.message);
             } catch {
                 throw new Error("Failed to submit inquiry. Please try again.");
             }
        }
      }
      
      return api.leads.create.responses[201].parse(await res.json());
    },
    onSuccess: () => {
      toast({
        title: "Message Sent",
        description: "Thank you for reaching out. We will be in touch shortly.",
      });
    },
    onError: (error) => {
      toast({
        variant: "destructive",
        title: "Error",
        description: error instanceof Error ? error.message : "Something went wrong",
      });
    },
  });
}
