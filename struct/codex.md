# Contexto do projeto — Bruno Nakayma

Documento de continuidade para quem precisar compreender, manter ou evoluir este projeto.

Atualizado em **20/10/2026**, com base nos arquivos do repositório e nas decisões tomadas durante o desenvolvimento. Registra a implementação existente, o briefing do usuário e os pontos ainda não confirmados. Não representa uma nova especificação de funcionalidades já entregues.

## 1. Visão geral

O projeto é um site institucional de **Bruno Nakayma, terapeuta de casais**. Seu objetivo é apresentar a proposta de trabalho do terapeuta, acolher casais que percebem distanciamento emocional e conduzir o visitante a uma primeira conversa pelo Instagram.

O diferencial pretendido pelo usuário é a direção visual: uma experiência autoral, artística, moderna, viva e reconhecível, com degradês, movimento, um loader próprio e boa adaptação a dispositivos móveis. A ambição é tornar o site uma referência visual na área terapêutica, mantendo clareza, legibilidade e acolhimento.

O site atual é uma página única em português brasileiro. Não há backend próprio, banco de dados, autenticação, painel administrativo, formulário de contato, pagamento ou sistema de agendamento. A conversão acontece por um link externo para o perfil do terapeuta.

### Identificação

- Nome público utilizado no site: **Bruno Nakayma**.
- Área apresentada: **terapia de casais**.
- Mensagem central: **“Um espaço para vocês dois”**.
- Frase principal da abertura: **“O amor também precisa de um novo espaço.”**
- Instagram informado pelo usuário: <https://www.instagram.com/brunognakayama/>.
- Nome técnico do pacote: `mental-health-site`.
- Repositório: <https://github.com/robycorp-bot/bruno-nakayma>.
- Branch utilizada até esta documentação: `main`.

A grafia do nome público e a do usuário do Instagram são diferentes. Isso já ocorre no material recebido: manter **Bruno Nakayma** na identidade e preservar a URL fornecida, sem corrigir uma a partir da outra por suposição.

## 2. Missão e público

O público são casais que continuam juntos e ainda se importam com a relação, mas sentem falta de proximidade, intimidade, diálogo e companheirismo. A rotina compartilhada pode estar funcionando enquanto a conexão emocional se enfraquece.

Situações abordadas no conteúdo:

- Conversas restritas a filhos, dinheiro, tarefas e obrigações.
- Dificuldade para falar sobre sentimentos e sobre o que machuca.
- Distância emocional apesar da convivência diária.
- Ressentimentos acumulados e discussões recorrentes.
- Vontade de continuar juntos sem saber como recuperar a proximidade.

### Texto original fornecido pelo terapeuta

> Minha missão como terapeuta de casais é ajudar casais que, mesmo continuando juntos, sentem que estão deixando de ser próximos. Atendo casais que perderam a intimidade, que já não conversam como antes, que dividem a casa, as responsabilidades e a rotina, mas sentem falta da conexão que um dia tiveram. Casais que conversam principalmente sobre problemas práticos, filhos, dinheiro e obrigações, mas encontram dificuldade para falar sobre o que sentem, sobre o que os machuca e sobre aquilo de que sentem falta um no outro
>
> Meu trabalho é voltado para casais que ainda se importam com o relacionamento, mas não sabem como recuperar a proximidade, que acumulam ressentimentos, repetem as mesmas discussões ou aprenderam a conviver com uma distância emocional que antes não existia. Ofereço um espaço de escuta, compreensão e trabalho conjunto para que ambos possam entender o que aconteceu com a relação, reconstruir o diálogo e recuperar a intimidade, o companheirismo e o sentido de estarem juntos

Esse texto orienta a apresentação, o manifesto, os temas dos cards, as etapas ilustrativas do processo e as perguntas frequentes.

## 3. Direção visual e decisões do usuário

### Evolução da proposta

O projeto partiu de uma base genérica de saúde mental chamada “MindFuture”. O usuário pediu uma identidade específica para Bruno, com mais conteúdo, expressão artística, movimento e personalidade.

Foram fornecidas referências visuais de um site com marca “Bailey Hart”: títulos serifados grandes, composição editorial, espaço em branco, imagens amplas e cartões translúcidos sobre fundos desfocados. As referências serviram como direção estética; o conteúdo e a identidade final são próprios deste projeto.

Após as primeiras versões, o usuário pediu explicitamente **degradês puxados para vermelho escuro, retirando o rosa e preservando o branco**. Essa é a direção atual.

### Linguagem atual

