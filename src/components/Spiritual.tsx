import { Heart, Flame, Star } from "lucide-react";

const Spiritual = () => {
  return (
    <section className="section-padding bg-gradient-section relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 opacity-10">
        <Star className="w-24 h-24 text-primary" />
      </div>
      <div className="absolute bottom-10 right-10 opacity-10">
        <Flame className="w-32 h-32 text-accent" />
      </div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-golden mb-8 animate-pulse-glow">
            <Heart className="w-10 h-10 text-primary-foreground" fill="currentColor" />
          </div>
          
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-8 leading-tight">
            Deus tem algo <span className="text-gradient">poderoso</span> preparado para a sua vida
          </h2>
          
          <div className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
            <p>
              Acreditamos que Deus tem algo <strong className="text-foreground">poderoso</strong> preparado para a sua vida neste Encontro.
            </p>
            
            <p>
              Estamos em <strong className="text-primary">oração e jejum</strong> para que este final de semana seja um{" "}
              <strong className="text-foreground">marco espiritual</strong>, cheio de{" "}
              <span className="text-accent font-semibold">transformação, cura e renovo</span>.
            </p>
            
            <p className="text-2xl font-display italic text-foreground mt-8">
              Venha com fé, expectativa e coração aberto!
            </p>
          </div>
          
          <div className="mt-12 flex justify-center gap-4 flex-wrap">
            <div className="px-6 py-3 rounded-full bg-primary/10 text-primary font-medium">
              Transformação
            </div>
            <div className="px-6 py-3 rounded-full bg-accent/10 text-accent font-medium">
              Cura
            </div>
            <div className="px-6 py-3 rounded-full bg-primary/10 text-primary font-medium">
              Renovo
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Spiritual;
