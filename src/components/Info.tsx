import { Phone } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const Info = () => {
  const schedule = [
    { title: "Saída", text: "Sexta-feira, às 19h30", note: "Sem atrasos!" },
    { title: "Retorno", text: "Domingo, às 18h30", note: "Culto de encerramento" },
  ];

  const whatToBring = [
    "Roupas confortáveis",
    "Itens de higiene pessoal",
    "Bíblia física",
    "Roupa de cama (lençol, cobertor e travesseiro)",
    "Roupa especial para o culto de domingo",
  ];

  const emergencyContacts = [
    { name: "Cleverson", phone: "(19) 98358-6167" },
    { name: "Geovana", phone: "(19) 98358-6166" },
    { name: "Eduardo", phone: "(19) 98386-7500" },
    { name: "Kamila", phone: "(19) 99366-7494" },
  ];

  return (
    <section id="informacoes" className="section-padding bg-background">
      <div className="container-custom">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="text-center max-w-3xl mx-auto mb-8 md:mb-16"
        >
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-widest mb-4">
            Prepare-se
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
            Informações Importantes
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="grid md:grid-cols-2 gap-6 mb-6"
        >
          <motion.div variants={fadeUp} className="card-spiritual">
            <h3 className="text-xl font-display font-bold text-foreground mb-1">Programação</h3>
            <div className="w-8 h-px bg-accent mb-6" />
            <div className="space-y-3">
              {schedule.map((item, index) => (
                <div key={index} className="flex flex-col gap-0.5 p-4 rounded-xl bg-secondary/50">
                  <span className="text-xs font-semibold uppercase tracking-widest text-accent">
                    {item.title}
                  </span>
                  <span className="font-medium text-foreground">{item.text}</span>
                  {item.note && (
                    <span className="text-sm text-muted-foreground">{item.note}</span>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="card-spiritual">
            <h3 className="text-xl font-display font-bold text-foreground mb-1">Local do Retiro</h3>
            <div className="w-8 h-px bg-accent mb-6" />
            <div className="p-4 rounded-xl bg-secondary/50 mb-4">
              <p className="font-semibold text-foreground mb-1">
                Seminário Teológico Nazareno do Brasil
              </p>
              <p className="text-muted-foreground text-sm">
                Estr. da Rhodia, Km 15 — Barão Geraldo, Campinas - SP, 13084-970
              </p>
            </div>
            <div className="rounded-xl overflow-hidden h-48">
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

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="card-spiritual mb-8"
        >
          <h3 className="text-xl font-display font-bold text-foreground mb-1">O que levar</h3>
          <div className="w-8 h-px bg-accent mb-6" />
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3"
          >
            {whatToBring.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                className="flex items-center gap-3 p-3 rounded-xl bg-secondary/50"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                <span className="text-foreground text-sm">{item}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="card-spiritual"
        >
          <h3 className="text-xl font-display font-bold text-foreground mb-1">
            Regras e Orientações
          </h3>
          <div className="w-8 h-px bg-accent mb-6" />
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <div className="p-4 rounded-xl bg-secondary/50">
              <p className="font-semibold text-foreground mb-1">Alojamentos separados</p>
              <p className="text-sm text-muted-foreground">Homens e mulheres em locais distintos</p>
            </div>
            <div className="p-4 rounded-xl bg-secondary/50">
              <p className="font-semibold text-foreground mb-1">Orientações gerais</p>
              <p className="text-sm text-muted-foreground">Fornecidas no início do encontro</p>
            </div>
          </div>
          <div className="p-4 rounded-xl bg-secondary/50">
            <div className="flex items-center gap-2 mb-4">
              <Phone className="w-4 h-4 text-muted-foreground" />
              <h4 className="font-semibold text-foreground text-sm">Contatos de Emergência</h4>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {emergencyContacts.map((contact, index) => (
                <div key={index} className="text-center">
                  <p className="font-medium text-foreground text-sm">{contact.name}</p>
                  <a
                    href={`https://wa.me/55${contact.phone.replace(/\D/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary hover:underline"
                  >
                    {contact.phone}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Info;
