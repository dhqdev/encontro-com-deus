import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, X } from "lucide-react";
import Masonry, { MasonryItem } from "@/components/Masonry";

import t1 from "@/assets/gallery/testemunho1.png";
import t2 from "@/assets/gallery/testemunho2.png";
import t3 from "@/assets/gallery/testemunho3.png";
import t4 from "@/assets/gallery/testemunho4.png";
import t5 from "@/assets/gallery/testemunhno5.png";
import t6 from "@/assets/gallery/testemunho6.png";
import maosPraCima from "@/assets/gallery/maos pra cima.mp4";
import silvio from "@/assets/gallery/silvio.mp4";
import edmar from "@/assets/gallery/edmar.MOV";
import louvorMov from "@/assets/gallery/louvor.MOV";
import louvorMp4 from "@/assets/gallery/louvor.mp4";

const testimonialItems: MasonryItem[] = [
  { id: "1",  img: t1,            alt: "Testemunho 1",        height: 900 },
  { id: "2",  video: maosPraCima, alt: "Mãos pra Cima",       height: 1000 },
  { id: "3",  img: t2,            alt: "Testemunho 2",        height: 900 },
  { id: "4",  video: edmar,       alt: "Testemunho Edmar",    height: 1000 },
  { id: "5",  img: t3,            alt: "Testemunho 3",        height: 900 },
  { id: "6",  video: silvio,      alt: "Testemunho Silvio",   height: 1000 },
  { id: "7",  img: t4,            alt: "Testemunho 4",        height: 900 },
  { id: "8",  video: louvorMov,   alt: "Momento de Louvor",   height: 1000 },
  { id: "9",  img: t5,            alt: "Testemunho 5",        height: 900 },
  { id: "10", video: louvorMp4,   alt: "Louvor",              height: 1000 },
  { id: "11", img: t6,            alt: "Testemunho 6",        height: 900 },
];

const TestimonialsPage = () => {
  const [openItem, setOpenItem] = useState<MasonryItem | null>(null);

  useEffect(() => {
    document.title = "Testemunhos — Encontro com Deus";
    return () => { document.title = "Encontro com Deus"; };
  }, []);

  // Lock scroll when lightbox is open
  useEffect(() => {
    document.body.style.overflow = openItem ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [openItem]);

  return (
    <div className="min-h-screen" style={{ background: "hsl(40,33%,98%)" }}>
      {/* ── Sticky top bar ── */}
      <div className="sticky top-0 z-20 bg-white/90 backdrop-blur-md border-b border-stone-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center gap-4 py-3">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium text-stone-500 hover:text-stone-800 hover:bg-stone-100 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar
          </Link>
          <div className="h-4 w-px bg-stone-200" />
          <div>
            <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-orange-500">
              Encontro com Deus
            </span>
            <span className="block text-sm font-semibold text-stone-800 leading-tight">
              Testemunhos
            </span>
          </div>
        </div>
      </div>

      {/* ── Hero header ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-12 pb-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block text-xs font-bold uppercase tracking-[0.25em] text-orange-500 mb-3">
            Vidas Transformadas
          </span>
          <h1 className="font-display font-bold text-3xl md:text-5xl text-stone-900 leading-tight mb-3">
            Histórias que inspiram
          </h1>
          <p className="text-stone-500 text-sm md:text-base max-w-md mx-auto">
            Momentos reais de fé, cura e renovação vividos no Encontro com Deus.
            <br className="hidden sm:block" />
            Toque em qualquer card para ver em tela cheia.
          </p>
        </motion.div>

        {/* Orange underline accent */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mx-auto mt-6 h-0.5 w-16 rounded-full bg-orange-400 origin-center"
        />
      </div>

      {/* ── Masonry grid ── */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 pb-20">
        <Masonry
          items={testimonialItems}
          ease="power3.out"
          duration={0.6}
          stagger={0.04}
          animateFrom="bottom"
          scaleOnHover
          hoverScale={0.97}
          blurToFocus
          colorShiftOnHover={false}
          onItemClick={setOpenItem}
        />
      </div>

      {/* ── Lightbox ── */}
      <AnimatePresence>
        {openItem && (
          <motion.div
            key="lightbox"
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ background: "rgba(0,0,0,0.88)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpenItem(null)}
          >
            {/* Close button */}
            <button
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              onClick={() => setOpenItem(null)}
            >
              <X className="w-5 h-5" />
            </button>

            {/* Media */}
            <motion.div
              initial={{ scale: 0.88, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.88, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onClick={e => e.stopPropagation()}
              className="relative flex items-center justify-center"
              style={{ maxWidth: "min(540px, 95vw)", maxHeight: "92vh" }}
            >
              {openItem.video ? (
                <video
                  src={openItem.video}
                  controls
                  autoPlay
                  muted
                  playsInline
                  style={{
                    maxWidth: "min(540px, 95vw)",
                    maxHeight: "88vh",
                    borderRadius: 16,
                    background: "#000",
                    display: "block",
                  }}
                />
              ) : (
                <img
                  src={openItem.img}
                  alt={openItem.alt}
                  style={{
                    maxWidth: "min(540px, 95vw)",
                    maxHeight: "88vh",
                    borderRadius: 16,
                    objectFit: "contain",
                    display: "block",
                  }}
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TestimonialsPage;
