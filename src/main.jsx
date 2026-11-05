import React, { useEffect, useState } from 'react';
import '@fontsource/fredoka/500.css';
import '@fontsource/fredoka/600.css';
import '@fontsource/fredoka/700.css';
import '@fontsource/dm-sans/400.css';
import '@fontsource/dm-sans/500.css';
import '@fontsource/dm-sans/600.css';
import '@fontsource/dm-sans/700.css';
import { createRoot } from 'react-dom/client';
import { ArrowDown, ArrowRight, Menu, X, Instagram, Linkedin, Mail, Sparkles, BookOpen, Sprout, Users, Lightbulb, Handshake, Trophy } from 'lucide-react';
import './styles.css';

const links = [
  ['Who we are', '#about'],
  ['What we do', '#work'],
  ['Our values', '#values'],
  ['Community', '#community'],
];

const values = [
  { icon: BookOpen, title: 'Learn', copy: 'Stay curious. Build knowledge. Keep asking better questions.' },
  { icon: Sprout, title: 'Grow', copy: 'Make room for personal development and new perspectives.' },
  { icon: Trophy, title: 'Lead', copy: 'Turn initiative into positive action.' },
  { icon: Lightbulb, title: 'Innovate', copy: 'Explore ideas and find thoughtful ways forward.' },
  { icon: Handshake, title: 'Collaborate', copy: 'Make progress together, not alone.' },
  { icon: Sparkles, title: 'Excel', copy: 'Bring intention and care to the things that matter.' },
];