- Base clara em branco quente, marfim e creme.
- Acentos em vinho, bordô e vermelho profundo.
- Reflexos em cobre, terracota e dourado suave nos degradês.
- Títulos grandes em fonte serifada, combinados com textos de apoio em sans-serif.
- Símbolo de dois elos como metáfora visual da relação.
- Escultura vetorial de elos entrelaçados na abertura, com luz, sombra e movimento.
- Cards com arte abstrata em CSS, transparência e profundidade.
- Alternância entre seções claras e áreas imersivas em vinho escuro.
- Texturas discretas, linhas finas, órbitas e pequenos sinais gráficos.

O caráter futurista é expresso pela arte, pelos degradês e pelas interações. A base clara e o tratamento editorial fazem parte da identidade aprovada; não retomar a antiga paleta roxa/ciano/rosa como se fosse o visual vigente.

### Tokens principais de cor

Definidos em `app/globals.css`:

| Variável | Valor | Uso principal |
| --- | --- | --- |
| `--paper` | `#f8f7f4` | Fundo geral claro |
| `--white` | `#fdfcfa` | Branco quente de apoio |
| `--ink` | `#2e2020` | Texto e elementos escuros |
| `--muted` | `#746a64` | Texto secundário |
| `--plum` | `#440b15` | Vinho profundo; nome de variável mantido |
| `--accent` | `#7c1925` | Cor de destaque |
| `--line` | `#dfd9d2` | Linhas e divisórias |

Existem cores adicionais diretamente nos degradês do CSS, no SVG de `ConnectionArt` e em `app/icon.svg`. Uma alteração completa de paleta precisa considerar esses três locais, além dos tokens.

### Tipografia

- **Instrument Serif**: títulos, destaques editoriais, nome da marca e trechos em itálico.
- **Manrope**: texto corrido, navegação, botões e legendas.
- Configuração em `app/layout.tsx`, usando `next/font/google`.
- As fontes são obtidas durante o build e servidas como arquivos do próprio site. O navegador não depende de um `@import` externo de fontes.

## 4. Conteúdo, fontes e limites de informação

O conteúdo textual implementado foi redigido a partir da missão enviada pelo usuário. As perguntas de reflexão são textos do site, não transcrições de publicações do Instagram.

O usuário também pediu que o Instagram fosse usado como fonte de conteúdo. Nas tentativas anteriores, o acesso ao perfil ficou limitado por bloqueios da plataforma e não houve leitura verificável de suas publicações. O endereço foi incorporado como canal de contato e acompanhamento. Não tratar posts como consumidos, citados ou sincronizados.

Não foram fornecidos nem devem ser inventados:

- Registro profissional, títulos acadêmicos, certificações ou abordagem clínica específica.
- Anos de experiência, número de pacientes ou taxas de sucesso.
- Depoimentos, avaliações, histórias de pacientes ou fotos que sugiram pacientes reais.
- Endereço de consultório, telefone, WhatsApp ou e-mail.
- Preços, duração das sessões, disponibilidade ou modalidades de atendimento confirmadas.
- Garantias de reconciliação, cura ou resultado.

As três etapas exibidas — Escutar, Compreender e Reconstruir — organizam a apresentação da proposta; não devem ser convertidas em alegação de protocolo clínico certificado ou número fixo de sessões.

O tom é próximo, respeitoso e acolhedor. Os textos reconhecem a experiência do casal e convidam à conversa sem decidir quem está certo ou prometer resultados.

## 5. Mapa da experiência

Os componentes abaixo estão definidos no próprio `app/page.tsx`:

| Área | Componente | Conteúdo e comportamento |
| --- | --- | --- |
| Entrada | `Loader` | Tela em vinho com símbolo dos elos e frase “todo encontro começa com espaço.” |
| Navegação | `Navbar`, `Brand` | Marca, âncoras, chamada para contato e menu móvel |
| Abertura | `Hero`, `ConnectionArt` | Título principal, escultura SVG, chamada para ação e acesso ao vídeo |
| Reconhecimento | `Manifesto` | Texto sobre estar junto na rotina e distante emocionalmente |
| Temas da relação | `Chapters` | Três cards expansíveis: diálogo, intimidade e reencontro |
| Proposta de trabalho | `Process` | Abas Escutar, Compreender e Reconstruir, com cartões translúcidos |
| Apresentação | `About` | Retrato de Bruno, missão e botão para assistir ao vídeo |
| Área imersiva | `Immersive` | Degradê escuro com destaque para conversa, intimidade, companheirismo e “nós” |
| Reflexões | `Reflections` | Perguntas sobre presença, escuta e proximidade |
| Dúvidas | `Faq` | Cinco perguntas e respostas em elementos `details`/`summary` |
| Contato | `Contact` | Convite à primeira conversa pelo Instagram |
| Rodapé | `Footer` | Marca, Instagram, ano, controle de movimentos e volta ao início |
| Vídeo | `VideoDialog` | Player em diálogo nativo, aberto por ação do visitante |

