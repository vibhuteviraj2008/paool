import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Mission", href: "/#mission" },
    { name: "About", href: "/about" },
    { name: "Insights", href: "/blog" },
    { name: "Signals", href: "/signals" },
    { name: "Contact", href: "/#contact" },
  ];

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    if (href.startsWith("/#")) {
      if (location === "/") {
        const element = document.querySelector(href.substring(1));
        element?.scrollIntoView({ behavior: "smooth" });
      } else {
        // If not on home page, wouter will navigate to "/" and then we need to scroll
        // The browser usually handles the hash if it's in the URL on load
        // But for smooth scrolling we might need a small helper
      }
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        isScrolled 
          ? "py-4 bg-background/80 backdrop-blur-md border-b border-white/5 shadow-sm" 
          : "py-8 bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link href="/" className="font-serif text-2xl font-bold tracking-widest text-foreground hover:opacity-80 transition-opacity z-50 relative">
          PAOOL
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className={cn(
                  "text-sm uppercase tracking-widest hover:text-primary transition-colors cursor-pointer",
                  location === link.href ? "text-primary" : "text-muted-foreground"
                )}
                onClick={() => handleNavClick(link.href)}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <Link 
            href="/#survey"
            className="inline-flex items-center justify-center px-5 py-2 text-xs uppercase tracking-widest font-medium bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors"
            onClick={() => handleNavClick("/#survey")}
          >
            Survey
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden z-50 relative text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed inset-0 bg-background z-40 flex flex-col items-center justify-center space-y-8"
            >
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href}
                  className="font-serif text-3xl text-foreground hover:text-primary transition-colors cursor-pointer"
                  onClick={() => handleNavClick(link.href)}
                >
                  {link.name}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
