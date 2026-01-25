export function Footer() {
  return (
    <footer className="bg-secondary/20 border-t border-white/5 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h2 className="font-serif text-xl tracking-widest mb-2">PAOOL</h2>
          <p className="text-muted-foreground text-sm">Making Traditions Meet Responsibility</p>
        </div>
        
        <div className="flex gap-6 text-sm text-muted-foreground">
          <a href="#" className="hover:text-primary transition-colors">Privacy</a>
          <a href="#" className="hover:text-primary transition-colors">Terms</a>
          <a href="https://www.instagram.com/paool.official/" className="hover:text-primary transition-colors">Instagram</a>
          <a href="https://www.linkedin.com/company/paool-ecosolutions-llp" className="hover:text-primary transition-colors">LinkedIn</a>
          <a href="https://youtube.com/@paool.official" className="hover:text-primary transition-colors">YouTube</a>
        </div>
        
        <div className="text-xs text-muted-foreground/50">
          © {new Date().getFullYear()} PAOOL Ecosolutions LLP. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
