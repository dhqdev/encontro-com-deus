import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Início", href: "#" },
  { label: "Sobre", href: "#sobre" },
  { label: "Informações", href: "#informacoes" },
  { label: "Inscrição", href: "#inscricao" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (href: string) => {
    setIsOpen(false);
    setTimeout(() => {
      if (href === "#") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
      }
    }, 250);
  };

  return (
    <div className="fixed top-5 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center">
      <motion.nav
        layout
        transition={{ type: "spring", stiffness: 350, damping: 28 }}
        className="bg-background/85 backdrop-blur-md border border-border/70 rounded-full shadow-lg shadow-foreground/5"
      >
        <div className="flex items-center gap-3 px-5 py-2.5">

          {/* Brand */}
          <span className="font-display font-bold text-foreground text-sm whitespace-nowrap tracking-tight select-none">
            Encontro com Deus
          </span>

          {/* Links — desktop: expansão horizontal */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                key="links"
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "auto" }}
                exit={{ opacity: 0, width: 0 }}
                transition={{ type: "spring", stiffness: 350, damping: 28 }}
                className="hidden md:flex items-center overflow-hidden"
              >
                <div className="w-px h-3.5 bg-border/70 mx-2 flex-shrink-0" />
                {navItems.map((item, i) => (
                  <motion.button
                    key={item.href}
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ delay: i * 0.055, duration: 0.2 }}
                    onClick={() => scrollTo(item.href)}
                    className="px-3 py-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap rounded-full hover:bg-secondary/70 cursor-pointer"
                  >
                    {item.label}
                  </motion.button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Botão toggle */}
          <motion.button
            whileTap={{ scale: 0.85 }}
            onClick={() => setIsOpen(!isOpen)}
            className="w-6 h-6 flex items-center justify-center rounded-full hover:bg-secondary/70 transition-colors flex-shrink-0 cursor-pointer"
          >
            <AnimatePresence mode="wait" initial={false}>
              {isOpen ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -45, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 45, opacity: 0 }}
                  transition={{ duration: 0.18 }}
                  className="flex"
                >
                  <X className="w-3.5 h-3.5 text-foreground" />
                </motion.span>
              ) : (
                <motion.span
                  key="open"
                  initial={{ rotate: 45, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -45, opacity: 0 }}
                  transition={{ duration: 0.18 }}
                  className="flex"
                >
                  <Menu className="w-3.5 h-3.5 text-foreground" />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>

        </div>
      </motion.nav>

      {/* Mobile: dropdown vertical abaixo da pílula */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 350, damping: 28 }}
            className="md:hidden mt-2 bg-background/90 backdrop-blur-md border border-border/70 rounded-2xl shadow-lg py-2 px-1 flex flex-col min-w-[160px]"
          >
            {navItems.map((item, i) => (
              <motion.button
                key={item.href}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05, duration: 0.18 }}
                onClick={() => scrollTo(item.href)}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/70 transition-colors rounded-xl text-left cursor-pointer"
              >
                {item.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
