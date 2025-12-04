import { 
  Calendar, 
  MapPin, 
  Clock, 
  Backpack, 
  Shirt, 
  BookOpen, 
  BedDouble, 
  Sparkles,
  AlertTriangle,
  Home,
  Smartphone,
  Phone
} from "lucide-react";

const Info = () => {
  const schedule = [
    { icon: Clock, title: "Saída", text: "Sexta-feira, às 19h30", highlight: "Sem atrasos!" },
    { icon: Calendar, title: "Retorno", text: "Domingo, às 18h30", highlight: "Culto de encerramento" },
  ];

  const whatToBring = [
    { icon: Shirt, text: "Roupas confortáveis" },
    { icon: Sparkles, text: "Itens de higiene pessoal" },
    { icon: BookOpen, text: "Bíblia física" },
    { icon: BedDouble, text: "Roupa de cama (lençol, cobertor e travesseiro)" },
    { icon: Sparkles, text: "Roupa especial para o culto de domingo" },
  ];

  const rules = [
    { icon: Clock, title: "Sem tempo livre", text: "Cronograma 100% dedicado" },
    { icon: Home, title: "Alojamentos separados", text: "Homens e mulheres" },
    { icon: Smartphone, title: "Uso ZERO de celular", text: "Durante todo o encontro" },
  ];

  const emergencyContacts = [
    { name: "Cleverson", phone: "(19) 98358-6167" },
    { name: "Geovana", phone: "(19) 98358-6166" },
    { name: "Eduardo", phone: "(19) 98386-7500" },
    { name: "Kamila", phone: "(19) 99366-7494" },
  ];

  return (
    <section id="informacoes" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            Prepare-se
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
            Informações Importantes
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Programação */}
          <div className="card-spiritual">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-golden flex items-center justify-center">
                <Calendar className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-display font-bold text-foreground">Programação</h3>
            </div>
            
            <div className="space-y-4">
              {schedule.map((item, index) => (
                <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-secondary/50">
                  <item.icon className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <span className="font-semibold text-foreground">{item.title}: </span>
                    <span className="text-muted-foreground">{item.text}</span>
                    {item.highlight && (
                      <span className="ml-2 text-sm font-medium text-accent">({item.highlight})</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Local */}
          <div className="card-spiritual">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-golden flex items-center justify-center">
                <MapPin className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-display font-bold text-foreground">Local do Retiro</h3>
            </div>
            
            <div className="p-4 rounded-xl bg-secondary/50 mb-4">
              <p className="font-semibold text-foreground mb-1">Seminário Teológico Nazareno do Brasil</p>
              <p className="text-muted-foreground text-sm">
                Estr. da Rhodia, Km 15 - Barão Geraldo, Campinas - SP, 13084-970
              </p>
            </div>
            
            <div className="rounded-xl overflow-hidden h-48">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3676.3!2d-47.08!3d-22.83!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8c5!2sSeminario%20Teologico%20Nazareno!5e0!3m2!1spt-BR!2sbr!4v1"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Local do Retiro"
              />
            </div>
          </div>
        </div>

        {/* O que levar */}
        <div className="card-spiritual mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-golden flex items-center justify-center">
              <Backpack className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="text-2xl font-display font-bold text-foreground">O que levar</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {whatToBring.map((item, index) => (
              <div key={index} className="flex items-center gap-3 p-3 rounded-xl bg-secondary/50">
                <item.icon className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-foreground">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Regras */}
        <div className="card-spiritual border-accent/30">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center">
              <AlertTriangle className="w-6 h-6 text-accent-foreground" />
            </div>
            <h3 className="text-2xl font-display font-bold text-foreground">Regras e Orientações</h3>
          </div>
          
          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            {rules.map((rule, index) => (
              <div key={index} className="text-center p-4 rounded-xl bg-accent/10 border border-accent/20">
                <rule.icon className="w-8 h-8 text-accent mx-auto mb-3" />
                <h4 className="font-semibold text-foreground mb-1">{rule.title}</h4>
                <p className="text-sm text-muted-foreground">{rule.text}</p>
              </div>
            ))}
          </div>

          {/* Contatos de emergência */}
          <div className="p-4 rounded-xl bg-secondary/50">
            <div className="flex items-center gap-2 mb-4">
              <Phone className="w-5 h-5 text-primary" />
              <h4 className="font-semibold text-foreground">Contatos de Emergência</h4>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {emergencyContacts.map((contact, index) => (
                <div key={index} className="text-center">
                  <p className="font-medium text-foreground">{contact.name}</p>
                  <a 
                    href={`tel:${contact.phone.replace(/\D/g, '')}`}
                    className="text-sm text-primary hover:underline"
                  >
                    {contact.phone}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
