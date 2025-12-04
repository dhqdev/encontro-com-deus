import { useState } from "react";
import { X } from "lucide-react";

import photo1 from "@/assets/gallery/photo-1.jpeg";
import photo2 from "@/assets/gallery/photo-2.jpeg";
import photo3 from "@/assets/gallery/photo-3.jpeg";
import photo4 from "@/assets/gallery/photo-4.jpeg";
import photo5 from "@/assets/gallery/photo-5.jpeg";
import photo6 from "@/assets/gallery/photo-6.jpeg";
import photo7 from "@/assets/gallery/photo-7.jpeg";
import photo8 from "@/assets/gallery/photo-8.jpeg";

const photos = [
  { src: photo1, alt: "Momento de oração e acolhimento" },
  { src: photo2, alt: "Pessoa em oração profunda" },
  { src: photo3, alt: "Equipe acolhendo participante" },
  { src: photo4, alt: "Momento intenso de oração" },
  { src: photo5, alt: "Abraço de apoio espiritual" },
  { src: photo6, alt: "Louvor com mãos levantadas" },
  { src: photo7, alt: "Liderança em adoração" },
  { src: photo8, alt: "Comunhão e acolhimento" },
];

const Gallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  return (
    <section id="galeria" className="section-padding bg-secondary">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            Momentos
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
            Galeria de Fotos
          </h2>
          <p className="text-lg text-muted-foreground">
            Confira alguns momentos marcantes de encontros passados
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {photos.map((photo, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-2xl cursor-pointer group ${
                index === 0 || index === 5 ? "md:col-span-2 md:row-span-2" : ""
              }`}
              onClick={() => setSelectedPhoto(photo.src)}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover aspect-square transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 right-4 text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-sm font-medium">{photo.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedPhoto && (
        <div 
          className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <button 
            className="absolute top-4 right-4 w-12 h-12 rounded-full bg-background/20 flex items-center justify-center text-primary-foreground hover:bg-background/30 transition-colors"
            onClick={() => setSelectedPhoto(null)}
          >
            <X className="w-6 h-6" />
          </button>
          <img
            src={selectedPhoto}
            alt="Foto ampliada"
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default Gallery;
