import { MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6 }}
      className="bg-foreground text-primary-foreground"
    >
      <div className="container-custom py-12 px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo/About */}
          <div>
            <div className="mb-4">
              <span className="text-xl font-display font-bold">Encontro com Deus</span>
            </div>
            <p className="text-primary-foreground/70 text-sm">
              Um ministério dedicado à transformação de vidas através de encontros profundos com Deus.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <div className="space-y-3 text-sm text-primary-foreground/70">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Campinas - SP</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a
                  href="https://wa.me/5519983586167"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-foreground transition-colors"
                >
                  (19) 98358-61679227-9091
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Links Rápidos</h4>
            <div className="space-y-2 text-sm">
              <a href="#sobre" className="block text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                Sobre o Retiro
              </a>
              <a href="#informacoes" className="block text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                Informações
              </a>
              <a href="#galeria" className="block text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                Galeria
              </a>
              <a href="#inscricao" className="block text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                Inscrição
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-primary-foreground/10 text-center text-sm text-primary-foreground/50">
          <p>
            © {currentYear} Encontro com Deus. Todos os direitos reservados.
          </p>
          <p className="mt-1">
            Feito com dedicação para a glória de Deus
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