### Navegação e conversão

As âncoras principais são `#inicio`, `#para-voces`, `#processo`, `#sobre` e `#contato`. O link de salto aponta para `#conteudo`.

Chamadas como “Dar o primeiro passo” levam à seção de contato. O botão “Conversar com o Bruno” abre o perfil do Instagram em outra aba. O site não confirma agendamento nem envia mensagens automaticamente.

O destino externo está centralizado em `INSTAGRAM_URL`, no começo de `app/page.tsx`.

## 6. Arquitetura e dependências

### Stack declarada

- Next.js **16.4.2**, com App Router.
- React e React DOM **19.3.0**.
- TypeScript **5**, com modo estrito.
- Tailwind CSS **4.3.3**, integrado pelo plugin `@tailwindcss/postcss`.
- Framer Motion **14.3.0** para animações e efeitos de entrada/rolagem.
- Lucide React **1.58.0** para ícones.
- ESLint **9**, com configurações Next de TypeScript e Core Web Vitals.
- npm e `package-lock.json` para instalação reproduzível.

Essas são as versões declaradas no `package.json`; dependências com `^` podem variar conforme o lockfile. Não há framework de testes automatizados configurado.

### Estrutura atual

```text
bruno-nakayma/
├── app/
│   ├── page.tsx              # Página e componentes de apresentação/interação
│   ├── layout.tsx            # Layout, fontes, idioma e metadados
│   ├── globals.css           # Tokens, componentes visuais, animações e responsividade
│   ├── icon.svg              # Ícone autoral com os elos
│   └── favicon.ico           # Favicon herdado da base
├── public/
│   ├── images/
│   │   └── bruno-nakayma.jpeg # Retrato real fornecido pelo usuário
│   ├── videos/
│   │   └── bruno-atmosfera.mp4
│   └── *.svg                 # Arquivos do template que ainda permanecem no repositório
├── struct/
│   └── codex.md              # Este documento de contexto
├── AGENTS.md                 # Instruções de trabalho e descrição legada da base
├── README.md                 # Uso local e configuração do Render
├── next.config.ts            # Exportação estática e configuração de imagens
├── package.json
├── package-lock.json
├── tsconfig.json
├── eslint.config.mjs
├── postcss.config.js
└── .gitignore
```

`app/page.tsx` é um Client Component (`'use client'`). Os estados e eventos são locais ao React; não há biblioteca de estado global. Os arrays `navigation`, `chapters`, `steps` e `questions` concentram parte do conteúdo, enquanto outros textos estão diretamente nos componentes.

Os estilos são majoritariamente classes CSS próprias em `app/globals.css`, apesar de Tailwind estar instalado e importado. O alias TypeScript `@/*` aponta para a raiz do projeto.

### Metadados

Em `app/layout.tsx`:

- Idioma HTML: `pt-BR`.
- Título: `Bruno Nakayma | Um espaço para vocês dois`.
- Descrição sobre terapia de casais, diálogo, intimidade e companheirismo.
- Open Graph com título, descrição, locale `pt_BR` e tipo `website`.

Não há domínio público, URL canônica ou imagem social personalizada configurados nesses metadados. O domínio definitivo não foi confirmado nesta conversa.

## 7. Imagens, vídeo e arte

### Retrato

`public/images/bruno-nakayma.jpeg` é a foto real recebida do usuário. Aparece na miniatura da abertura, na seção de apresentação e como poster do vídeo. O arquivo tem aproximadamente 65 KB.

O componente utilizado é `next/image`, com `fill`, regras de enquadramento em CSS e atributo `sizes`. A miniatura da abertura tem `preload`. Na configuração atual, as imagens são servidas diretamente, sem o otimizador de imagens de um servidor Next.js.

### Vídeo

`public/videos/bruno-atmosfera.mp4` veio do vídeo enviado pelo usuário. Apesar do nome do arquivo, é um **vídeo de apresentação/fala de Bruno**, e não uma filmagem abstrata para fundo.

É vertical, tem aproximadamente 51 segundos e 10,75 MB. Só é exibido no player por escolha do visitante, com controles nativos, `playsInline` e `preload="none"`. O fechamento do diálogo pausa a reprodução.

### Elementos gráficos

