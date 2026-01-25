import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import Home from "@/pages/Home";
import Blog from "@/pages/Blog";
import Signals from "@/pages/Signals";
import About from "@/pages/About";
import NotFound from "@/pages/not-found";

// Scroll restoration helper
import { useEffect } from "react";
import { useLocation } from "wouter";

function ScrollToTop() {
  const [pathname] = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/blog" component={Blog} />
      <Route path="/blog/:id" component={Blog} />
      <Route path="/signals" component={Signals} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ScrollToTop />
        <NavBar />
        <main className="min-h-screen bg-background text-foreground selection:bg-primary/20">
          <Router />
        </main>
        <Footer />
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
