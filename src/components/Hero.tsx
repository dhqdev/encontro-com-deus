import heroBg from "@/assets/hero-bg.jpg";
import { Heart } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Overlay - muito mais escuro para melhor legibilidade */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/85" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto py-20">
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 mb-6 md:mb-8">
            <Heart className="w-4 h-4 text-primary" fill="currentColor" />
            <span className="text-xs md:text-sm font-medium text-primary-foreground/90">Ministério de Transformação</span>
          </div>
        </div>
        
        <h1 className="animate-fade-up-delay-1 text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-tight mb-4 md:mb-6 drop-shadow-2xl">
          Encontro com Deus
        </h1>
        
        <p className="animate-fade-up-delay-2 text-lg sm:text-xl md:text-2xl lg:text-3xl font-display italic text-white mb-3 md:mb-4 drop-shadow-lg">
          Um Final de Semana para Transformar Sua Vida
        </p>
        
        <p className="animate-fade-up-delay-2 text-base md:text-lg lg:text-xl text-white/90 max-w-2xl mx-auto mb-8 md:mb-10 px-4 drop-shadow-md">
          Uma experiência profunda de renovação espiritual, cura e reconexão com Deus.
        </p>
        
        <div className="animate-fade-up-delay-3">
          <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLSdTEy2bdiKBjoZNm_acb4kJUbBymEq-30UfjYQjMyidiyrKLQ/viewform" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary animate-pulse-glow text-base md:text-lg"
          >
            <Heart className="w-5 h-5" />
            Quero Participar
          </a>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/50 flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
