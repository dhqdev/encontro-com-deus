import { Check, Home, Utensils, Users } from "lucide-react";

const Value = () => {
  const includes = [
    { icon: Home, text: "Hospedagem completa" },
    { icon: Utensils, text: "Alimentação incluída" },
    { icon: Users, text: "Estrutura preparada" },
  ];

  return (
    <section id="valor" className="section-padding bg-secondary">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="card-spiritual bg-background text-center relative overflow-hidden">
            {/* Decorative background */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-golden opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent opacity-10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
            
            <div className="relative z-10">
              <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
                Investimento
              </span>
              
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                Valor do Encontro
              </h2>
              
              <div className="flex items-baseline justify-center gap-2 mb-6">
                <span className="text-2xl text-muted-foreground">R$</span>
                <span className="text-6xl md:text-8xl font-display font-bold text-gradient">200</span>
                <span className="text-xl text-muted-foreground">,00</span>
              </div>
              
              <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
                O valor cobre hospedagem, alimentação e toda a estrutura do retiro.
              </p>
              
              <div className="flex flex-wrap justify-center gap-6 mb-8">
                {includes.map((item, index) => (
                  <div key={index} className="flex items-center gap-2 text-foreground">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
              
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLSdTEy2bdiKBjoZNm_acb4kJUbBymEq-30UfjYQjMyidiyrKLQ/viewform" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <Check className="w-5 h-5" />
                Garantir Minha Vaga
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Value;
