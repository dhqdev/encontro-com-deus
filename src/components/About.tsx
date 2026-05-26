import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const features = [
  {
    label: "Transformação",
    description: "Experiência profunda de mudança interior através da presença de Deus.",
  },
  {
    label: "A cada 4 meses",
    description: "Um retiro especial preparado com oração, amor e muito cuidado.",
  },
  {
    label: "Centenas de vidas",
    description: "Já foram transformadas em edições anteriores do encontro.",
  },
  {
    label: "Cura e Liberdade",
    description: "Dias intensos de restauração, reflexão e renovação espiritual.",
  },
];

const About = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [mobileActive, setMobileActive] = useState<number | null>(0);

  return (
    <section id="sobre" className="section-padding bg-gradient-section">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-widest mb-4">
            Sobre o Retiro
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
            O que é o Encontro com Deus?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Um retiro espiritual de um único final de semana, preparado com muito{" "}
            <span className="text-foreground font-medium">amor, oração e propósito</span>.
            São dias intensos na presença de Deus, cheios de{" "}
            <span className="text-foreground font-medium">cura, liberdade e restauração</span>.
          </p>
        </motion.div>

        {/* Divisor */}
        <div className="flex items-center gap-6 max-w-xs mx-auto mb-16">
          <div className="flex-1 h-px bg-border" />
          <div className="w-1.5 h-1.5 rounded-full bg-accent" />
          <div className="flex-1 h-px bg-border" />
        </div>

        {/* Desktop: accordion horizontal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="hidden md:flex gap-3 h-96 rounded-2xl overflow-hidden border border-border/40"
        >
          {features.map((feature, index) => {
            const isActive = activeIndex === index;
            return (
              <div
                key={index}
                className="relative overflow-hidden cursor-pointer rounded-xl border transition-all duration-500 ease-in-out flex flex-col"
                style={{
                  flex: isActive ? 3 : 1,
                  background: isActive
                    ? "hsl(var(--secondary))"
                    : "hsl(var(--card))",
                  borderColor: isActive
                    ? "hsl(var(--accent) / 0.5)"
                    : "hsl(var(--border) / 0.4)",
                  minWidth: "110px",
                }}
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
              >
                {/* Número */}
                <span className="absolute top-6 left-6 text-base font-bold uppercase tracking-widest text-accent z-10">
                  0{index + 1}
                </span>

                {/* Título — rotaciona quando fechado */}
                <div className="flex-1 flex items-center justify-center px-6 pt-10">
                  <h3
                    className="font-display whitespace-nowrap transition-all duration-500"
                    style={{
                      transform: isActive ? "rotate(0deg)" : "rotate(-90deg)",
                      fontSize: isActive ? "2.6rem" : "1.7rem",
                      fontWeight: 900,
                      letterSpacing: isActive ? "-0.03em" : "0.04em",
                      color: isActive ? "hsl(var(--foreground))" : "hsl(var(--foreground) / 0.75)",
                      textShadow: isActive ? "0 2px 24px hsl(var(--accent) / 0.15)" : "none",
                    }}
                  >
                    {feature.label}
                  </h3>
                </div>

                {/* Descrição — aparece ao expandir */}
                <div
                  className="overflow-hidden transition-all duration-500"
                  style={{
                    maxHeight: isActive ? "120px" : "0px",
                    opacity: isActive ? 1 : 0,
                    padding: isActive ? "0 1.75rem 2rem" : "0 1.75rem 0",
                    transitionDelay: isActive ? "0.18s" : "0s",
                  }}
                >
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </motion.div>

        {/* Mobile: accordion vertical */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="md:hidden flex flex-col gap-2"
        >
          {features.map((feature, index) => {
            const isOpen = mobileActive === index;
            return (
              <motion.div
                key={index}
                layout
                className="rounded-2xl border overflow-hidden cursor-pointer"
                style={{
                  background: isOpen ? "hsl(var(--secondary))" : "hsl(var(--card))",
                  borderColor: isOpen ? "hsl(var(--accent) / 0.5)" : "hsl(var(--border) / 0.4)",
                  WebkitTapHighlightColor: "transparent",
                }}
                onClick={() => setMobileActive(isOpen ? null : index)}
              >
                {/* Header sempre visível */}
                <div className="flex items-center justify-between px-6 py-5 select-none">
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-bold text-accent tracking-widest">
                      0{index + 1}
                    </span>
                    <h3
                      className="font-display text-foreground leading-tight"
                      style={{ fontSize: "1.45rem", fontWeight: 900 }}
                    >
                      {feature.label}
                    </h3>
                  </div>
                  {/* Chevron */}
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-accent text-xl font-light flex-shrink-0 ml-2"
                  >
                    +
                  </motion.span>
                </div>

                {/* Descrição expansível */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                    >
                      <p className="px-6 pb-6 text-base text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
