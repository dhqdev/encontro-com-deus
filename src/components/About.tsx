import { Sparkles, Calendar, Users, Heart } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Sparkles,
      title: "Transformação",
      description: "Experiência profunda de mudança interior",
    },
    {
      icon: Calendar,
      title: "A cada 4 meses",
      description: "Um retiro especial preparado com amor",
    },
    {
      icon: Users,
      title: "Centenas de vidas",
      description: "Já foram transformadas pelo encontro",
    },
    {
      icon: Heart,
      title: "Cura e Liberdade",
      description: "Dias intensos na presença de Deus",
    },
  ];

  return (
    <section id="sobre" className="section-padding bg-gradient-section">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            Sobre o Retiro
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
            O que é o Encontro com Deus?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            O Encontro com Deus é um retiro espiritual de um único final de semana preparado com muito 
            <span className="text-primary font-semibold"> amor, oração e propósito</span>. 
            Acontece a cada 4 meses e tem transformado a vida de centenas de pessoas. São dias intensos 
            na presença de Deus, cheios de 
            <span className="text-accent font-semibold"> cura, liberdade, reflexão e restauração</span>.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="card-spiritual text-center group hover:shadow-elevated transition-all duration-500 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-golden flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-display font-bold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
