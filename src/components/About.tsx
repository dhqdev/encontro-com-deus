import { Sparkles, Calendar, Users, Heart } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };
  const features = [
    {
      icon: Sparkles,
      title: "Transformação",
      description: "Experiência profunda de mudança interior",
    },
    {
      icon: Calendar,
      title: "A cada 4 meses",
      description: "Um retiro especial preparado com amor",
    },
    {
      icon: Users,
      title: "Centenas de vidas",
      description: "Já foram transformadas pelo encontro",
    },
    {
      icon: Heart,
      title: "Cura e Liberdade",
      description: "Dias intensos na presença de Deus",
    },
  ];

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
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            Sobre o Retiro
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
            O que é o Encontro com Deus?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            O Encontro com Deus é um retiro espiritual de um único final de semana preparado com muito 
            <span className="text-primary font-semibold"> amor, oração e propósito</span>. 
            Acontece a cada 4 meses e tem transformado a vida de centenas de pessoas. São dias intensos 
            na presença de Deus, cheios de 
            <span className="text-accent font-semibold"> cura, liberdade, reflexão e restauração</span>.
          </p>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -8 }}
              className="card-spiritual text-center group hover:shadow-elevated transition-all duration-500"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-golden flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-display font-bold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
