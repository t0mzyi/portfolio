import { useEffect, useRef, useState } from 'react'
import { motion, type Variants } from 'framer-motion'
import './index.css'

import eventlyImg from './assets/evently.svg'
import smartadvisorImg from './assets/smartadvisor.svg'
import clipnicImg from './assets/clipnic.svg'
import dashboardImg from './assets/dashboard.svg'

interface Project {
  name: string;
  description: string;
  tech: string;
  url: string;
  displayUrl: string;
  thumbnail: string;
}

const projects: Project[] = [
  {
    name: "Evently",
    description: "Schedule and manage events",
    tech: "JS · NODE · CSS",
    url: "https://evently.jaideepdev.xyz",
    displayUrl: "evently.jaideepdev.xyz",
    thumbnail: eventlyImg
  },
  {
    name: "Smart Advisor Trans",
    description: "Transport advisory landing page",
    tech: "HTML · CSS · JS",
    url: "https://smartadvisortrans.com",
    displayUrl: "smartadvisortrans.com",
    thumbnail: smartadvisorImg
  },
  {
    name: "Clipnic",
    description: "Content clipping platform",
    tech: "REACT · NODE · CSS",
    url: "https://clipnic.com",
    displayUrl: "clipnic.com",
    thumbnail: clipnicImg
  },
  {
    name: "Clipnic Dashboard",
    description: "Automated YouTube analytics dashboard",
    tech: "REACT · NODE · NGINX",
    url: "https://dash.clipnic.com",
    displayUrl: "dash.clipnic.com",
    thumbnail: dashboardImg
  }
];

type DoodleType = 'circle' | 'squiggle' | 'sparkle' | 'underline' | 'walking-man' | 'eye' | 'worm' | 'blob';

