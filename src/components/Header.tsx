import { useState, useEffect } from "react";
import { Heart, Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#sobre", label: "Sobre" },
    { href: "#valor", label: "Valor" },
    { href: "#informacoes", label: "Informações" },
    { href: "#galeria", label: "Galeria" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-background/95 backdrop-blur-md shadow-soft py-3" 
          : "bg-transparent py-6"
      }`}
    >
      <div className="container-custom flex items-center justify-between px-4">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
            isScrolled ? "bg-gradient-golden" : "bg-primary-foreground/20 backdrop-blur-sm"
          }`}>
            <Heart className={`w-5 h-5 ${isScrolled ? "text-primary-foreground" : "text-primary-foreground"}`} fill="currentColor" />
          </div>
          <span className={`text-lg font-display font-bold ${isScrolled ? "text-foreground" : "text-primary-foreground"}`}>
            Encontro com Deus
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                isScrolled 
                  ? "text-muted-foreground hover:text-foreground" 
                  : "text-primary-foreground/80 hover:text-primary-foreground"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#inscricao"
            className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all ${
              isScrolled
                ? "bg-gradient-golden text-primary-foreground shadow-glow hover:shadow-elevated"
                : "bg-primary-foreground/20 text-primary-foreground backdrop-blur-sm hover:bg-primary-foreground/30"
            }`}
          >
            Inscreva-se
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`md:hidden w-10 h-10 rounded-full flex items-center justify-center ${
            isScrolled ? "text-foreground" : "text-primary-foreground"
          }`}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background shadow-elevated border-t border-border animate-fade-in">
          <nav className="flex flex-col p-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-3 text-foreground font-medium border-b border-border/50 last:border-0"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#inscricao"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-4 btn-primary text-center"
            >
              Inscreva-se
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
