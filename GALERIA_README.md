# Galeria Circular 3D - Encontro com Deus

## 🎨 Visão Geral

Este projeto implementa uma galeria circular interativa em 3D usando WebGL (através da biblioteca OGL) para exibir fotos do evento "Encontro com Deus" de forma dinâmica e envolvente.

## ✨ Características

### Galeria Circular 3D
- **Renderização WebGL**: Usa a biblioteca OGL para renderização 3D de alto desempenho
- **Efeito de Curvatura**: As imagens se curvam ao longo de um arco circular (configurável via prop `bend`)
- **Animação Fluida**: Transições suaves ao navegar pelas imagens
- **Interatividade Total**: 
  - Arraste com o mouse para navegar
  - Use a roda do mouse para scroll
  - Toque e arraste em dispositivos móveis
  - Scroll infinito (as imagens se repetem)

### Galeria Tradicional
- Layout em grid responsivo (2/3/4 colunas)
- Imagens em destaque ocupam mais espaço
- Lightbox para visualização ampliada
- Efeito hover com zoom suave

## 🛠️ Tecnologias Utilizadas

- **React + TypeScript**: Framework principal
- **OGL (Open Graphics Library)**: Biblioteca WebGL para renderização 3D
- **Vite**: Build tool e dev server
- **TailwindCSS**: Estilização
- **Lucide React**: Ícones

## 📦 Componentes

### CircularGallery
O componente principal da galeria 3D.

#### Props
```typescript
interface CircularGalleryProps {
  items?: Array<{ image: string; text: string }>;
  bend?: number;              // Curvatura do arco (padrão: 3)
  textColor?: string;         // Cor do texto (padrão: '#ffffff')
  borderRadius?: number;      // Arredondamento das bordas (padrão: 0.05)
  font?: string;              // Fonte do texto (padrão: 'bold 30px Figtree')
  scrollSpeed?: number;       // Velocidade do scroll (padrão: 2)
  scrollEase?: number;        // Suavização do scroll (padrão: 0.05)
}
```

#### Uso
```tsx
<CircularGallery 
  items={[
    { image: '/path/to/image.jpg', text: 'Descrição' },
    // ...
  ]}
  bend={3} 
  textColor="#ffffff" 
  borderRadius={0.05} 
  scrollEase={0.02}
/>
```

## 🎮 Controles

### Desktop
- **Arraste**: Clique e arraste para navegar
- **Scroll**: Use a roda do mouse para avançar/voltar

### Mobile
- **Toque e Arraste**: Deslize para navegar pelas imagens

## 🎨 Personalização

### Ajustar a Curvatura
Modifique o prop `bend`:
- `0`: Sem curvatura (linha reta)
- `1-5`: Curvatura suave a moderada
- `>5`: Curvatura acentuada

### Alterar Velocidade
- `scrollSpeed`: Controla a velocidade de navegação (1-5 recomendado)
- `scrollEase`: Controla a suavização (0.01-0.1 recomendado)

### Cores e Estilos
- `textColor`: Cor dos textos das imagens
- `borderRadius`: Arredondamento das bordas das imagens

## 📱 Responsividade

A galeria se adapta automaticamente a diferentes tamanhos de tela:
- **Mobile**: Altura de 400px
- **Tablet**: Altura de 500px
- **Desktop**: Altura de 600px

## 🚀 Funcionalidades Técnicas

### WebGL Shaders
- **Vertex Shader**: Cria efeitos de ondulação 3D
- **Fragment Shader**: Aplica texturas com bordas arredondadas

### Performance
- Anti-aliasing ativado
- Mipmaps para texturas
- DPR adaptativo (máx 2x)
- Renderização otimizada com requestAnimationFrame

### Sistema de Loop Infinito
As imagens são duplicadas internamente para criar um efeito de scroll infinito contínuo.

## 📄 Arquivos Principais

```
src/components/
├── CircularGallery.tsx       # Componente principal
├── CircularGallery.css        # Estilos da galeria
└── Gallery.tsx                # Integração com o projeto
```

## 🐛 Troubleshooting

### Canvas não aparece
- Verifique se a biblioteca OGL está instalada: `npm install ogl`
- Confira se o container tem altura definida

### Imagens não carregam
- Verifique o caminho das imagens
- Para imagens externas, garanta que CORS está configurado

### Performance lenta
- Reduza o DPR (Device Pixel Ratio)
- Diminua os valores de `heightSegments` e `widthSegments`

## 📝 Licença

Este projeto faz parte do site "Encontro com Deus" e foi desenvolvido com React + TypeScript + OGL.

---

Desenvolvido com ❤️ para criar uma experiência visual única e envolvente.
