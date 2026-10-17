'use client';

import {
  AnimatePresence,
  MotionConfig,
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
} from 'framer-motion';
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  AudioLines,
  Check,
  Menu,
  Pause,
  Play,
  Plus,
  X,
} from 'lucide-react';
import Image from 'next/image';
import { useEffect, useRef, useState, type PointerEvent, type ReactNode } from 'react';

const INSTAGRAM_URL = 'https://www.instagram.com/brunognakayama/';
const navigation = [
  { label: 'Para vocês', href: '#para-voces' },
  { label: 'O processo', href: '#processo' },
  { label: 'Sobre Bruno', href: '#sobre' },
];

const chapters = [
  {
    title: <>Quando conversar<br />virou <em>se afastar.</em></>,
    label: 'O diálogo',
    short: 'As mesmas discussões. As palavras que não chegam. O silêncio que cresce.',
    text: 'Um espaço para falar sobre o que machuca, reconhecer o que cada um sente e encontrar outras formas de se ouvir.',
    art: 'dialogue',
  },
  {
    title: <>Perto na rotina.<br /><em>Longe no sentir.</em></>,
    label: 'A intimidade',
    short: 'Vocês dividem a casa e os dias. Mas sentem falta de compartilhar a vida.',
    text: 'Olhar juntos para a distância emocional, para a falta de intimidade e para aquilo de que vocês sentem falta um no outro.',
    art: 'intimacy',
  },
  {
    title: <>Ainda há carinho.<br /><em>E agora?</em></>,
    label: 'O reencontro',
    short: 'Existe vontade de continuar. O difícil é saber como sair do mesmo lugar.',
    text: 'Compreender os ressentimentos e os padrões que se repetem, abrindo espaço para o companheirismo e para novas possibilidades.',
    art: 'reunion',
  },
];

const steps = [
  {
    name: 'Escutar',
    title: 'Dar lugar ao que ficou por dizer.',
    text: 'Antes de pensar em respostas, precisamos compreender a história de vocês. O que aproxima, o que pesa e o que cada um tem tentado dizer à sua maneira.',
    note: 'Os sentimentos dos dois têm lugar nessa conversa.',
    card: 'O que vocês sentem',
    icon: AudioLines,
  },
  {
    name: 'Compreender',
    title: 'Olhar para o que se repete.',
    text: 'Algumas discussões parecem mudar de assunto, mas voltam sempre ao mesmo ponto. Juntos, podemos olhar para esses movimentos e para as necessidades que existem por trás deles.',
    note: 'Compreender a relação é um trabalho conjunto.',
    card: 'O que acontece entre vocês',
    icon: ConnectionMark,
  },
  {
    name: 'Reconstruir',
    title: 'Abrir espaço para o novo.',
    text: 'A partir do que é compreendido, trabalhamos novas possibilidades de diálogo, intimidade e companheirismo. Um percurso que respeita a singularidade e o tempo de cada casal.',
    note: 'O caminho é construído com vocês, encontro a encontro.',
    card: 'O que ainda pode florescer',
    icon: Plus,
  },
];

const questions = [
  {
    question: 'Precisamos estar em crise para procurar terapia?',
    answer: 'O espaço descrito aqui também é para casais que continuam juntos, mas percebem uma distância que antes não existia. A falta de diálogo, de intimidade ou de proximidade já pode motivar uma conversa sobre o acompanhamento.',
  },
  {
    question: 'E se tivermos dificuldade para falar sobre sentimentos?',
    answer: 'Essa dificuldade faz parte da história de muitos casais. A proposta é criar um espaço de escuta e compreensão para que o que machuca e o que faz falta possa, aos poucos, encontrar palavras.',
  },
  {
    question: 'O foco é decidir quem está certo?',
    answer: 'Meu trabalho é olhar com vocês para a relação: o que aconteceu, o que se repete e como cada um vive essa experiência. A compreensão é construída em conjunto, dando lugar às duas perspectivas.',
  },
  {
    question: 'Como saber se esse trabalho faz sentido para nós?',
    answer: 'Se vocês ainda se importam com a relação, mas não sabem como recuperar a proximidade, podemos conversar sobre o que estão vivendo e sobre a proposta do trabalho. Os detalhes do acompanhamento são combinados diretamente comigo.',
  },
  {
    question: 'Como consultar horários e formas de atendimento?',
    answer: 'Entre em contato pelo meu perfil no Instagram. Por lá, vocês podem perguntar sobre disponibilidade, formatos de atendimento e os próximos passos para iniciar uma conversa.',
  },
];

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [videoOpen, setVideoOpen] = useState(false);
  const [motionPaused, setMotionPaused] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const timer = window.setTimeout(() => setLoading(false), reduce ? 100 : 1250);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <div className={`site-shell${motionPaused ? ' motion-paused' : ''}`}>
        <a className="skip-link" href="#conteudo">Ir para o conteúdo</a>
        <AnimatePresence>{loading && <Loader />}</AnimatePresence>
        <motion.div aria-hidden="true" className="scroll-progress" style={{ scaleX: progress }} />
        <Navbar />
        <main id="conteudo">
          <Hero onPlay={() => setVideoOpen(true)} />
          <Manifesto />
          <Chapters />
          <Process />
          <About onPlay={() => setVideoOpen(true)} />
          <Immersive />
          <Reflections />
          <Faq />
          <Contact />
        </main>
        <Footer motionPaused={motionPaused} onToggleMotion={() => setMotionPaused(!motionPaused)} />
        <VideoDialog open={videoOpen} onClose={() => setVideoOpen(false)} />
      </div>
    </MotionConfig>
  );
}

