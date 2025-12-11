# Encontro com Deus 🙏

Site oficial do retiro espiritual **Encontro com Deus** - Um ministério de transformação dedicado a promover experiências profundas de renovação espiritual, cura e reconexão com Deus.

<img width="1922" height="1002" alt="image" src="https://github.com/user-attachments/assets/7ab7306e-da03-4747-bd1c-466bed665bb2" />

## 📖 Sobre o Projeto

Este é um site moderno e responsivo desenvolvido para o retiro "Encontro com Deus", oferecendo uma experiência digital imersiva que reflete a profundidade espiritual do evento. O site apresenta:

- **Landing Page Atraente**: Hero section com efeito parallax e animações suaves
- **Informações Completas**: Sobre o retiro, valores, cronograma e ministérios
- **Sistema de Inscrição**: Formulário integrado para registro de participantes
- **Galeria 3D Interativa**: Galeria circular em WebGL com fotos dos eventos anteriores
- **Chatbot Inteligente**: Assistente virtual para responder dúvidas sobre o retiro
- **Design Responsivo**: Totalmente otimizado para desktop, tablet e mobile

## ✨ Funcionalidades

### 🎨 Galeria Circular 3D
- Renderização WebGL de alta performance usando OGL (Open Graphics Library)
- Navegação fluida com mouse, touch e scroll
- Efeito de curvatura circular das imagens
- Scroll infinito com transições suaves

### 📝 Sistema de Inscrição
- Formulário de registro com validação
- Integração com webhook para processamento de inscrições
- Notificações de sucesso/erro em tempo real
- Formatação automática de telefone

### 💬 Chatbot Inteligente (Eden)
- Assistente virtual para tirar dúvidas
- Interface moderna e intuitiva
- Respostas contextualizadas sobre o retiro

### 🎭 Animações e Interatividade
- Efeitos de scroll e parallax com Framer Motion
- Animações de entrada suaves
- Hover effects e transições fluidas
- Botão WhatsApp flutuante para contato rápido

## 🛠️ Tecnologias Utilizadas

### Core
- **React 18.3** - Biblioteca JavaScript para interfaces de usuário
- **TypeScript 5.8** - Superset tipado do JavaScript
- **Vite 5.4** - Build tool e dev server de alta performance

### UI/UX
- **TailwindCSS 3.4** - Framework CSS utility-first
- **shadcn/ui** - Componentes React reutilizáveis e acessíveis
- **Framer Motion 12.23** - Biblioteca de animações
- **Lucide React** - Ícones modernos e customizáveis

### 3D/WebGL
- **OGL 1.0** - Biblioteca WebGL minimalista para renderização 3D

### Roteamento e Estado
- **React Router DOM 6.30** - Navegação entre páginas
- **TanStack Query 5.83** - Gerenciamento de estado assíncrono

### Formulários
- **React Hook Form 7.61** - Gerenciamento de formulários
- **Zod 3.25** - Validação de schemas

### Outras Bibliotecas
- **OpenAI** - Integração com IA para chatbot
- **Sonner** - Sistema de notificações toast
- **Recharts** - Biblioteca de gráficos (se necessário)

## 📦 Instalação e Execução

### Pré-requisitos
- Node.js 18+ ou Bun
- npm, yarn ou bun

### Instalação com npm
```bash
# Clone o repositório
git clone <URL_DO_REPOSITORIO>

# Entre no diretório
cd encontro-com-deus

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

### Instalação com bun (recomendado)
```bash
# Clone o repositório
git clone <URL_DO_REPOSITORIO>

# Entre no diretório
cd encontro-com-deus

# Instale as dependências
bun install

# Inicie o servidor de desenvolvimento
bun run dev
```

O site estará disponível em `http://localhost:5173`

## 📜 Scripts Disponíveis

- `npm run dev` ou `bun run dev` - Inicia o servidor de desenvolvimento
- `npm run build` ou `bun run build` - Compila o projeto para produção
- `npm run build:dev` - Compila em modo desenvolvimento
- `npm run preview` - Visualiza a build de produção localmente
- `npm run lint` - Executa o linter ESLint

## 📁 Estrutura do Projeto

```
encontro-com-deus/
├── public/              # Arquivos estáticos
│   └── robots.txt
├── src/
│   ├── assets/         # Imagens e recursos
│   │   └── gallery/    # Fotos da galeria
│   ├── components/     # Componentes React
│   │   ├── ui/        # Componentes shadcn/ui
│   │   ├── About.tsx
│   │   ├── Hero.tsx
│   │   ├── Gallery.tsx
│   │   ├── CircularGallery.tsx
│   │   ├── Registration.tsx
│   │   ├── EdenChatbot.tsx
│   │   └── ...
│   ├── hooks/         # Custom hooks
│   ├── lib/           # Utilitários
│   ├── pages/         # Páginas da aplicação
│   │   ├── Index.tsx
│   │   └── NotFound.tsx
│   ├── App.tsx        # Componente raiz
│   └── main.tsx       # Entry point
├── package.json
├── vite.config.ts
├── tailwind.config.ts
└── tsconfig.json
```

## 🎨 Componentes Principais

### Hero
Seção inicial com imagem de fundo, efeito parallax e call-to-action para inscrição.

### About
Apresentação do retiro com cards informativos sobre transformação, frequência e impacto.

### Value
Seção de valores e princípios do ministério.

### Info
Informações detalhadas sobre cronograma e atividades.

### Spiritual
Descrição dos ministérios e aspectos espirituais do retiro.

### Gallery
Galeria de fotos com duas visualizações:
- Galeria tradicional em grid
- Galeria circular 3D interativa (CircularGallery)

### Registration
Formulário de inscrição integrado com sistema de processamento.

### EdenChatbot
Chatbot inteligente para responder dúvidas dos visitantes.

## 🚀 Deploy

Para fazer o deploy do projeto:

```bash
# Build de produção
npm run build

# Os arquivos estarão na pasta dist/
```

O projeto pode ser hospedado em plataformas como:
- Vercel
- Netlify
- GitHub Pages
- Firebase Hosting
- AWS S3 + CloudFront

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para:
1. Fazer fork do projeto
2. Criar uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona MinhaFeature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abrir um Pull Request

## 📄 Licença

Este projeto é privado e destinado ao uso exclusivo do ministério Encontro com Deus.

## 📞 Contato

Para mais informações sobre o retiro ou sobre o desenvolvimento do site, entre em contato através dos canais oficiais do ministério.

---

**Desenvolvido com ❤️ para transformar vidas através de experiências espirituais profundas.**

