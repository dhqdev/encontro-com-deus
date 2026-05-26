import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

import photo1 from "@/assets/gallery/photo-1.jpeg";
import photo2 from "@/assets/gallery/photo-2.jpeg";
import photo3 from "@/assets/gallery/photo-3.jpeg";
import photo4 from "@/assets/gallery/photo-4.jpeg";
import photo5 from "@/assets/gallery/photo-5.jpeg";
import photo6 from "@/assets/gallery/photo-6.jpeg";
import photo7 from "@/assets/gallery/photo-7.jpeg";
import photo8 from "@/assets/gallery/photo-8.jpeg";

const photos = [
  { src: photo1, alt: "Momento de oração e acolhimento", phrase: "Cada coração tem um encontro marcado com Deus" },
  { src: photo2, alt: "Pessoa em oração profunda", phrase: "Na presença d'Ele, tudo se transforma" },
  { src: photo3, alt: "Equipe acolhendo participante", phrase: "Acolhidos pelo amor incondicional de Cristo" },
  { src: photo4, alt: "Momento intenso de oração", phrase: "A oração é a ponte entre você e o Pai" },
  { src: photo5, alt: "Abraço de apoio espiritual", phrase: "Unidos no Espírito, restaurados pela graça" },
  { src: photo6, alt: "Louvor com mãos levantadas", phrase: "Seu louvor alcança o coração de Deus" },
  { src: photo7, alt: "Liderança em adoração", phrase: "Líderes moldados pela humildade e amor" },
  { src: photo8, alt: "Comunhão e acolhimento", phrase: "Aqui começa uma nova história com Deus" },
];

const Gallery = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const dotsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !trackRef.current) return;

      const sectionTop = sectionRef.current.offsetTop;
      const sectionHeight = sectionRef.current.offsetHeight;
      const viewportHeight = window.innerHeight;
      const scrollY = window.scrollY;

      const scrolledIn = scrollY - sectionTop;
      const maxScroll = sectionHeight - viewportHeight;

      let tx = 0;
      if (scrolledIn <= 0) {
        tx = 0;
      } else if (maxScroll > 0 && scrolledIn >= maxScroll) {
        tx = (photos.length - 1) * window.innerWidth;
      } else if (maxScroll > 0) {
        tx = (scrolledIn / maxScroll) * (photos.length - 1) * window.innerWidth;
      }

      trackRef.current.style.transform = `translateX(-${tx}px)`;

      const activeIndex = Math.round(tx / window.innerWidth);
      dotsRef.current.forEach((dot, i) => {
        if (!dot) return;
        dot.style.opacity = i === activeIndex ? "1" : "0.4";
        dot.style.transform = i === activeIndex ? "scale(1.3)" : "scale(1)";
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="galeria" className="md:hidden bg-secondary">
      {/* Section Header */}
      <div className="pt-16 pb-8 container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-widest mb-4">
            Momentos
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-foreground mb-4">
            Galeria de Fotos
          </h2>
          <p className="text-base text-muted-foreground px-4">
            Confira alguns momentos marcantes de encontros passados
          </p>
        </motion.div>
      </div>

      {/* Sticky Horizontal Scroll */}
      <div
        ref={sectionRef}
        style={{ height: `calc(100vh + ${(photos.length - 1) * 100}vw)` }}
      >
        <div className="sticky top-0 h-screen overflow-hidden">
          {/* Track */}
          <div
            ref={trackRef}
            className="flex h-full will-change-transform"
            style={{ transform: "translateX(0)" }}
          >
            {photos.map((photo, i) => (
              <div key={i} className="w-screen h-screen flex-shrink-0 relative">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading={i === 0 ? "eager" : "lazy"}
                  className="w-full h-full object-cover"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/30" />

                {/* Phrase */}
                <div className="absolute bottom-20 left-0 right-0 px-8 text-center">
                  <p className="text-white text-xl font-display font-bold leading-snug drop-shadow-lg">
                    {photo.phrase}
                  </p>
                </div>

                {/* Scroll hint on first photo */}
                {i === 0 && (
                  <div className="absolute bottom-9 left-0 right-0 flex flex-col items-center gap-0.5 animate-bounce pointer-events-none">
                    <span className="text-white/60 text-xs">Role para ver mais</span>
                    <span className="text-white/60 text-sm">↓</span>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Progress dots */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 pointer-events-none">
            {photos.map((_, i) => (
              <div
                key={i}
                ref={(el) => (dotsRef.current[i] = el)}
                className="w-1.5 h-1.5 rounded-full bg-white transition-all duration-300"
                style={{ opacity: i === 0 ? 1 : 0.4 }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
