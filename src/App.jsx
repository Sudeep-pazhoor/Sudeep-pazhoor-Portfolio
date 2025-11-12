import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Works from './components/Works';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import { FaGithub, FaLinkedin, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    // Smooth scroll reveal animations for sections
    gsap.utils.toArray('section').forEach((section, index) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 75%',
            toggleActions: 'play none none none',
          },
        }
      );
    });

    // Animate cards with stagger
    gsap.utils.toArray('.skill-item, .education-card, .work-card, .certificate-card').forEach((card) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: 'back.out(1.2)',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    });

    // Parallax effect for section titles
    gsap.utils.toArray('.section-title').forEach((title) => {
      gsap.fromTo(
        title,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: title,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    });

    // Update active section on scroll
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'education', 'works', 'certificates', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }

      // Nav background on scroll
      if (navRef.current) {
        if (window.scrollY > 50) {
          navRef.current.classList.add('scrolled');
        } else {
          navRef.current.classList.remove('scrolled');
        }
      }

      // Update scroll progress
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (window.scrollY / windowHeight) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth',
      });
      // Close mobile menu after navigation
      setIsMobileMenuOpen(false);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="app">
      {/* Navigation */}
      <nav ref={navRef} className="navbar">
        {/* Scroll Progress Bar */}
        <div className="scroll-progress-bar" style={{ width: `${scrollProgress}%` }}></div>
        
        <div className="nav-container">
          <div className="nav-brand" onClick={() => scrollToSection('home')}>
            Sudeep<span className="brand-accent"> P S</span>
          </div>

          {/* Hamburger Menu Button (Mobile Only) */}
          <button 
            className="mobile-menu-toggle" 
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
          
          {/* Navigation Menu */}
          <ul className={`nav-menu ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
            <li>
              <button
                className={activeSection === 'home' ? 'active' : ''}
                onClick={() => scrollToSection('home')}
              >
                Home
              </button>
            </li>
            <li>
              <button
                className={activeSection === 'about' ? 'active' : ''}
                onClick={() => scrollToSection('about')}
              >
                About
              </button>
            </li>
            <li>
              <button
                className={activeSection === 'experience' ? 'active' : ''}
                onClick={() => scrollToSection('experience')}
              >
                Experience
              </button>
            </li>
            <li>
              <button
                className={activeSection === 'education' ? 'active' : ''}
                onClick={() => scrollToSection('education')}
              >
                Education
              </button>
            </li>
            <li>
              <button
                className={activeSection === 'works' ? 'active' : ''}
                onClick={() => scrollToSection('works')}
              >
                Works
              </button>
            </li>
            <li>
              <button
                className={activeSection === 'certificates' ? 'active' : ''}
                onClick={() => scrollToSection('certificates')}
              >
                Certificates
              </button>
            </li>
            <li>
              <button
                className={activeSection === 'contact' ? 'active' : ''}
                onClick={() => scrollToSection('contact')}
              >
                Contact
              </button>
            </li>

            {/* Mobile Social Links */}
            <li className="mobile-social">
              <a href="https://github.com/Sudeep-pazhoor" target="_blank" rel="noreferrer" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/sudeep-pazhoor" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="mailto:sudeeppazhoor@gmail.com" aria-label="Email">
                <FaEnvelope />
              </a>
            </li>
          </ul>

          {/* Desktop Social Links */}
          <div className="nav-social desktop-social">
            <a href="https://github.com/Sudeep-pazhoor" target="_blank" rel="noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/sudeep-pazhoor" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="mailto:sudeeppazhoor@gmail.com" aria-label="Email">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="mobile-menu-overlay" 
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}

      {/* Main Content */}
      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Works />
        <Certificates />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 Sudeep P S. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