function Mark({ compact = false }) {
  return <a className={`brand ${compact ? 'brand-small' : ''}`} href="#home" aria-label="AkTIVE home">
    <span className="brand-symbol"><span></span><i></i></span>
    <span>Ak<span className="brand-k">T</span>IVE</span>
  </a>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [introDone, setIntroDone] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) setIntroDone(true);
    const timer = window.setTimeout(() => setIntroDone(true), 2600);
    return () => window.clearTimeout(timer);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return <div className={`site ${introDone ? 'intro-done' : ''}`}>
    <div className="intro-mark" aria-hidden="true">
      <div className="intro-word">
        {'AkTIVE'.split('').map((letter, index) => <span key={index} style={{ '--i': index }}>{letter}</span>)}
      </div>
      <div className="intro-orbit"></div>
      <div className="intro-person"><i></i><b></b></div>
      <div className="intro-star">✦</div>
    </div>

    <header className="nav-wrap">
      <nav className="nav container" aria-label="Main navigation">
        <Mark />
        <div className={`nav-links ${menuOpen ? 'nav-open' : ''}`}>
          {links.map(([label, href]) => <a key={href} href={href} onClick={closeMenu}>{label}</a>)}
          <a className="nav-cta" href="#get-involved" onClick={closeMenu}>Get involved <ArrowUpRight /></a>
        </div>
        <button className="menu-toggle" aria-label={menuOpen ? 'Close menu' : 'Open menu'} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X /> : <Menu />}
        </button>
      </nav>
    </header>

    <main>
      <section className="hero" id="home">
        <div className="hero-glow glow-one"></div><div className="hero-glow glow-two"></div>
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-dot"></span> THE AkTIVE TRIBE</div>
            <h1>Learn.<br/><span>Grow.</span> <em>Lead.</em></h1>
            <p className="hero-text">A community activating knowledge, building values, and growing into people who make a difference.</p>
            <div className="hero-actions">
              <a className="button button-dark" href="#get-involved">Find your place <ArrowRight size={18}/></a>
              <a className="text-link" href="#about">Get to know us <ArrowDown size={16}/></a>
            </div>
            <div className="hero-note"><span className="note-line"></span> Activate Knowledge to Influence Values & Excellence.</div>
          </div>
          <div className="hero-art" aria-label="Abstract illustration representing growth and community">
            <div className="art-sun"></div>
            <div className="art-ring ring-one"></div><div className="art-ring ring-two"></div>
            <div className="art-blob"></div>
            <div className="art-person person-one"><span className="head"></span><span className="body"></span><span className="arm"></span></div>
            <div className="art-person person-two"><span className="head"></span><span className="body"></span><span className="arm"></span></div>
            <div className="art-person person-three"><span className="head"></span><span className="body"></span><span className="arm"></span></div>
            <span className="art-star star-a">✦</span><span className="art-star star-b">✳</span>
            <span className="art-caption caption-top">GOOD THINGS GROW TOGETHER</span>
            <span className="art-caption caption-bottom">KNOWLEDGE IN MOTION ↗</span>
          </div>
        </div>
        <div className="hero-bottom container"><span>01 / A COMMUNITY IN MOTION</span><a href="#about">Scroll to explore <ArrowDown size={14}/></a></div>
      </section>

      <section className="intro-section section-pad" id="about">
        <div className="container intro-layout">
          <div className="section-kicker">01 — WHO WE ARE</div>
          <div className="intro-content">
            <h2>We believe becoming is something we do <span>together.</span></h2>
            <div className="intro-lower">
              <p>AkTIVE is a community built around the idea that knowledge should move beyond what we know and shape how we live, contribute, and lead.</p>
              <p className="small-note">Our story is still being written. This space will grow with the people, ideas, and work that make the community what it is.</p>
            </div>
          </div>
          <div className="intro-stamp"><span>AK</span><small>LEARN<br/>GROW<br/>LEAD</small></div>
        </div>
      </section>

      <section className="work-section section-pad" id="work">
        <div className="container">
          <div className="section-heading">
            <div><div className="section-kicker">02 — WHAT WE DO</div><h2>Ideas are a start.<br/><span>Action is the point.</span></h2></div>
            <p>We create room for learning, connection, and meaningful participation. More details about AkTIVE's programmes and initiatives will be added as they are confirmed.</p>
          </div>
          <div className="work-card">
            <div className="work-number">A / 01</div>
            <div className="work-card-main"><span className="pill">OUR APPROACH</span><h3>Knowledge that moves<br/>with you.</h3><p>Curiosity, shared experiences, and the willingness to put good ideas into practice.</p></div>
            <div className="work-graphic"><div className="graphic-circle"><span>↗</span></div><div className="graphic-orbit"></div><span className="graphic-star">✦</span></div>
          </div>
        </div>
      </section>

      <section className="values-section section-pad" id="values">
        <div className="container">
          <div className="values-top"><div><div className="section-kicker">03 — OUR VALUES</div><h2>Six ways to<br/><span>keep becoming.</span></h2></div><p>Not just words on a page. A compass for how we learn, show up, and move forward.</p></div>
          <div className="values-grid">
            {values.map(({icon: Icon, title, copy}, i) => <article className="value-card" key={title}><div className="value-top"><span>0{i+1}</span><Icon size={23} strokeWidth={1.7}/></div><h3>{title}</h3><p>{copy}</p></article>)}
          </div>
        </div>
      </section>

      <section className="community-section section-pad" id="community">
        <div className="container community-panel">
          <div className="community-copy"><div className="section-kicker">04 — OUR COMMUNITY</div><h2>There is room<br/>to <span>make a mark.</span></h2><p>Different perspectives. Shared curiosity. A community shaped by the people who take part in it.</p><a className="button button-light" href="#get-involved">Be part of the story <ArrowRight size={18}/></a></div>
          <div className="community-art"><div className="community-circle circle-large"></div><div className="community-circle circle-small"></div><div className="community-type">BETTER<br/>TOGETHER<span>✳</span></div><div className="community-orbit"></div></div>
        </div>
      </section>

      <section className="cta-section section-pad" id="get-involved">
        <div className="container cta-inner"><div className="section-kicker">05 — GET INVOLVED</div><h2>Bring your curiosity.<br/><span>Leave your mark.</span></h2><p>Want to learn more about AkTIVE or find a way to get involved?</p><a className="button button-dark" href="#community">Start a conversation <ArrowRight size={18}/></a><small>Contact details and community links will be updated when officially confirmed.</small></div>
        <div className="cta-spark spark-one">✦</div><div className="cta-spark spark-two">✳</div>
      </section>
    </main>

    <footer className="footer">
      <div className="container footer-main"><div><Mark compact/><p>Activate Knowledge to Influence<br/>Values & Excellence.</p></div><div className="footer-links"><span>EXPLORE</span>{links.map(([label, href]) => <a href={href} key={href}>{label}</a>)}</div><div className="footer-links"><span>CONNECT</span><a href="#get-involved">Get involved</a><a href="#get-involved">Get in touch</a></div></div>
      <div className="container footer-bottom"><span>© {new Date().getFullYear()} THE AkTIVE TRIBE</span><span>LEARN · GROW · LEAD</span><a href="#home">Back to top ↑</a></div>
    </footer>
  </div>;
}

function ArrowUpRight(){ return <ArrowRight size={16}/>; }

createRoot(document.getElementById('root')).render(<App />);