function ConnectionMark({ className = '' }: { className?: string }) {
  return (
    <svg className={className} width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
      <ellipse cx="14" cy="18" rx="8" ry="13" transform="rotate(-28 14 18)" stroke="currentColor" strokeWidth="1.8" />
      <ellipse cx="22" cy="18" rx="8" ry="13" transform="rotate(28 22 18)" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

function Instagram({ size = 16 }: { size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><rect x="3.5" y="3.5" width="17" height="17" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.8" r=".9" fill="currentColor" stroke="none" /></svg>;
}

function Brand() {
  return <a className="brand" href="#inicio" aria-label="Bruno Nakayma, início"><ConnectionMark /><span>Bruno Nakayma<span className="brand-caption">terapia de casais</span></span></a>;
}

function Loader() {
  return (
    <motion.div className="loader" aria-hidden="true" initial={{ y: 0 }} exit={{ y: '-100%', borderRadius: '0 0 35% 35%' }} transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}>
      <div className="loader-light" />
      <ConnectionMark className="loader-symbol" />
      <span className="loader-word">todo encontro<br />começa com <em>espaço.</em></span>
      <span className="micro loader-label">Bruno Nakayma · Terapia de casais</span>
      <span className="loader-line" />
    </motion.div>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const frame = window.requestAnimationFrame(() => document.querySelector<HTMLAnchorElement>('#navegacao a')?.focus());
    const close = (event: KeyboardEvent) => {
      if (event.key === 'Escape') { setOpen(false); toggle.current?.focus(); }
    };
    window.addEventListener('keydown', close);
    return () => { window.cancelAnimationFrame(frame); window.removeEventListener('keydown', close); };
  }, [open]);

  return (
    <header className="navbar">
      <div className="nav-inner">
        <Brand />
        <nav id="navegacao" aria-label="Navegação principal" className={`nav-links${open ? ' is-open' : ''}`}>
          {navigation.map(item => <a key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</a>)}
          <a className="nav-mobile-contact" href="#contato" onClick={() => setOpen(false)}>Vamos conversar <ArrowUpRight size={17} /></a>
        </nav>
        <a className="button button-dark nav-cta" href="#contato"><span className="nav-cta-label">Vamos conversar</span><span className="nav-cta-short">Conversar</span><ArrowUpRight size={16} /></a>
        <button ref={toggle} type="button" className="menu-toggle" aria-label={open ? 'Fechar menu' : 'Abrir menu'} aria-expanded={open} aria-controls="navegacao" onClick={() => setOpen(!open)}>{open ? <X size={22} /> : <Menu size={22} />}</button>
      </div>
    </header>
  );
}

function ConnectionArt({ id = 'hero' }: { id?: string }) {
  return (
    <div className="connection-art" aria-hidden="true">
      <div className="art-aura aura-copper" /><div className="art-aura aura-garnet" />
      <svg className="sculpture" viewBox="0 0 720 730" fill="none">
        <defs>
          <linearGradient id={`${id}-crimson`} x1="170" y1="110" x2="460" y2="590" gradientUnits="userSpaceOnUse"><stop stopColor="#fff1db" /><stop offset=".18" stopColor="#b65b49" /><stop offset=".43" stopColor="#7b1120" /><stop offset=".7" stopColor="#360812" /><stop offset=".84" stopColor="#8e1e28" /><stop offset="1" stopColor="#e8cdb2" /></linearGradient>
          <linearGradient id={`${id}-oxblood`} x1="590" y1="140" x2="250" y2="600" gradientUnits="userSpaceOnUse"><stop stopColor="#ebddca" /><stop offset=".19" stopColor="#993a32" /><stop offset=".42" stopColor="#6a0d1b" /><stop offset=".68" stopColor="#2f050f" /><stop offset=".86" stopColor="#8f3026" /><stop offset="1" stopColor="#c58d66" /></linearGradient>
          <linearGradient id={`${id}-shine`} x1="100" y1="120" x2="540" y2="620" gradientUnits="userSpaceOnUse"><stop stopColor="white" stopOpacity=".9" /><stop offset=".5" stopColor="white" stopOpacity="0" /><stop offset="1" stopColor="white" stopOpacity=".5" /></linearGradient>
          <filter id={`${id}-shadow`} x="-60%" y="-40%" width="230%" height="210%"><feDropShadow dx="12" dy="26" stdDeviation="15" floodColor="#390711" floodOpacity=".22" /></filter>
        </defs>
        <g filter={`url(#${id}-shadow)`} className="sculpture-loops">
          <g className="sculpture-left"><ellipse cx="284" cy="350" rx="128" ry="228" transform="rotate(-29 284 350)" stroke={`url(#${id}-crimson)`} strokeWidth="66" /><ellipse cx="284" cy="350" rx="153" ry="252" transform="rotate(-29 284 350)" stroke={`url(#${id}-shine)`} strokeWidth="1.5" /></g>
          <g className="sculpture-right"><ellipse cx="434" cy="367" rx="128" ry="228" transform="rotate(29 434 367)" stroke={`url(#${id}-oxblood)`} strokeWidth="66" /><ellipse cx="434" cy="367" rx="102" ry="203" transform="rotate(29 434 367)" stroke={`url(#${id}-shine)`} strokeWidth="1.5" /></g>
        </g>
      </svg>
      <div className="art-orbit orbit-outer" /><div className="art-orbit orbit-inner" />
      <span className="art-spark spark-one">✳</span><span className="art-spark spark-two">+</span>
    </div>
  );
}

function Hero({ onPlay }: { onPlay: () => void }) {
  const art = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const moveArt = (event: PointerEvent<HTMLElement>) => {
    if (!art.current || reduceMotion || event.pointerType !== 'mouse') return;
    const bounds = event.currentTarget.getBoundingClientRect();
    art.current.style.setProperty('--pointer-x', `${((event.clientX - bounds.left) / bounds.width - 0.5) * 18}px`);
    art.current.style.setProperty('--pointer-y', `${((event.clientY - bounds.top) / bounds.height - 0.5) * 12}px`);
  };
  return (
    <section id="inicio" className="hero" onPointerMove={moveArt} onPointerLeave={() => { art.current?.style.setProperty('--pointer-x', '0px'); art.current?.style.setProperty('--pointer-y', '0px'); }}>
      <div className="hero-grain" aria-hidden="true" />
      <div className="hero-topline micro"><span><i className="live-dot" /> Um espaço para vocês dois</span><span>Escuta. Vínculo. Reencontro.</span></div>
      <div className="hero-content">
        <p className="eyebrow">Bruno Nakayma / Terapia de casais</p>
        <h1>O amor também<br />precisa de um<br /><em>novo espaço.</em></h1>
        <p className="hero-description">Para casais que ainda se importam,<br className="desktop-break" /> mas sentem falta de se encontrar.</p>
        <a className="button button-dark hero-cta" href="#contato">Dar o primeiro passo <span className="button-icon"><ArrowUpRight size={18} /></span></a>
      </div>
      <div ref={art} className="hero-art"><ConnectionArt /></div>
      <div className="art-caption micro" aria-hidden="true"><span>01 — A arte de se reconectar</span><span>Dois universos.<br />Novas possibilidades.</span></div>
      <button type="button" className="hero-video" onClick={onPlay} aria-label="Assistir ao vídeo do Bruno">
        <span className="hero-video-image"><Image src="/images/bruno-nakayma.jpeg" alt="" fill sizes="96px" preload /><span><Play size={13} fill="currentColor" /></span></span>
        <span className="hero-video-copy"><span className="micro">Um primeiro encontro</span><strong>Conheça o Bruno</strong><span>Assista ao vídeo <ArrowUpRight size={13} /></span></span>
      </button>
      <div className="hero-bottom micro"><a href="#para-voces"><span className="scroll-circle"><ArrowDown size={15} /></span> Descubra esse espaço</a><span>Toda relação tem uma história.<br />A de vocês merece ser ouvida.</span></div>
    </section>
  );
}

function SectionLabel({ number, children, light = false }: { number: string; children: ReactNode; light?: boolean }) {
  return <div className={`section-label micro${light ? ' label-light' : ''}`}><span>{number} / {children}</span><span className="label-cross" aria-hidden="true">+</span></div>;
}

function Reveal({ children, className = '', delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  return <motion.div className={`reveal ${className}`} initial={{ opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>;
}

function Manifesto() {
  return (
    <section id="para-voces" className="manifesto section-wrap">
      <SectionLabel number="01">Talvez vocês se reconheçam aqui</SectionLabel>
      <div className="manifesto-layout">
        <Reveal><span className="small-symbol" aria-hidden="true">✳</span><h2>Juntos na rotina.<br /><span className="soft-text">Distantes no que</span><br /><em>faz sentir junto.</em></h2></Reveal>
        <Reveal className="manifesto-copy" delay={0.1}><p className="lead-copy">A casa é a mesma.<br />A proximidade, nem tanto.</p><p>Vocês falam sobre os filhos, as contas, os compromissos. Mas, quando o assunto é o que sentem, o que machuca ou o que faz falta, a conversa já não encontra caminho.</p><p>Meu trabalho é ajudar casais que continuam juntos, mas sentem que estão deixando de ser próximos. Um espaço para compreender o que aconteceu com a relação e trabalhar, juntos, novas formas de se encontrar.</p><a className="text-link" href="#processo">Existe espaço para essa conversa <ArrowUpRight size={17} /></a></Reveal>
      </div>
      <div className="manifesto-foot micro"><span>Não é preciso ter todas as respostas.</span><span>Podemos começar pelas perguntas.</span></div>
    </section>
  );
}

function Chapters() {
  const [active, setActive] = useState<number | null>(0);
  return (
    <section className="chapters section-wrap" aria-labelledby="chapters-heading">
      <div className="section-intro"><p className="eyebrow">O que chega até esse espaço</p><h2 id="chapters-heading">Às vezes, a distância<br /><em>tem outros nomes.</em></h2><p>Cada casal vive uma história.<br />Algumas sensações se encontram.</p></div>
      <div className="chapter-grid">
        {chapters.map((chapter, index) => <article className={`chapter-card chapter-${chapter.art}${active === index ? ' is-active' : ''}`} key={chapter.label}>
          <div className="chapter-art" aria-hidden="true"><span /><span /><span /></div>
          <button type="button" className="chapter-toggle" aria-expanded={active === index} aria-controls={`chapter-${index}`} onClick={() => setActive(active === index ? null : index)}>
            <span className="chapter-top micro"><span>0{index + 1} / {chapter.label}</span><span className="chapter-plus"><Plus size={19} /></span></span>
            <span className="chapter-bottom"><span className="chapter-title">{chapter.title}</span><span className="chapter-short">{chapter.short}</span></span>
          </button>
          <div className="chapter-detail" id={`chapter-${index}`} hidden={active !== index}><p>{chapter.text}</p><a href="#contato">Vamos conversar <ArrowUpRight size={15} /></a></div>
        </article>)}
      </div>
      <p className="chapter-hint micro"><Plus size={12} /> Toque nos cards para encontrar mais espaço.</p>
    </section>
  );
}

function Process() {
  const [active, setActive] = useState(0);
  return (
    <section id="processo" className="process-section section-wrap">
      <SectionLabel number="02">O processo terapêutico</SectionLabel>
      <div className="process-layout">
        <Reveal className={`process-visual process-state-${active}`}>
          <div className="process-glow" aria-hidden="true" /><div className="process-line" aria-hidden="true" />
          <span className="micro process-visual-label">Um encontro abre o próximo.</span>
          <div className="glass-stack">{steps.map((item, index) => <div key={item.name} className={`glass-card${active === index ? ' is-current' : ''}`}><span className="glass-icon"><item.icon /></span><span><small className="micro">0{index + 1} / {item.name}</small><strong>{item.card}</strong></span><Check size={17} /></div>)}</div>
          <span className="process-visual-footer micro"><ConnectionMark /> Pequenos movimentos. Novas possibilidades.</span>
        </Reveal>
        <Reveal className="process-copy" delay={0.12}>
          <p className="eyebrow">Como eu trabalho</p><h2>Dois olhares.<br />Um espaço de<br /><em>compreensão.</em></h2>
          <p className="process-description">Um trabalho conjunto para entender a relação, reconstruir o diálogo e recuperar o sentido de estarem juntos.</p>
          <div className="process-tabs" role="tablist" aria-label="Momentos do processo">{steps.map((item, index) => <button key={item.name} type="button" role="tab" id={`step-tab-${index}`} aria-selected={active === index} aria-controls={`step-panel-${index}`} tabIndex={active === index ? 0 : -1} onClick={() => setActive(index)} onKeyDown={event => { if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') { event.preventDefault(); const next = (active + (event.key === 'ArrowRight' ? 1 : -1) + steps.length) % steps.length; setActive(next); document.getElementById(`step-tab-${next}`)?.focus(); } }}>{`0${index + 1}`}<span>{item.name}</span></button>)}</div>
          {steps.map((item, index) => <div key={item.name} className="process-panel" role="tabpanel" id={`step-panel-${index}`} aria-labelledby={`step-tab-${index}`} tabIndex={0} hidden={active !== index}><h3>{item.title}</h3><p>{item.text}</p><span className="process-note"><span />{item.note}</span></div>)}
        </Reveal>
      </div>
    </section>
  );
}

function About({ onPlay }: { onPlay: () => void }) {
  return (
    <section id="sobre" className="about-section section-wrap">
      <SectionLabel number="03">A pessoa do outro lado da escuta</SectionLabel>
      <div className="about-layout">
        <Reveal className="portrait-composition"><div className="portrait-frame"><Image src="/images/bruno-nakayma.jpeg" alt="Retrato de Bruno Nakayma, terapeuta de casais" fill sizes="(max-width: 760px) 90vw, 43vw" /><div className="portrait-caption"><span className="micro">Prazer,</span><span>Bruno Nakayma</span></div></div><span className="portrait-sticker"><ConnectionMark /><span className="micro">Presença<br />que acolhe.</span></span></Reveal>
        <Reveal className="about-copy" delay={0.1}><p className="eyebrow">Terapeuta de casais</p><h2>Sou Bruno.<br />E acredito no<br /><em>espaço entre nós.</em></h2><p className="lead-copy">Minha missão é ajudar casais que, mesmo continuando juntos, sentem que estão deixando de ser próximos.</p><p>Atendo casais que ainda se importam com o relacionamento, mas não sabem como recuperar a proximidade. Que acumulam ressentimentos, repetem as mesmas discussões ou aprenderam a conviver com uma distância emocional.</p><p>Ofereço um espaço de escuta, compreensão e trabalho conjunto para que ambos possam entender o que aconteceu com a relação e recuperar o diálogo, a intimidade e o companheirismo.</p><button className="video-link" type="button" onClick={onPlay}><span className="round-play"><Play size={15} fill="currentColor" /></span><span>Um pouco mais sobre meu olhar<small>Assista ao vídeo do Bruno <ArrowUpRight size={13} /></small></span></button></Reveal>
      </div>
    </section>
  );
}

function Immersive() {
  return (
    <section className="immersive-section" aria-labelledby="immersive-title">
      <div className="immersive-gradient" aria-hidden="true" /><div className="immersive-orbits" aria-hidden="true"><span /><span /><span /></div>
      <div className="immersive-top micro"><span>Há coisas que só existem entre dois.</span><ConnectionMark /></div>
      <Reveal className="immersive-content"><p className="eyebrow">O que podemos cuidar juntos</p><h2 id="immersive-title">A conversa.<br /><em>A intimidade.</em><br />O companheirismo.<br /><em>O nós.</em></h2><a className="button button-glass" href="#contato">Abrir espaço para o encontro <ArrowUpRight size={17} /></a></Reveal>
      <div className="immersive-bottom micro"><span>Não é voltar a ser como antes.</span><span>É descobrir o que pode existir agora.</span></div>
    </section>
  );
}

function Reflections() {
  return (
    <section className="reflections section-wrap">
      <SectionLabel number="04">Para levar com vocês</SectionLabel>
      <div className="reflections-head"><Reveal><p className="eyebrow">Pequenas pausas, outras perspectivas</p><h2>Uma boa conversa<br />pode começar com<br /><em>uma nova pergunta.</em></h2></Reveal><a className="text-link" href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer"><Instagram size={16} /> Acompanhe o Bruno <ArrowUpRight size={16} /></a></div>
      <div className="reflection-grid">{[
        ['Presença', 'Quando foi a última vez que vocês conversaram sem tentar resolver alguma coisa?', 'Existe vida na relação para além da lista de tarefas. Dar atenção ao outro também pode ser simplesmente ter curiosidade pelo seu dia.'],
        ['Escuta', 'O que você gostaria que o outro entendesse sobre como você se sente?', 'Às vezes, por trás de uma cobrança existe algo que ainda não encontrou uma forma de ser dito.'],
        ['Proximidade', 'Do que vocês sentem falta um no outro?', 'Reconhecer o que faz falta pode abrir uma conversa sobre o que ainda importa para vocês.'],
      ].map(([label, question, text], index) => <Reveal className="reflection-item" key={label} delay={index * 0.08}><span className="micro"><span>0{index + 1}</span>{label}</span><h3>{question}</h3><p>{text}</p><span className="reflection-flower" aria-hidden="true">✳</span></Reveal>)}</div>
      <p className="reflection-note">Perguntas para reflexão, inspiradas na proposta deste espaço.</p>
    </section>
  );
}

function Faq() {
  return (
    <section className="faq-section section-wrap" aria-labelledby="faq-title"><SectionLabel number="05">Antes de começar</SectionLabel><div className="faq-layout"><Reveal><p className="eyebrow">Dúvidas são bem-vindas</p><h2 id="faq-title">Um pouco de<br /><em>clareza ajuda.</em></h2><p>O primeiro passo pode vir acompanhado de perguntas. Aqui, elas também têm espaço.</p><ConnectionMark className="faq-mark" /></Reveal><div className="faq-list">{questions.map((item, index) => <details key={item.question}><summary><span className="faq-number micro">0{index + 1}</span><span>{item.question}</span><Plus size={18} /></summary><p>{item.answer}</p></details>)}</div></div></section>
  );
}

function Contact() {
  return (
    <section id="contato" className="contact-section">
      <div className="contact-glow" aria-hidden="true" />
      <div className="contact-top micro"><span>06 / Um começo possível</span><span>Vocês não precisam encontrar o caminho sozinhos.</span></div>
      <Reveal className="contact-content"><span className="eyebrow"><span className="live-dot" /> Toda conversa começa com um olá.</span><h2>Vamos abrir<br /><em>esse espaço?</em></h2><p>Se vocês reconheceram um pouco da própria história aqui,<br className="desktop-break" /> podemos conversar sobre o que estão vivendo.</p><a className="button button-cream" href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">Conversar com o Bruno <span className="button-icon"><ArrowUpRight size={19} /></span></a><span className="contact-channel"><Instagram size={13} /> pelo Instagram · @brunognakayama</span></Reveal>
      <div className="contact-bottom micro"><ConnectionMark /><span>Para cuidar do que existe<br />entre vocês dois.</span></div>
    </section>
  );
}

function Footer({ motionPaused, onToggleMotion }: { motionPaused: boolean; onToggleMotion: () => void }) {
  return <footer className="footer"><div className="footer-top"><Brand /><p>Um espaço de escuta.<br />Uma possibilidade de reencontro.</p><a className="footer-social" href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">Instagram <ArrowUpRight size={16} /></a></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Bruno Nakayma</span><span>Terapia de casais · Cada história é única.</span><button type="button" onClick={onToggleMotion} aria-pressed={motionPaused}>{motionPaused ? <Play size={12} /> : <Pause size={12} />}{motionPaused ? 'Retomar movimentos' : 'Pausar movimentos'}</button><a href="#inicio">Voltar ao início <ArrowRight size={13} /></a></div></footer>;
}

function VideoDialog({ open, onClose }: { open: boolean; onClose: () => void }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const video = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    if (open) { dialog.current?.showModal(); }
    else { dialog.current?.close(); video.current?.pause(); }
  }, [open]);
  return <dialog ref={dialog} className="video-dialog" aria-labelledby="video-title" onCancel={onClose} onClick={event => { if (event.target === dialog.current) onClose(); }}><div className="video-dialog-inner"><div className="video-dialog-heading"><h2 id="video-title">Um encontro com Bruno</h2><button type="button" autoFocus onClick={onClose} aria-label="Fechar vídeo"><X size={23} /></button></div><video ref={video} controls playsInline preload="none" poster="/images/bruno-nakayma.jpeg"><source src="/videos/bruno-atmosfera.mp4" type="video/mp4" />Seu navegador não reproduz este vídeo.</video><p>Bruno Nakayma · Terapia de casais</p></div></dialog>;
}
