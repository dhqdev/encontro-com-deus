import { motion } from "framer-motion";

const Spiritual = () => {
  return (
    <section className="section-padding bg-gradient-section">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Ornament */}
          <div className="flex items-center gap-6 max-w-xs mx-auto mb-12">
            <div className="flex-1 h-px bg-border" />
            <div className="w-1.5 h-1.5 rounded-full bg-accent" />
            <div className="flex-1 h-px bg-border" />
          </div>

          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-8 leading-tight">
            Deus tem algo preparado{" "}
            <span className="text-gradient">para a sua vida</span>
          </h2>

          <div className="space-y-5 text-lg md:text-xl text-muted-foreground leading-relaxed">
            <p>
              Acreditamos que este final de semana pode ser um{" "}
              <span className="text-foreground font-medium">marco espiritual</span> na
              sua vida — um momento de encontro real com Deus.
            </p>

            <p>
              Estamos em <span className="text-foreground font-medium">oração e jejum</span> para
              que cada pessoa experimente{" "}
              <span className="text-foreground font-medium">transformação, cura e renovo</span>.
            </p>
          </div>

          <p className="text-2xl md:text-3xl font-display italic text-foreground mt-12 mb-10">
            "Venha com fé, expectativa e coração aberto."
          </p>

          {/* Tags minimalistas */}
          <div className="flex justify-center gap-3 flex-wrap">
            {["Transformação", "Cura", "Liberdade", "Renovo"].map((tag) => (
              <span
                key={tag}
                className="px-5 py-2 rounded-full border border-border text-sm font-medium text-muted-foreground hover:border-accent hover:text-accent transition-colors duration-200"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Ornament bottom */}
          <div className="flex items-center gap-6 max-w-xs mx-auto mt-12">
            <div className="flex-1 h-px bg-border" />
            <div className="w-1.5 h-1.5 rounded-full bg-accent" />
            <div className="flex-1 h-px bg-border" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Spiritual;
