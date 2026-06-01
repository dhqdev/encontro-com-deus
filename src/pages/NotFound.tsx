import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const messages = [
  "Até Jonas foi engolido por uma baleia antes de chegar no lugar certo. Você só clicou no link errado.",
  "Esse caminho não leva a Roma, nem a Jerusalém. Volte ao início.",
  "Pedro afundou na água e ainda assim Jesus o resgatou. Clica no botão aí embaixo.",
  "Moisés ficou 40 anos no deserto. Você só caiu numa página errada — tem solução.",
  "Nem o GPS do céu te ajuda aqui. Essa página não existe.",
  "Tomé duvidou, e você também deveria duvidar que esse link funcionaria.",
];

const NotFound = () => {
  const location = useLocation();
  const [msg] = useState(() => messages[Math.floor(Math.random() * messages.length)]);

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-secondary gap-6 px-4 text-center">
      {/* GIF engraçado */}
      <img
        src="https://media.giphy.com/media/3o7TKsQ8MoMoElQJeE/giphy.gif"
        alt="Perdido como ovelha"
        className="w-64 h-64 object-cover rounded-2xl shadow-lg"
      />

      {/* Número 404 estilizado */}
      <h1 className="text-8xl font-display font-bold text-accent leading-none">404</h1>

      {/* Título */}
      <h2 className="text-2xl font-semibold text-foreground">
        Página perdida como ovelha desgarrada
      </h2>

      {/* Mensagem aleatória cristã engraçada */}
      <p className="max-w-md text-muted-foreground text-lg leading-relaxed">
        "{msg}"
      </p>

      {/* Botão de retorno */}
      <a
        href="/"
        className="mt-2 inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 font-semibold text-white shadow hover:bg-accent/90 transition-colors"
      >
        🕊️ Voltar para o início
      </a>
    </div>
  );
};

export default NotFound;
