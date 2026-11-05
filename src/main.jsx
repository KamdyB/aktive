import React, { useEffect, useState } from 'react';
import '@fontsource/fredoka/500.css';
import '@fontsource/fredoka/600.css';
import '@fontsource/fredoka/700.css';
import '@fontsource/dm-sans/400.css';
import '@fontsource/dm-sans/500.css';
import '@fontsource/dm-sans/600.css';
import '@fontsource/dm-sans/700.css';
import { createRoot } from 'react-dom/client';
import { Menu, X, Sun, Moon } from 'lucide-react';
import './styles.css';

const navItems = [
  ['Home', '#home'],
  ['About', '#about'],
  ['What we do', '#what-we-do'],
  ['Values', '#values'],
  ['Contact', '#contact']
];

function BrandMark({ intro = false }) {
  return <span className={intro ? 'brand-mark brand-mark-intro' : 'brand-mark'} aria-hidden="true">A</span>;
}

function Brand() {
  return <a className="brand" href="#home" aria-label="AkTIVE home"><BrandMark /><span>AkTIVE</span></a>;
}

function App() {
  const [dark, setDark] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });
  const [menuOpen, setMenuOpen] = useState(false);
  const [introDone, setIntroDone] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) { setIntroDone(true); return; }
    const timer = window.setTimeout(() => setIntroDone(true), 2400);
    return () => window.clearTimeout(timer);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className={`site ${dark ? 'theme-dark' : 'theme-light'} ${introDone ? 'intro-done' : ''}`}>
      <div className="intro-screen" aria-hidden="true">
        <div className="intro-lockup">
          <div className="intro-letters">
            {'AkTIVE'.split('').map((letter, index) => <span key={index} style={{ '--i': index }}>{letter}</span>)}
          </div>
          <div className="intro-mark-wrap"><BrandMark intro /></div>
        </div>
        <p className="intro-tagline">LEARN · GROW · LEAD</p>
      </div>

      <header className="site-header">
        <nav className="nav container" aria-label="Main navigation">
          <Brand />
          <div className={`nav-links ${menuOpen ? 'nav-open' : ''}`}>
            {navItems.map(([label, href]) => (
              <a href={href} key={href} onClick={closeMenu}>{label}</a>
            ))}
          </div>
          <div className="nav-actions">
            <button className="theme-toggle" onClick={() => setDark(value => !value)}
              aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
              title={dark ? 'Light mode' : 'Dark mode'}>
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button className="menu-toggle" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
              aria-expanded={menuOpen} onClick={() => setMenuOpen(value => !value)}>
              {menuOpen ? <X size={21} /> : <Menu size={21} />}
            </button>
          </div>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="container hero-inner">
            <div className="hero-brand"><Brand /></div>
            <p className="eyebrow">THE AkTIVE TRIBE</p>
            <h1>Learn with purpose.<br /><span>Grow with people.</span></h1>
            <p className="hero-copy">A community activating knowledge, building values, and growing into people who make a difference.</p>
            <a className="button button-primary" href="#about">Discover AkTIVE</a>
            <p className="hero-motto">Activate Knowledge to Influence Values &amp; Excellence.</p>
          </div>
        </section>

        <section className="section about-section" id="about">
          <div className="container narrow">
            <p className="eyebrow">WHO WE ARE</p>
            <h2>Becoming is something we do <span>together.</span></h2>
            <p className="section-copy">AkTIVE is a community built around the idea that knowledge should move beyond what we know and shape how we live, contribute, and lead.</p>
          </div>
        </section>

        <section className="section work-section" id="what-we-do">
          <div className="container work-layout">
            <div>
              <p className="eyebrow">WHAT WE DO</p>
              <h2>Ideas are a start.<br /><span>Action is the point.</span></h2>
            </div>
            <p className="section-copy">We create room for learning, connection, and meaningful participation. Through shared experiences and practical initiatives, members can turn curiosity into positive action.</p>
          </div>
        </section>

        <section className="section values-section" id="values">
          <div className="container">
            <p className="eyebrow">OUR VALUES</p>
            <h2>Learn. Grow. Lead.</h2>
            <div className="values-grid">
              <article><span>01</span><h3>Learn</h3><p>Stay curious. Build knowledge. Keep asking better questions.</p></article>
              <article><span>02</span><h3>Grow</h3><p>Make room for development, reflection, and new perspectives.</p></article>
              <article><span>03</span><h3>Lead</h3><p>Turn initiative into thoughtful, positive action.</p></article>
            </div>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="container contact-inner">
            <p className="eyebrow">GET INVOLVED</p>
            <h2>There is room to <span>make a mark.</span></h2>
            <p className="section-copy">Bring your curiosity. Find your people. Be part of the Tribe.</p>
            <span className="button button-disabled" aria-disabled="true">Join the Tribe</span>
            <small>The community interest link will appear here when it is ready.</small>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <Brand />
          <p>Activate Knowledge to Influence Values &amp; Excellence.</p>
          <span>© {new Date().getFullYear()} THE AkTIVE TRIBE</span>
        </div>
      </footer>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
