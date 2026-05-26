import heroBg from "@/assets/hero-bg.jpg";
import { Heart } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative bg-background">
      {/* Image */}
      <div className="relative w-full h-[55vh] sm:h-[65vh] md:h-[80vh] overflow-hidden">
        <img
          src={heroBg}
          alt="Encontro com Deus - retiro espiritual"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
      </div>

      {/* Text content below image */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 -mt-16 md:-mt-24 text-center px-6 max-w-3xl mx-auto pb-16 md:pb-24"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-background border border-border shadow-sm mb-6">
          <Heart className="w-3.5 h-3.5 text-primary" fill="currentColor" />
          <span className="text-xs font-medium tracking-wider uppercase text-muted-foreground">
            Ministério de Transformação
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-foreground leading-[1.05] mb-5">
          Encontro com Deus
        </h1>

        <p className="text-base sm:text-lg md:text-xl font-display italic text-muted-foreground mb-8 max-w-xl mx-auto">
          Um final de semana para transformar sua vida.
        </p>

        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSdTEy2bdiKBjoZNm_acb4kJUbBymEq-30UfjYQjMyidiyrKLQ/viewform"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary text-base"
        >
          <Heart className="w-4 h-4" />
          Quero Participar
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
