import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const roles = [
  { company: 'FACEIN TECHNOLOGIES', title: 'Software Developer', time: 'Apr 2025 - Present' },
  { company: 'Luminar Technolab', title: 'ME(A)RN Stack Intern', time: 'Oct 2024 - Present' },
  { company: 'Nestsoft', title: 'Frontend Intern', time: 'May 2023' },
];

function ExperienceTimeline({ id }) {
  const lineRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    if (lineRef.current) {
      gsap.from(lineRef.current, {
        scaleY: 0,
        transformOrigin: 'top',
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: { trigger: lineRef.current, start: 'top 80%' },
      });
    }
    itemsRef.current.forEach((el, i) => {
      if (!el) return;
      gsap.from(el, {
        x: i % 2 === 0 ? -60 : 60,
        opacity: 0,
        duration: 0.7,
        ease: 'power2.out',
        scrollTrigger: { trigger: el, start: 'top 85%' },
      });
    });
  }, []);

  return (
    <section id={id} className="timeline">
      <h2 className="section-title">Journey</h2>
      <div className="timeline-wrap">
        <div ref={lineRef} className="timeline-line" />
        {roles.map((r, i) => (
          <div
            key={i}
            ref={(el) => (itemsRef.current[i] = el)}
            className={`timeline-item ${i % 2 === 0 ? 'left' : 'right'}`}
          >
            <div className="bubble">
              <h3>{r.title}</h3>
              <p>{r.company}</p>
              <span className="time">{r.time}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ExperienceTimeline;


