import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  { 
    title: 'Online Gamezone Platform', 
    img: '/game.jpeg', 
    tech: ['React', 'MongoDB'], 
    link: 'https://github.com/your-repo/gamezone',
    description: 'A comprehensive gaming platform with user authentication and game management'
  },
  { 
    title: 'Obstacle Avoiding Robot', 
    img: '/project-robot.jpg', 
    tech: ['Arduino', 'Unity'], 
    link: 'https://github.com/your-repo/robot',
    description: 'AI-powered robot with obstacle detection and navigation capabilities'
  },
  { 
    title: 'Energy Delivery System', 
    img: '/project-energy.jpg', 
    tech: ['PHP', 'MySQL'], 
    link: 'https://github.com/your-repo/energy',
    description: 'Smart energy management system for efficient power distribution'
  },
  { 
    title: 'Disney+ Hotstar Clone', 
    img: '/project-disney.jpg', 
    tech: ['HTML', 'CSS', 'JavaScript'], 
    link: 'https://github.com/your-repo/disney-clone',
    description: 'Streaming platform clone with video player and user interface'
  },
  { 
    title: 'E-Commerce Dashboard', 
    img: '/project-dashboard.jpg', 
    tech: ['React', 'Node.js'], 
    link: 'https://github.com/your-repo/dashboard',
    description: 'Admin dashboard for managing products, orders, and analytics'
  },
  { 
    title: 'Weather App', 
    img: '/project-weather.jpg', 
    tech: ['React', 'API'], 
    link: 'https://github.com/your-repo/weather',
    description: 'Real-time weather application with location-based forecasts'
  }
];

function ProjectsShowcase({ id }) {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const containerRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    // Set initial states
    if (titleRef.current) gsap.set(titleRef.current, { opacity: 1, y: 0 });
    if (containerRef.current) gsap.set(containerRef.current, { opacity: 1 });

    // Animate title
    if (titleRef.current) {
      gsap.from(titleRef.current, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      });
    }

    // Horizontal scroll effect inspired by Anuj Magar's design
    if (trackRef.current) {
      const cards = trackRef.current.querySelectorAll('.project-card');
      gsap.set(cards, { opacity: 1, y: 0 });

      // Create horizontal scroll effect
      gsap.to(trackRef.current, {
        x: () => -(trackRef.current.scrollWidth - window.innerWidth),
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1,
          pin: true,
        },
      });

      // Animate individual cards
      cards.forEach((card, index) => {
        gsap.from(card, {
          y: 100,
          opacity: 0,
          duration: 0.8,
          ease: 'power2.out',
          delay: index * 0.1,
          scrollTrigger: {
            trigger: card,
            start: 'left right',
            end: 'right left',
            scrub: 1,
          },
        });
      });
    }
  }, []);

  return (
    <section ref={sectionRef} id={id} className="projects-showcase">
      <h2 ref={titleRef} className="section-title">Featured Work</h2>
      <div ref={containerRef} className="projects-container">
        <div ref={trackRef} className="projects-track">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <img src={project.img} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.link} target="_blank" rel="noreferrer" className="project-link">
                      View Project
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsShowcase;


