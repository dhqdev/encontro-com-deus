import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const expectations = [
  "Momentos profundos de encontro com Deus",
  "Tempo de reflexão e revisão da própria caminhada",
  "Oportunidade de cura e restauração interior",
  "Conserto espiritual e renovação da fé",
  "Reencontro com sonhos e propósito de vida",
  "Ambientes de oração, acolhimento e cuidado",
  "Experiências marcantes de reconciliação e liberdade",
  "Uma oportunidade de começar uma nova etapa da caminhada",
];

const faqs = [
  {
    question: "Quem pode participar?",
    answer:
      "Qualquer pessoa que deseje viver um tempo de encontro, restauração e crescimento espiritual.",
  },
  {
    question: "Preciso já ter uma caminhada cristã?",
    answer:
      "Não. O Encontro é para todos que desejam abrir o coração para aquilo que Deus pode fazer.",
  },
  {
    question: "O que acontece durante o Encontro?",
    answer:
      "O Encontro é uma experiência de imersão espiritual voltada para revisão de vida, cura, libertação, reconciliação e restauração do propósito. Os detalhes da experiência não são divulgados para preservar aquilo que cada participante viverá.",
  },
  {
    question: "O Encontro é apenas um retiro?",
    answer:
      "Não. É um período intencional de transformação, onde cada pessoa é convidada a permitir que Deus trabalhe áreas profundas da vida.",
  },
  {
    question: "O Encontro termina quando acaba o final de semana?",
    answer:
      "Não. O Encontro marca o início de uma nova caminhada. Muitos participantes seguem desenvolvendo sua vida espiritual, relacionamentos e propósito após essa experiência.",
  },
  {
    question: "O que o Encontro busca restaurar?",
    answer:
      "O Encontro busca conduzir pessoas ao reencontro com Deus, consigo mesmas e com o propósito para o qual foram criadas. Muitos recuperam sonhos esquecidos, esperança, identidade, direção espiritual, propósito de vida e o desejo de recomeçar.",
  },
];

const Spiritual = () => {
  return (
    <>
      {/* ── SEÇÃO 1: O que você pode esperar ── */}
      <section className="section-padding bg-gradient-section">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mx-auto text-center mb-14"
          >
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-widest mb-4">
              Experiência
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6 leading-tight">
              O que você pode{" "}
              <span className="text-gradient">esperar do Encontro?</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Sem revelar a experiência vivida, o Encontro conduz cada participante a uma
              jornada de{" "}
              <span className="text-foreground font-medium">
                transformação e restauração
              </span>
              . Cada pessoa vive o Encontro de forma única, mas todas são convidadas a
              abrir espaço para aquilo que Deus deseja fazer.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-3 mb-14"
          >
            {expectations.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border/40"
              >
                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                <span className="text-foreground text-sm leading-relaxed">{item}</span>
              </div>
            ))}
          </motion.div>

          {/* Tags */}
          <div className="flex justify-center gap-3 flex-wrap">
            {["Revisão de Vida", "Cura Interior", "Libertação", "Reconciliação"].map((tag) => (
              <span
                key={tag}
                className="px-5 py-2 rounded-full border border-border text-sm font-medium text-muted-foreground hover:border-accent hover:text-accent transition-colors duration-200"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── SEÇÃO 2: Principais Dúvidas ── */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl mx-auto"
          >
            <div className="text-center mb-12">
              <span className="inline-block text-accent font-semibold text-sm uppercase tracking-widest mb-4">
                Tire suas dúvidas
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
                Principais Dúvidas
              </h2>
            </div>

            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-border/40 rounded-xl px-6 bg-card"
                >
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:text-accent hover:no-underline py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* ── SEÇÃO 3: Mensagem Final ── */}
      <section className="section-padding bg-gradient-section">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl mx-auto text-center"
          >
            {/* Ornament */}
            <div className="flex items-center gap-6 max-w-xs mx-auto mb-12">
              <div className="flex-1 h-px bg-border" />
              <div className="w-1.5 h-1.5 rounded-full bg-accent" />
              <div className="flex-1 h-px bg-border" />
            </div>

            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-10 leading-tight">
              Um chamado para{" "}
              <span className="text-gradient">parar e ouvir</span>
            </h2>

            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed mb-10">
              <p>
                <span className="text-foreground font-medium">Há cura</span> para feridas.
              </p>
              <p>
                <span className="text-foreground font-medium">Há liberdade</span> para quem
                está preso.
              </p>
              <p>
                <span className="text-foreground font-medium">Há reconciliação</span> para o
                que foi quebrado.
              </p>
              <p>
                <span className="text-foreground font-medium">Há propósito</span> para quem
                perdeu a direção.
              </p>
              <p className="pt-2">
                E há um{" "}
                <span className="text-foreground font-medium">
                  futuro que Deus ainda deseja revelar
                </span>
                .
              </p>
            </div>

            <p className="text-2xl md:text-3xl font-display italic text-foreground mb-10">
              "Venha com fé, expectativa e coração aberto."
            </p>

            {/* Ornament bottom */}
            <div className="flex items-center gap-6 max-w-xs mx-auto">
              <div className="flex-1 h-px bg-border" />
              <div className="w-1.5 h-1.5 rounded-full bg-accent" />
              <div className="flex-1 h-px bg-border" />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Spiritual;
