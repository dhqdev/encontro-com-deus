import { motion } from "framer-motion";
import entradaVideo from "@/assets/gallery/entrada.MOV";
import maosVideo from "@/assets/gallery/maos.MOV";
import aplausosVideo from "@/assets/gallery/aplausoscarta.mp4";

const videoItems = [
  {
    src: entradaVideo,
    label: "Chegando ao Encontro",
    description: "O primeiro passo de uma jornada transformadora",
  },
  {
    src: maosVideo,
    label: "Momento de Oração",
    description: "Mãos erguidas em busca da presença de Deus",
  },
  {
    src: aplausosVideo,
    label: "Gratidão e Celebração",
    description: "A alegria de vidas sendo transformadas",
  },
];

const VideoCard = ({
  src,
  label,
  description,
  index,
}: {
  src: string;
  label: string;
  description: string;
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="flex flex-col gap-3"
    >
      <div className="rounded-2xl overflow-hidden shadow-card border border-border/40 bg-card aspect-video">
        <video
          src={src}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="px-1">
        <h3 className="font-display font-semibold text-foreground text-base md:text-lg">
          {label}
        </h3>
        <p className="text-sm text-muted-foreground mt-0.5">{description}</p>
      </div>
    </motion.div>
  );
};

const Videos = () => {
  return (
    <section id="videos" className="section-padding bg-background">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-widest mb-4">
            Vídeos
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Momentos Reais
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            Veja de perto o que acontece quando vidas se abrem para a transformação
          </p>
        </motion.div>

        {/* Video grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {videoItems.map((item, i) => (
            <VideoCard key={i} index={i} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Videos;
