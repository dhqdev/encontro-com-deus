import { Heart, MapPin, Mail, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container-custom py-12 px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo/About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-golden flex items-center justify-center">
                <Heart className="w-5 h-5 text-primary-foreground" fill="currentColor" />
              </div>
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
                <span>(19) 98358-6167</span>
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
            Feito com <Heart className="w-3 h-3 inline text-accent" fill="currentColor" /> para a glória de Deus
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