function Doodle({ type, style }: { type: DoodleType, style?: React.CSSProperties }) {
  const variants: Variants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { 
      pathLength: 1, 
      opacity: 0.3,
      transition: { duration: 2, ease: "easeInOut" }
    }
  };

  if (type === 'walking-man') {
    return (
      <motion.div 
        className="doodle" 
        style={{ ...style, width: '60px', height: '100px' }}
        animate={{ x: [0, 100, 0], scaleX: [1, 1, -1, -1, 1] }}
        transition={{ x: { duration: 15, repeat: Infinity, ease: "linear" }, scaleX: { duration: 15, repeat: Infinity, times: [0, 0.45, 0.5, 0.95, 1] } }}
      >
        <svg viewBox="0 0 60 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="30" cy="20" r="10" stroke="currentColor" strokeWidth="2" />
          <line x1="30" y1="30" x2="30" y2="60" stroke="currentColor" strokeWidth="2" />
          <motion.line 
            x1={30} y1={40} x2={10} y2={50} 
            stroke="currentColor" strokeWidth="2" 
            animate={{ x2: [10, 50, 10], y2: [50, 40, 50] }}
            transition={{ duration: 0.5, repeat: Infinity }}
          />
          <motion.line 
            x1={30} y1={40} x2={50} y2={50} 
            stroke="currentColor" strokeWidth="2" 
            animate={{ x2: [50, 10, 50], y2: [50, 40, 50] }}
            transition={{ duration: 0.5, repeat: Infinity }}
          />
          <motion.line 
            x1={30} y1={60} x2={15} y2={90} 
            stroke="currentColor" strokeWidth="2" 
            animate={{ x2: [15, 45, 15], y2: [90, 80, 90] }}
            transition={{ duration: 0.5, repeat: Infinity }}
          />
          <motion.line 
            x1={30} y1={60} x2={45} y2={90} 
            stroke="currentColor" strokeWidth="2" 
            animate={{ x2: [45, 15, 45], y2: [90, 80, 90] }}
            transition={{ duration: 0.5, repeat: Infinity }}
          />
        </svg>
      </motion.div>
    );
  }

  if (type === 'eye') {
    return (
      <div className="doodle" style={{ ...style, width: '30px', height: '20px' }}>
        <svg viewBox="0 0 30 20" fill="none">
          <path d="M2 10 Q 15 0, 28 10 Q 15 20, 2 10" stroke="currentColor" strokeWidth="1.5" />
          <motion.circle 
            cx={15} cy={10} r={4} fill="currentColor" 
            animate={{ x: [-2, 2, -2], scaleY: [1, 0.1, 1] }}
            transition={{ 
              x: { duration: 3, repeat: Infinity, ease: "easeInOut" },
              scaleY: { duration: 0.2, repeat: Infinity, repeatDelay: 4 }
            }}
          />
        </svg>
      </div>
    );
  }

  if (type === 'worm') {
    return (
      <div className="doodle" style={{ ...style, width: '50px', height: '20px' }}>
        <svg viewBox="0 0 50 20" fill="none">
          <motion.path 
            d="M5 10 Q 15 5, 25 10 T 45 10" 
            stroke="currentColor" strokeWidth="2" strokeLinecap="round"
            animate={{ d: ["M5 10 Q 15 15, 25 10 T 45 10", "M5 10 Q 15 5, 25 10 T 45 10"] }}
            transition={{ duration: 1, repeat: Infinity, repeatType: "mirror" }}
          />
        </svg>
      </div>
    );
  }

  if (type === 'blob') {
    return (
      <div className="doodle" style={{ ...style, width: '40px', height: '40px' }}>
        <svg viewBox="0 0 40 40" fill="none">
          <motion.path 
            d="M20 5 C 30 5, 35 15, 35 20 C 35 30, 25 35, 20 35 C 10 35, 5 25, 5 20 C 5 10, 10 5, 20 5"
            stroke="currentColor" strokeWidth="1.5"
            animate={{ 
              d: [
                "M20 5 C 32 8, 38 12, 35 22 C 32 32, 28 38, 18 35 C 8 32, 2 22, 5 18 C 8 8, 12 2, 20 5",
                "M20 5 C 28 2, 32 8, 35 18 C 38 28, 32 38, 22 35 C 12 32, 8 28, 5 22 C 2 12, 8 8, 20 5"
              ] 
            }}
            transition={{ duration: 4, repeat: Infinity, repeatType: "mirror" }}
          />
        </svg>
      </div>
    );
  }

  return (
    <div className="doodle" style={style}>
      <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        {type === 'circle' && (
          <motion.path
            d="M50 10 C 20 10, 10 30, 10 50 C 10 70, 30 90, 50 90 C 70 90, 90 70, 90 50 C 90 30, 70 10, 52 11"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            variants={variants}
            initial="hidden"
            whileInView="visible"
          />
        )}
        {type === 'squiggle' && (
          <motion.path
            d="M10 50 Q 25 20, 40 50 T 70 50 T 90 50"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            variants={variants}
            initial="hidden"
            whileInView="visible"
          />
        )}
        {type === 'sparkle' && (
          <motion.path
            d="M50 10 L 50 90 M 10 50 L 90 50 M 20 20 L 80 80 M 80 20 L 20 80"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            variants={variants}
            initial="hidden"
            whileInView="visible"
          />
        )}
        {type === 'underline' && (
          <motion.path
            d="M10 80 C 30 75, 70 85, 90 80"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            variants={variants}
            initial="hidden"
            whileInView="visible"
          />
        )}
      </svg>
    </div>
  );
}

function RevealSection({ children, id, className = "" }: { children: React.ReactNode, id: string, className?: string }) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (id === 'hero') {
      const childrenToReveal = ref.current?.querySelectorAll('.reveal');
      childrenToReveal?.forEach(child => child.classList.add('visible'));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.05 });

    if (ref.current) {
      const childrenToReveal = ref.current.querySelectorAll('.reveal');
      childrenToReveal.forEach(child => observer.observe(child));
    }

    return () => observer.disconnect();
  }, [id]);

  return (
    <section id={id} ref={ref} className={className}>
      {children}
    </section>
  );
}

