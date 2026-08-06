import { useState, useEffect } from "react";
import heroBg from "@/assets/gallery/fotogeralencontro2026.jpeg";
import { motion, AnimatePresence } from "framer-motion";
import Shuffle from "@/components/Shuffle";
import photo1 from "@/assets/gallery/photo-1.jpeg";
import photo2 from "@/assets/gallery/photo-2.jpeg";
import photo6 from "@/assets/gallery/photo-6.jpeg";
import photo7 from "@/assets/gallery/photo-7.jpeg";
import photo8 from "@/assets/gallery/photo-8.jpeg";
import equipeinterna from "@/assets/gallery/equipeinterna.jpeg";

const FORM_URL =
  "https://encontrocomdeus-inne.vercel.app/inscrever";

const Hero = () => {
  const slideshowPhotos = [photo6, photo7, photo8, equipeinterna];
  const slideshowPhrases = [
    "Experimente a presença de Deus",
    "Um fim de semana que transforma vidas",
    "Venha e seja renovado",
    "Uma equipe preparada pra te acolher",
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
        {/* Gradiente de cima pra baixo — escurece onde fica o conteúdo do topo */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/30 to-transparent pointer-events-none" />
        {/* Gradiente de baixo pra cima — legibilidade do botão */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent pointer-events-none" />

        {/* Conteúdo no topo — logo após a navbar */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="absolute top-20 left-0 right-0 px-6 text-center z-10"
        >
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-background/80 backdrop-blur-sm border border-border shadow-sm mb-4">
            <span className="text-xs font-medium tracking-widest uppercase text-muted-foreground">
              Ministério de Transformação
            </span>
          </div>

          <div className="bg-background/70 backdrop-blur-md rounded-2xl px-5 py-4 shadow-lg">
            <h1 className="font-jakarta font-semibold leading-snug mb-2">
              <Shuffle
                text="Bem vindo ao"
                tag="span"
                textAlign="center"
                className="block text-2xl text-foreground/60 font-light tracking-wide"
                shuffleDirection="right"
                duration={0.32}
                animationMode="evenodd"
                shuffleTimes={1}
                ease="power3.out"
                stagger={0.03}
                threshold={0.1}
                triggerOnce={true}
                triggerOnHover={true}
                respectReducedMotion={true}
                loop={false}
              />
              <Shuffle
                text="Encontro com Deus!"
                tag="span"
                textAlign="center"
                className="block text-3xl text-accent"
                shuffleDirection="right"
                duration={0.38}
                animationMode="evenodd"
                shuffleTimes={1}
                ease="power3.out"
                stagger={0.04}
                threshold={0.1}
                triggerOnce={true}
                triggerOnHover={true}
                respectReducedMotion={true}
                loop={false}
              />
            </h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.75 }}
              className="text-base font-sans font-light tracking-wide text-muted-foreground"
            >
              Um final de semana para{" "}
              <span className="relative inline-block">
                <span className="text-foreground/75 font-normal">transformar sua vida.</span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.45, delay: 1.1, ease: "easeOut" }}
                  className="absolute bottom-0 left-0 right-0 h-px bg-accent/50 origin-left"
                />
              </span>
            </motion.p>
          </div>
        </motion.div>

        {/* Botão no rodapé */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: "easeOut" }}
          className="absolute bottom-0 left-0 right-0 px-6 pb-14 text-center z-10"
        >
          <a
            href={FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-inscricao w-full !py-4 !text-lg"
          >
            Inscrições abertas — 23 a 25 de outubro
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

              <div>
                <h1 className="font-jakarta font-semibold leading-snug mb-4">
                  <Shuffle
                    text="Bem vindo ao"
                    tag="span"
                    textAlign="left"
                    className="block text-xl lg:text-2xl text-foreground/50 font-light tracking-widest uppercase"
                    shuffleDirection="right"
                    duration={0.32}
                    animationMode="evenodd"
                    shuffleTimes={1}
                    ease="power3.out"
                    stagger={0.03}
                    threshold={0.1}
                    triggerOnce={true}
                    triggerOnHover={true}
                    respectReducedMotion={true}
                    loop={false}
                  />
                  <Shuffle
                    text="Encontro com Deus!"
                    tag="span"
                    textAlign="left"
                    className="block text-4xl lg:text-5xl text-accent"
                    shuffleDirection="right"
                    duration={0.4}
                    animationMode="evenodd"
                    shuffleTimes={1}
                    ease="power3.out"
                    stagger={0.045}
                    threshold={0.1}
                    triggerOnce={true}
                    triggerOnHover={true}
                    respectReducedMotion={true}
                    loop={false}
                  />
                </h1>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.65 }}
                  className="text-lg font-sans font-light tracking-wide text-muted-foreground mb-10"
                >
                  Um final de semana para{" "}
                  <span className="relative inline-block">
                    <span className="text-foreground/70 font-normal">transformar sua vida.</span>
                    <motion.span
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.5, delay: 1.1, ease: "easeOut" }}
                      className="absolute bottom-0 left-0 right-0 h-px bg-accent/50 origin-left"
                    />
                  </span>
                </motion.p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href={FORM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-inscricao"
                  >
                    Inscrições abertas — 23 a 25 de outubro
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
              </div>
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
