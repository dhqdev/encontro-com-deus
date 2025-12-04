import { MessageCircle, X, Send, Sparkles, Phone } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import OpenAI from "openai";

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const EdenChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: '🙏 Olá! Eu sou Eden, seu conselheiro espiritual. Estou aqui para te ajudar com palavras de encorajamento, versículos bíblicos e informações sobre o Encontro com Deus. Como posso te ajudar hoje?'
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const openai = new OpenAI({
    apiKey: import.meta.env.VITE_OPENAI_API_KEY || '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',
    dangerouslyAllowBrowser: true // Para desenvolvimento - em produção usar backend
  });

  const systemPrompt = `Você é Eden, um conselheiro espiritual cristão compassivo e sábio, inspirado nos ensinamentos de Cristo. Seu propósito é:

1. **Aconselhar com amor e sabedoria**: Ofereça palavras de encorajamento, conforto e orientação baseadas nos princípios cristãos.

2. **Compartilhar versículos bíblicos**: Quando apropriado, cite versículos relevantes que possam trazer luz e esperança.

3. **Informações sobre o Encontro com Deus**:
   - É um retiro espiritual transformador de um final de semana
   - Acontece a cada 4 meses em Campinas-SP
   - Centenas de vidas já foram transformadas
   - Dias intensos de cura, liberdade, reflexão e restauração na presença de Deus
   - Experiência profunda de renovação espiritual e reconexão com Deus
   - Preparado com muito amor, oração e propósito
   - Ministério de Transformação

4. **Por que participar do Encontro**:
   - Renovação espiritual profunda
   - Cura interior e libertação
   - Reconexão genuína com Deus
   - Comunhão com outros irmãos na fé
   - Experiência que transforma vidas
   - Momento de reflexão e crescimento espiritual

5. **Contato**: Quando solicitado, informe que podem entrar em contato pelo telefone: (19) 99999-9999 (WhatsApp)

**Estilo de comunicação**:
- Amoroso e compassivo como um discípulo de Cristo
- Use emojis apropriados (🙏 ✝️ ❤️ 🕊️ ✨)
- Mensagens objetivas mas profundas
- Crie conexão emocional
- Nunca julgue, sempre acolha
- Incentive a participação no encontro quando relevante

Lembre-se: você é uma ponte entre as pessoas e a experiência transformadora do Encontro com Deus.`;

  const sendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', content: inputMessage };
    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      const response = await openai.chat.completions.create({
        model: "gpt-4",
        messages: [
          { role: 'system', content: systemPrompt },
          ...messages.map(msg => ({ role: msg.role, content: msg.content })),
          { role: 'user', content: inputMessage }
        ],
        temperature: 0.8,
        max_tokens: 500
      });

      const assistantMessage: Message = {
        role: 'assistant',
        content: response.choices[0].message.content || 'Desculpe, não consegui processar sua mensagem.'
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Erro ao enviar mensagem:', error);
      const errorMessage: Message = {
        role: 'assistant',
        content: '🙏 Desculpe, tive um problema técnico. Por favor, tente novamente ou entre em contato pelo telefone (19) 99999-9999.'
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.2 }}
            className="mb-4 w-96 h-[600px] bg-white dark:bg-gray-900 rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-purple-200 dark:border-purple-800"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-purple-600 to-purple-800 p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">Eden</h3>
                  <p className="text-white/80 text-xs flex items-center gap-1">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                    Conselheiro Espiritual
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-purple-50/50 to-white dark:from-gray-900 dark:to-gray-800">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                      message.role === 'user'
                        ? 'bg-purple-600 text-white rounded-br-none'
                        : 'bg-white dark:bg-gray-700 text-gray-800 dark:text-white rounded-bl-none shadow-md border border-purple-100 dark:border-purple-800'
                    }`}
                  >
                    <p className="text-sm whitespace-pre-wrap leading-relaxed">{message.content}</p>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white dark:bg-gray-700 rounded-2xl rounded-bl-none px-4 py-3 shadow-md">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-purple-600 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                      <div className="w-2 h-2 bg-purple-600 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                      <div className="w-2 h-2 bg-purple-600 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Actions */}
            <div className="px-4 py-2 bg-purple-50 dark:bg-gray-800 border-t border-purple-100 dark:border-purple-800">
              <div className="flex gap-2 overflow-x-auto pb-1">
                <button
                  onClick={() => setInputMessage('Preciso de um versículo de encorajamento')}
                  className="px-3 py-1.5 bg-white dark:bg-gray-700 rounded-full text-xs font-medium text-purple-700 dark:text-purple-300 hover:bg-purple-100 dark:hover:bg-gray-600 transition-colors whitespace-nowrap"
                >
                  📖 Versículo
                </button>
                <button
                  onClick={() => setInputMessage('Me fale sobre o Encontro com Deus')}
                  className="px-3 py-1.5 bg-white dark:bg-gray-700 rounded-full text-xs font-medium text-purple-700 dark:text-purple-300 hover:bg-purple-100 dark:hover:bg-gray-600 transition-colors whitespace-nowrap"
                >
                  ✝️ Sobre o Encontro
                </button>
                <button
                  onClick={() => setInputMessage('Como faço para me inscrever?')}
                  className="px-3 py-1.5 bg-white dark:bg-gray-700 rounded-full text-xs font-medium text-purple-700 dark:text-purple-300 hover:bg-purple-100 dark:hover:bg-gray-600 transition-colors whitespace-nowrap"
                >
                  📝 Inscrição
                </button>
              </div>
            </div>

            {/* Input */}
            <div className="p-4 bg-white dark:bg-gray-900 border-t border-purple-100 dark:border-purple-800">
              <div className="flex gap-2 items-end">
                <div className="flex-1 bg-gray-100 dark:bg-gray-800 rounded-2xl px-4 py-2 focus-within:ring-2 focus-within:ring-purple-500">
                  <textarea
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Digite sua mensagem..."
                    className="w-full bg-transparent border-none outline-none resize-none text-sm text-gray-800 dark:text-white placeholder-gray-500 max-h-24"
                    rows={1}
                    disabled={isLoading}
                  />
                </div>
                <button
                  onClick={sendMessage}
                  disabled={!inputMessage.trim() || isLoading}
                  className="w-10 h-10 bg-gradient-to-r from-purple-600 to-purple-800 text-white rounded-full flex items-center justify-center hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
              
              {/* Contact Info */}
              <div className="mt-3 flex items-center justify-center gap-2 text-xs text-gray-600 dark:text-gray-400">
                <Phone className="w-3 h-3" />
                <span>Contato: (19) 98358 - 6167</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="w-16 h-16 bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white rounded-full flex items-center justify-center shadow-2xl transition-all group relative"
        aria-label="Chat com Eden"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-8 h-8" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle className="w-8 h-8 group-hover:scale-110 transition-transform" />
            </motion.div>
          )}
        </AnimatePresence>
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full animate-pulse border-2 border-white" />
        
        {/* Tooltip */}
        {!isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            className="absolute right-full mr-3 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap pointer-events-none"
          >
            💬 Converse com Eden
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full">
              <div className="border-8 border-transparent border-l-gray-900" />
            </div>
          </motion.div>
        )}
      </motion.button>
    </div>
  );
};

export default EdenChatbot;
