import { Phone, MapPin, Calendar, Shirt, BookOpen, BedDouble, Droplets, Users, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const bringItems = [
  { icon: Shirt,     label: "Roupas confortáveis" },
  { icon: Droplets,  label: "Itens de higiene pessoal" },
  { icon: BookOpen,  label: "Bíblia física" },
  { icon: BedDouble, label: "Roupa de cama" },
  { icon: Shirt,     label: "Roupa para o culto de domingo" },
];

const Info = () => {
  const emergencyContacts = [
    { name: "Cleverson", phone: "(19) 98358-6167" },
    { name: "Geovana",   phone: "(19) 98358-6166" },
    { name: "Eduardo",   phone: "(19) 98386-7500" },
    { name: "Kamila",    phone: "(19) 99366-7494" },
  ];

  return (
    <section id="informacoes" className="section-padding bg-background">
      <div className="container-custom space-y-14">

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

        {/* PROGRAMAÇÃO + LOCAL */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="grid md:grid-cols-[2fr_3fr] gap-10 md:gap-16 items-start"
        >
          {/* TIMELINE DE PROGRAMAÇÃO */}
          <motion.div variants={fadeUp}>
            <div className="flex items-center gap-2 mb-8">
              <Calendar className="w-5 h-5 text-accent" />
              <h3 className="text-xl font-display font-bold text-foreground">Programação</h3>
            </div>

            <div className="relative pl-7">
              {/* Linha vertical */}
              <div className="absolute left-[9px] top-1 bottom-1 w-px bg-gradient-to-b from-accent via-accent/40 to-transparent" />

              <div className="space-y-8">
                {/* Saída */}
                <div className="relative">
                  <div className="absolute -left-7 top-1 w-3.5 h-3.5 rounded-full bg-accent ring-4 ring-accent/20" />
                  <span className="text-[11px] font-bold uppercase tracking-widest text-accent block mb-1">
                    Saída
                  </span>
                  <p className="text-xl font-semibold text-foreground leading-tight">
                    Sexta-feira, às 19h30
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">Sem atrasos!</p>
                </div>

                {/* Retorno */}
                <div className="relative">
                  <div className="absolute -left-7 top-1 w-3.5 h-3.5 rounded-full bg-accent/50 ring-4 ring-accent/10" />
                  <span className="text-[11px] font-bold uppercase tracking-widest text-accent block mb-1">
                    Retorno
                  </span>
                  <p className="text-xl font-semibold text-foreground leading-tight">
                    Domingo, às 18h30
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">Culto de encerramento</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* LOCAL DO RETIRO */}
          <motion.div variants={fadeUp}>
            <div className="flex items-center gap-2 mb-8">
              <MapPin className="w-5 h-5 text-accent" />
              <h3 className="text-xl font-display font-bold text-foreground">Local do Retiro</h3>
            </div>

            <div className="mb-4">
              <p className="font-semibold text-foreground text-lg leading-snug">
                Seminário Teológico Nazareno do Brasil
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                Estr. da Rhodia, Km 15 — Barão Geraldo, Campinas - SP, 13084-970
              </p>
            </div>

            <div className="rounded-2xl overflow-hidden h-56 ring-1 ring-border/60 shadow-md">
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

        {/* DIVISOR */}
        <div className="flex items-center gap-4">
          <div className="flex-1 h-px bg-border" />
          <div className="w-1.5 h-1.5 rounded-full bg-accent/50" />
          <div className="flex-1 h-px bg-border" />
        </div>

        {/* O QUE LEVAR */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h3 className="text-xl font-display font-bold text-foreground mb-6">O que levar</h3>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap gap-3"
          >
            {bringItems.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-secondary border border-border text-sm font-medium text-foreground hover:border-accent/50 transition-colors"
              >
                <item.icon className="w-4 h-4 text-accent flex-shrink-0" />
                {item.label}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* DIVISOR */}
        <div className="flex items-center gap-4">
          <div className="flex-1 h-px bg-border" />
          <div className="w-1.5 h-1.5 rounded-full bg-accent/50" />
          <div className="flex-1 h-px bg-border" />
        </div>

        {/* REGRAS + CONTATOS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="grid md:grid-cols-2 gap-10 md:gap-16 items-start"
        >
          {/* REGRAS */}
          <motion.div variants={fadeUp}>
            <div className="flex items-center gap-2 mb-7">
              <ShieldCheck className="w-5 h-5 text-accent" />
              <h3 className="text-xl font-display font-bold text-foreground">Regras e Orientações</h3>
            </div>
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Users className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Alojamentos separados</p>
                  <p className="text-sm text-muted-foreground mt-0.5">Homens e mulheres em locais distintos</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <ShieldCheck className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Orientações gerais</p>
                  <p className="text-sm text-muted-foreground mt-0.5">Fornecidas no início do encontro</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CONTATOS DE EMERGÊNCIA */}
          <motion.div variants={fadeUp}>
            <div className="flex items-center gap-2 mb-7">
              <Phone className="w-5 h-5 text-accent" />
              <h3 className="text-xl font-display font-bold text-foreground">Contatos de Emergência</h3>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {emergencyContacts.map((contact, i) => (
                <a
                  key={i}
                  href={`https://wa.me/55${contact.phone.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl bg-secondary hover:bg-accent/10 border border-transparent hover:border-accent/30 transition-all group"
                >
                  <div className="w-9 h-9 rounded-full bg-accent/10 group-hover:bg-accent/20 flex items-center justify-center flex-shrink-0 transition-colors">
                    <Phone className="w-4 h-4 text-accent" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-semibold text-foreground text-sm truncate">{contact.name}</p>
                    <p className="text-xs text-muted-foreground">{contact.phone}</p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default Info;
