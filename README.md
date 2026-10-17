# Bruno Nakayma — Terapia de casais

Site autoral com direção editorial, arte vetorial em degradê e conteúdo baseado na missão fornecida pelo terapeuta. Desenvolvido em Next.js 16, React, TypeScript e Framer Motion.

## Desenvolvimento

```sh
npm install
npm run dev
```

O servidor usa `http://localhost:3000` quando a porta está disponível.

```sh
npm run lint
npm run build
npm start
```

## Estrutura

- `app/page.tsx`: seções da página, cards expansíveis, etapas por abas, navegação móvel e player em diálogo.
- `app/globals.css`: identidade visual, arte em SVG/CSS, animações e adaptações responsivas.
- `app/layout.tsx`: fontes locais otimizadas pelo Next e metadados em português.
- `app/icon.svg`: símbolo autoral dos dois elos.
- `public/images/bruno-nakayma.jpeg`: retrato fornecido pelo usuário.
- `public/videos/bruno-atmosfera.mp4`: vídeo do terapeuta; reproduzido por escolha do visitante, com controles nativos.

## Conteúdo e contato

O endereço de contato está centralizado na constante `INSTAGRAM_URL` de `app/page.tsx`. Atualmente leva ao perfil informado: `@brunognakayama`.

Os textos de apresentação derivam da missão enviada pelo terapeuta. As perguntas da seção de reflexão são redação do site, não citações de publicações do Instagram. Não há números de pacientes, credenciais, avaliações, endereço, formatos de atendimento ou preços presumidos.

## Interação e acessibilidade

- Menu móvel com indicação de estado e fechamento por Escape.
- Cards que abrem por toque, clique ou teclado.
- Abas do processo navegáveis por setas do teclado.
- Player em diálogo nativo com gerenciamento de foco, controles de áudio e fechamento por Escape.
- Preferência de movimento reduzido respeitada; movimentos contínuos podem ser pausados no rodapé.
- Fontes Instrument Serif e Manrope servidas pelo Next, sem importação de fontes no CSS do navegador.
