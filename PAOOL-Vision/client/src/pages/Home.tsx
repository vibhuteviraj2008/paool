import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowDown, Leaf, Recycle, Wind, ArrowRight } from "lucide-react";
import { Link, useLocation } from "wouter";
import { Section } from "@/components/Section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useCreateLead } from "@/hooks/use-leads";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertLeadSchema, type InsertLead } from "@shared/schema";
import { SiInstagram, SiX, SiLinkedin, SiYoutube } from "react-icons/si";
import { useEffect, useState, useMemo } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { BLOG_POSTS } from "@/lib/blog-data";

export default function Home() {
  const [location] = useLocation();
  const { scrollY } = useScroll();
  const [headlineIndex, setHeadlineIndex] = useState(0);

  const headlines = useMemo(() => [
    {
      title: <>Making traditions meet <span className="text-primary italic">responsibility</span>.</>,
      subtitle: "Respecting what came before, while answering what the future asks."
    },
    {
      title: <>Taking shape this <span className="text-primary italic">Ganesha Chaturthi</span>.</>,
      subtitle: "Arriving when it matters."
    }
  ], []);

  useEffect(() => {
    const timer = setInterval(() => {
      setHeadlineIndex((prev) => (prev + 1) % headlines.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [headlines.length]);

  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const heroScale = useTransform(scrollY, [0, 300], [1, 0.95]);

  const form = useForm<InsertLead>({
    resolver: zodResolver(insertLeadSchema),
    defaultValues: {
      name: "",
      email: "",
      mobile: "",
      message: "",
    },
  });

  const { mutate, isPending } = useCreateLead();

  function onSubmit(data: InsertLead) {
    mutate(data, {
      onSuccess: () => form.reset(),
    });
  }

  // Get latest 2 posts sorted by date
  const latestPosts = useMemo(() => {
    return [...BLOG_POSTS]
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, 2);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-center items-center px-6 text-center overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        </div>

        <motion.div 
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="z-10 max-w-4xl space-y-8"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={headlineIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.1, ease: "easeInOut" }}
              className="space-y-8"
            >
              <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium leading-tight tracking-tight text-balance">
                {headlines[headlineIndex].title}
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-light">
                {headlines[headlineIndex].subtitle}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Slide Indicators */}
          <div className="flex justify-center gap-3 mt-8">
            {headlines.map((_, index) => (
              <button
                key={index}
                onClick={() => setHeadlineIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === headlineIndex 
                    ? "bg-primary w-6" 
                    : "bg-primary/20 hover:bg-primary/40"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground/50"
        >
          <span className="text-xs uppercase tracking-[0.2em]">Explore</span>
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </motion.div>
      </section>

      {/* The Problem Section */}
      <Section className="space-y-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-primary text-sm font-bold uppercase tracking-widest mb-4 block">The Challenge</span>
            <h2 className="text-3xl md:text-5xl font-serif mb-6">Better choices aren’t accessible choices.</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Today’s markets reward what is cheap, fast, and familiar. More responsible alternatives exist; but they’re often priced out of reach, hard to find, or impractical at scale. This leaves people choosing between intention and affordability.
            </p>
            <div className="h-px w-24 bg-accent/50 my-8" />
            <p className="text-muted-foreground text-lg leading-relaxed">
              When better options aren’t feasible, compromise becomes the default.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="bg-background/40 backdrop-blur-md border border-white/10 p-8 rounded-2xl shadow-sm">
              <ArrowDown className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-serif text-xl mb-2">Price Pressure</h3>
              <p className="text-muted-foreground text-sm">Cost-sensitive decisions often favor what’s cheapest; not what’s right.</p>
            </div>
            <div className="bg-background/40 backdrop-blur-md border border-white/10 p-8 rounded-2xl shadow-sm ml-0 md:ml-8">
              <Recycle className="w-8 h-8 text-accent mb-4" />
              <h3 className="font-serif text-xl mb-2">False Trade-offs</h3>
              <p className="text-muted-foreground text-sm">Sustainable alternatives are framed as premium, limiting real adoption.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Vision & Mission */}
      <Section id="mission" className="bg-secondary/10 rounded-3xl my-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-4xl mb-6">Our Path Forward</h2>
          <p className="text-muted-foreground">We operate on two timelines: the urgent now, and the infinite later.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div 
            whileHover={{ y: -5 }}
            className="p-8 border border-white/10 rounded-2xl bg-background/40 backdrop-blur-md shadow-sm"
          >
            <span className="text-accent text-xs uppercase tracking-widest mb-4 block">Vision</span>
            <h3 className="font-serif text-2xl mb-4">A Balanced Way Forward</h3>
            <p className="text-muted-foreground leading-relaxed">
              We envision a future where human practices, whether cultural, social, or commercial; exist in harmony with nature. A future where environmental responsibility is not treated as a premium choice or a moral burden, but as a natural part of everyday life. Where progress does not come at the cost of ecosystems, and preservation does not require compromise.
            </p>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="p-8 border border-white/10 rounded-2xl bg-background/40 backdrop-blur-md shadow-sm"
          >
            <span className="text-primary text-xs uppercase tracking-widest mb-4 block">Mission</span>
            <h3 className="font-serif text-2xl mb-4">Making Responsibility Feasible</h3>
            <p className="text-muted-foreground leading-relaxed">
              PAOOL exists to address the environmental impact created by short-lived, high-volume practices that are deeply embedded in everyday life. We focus on redesigning systems where people are forced to choose between affordability, accessibility, and environmental responsibility, and breaking that false choice. Our mission is to make sustainable alternatives practical, scalable, and realistic, so that caring for the environment becomes the default not the exception.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Survey Section */}
      <Section id="survey" className="bg-primary/5 py-24 text-center">
        <div className="max-w-2xl mx-auto space-y-8">
          <h2 className="font-serif text-4xl">Help shape the PAOOL</h2>
          <p className="text-muted-foreground text-lg">
            We are conducting a short survey to understand how people choose Ganesha idols and what they expect from eco-friendly alternatives. 
          </p>
          <Button 
            asChild
            size="lg"
            className="h-14 px-8 text-base bg-primary hover:bg-primary/90 text-primary-foreground rounded-full"
          >
            <a href="https://forms.gle/mmwJ4ATYjRzrtW1p9" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              Take the survey <ArrowRight className="w-4 h-4" />
            </a>
          </Button>
        </div>
      </Section>

      {/* Blog Teaser */}
      <Section className="bg-gradient-to-b from-transparent to-secondary/10 rounded-t-3xl pb-32">
        <div className="flex justify-between items-end mb-12">
          <div>
            <span className="text-accent text-xs uppercase tracking-widest mb-2 block">Insights</span>
            <h2 className="font-serif text-3xl md:text-4xl">Thinking out loud.</h2>
          </div>
          <Link href="/blog">
            <a className="hidden md:flex items-center gap-2 text-sm hover:text-primary transition-colors group">
              View all posts <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
           {latestPosts.map((post) => (
             <Link key={post.id} href={`/blog/${post.id}`}>
               <a className="group block p-8 rounded-2xl border border-white/10 bg-background/40 backdrop-blur-md shadow-sm hover:bg-background/60 transition-colors">
                 <div className="text-xs text-primary mb-3 font-mono">{post.date}</div>
                 <h3 className="font-serif text-2xl mb-3 group-hover:underline decoration-1 underline-offset-4">{post.title}</h3>
                 <p className="text-muted-foreground text-sm">{post.excerpt}</p>
                 <div className="mt-4 text-xs text-muted-foreground italic">By {post.author}</div>
               </a>
             </Link>
           ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <Link href="/blog">
             <Button variant="outline" className="w-full">View All Insights</Button>
          </Link>
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" className="py-24">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="font-serif text-4xl mb-6">Start a conversation.</h2>
            <p className="text-muted-foreground mb-12">
              We are selectively partnering with organizations ready for deep transformation.
              Reach out if you are ready to build the future.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-px bg-primary mt-3" />
                <div>
                  <h4 className="font-medium text-sm text-foreground">Paool Ecosolutions LLP</h4>
                  <p className="text-muted-foreground text-sm">Shahupuri, Kolhapur, MH, India</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-px bg-primary mt-3" />
                <div>
                  <h4 className="font-medium text-sm text-foreground">Email</h4>
                  <p className="text-muted-foreground text-sm">paool.ecosolutions@gmail.com</p>
                </div>
              </div>

              <div className="pt-8 grid grid-cols-1 gap-4">
                <a href="https://www.instagram.com/paool.official/" className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-primary/50 transition-colors">
                    <SiInstagram className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">@paool.official</span>
                </a>
                <a href="https://www.x.com/paool_official" className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-primary/50 transition-colors">
                    <SiX className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">@paool_official</span>
                </a>
                <a href="https://www.linkedin.com/company/paool-ecosolutions-llp" className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-primary/50 transition-colors">
                    <SiLinkedin className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">Paool Ecosolutions LLP</span>
                </a>
                <a href="https://youtube.com/@paool.official" className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-primary/50 transition-colors">
                    <SiYoutube className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">@paool.official</span>
                </a>
              </div>
            </div>
          </div>

          <div className="bg-background/40 backdrop-blur-md p-8 md:p-10 rounded-3xl border border-white/10 shadow-sm">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs uppercase tracking-wider text-muted-foreground">Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your name" className="bg-background/50 border-white/10 focus:border-primary/50" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs uppercase tracking-wider text-muted-foreground">Email</FormLabel>
                      <FormControl>
                        <Input placeholder="your@email.com" className="bg-background/50 border-white/10 focus:border-primary/50" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="mobile"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs uppercase tracking-wider text-muted-foreground">Mobile Number</FormLabel>
                      <FormControl>
                        <Input placeholder="+91 00000 00000" className="bg-background/50 border-white/10 focus:border-primary/50" {...field} value={field.value || ""} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs uppercase tracking-wider text-muted-foreground">Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell us about your vision..." 
                          className="bg-background/50 border-white/10 focus:border-primary/50 min-h-[120px] resize-none" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  disabled={isPending}
                  className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-medium tracking-wide"
                >
                  {isPending ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </Section>
    </div>
  );
}