import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { name: 'HTML', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', color: '#E34F26' },
  { name: 'CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', color: '#1572B6' },
  { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', color: '#F7DF1E' },
  { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', color: '#61DAFB' },
  { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', color: '#47A248' },
  { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', color: '#339933' },
  { name: 'GSAP', logo: 'https://cdn.worldvectorlogo.com/logos/gsap-greensock.svg', color: '#88CE02' },
  { name: 'Anime.js', logo: 'https://animejs.com/documentation/assets/img/anime-mini-logo.svg', color: '#F35626' },
  { name: 'Expo', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/expo/expo-original.svg', color: '#000020' },
  { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', color: '#4479A1' },
  { name: 'Tailwind', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg', color: '#06B6D4' },
  { name: 'Bootstrap', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg', color: '#7952B3' },
  { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', color: '#F05032' },
  { name: 'Figma', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg', color: '#F24E1E' },
];

function SkillsMarquee({ id }) {
  const trackRef = useRef(null);
  const sectionRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    // Set initial states
    if (titleRef.current) {
      gsap.set(titleRef.current, { opacity: 1, y: 0 });
    }

    // Animate section title
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

    // Animate marquee track
    const el = trackRef.current;
    if (!el) return;
    
    // Set initial state for skill pills
    const skillPills = el.querySelectorAll('.skill-pill');
    gsap.set(skillPills, { opacity: 1, scale: 1 });
    
    const width = el.scrollWidth / 2;
    gsap.to(el, {
      x: -width,
      repeat: -1,
      duration: 25,
      ease: 'none',
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % -width),
      },
    });

    // Animate individual skill pills on scroll
    skillPills.forEach((pill, index) => {
      gsap.from(pill, {
        scale: 0.8,
        opacity: 0,
        duration: 0.6,
        ease: 'back.out(1.7)',
        delay: index * 0.05,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
      });
    });
  }, []);

  return (
    <section ref={sectionRef} id={id} className="skills">
      <h2 ref={titleRef} className="section-title">Tools I flow with</h2>
      <div className="marquee">
        <div ref={trackRef} className="marquee-track">
          {[...skills, ...skills].map((s, i) => (
            <div key={i} className="skill-pill">
              <div className="skill-icon">
                <img src={s.logo} alt={s.name} />
              </div>
              <span className="skill-name">{s.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsMarquee;