A escultura da abertura é SVG inline, e as artes dos cards e fundos usam CSS. Não dependem de modelos 3D, WebGL, biblioteca de partículas ou imagens geradas por IA. `ConnectionMark` representa os elos menores da marca; `ConnectionArt` monta a escultura maior.

Os SVGs genéricos `file.svg`, `globe.svg`, `next.svg`, `vercel.svg` e `window.svg` permanecem em `public`, mas não compõem a identidade apresentada na página atual.

## 8. Movimento, responsividade e acessibilidade

### Comportamentos implementados

- Loader com saída animada. Seu temporizador normal é de 1.250 ms; não mede o carregamento real dos recursos.
- Barra fina de progresso da rolagem com `useScroll` e `useSpring`.
- Entradas de seções com `Reveal` e `whileInView`, executadas uma vez.
- Flutuação dos elos, deslocamento de luzes e movimentos de órbitas em CSS.
- Parallax leve da arte da abertura ao mover o mouse.
- Cards expansíveis por clique, toque ou teclado.
- Abas do processo com seleção e navegação pelas setas esquerda/direita.
- FAQ com elementos HTML nativos.
- Menu móvel com `aria-expanded`, foco no primeiro link ao abrir e fechamento por Escape.
- Player em `<dialog>` aberto com `showModal()`, botão de fechar, fechamento por Escape e clique no fundo.
- Link “Ir para o conteúdo”, estilos de foco visível e textos alternativos.

`MotionConfig reducedMotion="user"`, `useReducedMotion` e a media query `prefers-reduced-motion` tratam a preferência de movimento reduzido. Nesse modo, o loader fica oculto, as animações CSS são desativadas e o conteúdo de `Reveal` permanece visível.

O botão “Pausar movimentos” do rodapé aplica `.motion-paused`: pausa animações CSS e neutraliza a transformação da arte principal. Não é um controle global de todas as animações do Framer Motion nem do player de vídeo.

### Responsividade

O CSS possui ajustes em `min-width: 1600px`, `max-width: 1100px`, `max-width: 760px` e `max-width: 380px`. No celular, a navegação vira menu, as colunas se reorganizam, os cards se empilham e títulos e enquadramentos são ajustados.

### Cuidado conhecido com hidratação

Uma versão anterior de `Reveal` alterava `initial` conforme `useReducedMotion`, produzindo diferença entre o HTML inicial do servidor e o primeiro render do cliente. A implementação atual mantém `initial={{ opacity: 0, y: 26 }}` estável e usa CSS para tornar o conteúdo visível com movimento reduzido. Preservar esse comportamento ao alterar animações.

## 9. Desenvolvimento e validação

Na raiz do projeto:

```sh
npm ci
npm run dev
```

O Next utiliza `http://localhost:3000/` quando a porta está disponível. A porta não é reservada pelo projeto, e a existência de um servidor em execução deve ser conferida a cada sessão.

Comandos de verificação:

```sh
npm run lint
npm run build
```

`npm start` ainda existe no `package.json` como `next start`, herdado da base. Ele **não é o modo de servir a exportação estática atual**. A produção utiliza os arquivos de `out` em uma hospedagem de arquivos estáticos.

### Verificações já realizadas no desenvolvimento anterior

- Lint e build de produção concluídos com sucesso.
- Exportação com `out/index.html`, `out/404.html`, ícone, imagem, vídeo e arquivos estáticos.
- HTML exportado sem dependência de `/_next/image`.
- Verificação visual e de overflow nas larguras 360, 390, 768, 1024 e 1440 px.
- Interação do menu, cards, abas e diálogo de vídeo.
- Ausência de erros de hidratação nas verificações após a correção de `Reveal`, com preferência de movimento normal e reduzido.

Esses resultados são históricos, não uma garantia de validação após futuras alterações. A criação deste documento não altera o código da aplicação e não exige um novo build.

## 10. Publicação no Render

O usuário escolheu preparar a hospedagem como **Static Site** no Render. O projeto já foi ajustado para esse formato.

Configuração atual em `next.config.ts`:

```ts
const nextConfig: NextConfig = {
  allowedDevOrigins: ['127.0.0.1'],
  output: 'export',
  images: {
    unoptimized: true,
  },
};
```

`output: 'export'` faz `npm run build` gerar `out`. `images.unoptimized` permite servir as fotos sem um servidor de otimização. `allowedDevOrigins` é uma configuração de desenvolvimento, não o endereço de produção.

### Campos de publicação

