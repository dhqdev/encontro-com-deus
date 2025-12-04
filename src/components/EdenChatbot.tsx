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
      content: '🙏 Olá! Eu sou Eden, seu conselheiro espiritual. Estou aqui para te ajudar com:\n\n✝️ Palavras de encorajamento e versículos\n💜 Informações sobre o Encontro com Deus\n📝 Detalhes sobre inscrição, valor e programação\n🌟 Aconselhamento espiritual\n\nComo posso te ajudar hoje?'
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

  useEffect(() => {
    if (isOpen) {
      document.body.setAttribute('data-chat-open', 'true');
    } else {
      document.body.removeAttribute('data-chat-open');
    }
    return () => {
      document.body.removeAttribute('data-chat-open');
    };
  }, [isOpen]);

  const openai = new OpenAI({
    apiKey: import.meta.env.VITE_OPENAI_API_KEY || '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',
    dangerouslyAllowBrowser: true // Para desenvolvimento - em produção usar backend
  });

  const systemPrompt = `Você é Eden, um conselheiro espiritual cristão compassivo e sábio, inspirado nos ensinamentos de Cristo. Seu propósito é:

1. **Aconselhar com amor e sabedoria**: Ofereça palavras de encorajamento, conforto e orientação baseadas nos princípios cristãos.

2. **Compartilhar versículos bíblicos**: Quando apropriado, cite versículos relevantes que possam trazer luz e esperança.

3. **Informações DETALHADAS sobre o Encontro com Deus**:
   
   **O QUE É:**
   - Retiro espiritual transformador de um único final de semana
   - Acontece a cada 4 meses no Seminário Teológico Nazareno do Brasil
   - Local: Estr. da Rhodia, Km 15 - Barão Geraldo, Campinas - SP
   - Centenas de vidas já foram transformadas
   - Dias intensos de cura, liberdade, reflexão e restauração na presença de Deus
   - Preparado com muito amor, oração e propósito
   - Ministério de Transformação
   
   **VALOR DO INVESTIMENTO:**
   - R$ 200,00 (duzentos reais)
   - Inclui: Hospedagem completa + Alimentação + Toda estrutura do retiro
   - Vagas são LIMITADAS!
   
   **PROGRAMAÇÃO:**
   - Saída: Sexta-feira às 19h30 (SEM ATRASOS!)
   - Retorno: Domingo às 18h30 (com culto de encerramento)
   
   **O QUE LEVAR:**
   - Roupas confortáveis
   - Itens de higiene pessoal
   - Bíblia física (importante!)
   - Roupa de cama (lençol, cobertor e travesseiro)
   - Roupa especial para o culto de domingo
   
   **REGRAS IMPORTANTES:**
   - Alojamentos separados (homens e mulheres)
   - Outras orientações serão fornecidas no início do encontro
   
   **PROPÓSITO DO ENCONTRO:**
   - Renovação espiritual profunda
   - Cura interior e libertação
   - Reconexão genuína com Deus
   - Comunhão com outros irmãos na fé
   - Experiência transformadora de vida
   - Momento intenso de reflexão e crescimento espiritual
   - Restauração na presença de Deus

4. **CONTATOS DE EMERGÊNCIA:**
   - Cleverson: (19) 98358-6167
   - Geovana: (19) 98358-6166
   - Eduardo: (19) 98386-7500
   - Kamila: (19) 99366-7494

5. **INSCRIÇÃO:**
   - Pode ser feita pelo site ou diretamente pelo formulário do Google
   - Link: https://docs.google.com/forms/d/e/1FAIpQLSdTEy2bdiKBjoZNm_acb4kJUbBymEq-30UfjYQjMyidiyrKLQ/viewform
   - Importante: Vagas limitadas! Garanta seu lugar o quanto antes.

**Estilo de comunicação**:
- Amoroso e compassivo como um discípulo de Cristo
- Use emojis apropriados (🙏 ✝️ ❤️ 🕊️ ✨ 💜 🌟)
- Mensagens objetivas mas profundas
- Forneça informações ESPECÍFICAS quando perguntado (valores, horários, local, etc)
- Crie conexão emocional genuína
- Nunca julgue, sempre acolha
- Incentive a participação no encontro de forma natural
- Seja direto ao responder sobre valores e informações práticas

**IMPORTANTE**: Quando perguntarem sobre valor, horários, local ou informações práticas, seja ESPECÍFICO e DIRETO com os dados fornecidos acima.

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
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 max-w-[calc(100vw-2rem)] md:max-w-none">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.2 }}
            className="mb-4 w-[calc(100vw-2rem)] max-w-[420px] h-[calc(100vh-6rem)] max-h-[650px] bg-white dark:bg-gray-900 rounded-3xl shadow-2xl flex flex-col overflow-hidden border-2 border-purple-200 dark:border-purple-800"
          >
            {/* Header com gradiente melhorado */}
            <div className="bg-gradient-to-br from-purple-600 via-purple-700 to-purple-900 p-4 md:p-5 flex items-center justify-between relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full blur-xl translate-y-1/2 -translate-x-1/2" />
              
              <div className="flex items-center gap-2 md:gap-3 relative z-10">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/30 shadow-lg">
                  <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-white animate-pulse" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg md:text-xl">Eden</h3>
                  <p className="text-white/90 text-[10px] md:text-xs flex items-center gap-1.5">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50"></span>
                    Conselheiro Espiritual IA
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white hover:bg-white/20 rounded-lg p-2 transition-all relative z-10"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages com gradiente de fundo */}
            <div className="flex-1 overflow-y-auto p-3 md:p-5 space-y-3 md:space-y-4 bg-gradient-to-b from-purple-50/30 via-white to-purple-50/20 dark:from-gray-900 dark:to-gray-800">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-3 py-2 md:px-4 md:py-3 ${
                      message.role === 'user'
                        ? 'bg-gradient-to-br from-purple-600 to-purple-700 text-white rounded-br-none shadow-lg'
                        : 'bg-white dark:bg-gray-700 text-gray-800 dark:text-white rounded-bl-none shadow-md border-2 border-purple-100 dark:border-purple-800'
                    }`}
                  >
                    <p className="text-xs md:text-sm whitespace-pre-wrap leading-relaxed">{message.content}</p>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white dark:bg-gray-700 rounded-2xl rounded-bl-none px-4 py-3 shadow-md border-2 border-purple-100 dark:border-purple-800">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 bg-purple-600 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                      <div className="w-2.5 h-2.5 bg-purple-600 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                      <div className="w-2.5 h-2.5 bg-purple-600 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Actions melhoradas */}
            <div className="px-3 md:px-4 py-2 md:py-3 bg-gradient-to-r from-purple-50 to-pink-50 dark:bg-gray-800 border-t-2 border-purple-100 dark:border-purple-800">
              <p className="text-[10px] md:text-xs font-medium text-purple-700 dark:text-purple-300 mb-2">💡 Sugestões rápidas:</p>
              <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
                <button
                  onClick={() => setInputMessage('Qual o valor do encontro?')}
                  className="px-2.5 py-1.5 md:px-3 md:py-2 bg-white dark:bg-gray-700 rounded-xl text-[10px] md:text-xs font-medium text-purple-700 dark:text-purple-300 hover:bg-purple-100 dark:hover:bg-gray-600 transition-all shadow-sm hover:shadow-md whitespace-nowrap border border-purple-200 dark:border-purple-700"
                >
                  💰 Valor
                </button>
                <button
                  onClick={() => setInputMessage('Me fale sobre o Encontro com Deus')}
                  className="px-2.5 py-1.5 md:px-3 md:py-2 bg-white dark:bg-gray-700 rounded-xl text-[10px] md:text-xs font-medium text-purple-700 dark:text-purple-300 hover:bg-purple-100 dark:hover:bg-gray-600 transition-all shadow-sm hover:shadow-md whitespace-nowrap border border-purple-200 dark:border-purple-700"
                >
                  ✝️ Sobre
                </button>
                <button
                  onClick={() => setInputMessage('Quais os horários?')}
                  className="px-2.5 py-1.5 md:px-3 md:py-2 bg-white dark:bg-gray-700 rounded-xl text-[10px] md:text-xs font-medium text-purple-700 dark:text-purple-300 hover:bg-purple-100 dark:hover:bg-gray-600 transition-all shadow-sm hover:shadow-md whitespace-nowrap border border-purple-200 dark:border-purple-700"
                >
                  ⏰ Horários
                </button>
                <button
                  onClick={() => setInputMessage('Como faço para me inscrever?')}
                  className="px-2.5 py-1.5 md:px-3 md:py-2 bg-white dark:bg-gray-700 rounded-xl text-[10px] md:text-xs font-medium text-purple-700 dark:text-purple-300 hover:bg-purple-100 dark:hover:bg-gray-600 transition-all shadow-sm hover:shadow-md whitespace-nowrap border border-purple-200 dark:border-purple-700"
                >
                  📝 Inscrição
                </button>
                <button
                  onClick={() => setInputMessage('Preciso de um versículo de encorajamento')}
                  className="px-2.5 py-1.5 md:px-3 md:py-2 bg-white dark:bg-gray-700 rounded-xl text-[10px] md:text-xs font-medium text-purple-700 dark:text-purple-300 hover:bg-purple-100 dark:hover:bg-gray-600 transition-all shadow-sm hover:shadow-md whitespace-nowrap border border-purple-200 dark:border-purple-700"
                >
                  📖 Versículo
                </button>
              </div>
            </div>

            {/* Input melhorado */}
            <div className="p-3 md:p-4 bg-white dark:bg-gray-900 border-t-2 border-purple-100 dark:border-purple-800">
              <div className="flex gap-2 items-end">
                <div className="flex-1 bg-gray-50 dark:bg-gray-800 rounded-2xl px-3 py-2 md:px-4 md:py-3 focus-within:ring-2 focus-within:ring-purple-500 transition-all border border-gray-200 dark:border-gray-700">
                  <textarea
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Digite sua mensagem..."
                    className="w-full bg-transparent border-none outline-none resize-none text-xs md:text-sm text-gray-800 dark:text-white placeholder-gray-400 max-h-24"
                    rows={1}
                    disabled={isLoading}
                    style={{ fontSize: '16px' }}
                  />
                </div>
                <button
                  onClick={sendMessage}
                  disabled={!inputMessage.trim() || isLoading}
                  className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-purple-600 to-purple-800 text-white rounded-2xl flex items-center justify-center hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 active:scale-95 flex-shrink-0"
                >
                  <Send className="w-4 h-4 md:w-5 md:h-5" />
                </button>
              </div>
              
              {/* Contact Info melhorado */}
              <div className="mt-2 md:mt-3 flex items-center justify-center gap-2 text-[10px] md:text-xs text-gray-600 dark:text-gray-400">
                <Phone className="w-3 h-3 md:w-3.5 md:h-3.5" />
                <span className="font-medium">Contato: (19) 98358-6167</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button melhorado */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-purple-600 via-purple-700 to-purple-900 hover:from-purple-700 hover:via-purple-800 hover:to-purple-950 text-white rounded-full flex items-center justify-center shadow-2xl transition-all group relative overflow-hidden"
        aria-label="Chat com Eden"
      >
        {/* Efeito de brilho animado */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
        
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative z-10"
            >
              <X className="w-6 h-6 md:w-7 md:h-7" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative z-10"
            >
              <MessageCircle className="w-6 h-6 md:w-7 md:h-7 group-hover:scale-110 transition-transform" />
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Indicador online com pulso */}
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5 md:h-4 md:w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 md:h-4 md:w-4 bg-green-500 border-2 border-white shadow-lg"></span>
        </span>
        
        {/* Tooltip animado - apenas desktop */}
        {!isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden md:block absolute right-full mr-4 bg-gray-900 text-white px-4 py-2.5 rounded-xl text-sm font-medium whitespace-nowrap pointer-events-none shadow-xl"
          >
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-purple-300" />
              <span>Converse com Eden</span>
            </div>
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
