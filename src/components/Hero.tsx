import heroBg from "@/assets/hero-bg.jpg";
import { motion } from "framer-motion";

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

          <h1 className="text-4xl font-display font-bold text-foreground leading-[1.05] mb-4">
            Encontro com Deus
          </h1>

          <p className="text-base font-display italic text-muted-foreground mb-8">
            Um final de semana para transformar sua vida.
          </p>

          <a
            href={FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-bubbles"
            onClick={handleParticipate}
          >
            <span className="btn-bubbles-text">Quero Participar</span>
          </a>
        </motion.div>
      </div>

      {/* ── DESKTOP: layout original (imagem + texto abaixo) ── */}
      <div className="hidden md:block">
        <div className="relative w-full h-[65vh] lg:h-[80vh] overflow-hidden">
          <img
            src={heroBg}
            alt="Encontro com Deus - retiro espiritual"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 -mt-24 text-center px-6 max-w-3xl mx-auto pb-24"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-background border border-border shadow-sm mb-6">
            <span className="text-xs font-medium tracking-widest uppercase text-muted-foreground">
              Ministério de Transformação
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-foreground leading-[1.05] mb-5">
            Encontro com Deus
          </h1>

          <p className="text-lg md:text-xl font-display italic text-muted-foreground mb-8 max-w-xl mx-auto">
            Um final de semana para transformar sua vida.
          </p>

          <a
            href={FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-bubbles"
            onClick={handleParticipate}
          >
            <span className="btn-bubbles-text">Quero Participar</span>
          </a>
        </motion.div>
      </div>

    </section>
  );
};

export default Hero;