| Campo no Render | Valor |
| --- | --- |
| Tipo de serviço | Static Site |
| Repositório | `robycorp-bot/bruno-nakayma` |
| Branch | `main` |
| Root Directory | Vazio; o projeto está na raiz |
| Build Command | `npm ci && npm run build` |
| Publish Directory | `out` |
| Start Command | Não se aplica ao Static Site |
| Variáveis de ambiente | Nenhuma exigida pela implementação atual |

O usuário chegou a inserir o comando de build em **Publish Directory**; foi orientado a deixar nesse campo apenas `out`.

`out`, `.next`, `node_modules`, arquivos `.env*` e artefatos de TypeScript estão ignorados pelo Git. O Render deve gerar os arquivos durante o deploy; não é necessário versionar `out`.

A aplicação atual cabe no modelo de exportação estática porque suas interações acontecem no navegador. A inclusão futura de lógica dependente de servidor deve ser avaliada em relação à estratégia de hospedagem.

Até o contexto registrado aqui, **não há confirmação de deploy concluído, URL pública ou domínio conectado**. As configurações foram preparadas e enviadas ao GitHub; não confundir isso com publicação já verificada. Limites e condições do plano gratuito devem ser conferidos no Render quando necessário.

Referências técnicas:

- <https://nextjs.org/docs/app/guides/static-exports>
- <https://nextjs.org/docs/app/api-reference/components/image>
- <https://render.com/docs/deploy-nextjs-app>

## 11. Histórico relevante

1. O usuário pediu análise e evolução de um projeto existente, com foco em arte, modernidade, animações, loader próprio e responsividade.
2. Foram recebidos o retrato real, o vídeo de Bruno e o texto de missão.
3. O conteúdo e o visual foram reorganizados como um site específico de terapia de casais, com linguagem editorial e símbolo dos elos.
4. O usuário pediu mais conteúdo e apresentou referências visuais; o site ganhou seções e interações baseadas nessa direção.
5. A paleta foi alterada por pedido explícito para vinho/vermelho escuro, preservando as áreas brancas.
6. O projeto foi commitado e enviado ao GitHub.
7. A exportação estática para Render foi configurada, validada, commitada e enviada ao GitHub.
8. O usuário solicitou a pasta `struct/` e este arquivo para preservar todo o contexto do projeto.

Commits existentes na revisão que originou este documento:

- `9a3a99a` — `feat: cria site autoral de terapia de casais para Bruno Nakayma`.
- `d04c141` — `fix: prepara exportacao estatica para o Render`.

Esses identificadores registram a base anterior à inclusão deste documento; não devem ser tratados como uma lista permanentemente atualizada de commits.

## 12. Orientação para continuidade

### Onde fazer alterações

- Conteúdo, destino de contato, seções e interações: `app/page.tsx`.
- Cores, composição visual, animações CSS e responsividade: `app/globals.css`.
- Gradientes específicos da escultura: `ConnectionArt`, em `app/page.tsx`.
- Fontes, idioma e metadados: `app/layout.tsx`.
- Ícone da identidade: `app/icon.svg`.
- Fotos e vídeos: `public/images` e `public/videos`.
- Configuração de build e exportação: `next.config.ts`.
- Instruções operacionais: `README.md`.
- Contexto e decisões de produto: `struct/codex.md`.

### Pontos de atenção

- O `AGENTS.md` contém regras de trabalho do Next.js que devem ser consultadas antes de mudanças de código. Sua descrição de produto ainda menciona MindFuture, cérebro, partículas e paleta roxa/ciano/rosa: são referências à base antiga, não ao site atual.
- O bloco de regras pede a leitura das guias relevantes em `node_modules/next/dist/docs/`. Esse diretório não estava presente na instalação inspecionada; nas alterações anteriores foram consultadas as páginas oficiais correspondentes do Next.js. Conferir novamente a disponibilidade antes de uma nova mudança técnica.
- Manter a precisão do conteúdo: novas informações profissionais ou comerciais precisam vir de material confirmado do terapeuta.
- Manter as perguntas autorais identificadas como reflexões do site, sem atribuí-las a posts não verificados.
- Preservar a identidade de elos, os degradês escuros, a tipografia editorial e o contraste com áreas claras nas evoluções visuais.
- Ao alterar interações, conferir teclado, foco, toque, movimento reduzido e disposição em telas pequenas.
- Ao substituir a mídia, usar o material correto e verificar o impacto no carregamento, especialmente do vídeo.
- Atualizar este documento quando houver mudança material no conteúdo, na identidade, no contato, na arquitetura ou na hospedagem.

Possíveis próximos trabalhos dependem da necessidade do usuário: confirmar o deploy público, definir domínio, receber informações profissionais adicionais ou disponibilizar novos conteúdos verificados. Nenhum desses itens está assumido como implementado.
