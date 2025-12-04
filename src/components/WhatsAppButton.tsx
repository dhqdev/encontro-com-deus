import { MessageCircle, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const WhatsAppButton = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const whatsappNumber = "5519999999999"; // Substitua pelo número real
  const message = "Olá! Gostaria de saber mais sobre o Encontro com Deus.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            transition={{ duration: 0.2 }}
            className="bg-white dark:bg-gray-800 text-foreground px-4 py-3 rounded-lg shadow-xl max-w-xs"
          >
            <div className="flex items-start gap-2">
              <p className="text-sm font-medium">
                Tem dúvidas? Fale conosco pelo WhatsApp!
              </p>
              <button
                onClick={() => setShowTooltip(false)}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onHoverStart={() => setShowTooltip(true)}
        onHoverEnd={() => setShowTooltip(false)}
        className="w-16 h-16 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-2xl transition-colors group"
        aria-label="Fale conosco no WhatsApp"
      >
        <MessageCircle className="w-8 h-8 group-hover:scale-110 transition-transform" />
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse" />
      </motion.a>
    </div>
  );
};

export default WhatsAppButton;
