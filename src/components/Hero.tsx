import { useState, useEffect } from "react";
import heroBg from "@/assets/hero-bg.jpg";
import { motion, AnimatePresence } from "framer-motion";
import photo1 from "@/assets/gallery/photo-1.jpeg";
import photo2 from "@/assets/gallery/photo-2.jpeg";
import photo6 from "@/assets/gallery/photo-6.jpeg";
import photo7 from "@/assets/gallery/photo-7.jpeg";
import photo8 from "@/assets/gallery/photo-8.jpeg";

const FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSdTEy2bdiKBjoZNm_acb4kJUbBymEq-30UfjYQjMyidiyrKLQ/viewform";

/** Abre o link após a animação bubble terminar (~900ms) */
const handleParticipate = (e: React.MouseEvent<HTMLAnchorElement>) => {
  e.preventDefault();
  setTimeout(() => {
    // window.open funciona aqui pois a "user activation" do clique dura ~5s
    // iOS Safari pode bloquear e retornar null → fallback mesma aba
    const opened = window.open(FORM_URL, "_blank", "noopener,noreferrer");
    if (!opened) window.location.href = FORM_URL;
  }, 900);
};

const Hero = () => {
  const slideshowPhotos = [photo6, photo7, photo8];
  const slideshowPhrases = [
    "Experimente a presença de Deus",
    "Um fim de semana que transforma vidas",
    "Venha e seja renovado",
  ];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slideshowPhotos.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slideshowPhotos.length]);

  return (
    <section className="relative bg-background">

      {/* ── MOBILE: tela cheia com conteúdo sobreposto ── */}
      <div className="relative md:hidden w-full h-[100svh] overflow-hidden">
        <img
          src={heroBg}
          alt="Encontro com Deus - retiro espiritual"
          className="w-full h-full object-cover object-center"
        />
        {/* Gradiente escuro na parte inferior para legibilidade */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />

        {/* Conteúdo centralizado no rodapé da imagem */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="absolute bottom-0 left-0 right-0 px-6 pb-14 pt-8 text-center"
        >
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-background/80 backdrop-blur-sm border border-border shadow-sm mb-5">
            <span className="text-xs font-medium tracking-widest uppercase text-muted-foreground">
              Ministério de Transformação
            </span>
          </div>

          <div className="bg-background/70 backdrop-blur-md rounded-2xl px-5 py-4 mb-5 shadow-lg">
            <h1 className="text-3xl font-jakarta font-semibold text-foreground/90 leading-snug mb-2">
              Encontro com Deus!
            </h1>
            <p className="text-base font-sans font-light tracking-wide text-muted-foreground">
              Um final de semana para transformar sua vida.
            </p>
          </div>

          <a
            href={FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-fill"
            onClick={handleParticipate}
          >
            Quero Participar
          </a>
        </motion.div>
      </div>

      {/* ── DESKTOP: layout em grade (igual ao de referência) ── */}
      <div className="hidden md:block px-8 lg:px-16 pt-24 pb-16">
        <div className="max-w-7xl mx-auto">

          {/* Grade principal */}
          <div className="grid grid-cols-[5fr_6fr] gap-6 mb-6">

            {/* Coluna esquerda: foto grande + texto + botão */}
            <div className="flex flex-col gap-6">
              <div className="rounded-2xl overflow-hidden aspect-[4/3]">
                <img
                  src={heroBg}
                  alt="Encontro com Deus - retiro espiritual"
                  className="w-full h-full object-cover"
                />
              </div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              >
                <h1 className="text-3xl lg:text-4xl font-jakarta font-semibold text-foreground/90 leading-snug mb-4">
                  Bem vindo ao Encontro com Deus!
                </h1>
                <p className="text-lg font-sans font-light tracking-wide text-muted-foreground mb-10">
                  Um final de semana para transformar sua vida.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href={FORM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-fill"
                    onClick={handleParticipate}
                  >
                    Quero Participar
                  </a>
                  <a
                    href="https://wa.me/5519983586167?text=Ola%20tudo%20bem%20Cleo%20%3F%20quero%20saber%20mais%20sobre%20o%20encontro%21"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-fill"
                  >
                    Tirar Dúvidas
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Coluna direita: 2 fotos topo + slideshow */}
            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl overflow-hidden aspect-[4/3]">
                  <img src={photo1} alt="Encontro com Deus" className="w-full h-full object-cover" />
                </div>
                <div className="rounded-2xl overflow-hidden aspect-[4/3]">
                  <img src={photo2} alt="Encontro com Deus" className="w-full h-full object-cover" />
                </div>
              </div>

              {/* Slideshow automático */}
              <div className="relative rounded-2xl overflow-hidden aspect-[16/9]">
                {slideshowPhotos.map((photo, i) => (
                  <img
                    key={i}
                    src={photo}
                    alt="Encontro com Deus"
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[1500ms] ease-in-out ${
                      i === currentSlide ? "opacity-100" : "opacity-0"
                    }`}
                  />
                ))}

                {/* Gradiente inferior para legibilidade da frase */}
                <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />

                {/* Frase animada */}
                <div className="absolute inset-x-0 bottom-8 px-5">
                  <AnimatePresence mode="wait">
                    <motion.p
                      key={currentSlide}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      className="text-white text-center font-display font-semibold text-lg leading-snug drop-shadow-lg"
                    >
                      {slideshowPhrases[currentSlide]}
                    </motion.p>
                  </AnimatePresence>
                </div>

                <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5">
                  {slideshowPhotos.map((_, i) => (
                    <div
                      key={i}
                      className={`h-0.5 rounded-full transition-all duration-500 bg-white ${
                        i === currentSlide ? "w-6 opacity-100" : "w-2 opacity-40"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
