import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Leaf } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-background text-foreground">
      <Leaf className="w-16 h-16 text-muted-foreground mb-6 opacity-20" />
      <h1 className="font-serif text-6xl mb-4">404</h1>
      <p className="text-muted-foreground mb-8 text-lg">The page you are looking for has returned to nature.</p>
      
      <Link href="/">
        <Button size="lg" className="font-medium">
          Return Home
        </Button>
      </Link>
    </div>
  );
}
