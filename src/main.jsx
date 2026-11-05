import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Sun, Moon, Menu, X } from 'lucide-react';
import '@fontsource/fredoka/500.css';
import '@fontsource/fredoka/600.css';
import '@fontsource/dm-sans/400.css';
import '@fontsource/dm-sans/500.css';
import '@fontsource/dm-sans/600.css';
import '@fontsource/dm-sans/700.css';
import './styles.css';

const navItems = [
  ['Home', '#home'],
  ['About', '#about'],
  ['What we do', '#work'],
  ['Contact', '#contact']
];

function Brand() {
  return <a className="brand" href="#home" aria-label="AkTIVE home">
    <span className="brand-mark" aria-hidden="true">
      <svg viewBox="0 0 48 48" role="img">
        <path className="mark-arc" d="M7 34 C10 12 31 4 41 17" />
        <path className="mark-person" d="M24 17 L24 32 M24 21 L15 13 M24 22 L33 13 M24 32 L17 40 M24 32 L32 40" />
        <path className="mark-star" d="M36 4 L38 10 L44 12 L38 14 L36 20 L34 14 L28 12 L34 10 Z" />
      </svg>
    </span>
    <span>AkTIVE</span>
  </a>;
}

function App() {
  const [dark, setDark] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });
  const [menuOpen, setMenuOpen] = useState(false);
  const [introDone, setIntroDone] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  });

  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const updateTheme = event => setDark(event.matches);
    media.addEventListener?.('change', updateTheme);
    return () => media.removeEventListener?.('change', updateTheme);
  }, []);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const timer = window.setTimeout(() => setIntroDone(true), 2600);
    return () => window.clearTimeout(timer);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return <div className={`site ${dark ? 'theme-dark' : 'theme-light'} ${introDone ? 'intro-done' : ''}`}>
    {!introDone && <div className="intro" aria-hidden="true">
      <div className="intro-word">{'AkTIVE'.split('').map((letter, index) => <span key={index} style={{ '--i': index }}>{letter}</span>)}</div>
      <div className="intro-figure">
        <i className="figure-head" />
        <i className="figure-body" />
        <i className="figure-arm" />
      </div>
      <span className="intro-star">✦</span>
      <span className="intro-orbit" />
    </div>}

    <header className="site-header">
      <nav className="nav container" aria-label="Main navigation">
        <Brand />
        <div className={`nav-links ${menuOpen ? 'nav-open' : ''}`}>
          {navItems.map(([label, href]) => <a key={href} href={href} onClick={closeMenu}>{label}</a>)}
        </div>
        <div className="nav-actions">
          <button className="theme-toggle" type="button" onClick={() => setDark(value => !value)} aria-label={dark ? 'Switch to light theme' : 'Switch to dark theme'} title={dark ? 'Light theme' : 'Dark theme'}>
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button className="menu-toggle" type="button" onClick={() => setMenuOpen(value => !value)} aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}>
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </nav>
    </header>

    <main>
      <section className="hero" id="home">
        <div className="container hero-inner">
          <p className="eyebrow">THE AkTIVE TRIBE</p>
          <h1 className="hero-title">Learn<span>.</span> Grow<span>.</span><br />Lead<span>.</span></h1>
          <p className="hero-copy">A community activating knowledge, building values, and growing into people who make a difference.</p>
          <a className="button button-primary" href="#about">Get to know us</a>
          <p className="hero-tagline">Activate Knowledge to Influence Values &amp; Excellence.</p>
        </div>
        <div className="hero-index" aria-hidden="true">LEARN · GROW · LEAD</div>
      </section>

      <section className="about section" id="about">
        <div className="container narrow">
          <p className="section-label">01 / ABOUT</p>
          <h2>Becoming is something<br />we do <span>together.</span></h2>
          <p className="section-copy">AkTIVE is a community built on the belief that knowledge should move beyond what we know and shape how we live, contribute, and lead.</p>
          <div className="principles">
            <span>Curiosity</span><span>Character</span><span>Growth</span><span>Contribution</span>
          </div>
        </div>
      </section>

      <section className="work section" id="work">
        <div className="container work-layout">
          <div>
            <p className="section-label">02 / WHAT WE DO</p>
            <h2>Ideas are a start.<br /><span>Action is the point.</span></h2>
          </div>
          <div className="work-copy">
            <p>We create room for learning, connection, and meaningful participation.</p>
            <p>Through shared experiences and community-led initiatives, members are encouraged to turn what they learn into thoughtful action.</p>
          </div>
        </div>
      </section>

      <section className="contact section" id="contact">
        <div className="container contact-inner">
          <p className="section-label">03 / GET INVOLVED</p>
          <h2>There is room<br />to <span>make a mark.</span></h2>
          <p>Bring your curiosity. Find your people. Grow with the Tribe.</p>
          <span className="button button-muted" aria-disabled="true">Join the Tribe</span>
          <small>The community interest link will be added here when it is ready.</small>
        </div>
      </section>
    </main>

    <footer className="footer">
      <div className="container footer-inner">
        <Brand />
        <span>Activate Knowledge to Influence Values &amp; Excellence.</span>
        <a href="#home">Back to top</a>
      </div>
      <div className="container footer-bottom">© {new Date().getFullYear()} THE AkTIVE TRIBE</div>
    </footer>
  </div>;
}

createRoot(document.getElementById('root')).render(<App />);
