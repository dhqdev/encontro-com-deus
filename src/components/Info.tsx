import { Phone, MapPin, Calendar } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const Info = () => {
  const emergencyContacts = [
    { name: "Cleverson", phone: "(19) 98358-6167" },
    { name: "Geovana",   phone: "(19) 98358-6166" },
    { name: "Eduardo",   phone: "(19) 98386-7500" },
    { name: "Kamila",    phone: "(19) 99366-7494" },
  ];

  return (
    <section id="informacoes" className="section-padding bg-background relative overflow-hidden">

      {/* Blobs decorativos */}
      <div className="absolute top-16 left-0 w-80 h-80 bg-accent/6 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-16 right-0 w-64 h-64 bg-primary/6 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom space-y-8 md:space-y-14 relative z-10">

        {/* CABEÇALHO */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-widest mb-4">
            Prepare-se
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground">
            Informações Importantes
          </h2>
        </motion.div>

        {/* GRID PRINCIPAL */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="grid md:grid-cols-[2fr_3fr] gap-4 md:gap-5 items-start"
        >

          {/* COLUNA ESQUERDA — aparece depois do mapa no mobile */}
          <motion.div variants={fadeUp} className="flex flex-col gap-4 md:gap-5 order-last md:order-first">

            {/* CARD PROGRAMAÇÃO */}
            <div className="rounded-3xl border border-border/60 bg-secondary/40 p-6 md:p-8 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-9 h-9 rounded-2xl bg-accent/15 flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-4 h-4 text-accent" />
                </div>
                <h3 className="text-lg font-display font-bold text-foreground">Programação</h3>
              </div>

              <div className="relative pl-7">
                <div className="absolute left-[9px] top-2 bottom-2 w-px bg-gradient-to-b from-accent via-accent/30 to-transparent" />

                <div className="space-y-8">
                  {/* SAÍDA */}
                  <div className="relative">
                    {/* Ponto com pulso animado */}
                    <div className="absolute -left-7 top-1.5 w-3 h-3 rounded-full bg-accent z-10" />
                    <motion.div
                      className="absolute -left-[1.85rem] top-0.5 w-4 h-4 rounded-full bg-accent/40"
                      animate={{ scale: [1, 2, 1], opacity: [0.6, 0, 0.6] }}
                      transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <span className="text-[11px] font-bold uppercase tracking-widest text-accent block mb-1">Saída</span>
                    <p className="text-xl font-semibold text-foreground leading-tight">Sexta-feira, às 19h30</p>
                    <p className="text-sm text-muted-foreground mt-1">Sem atrasos!</p>
                  </div>

                  {/* RETORNO */}
                  <div className="relative">
                    <div className="absolute -left-7 top-1.5 w-3 h-3 rounded-full bg-accent/50 ring-4 ring-accent/10" />
                    <span className="text-[11px] font-bold uppercase tracking-widest text-accent block mb-1">Retorno</span>
                    <p className="text-xl font-semibold text-foreground leading-tight">Domingo, às 18h30</p>
                    <p className="text-sm text-muted-foreground mt-1">Culto de encerramento</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CARD CONTATOS */}
            <div className="rounded-3xl border border-border/60 bg-secondary/40 p-6 md:p-8 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-9 h-9 rounded-2xl bg-accent/15 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-accent" />
                </div>
                <h3 className="text-lg font-display font-bold text-foreground">Contatos de Emergência</h3>
              </div>

              <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-3"
              >
                {emergencyContacts.map((contact, i) => (
                  <motion.a
                    key={i}
                    variants={fadeUp}
                    href={`https://wa.me/55${contact.phone.replace(/\D/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 320, damping: 20 }}
                    className="flex items-center gap-3 p-3.5 rounded-2xl bg-background/70 border border-border/60 hover:border-accent/50 hover:bg-accent/8 transition-colors cursor-pointer"
                  >
                    <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-3.5 h-3.5 text-accent" />
                    </div>
                    <div className="min-w-0">
                      <p className="font-semibold text-foreground text-sm truncate">{contact.name}</p>
                      <p className="text-xs text-muted-foreground">{contact.phone}</p>
                    </div>
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* CARD LOCAL DO RETIRO — aparece primeiro no mobile */}
          <motion.div
            variants={fadeUp}
            className="rounded-3xl border border-border/60 bg-secondary/40 overflow-hidden backdrop-blur-sm order-first md:order-last"
          >
            <div className="p-6 md:p-8 pb-5">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-2xl bg-accent/15 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-accent" />
                </div>
                <h3 className="text-lg font-display font-bold text-foreground">Local do Retiro</h3>
              </div>
              <p className="font-semibold text-foreground text-lg leading-snug">
                Seminário Teológico Nazareno do Brasil
              </p>
              <p className="text-sm text-muted-foreground mt-1.5">
                Estr. da Rhodia, Km 15 — Barão Geraldo, Campinas - SP, 13084-970
              </p>
            </div>

            {/* Mapa preenche o card */}
            <div className="h-48 md:h-80 mx-4 mb-4 md:mx-5 md:mb-5 rounded-2xl overflow-hidden ring-1 ring-border/50">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3676.3!2d-47.08!3d-22.83!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8c5!2sSeminario%20Teologico%20Nazareno!5e0!3m2!1spt-BR!2sbr!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Local do Retiro"
              />
            </div>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
};

export default Info;