function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(true); // Default to true, disable unless pointer fine detected

  useEffect(() => {
    const mediaQuery = window.matchMedia('(pointer: coarse)');
    setIsMobile(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' || target.closest('.project-row') || target.tagName === 'BUTTON' || target.closest('button')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    if (!mediaQuery.matches) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseover', handleMouseOver);
    }

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  if (isMobile) return null;

  return (
    <div 
      className={`custom-cursor ${isHovering ? 'hover' : ''}`}
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    />
  );
}

function ProjectRow({ project }: { project: Project }) {
  return (
    <div className="project-row reveal">
      <div className="project-thumbnail">
        <img src={project.thumbnail} alt={project.name} loading="lazy" />
      </div>
      <span className="project-name">{project.name}</span>
      <span className="project-tech-meta">{project.tech}</span>
      <span className="project-desc-short">{project.description}</span>
      <a href={project.url} target="_blank" rel="noopener noreferrer" className="project-url-link">
        {project.displayUrl} ↗
      </a>
    </div>
  );
}

function App() {
  return (
    <>
      <CustomCursor />
      <div className="bg-gradient" />
      
      <header className="navbar">
        <div className="navbar-container">
          <a href="#hero" className="navbar-logo mono-tiny">JAIDEEP</a>
          <nav className="navbar-links">
            <a href="#hero">Hero</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#journey">Journey</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <RevealSection id="hero">
          <Doodle type="eye" style={{ position: 'absolute', top: '15%', left: '10%' }} />
          <Doodle type="worm" style={{ position: 'absolute', top: '35%', right: '15%', transform: 'rotate(-10deg)' }} />
          
          <div className="hero-top">
            <div style={{ position: 'relative', display: 'inline-block' }}>
              <h1 className="reveal">jaideepdev</h1>
              <Doodle type="circle" style={{ position: 'absolute', top: '-20%', left: '-5%', width: '110%', height: '140%', pointerEvents: 'none' }} />
            </div>
            <p className="hero-desc reveal stagger-1">Developer. Freelancer. Fresher.</p>
            <p className="hero-sub-meta reveal stagger-2 mono-tiny" style={{ marginTop: '0.5rem', opacity: 0.5 }}>
              BUILDING CLEAN FUNCTIONAL REAL THINGS FOR THE WEB
            </p>
          </div>

          <div className="reveal stagger-3 hero-about-me">
            <div className="label-tiny" style={{ marginBottom: '0.5rem', opacity: 0.4 }}>Status</div>
            <p style={{ fontSize: '16px', fontStyle: 'italic', lineHeight: '1.4', marginBottom: '1.5rem' }}>
              Open for interesting collaborations. Currently diving deep into modern stacks and experimental UI patterns.
            </p>
            <div className="label-tiny" style={{ marginBottom: '0.5rem', opacity: 0.4 }}>About Me</div>
            <p style={{ fontSize: '14px', lineHeight: '1.5', opacity: 0.7, marginBottom: '1.5rem' }}>
              Freelance developer from Kerala. I focus on bridging the gap between design and high-performance code. Always exploring, always building.
            </p>
            <a href="https://drive.google.com/file/d/1aBFF-yJ1v8WPN-evsLxmXygnsi3rDFk8/view?usp=sharing" target="_blank" className="resume-link mono-tiny">VIEW RESUME ↗</a>
            <Doodle type="walking-man" style={{ position: 'absolute', top: '-100px', left: '-20px', opacity: 0.2, scale: 0.7 }} />
          </div>
          
          <Doodle type="sparkle" style={{ position: 'absolute', top: '25%', right: '10%', width: '40px', height: '40px' }} />
          <div className="hero-bottom reveal stagger-4">
            <div className="blinking-arrow">↓</div>
          </div>
        </RevealSection>

        <RevealSection id="about">
          <Doodle type="blob" style={{ position: 'absolute', top: '20%', right: '5%', opacity: 0.2 }} />
          <div style={{ position: 'relative' }}>
            <p className="reveal">
              I build things for the web clean, functional, real. Currently freelancing while studying new stacks and figuring out what's next. I like working with people, picking up new tools fast, and occasionally pointing a camera at something interesting.
            </p>
            <Doodle type="squiggle" style={{ position: 'absolute', bottom: '-40px', left: '0', width: '100px', height: '40px' }} />
          </div>
          <div className="section-line reveal stagger-1"></div>
          <div className="skill-list reveal stagger-2 mono-tiny">
            JS · PYTHON · NODE · HTML · CSS · NGINX · PLAYWRIGHT · REACT · MONGODB · GIT · DOCKER · FIGMA
          </div>
          <Doodle type="worm" style={{ position: 'absolute', bottom: '10%', right: '20%' }} />
        </RevealSection>

        <RevealSection id="projects">
          <div className="label-tiny reveal">SELECTED WORK</div>
          <div className="projects-container">
            {projects.map((project, i) => (
              <ProjectRow key={i} project={project} />
            ))}
          </div>
          <Doodle type="sparkle" style={{ position: 'absolute', bottom: '10%', right: '5%', width: '60px', height: '60px' }} />
        </RevealSection>

        <RevealSection id="journey">
          <div className="label-tiny reveal">JOURNEY</div>
          <div className="timeline-container" style={{ position: 'relative' }}>
            <div className="timeline-row-v2 reveal stagger-1">
              <div className="timeline-year">2025</div>
              <div className="timeline-desc">Academic Graduation · Began full-time full-stack engineering & freelance projects</div>
            </div>
            <div className="timeline-row-v2 reveal stagger-2">
              <div className="timeline-year">2025 · 2026</div>
              <div className="timeline-desc">Freelancing · building real products for real clients</div>
            </div>
            <div className="timeline-row-v2 reveal stagger-3">
              <div className="timeline-year">Ongoing</div>
              <div className="timeline-desc">Exploring new stacks, frameworks, tools · always</div>
            </div>
            <Doodle type="walking-man" style={{ position: 'absolute', bottom: '-20px', right: '10%' }} />
          </div>
        </RevealSection>

        <RevealSection id="beyond-code">
          <div style={{ position: 'relative', display: 'inline-block', width: '100%' }}>
            <p className="reveal beyond-code-text">
              Beyond the screen, I capture the world through a lens. I’m fascinated by visual storytelling, experimenting with cinematography, composition, and grading to freeze moments in time. Pointing a camera at the ordinary and making it cinematic is how I recharge and keep my creative instincts sharp.
            </p>
            <Doodle type="underline" style={{ position: 'absolute', bottom: '-10px', left: '25%', width: '50%', height: '30px' }} />
          </div>
        </RevealSection>

        <RevealSection id="contact">
          <div className="contact-grid">
            <div className="contact-info">
              <div style={{ position: 'relative' }}>
                <h2 className="reveal">LET'S BUILD SOMETHING</h2>
                <Doodle type="squiggle" style={{ position: 'absolute', top: '-30px', right: '0', width: '80px', height: '30px', transform: 'rotate(15deg)' }} />
              </div>
              <div className="contact-links-container">
                <div className="contact-email reveal stagger-1">
                  <a href="mailto:hi@jaideep.xyz">hi@jaideep.xyz</a>
                </div>
                <div className="social-links reveal stagger-2">
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            <form className="contact-form reveal stagger-3" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <input type="text" id="name" required placeholder="Name" />
              </div>
              <div className="form-group">
                <input type="email" id="email-field" required placeholder="Email" />
              </div>
              <div className="form-group">
                <textarea id="message" required rows={4} placeholder="Message"></textarea>
              </div>
              <button type="submit" className="submit-btn mono-tiny">SEND MESSAGE ↗</button>
            </form>
          </div>

          <Doodle type="walking-man" style={{ position: 'absolute', bottom: '0', left: '10%', opacity: 0.2 }} />
          <Doodle type="worm" style={{ position: 'absolute', bottom: '15%', right: '15%' }} />
        </RevealSection>
      </main>
    </>
  )
}

export default App

