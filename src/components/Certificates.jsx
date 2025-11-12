import { FaAward, FaExternalLinkAlt } from 'react-icons/fa';

function Certificates() {
  const certificatesData = [
    {
      title: 'ICCIDT Conference',
      provider: '6th ICCIDT Conference',
      date: '2024',
      description: 'Presented final-year project at 6th International Conference on Computational Intelligence and Data Technology.',
      link: 'https://drive.google.com/drive/folders/1LRuaUUICAkhI2eY--Xt7INXqWXHVrzel',
    },
    {
      title: 'JavaScript Certification',
      provider: 'Udemy',
      date: 'August 2023',
      description: 'Earned a comprehensive certification in JavaScript covering DOM manipulation, ES6+ features, and modern web development practices.',
      link: 'https://drive.google.com/drive/folders/1paeDkunmOmXbowEoTab85_WX9rHdujid?usp=drive_link',
    },
    {
      title: 'Google Data Analytics',
      provider: 'Google',
      date: 'May 2023',
      description: 'Professional certificate in data analytics covering data collection, analysis, and visualization techniques.',
      link: 'https://drive.google.com/drive/folders/1nDKHuhPxcNijRoxMXIuavFVlxwWDcp3m',
    },
    {
      title: 'NESTSOFT Internship',
      provider: 'NESTSOFT',
      date: 'May 2023',
      description: 'Training in Front End Development covering HTML, CSS, and Bootstrap for responsive web design.',
      link: 'https://drive.google.com/drive/folders/1KERru90y20ITe4MmNQt9Ql3narsOEf6l',
    },
    {
      title: 'Disney+ Hotstar Clone Bootcamp',
      provider: 'Bootcamp',
      date: '2023',
      description: 'Completed intensive bootcamp focused on building a full-stack Disney+ Hotstar clone application.',
      link: 'https://drive.google.com/drive/folders/1MN-mNHupbYDPPlidhb7WVq2RYvbK5ZC5',
    },
  ];

  return (
    <section id="certificates">
      <div className="section-container">
        <h2 className="section-title">Certificates & Achievements</h2>
        
        <div className="certificates-grid">
          {certificatesData.map((cert, index) => (
            <div key={index} className="certificate-card">
              <div className="certificate-icon">
                <FaAward />
              </div>
              
              <div className="certificate-content">
                <h3 className="certificate-title">{cert.title}</h3>
                <p className="certificate-provider">{cert.provider}</p>
                <p className="certificate-date">{cert.date}</p>
                <p className="certificate-description">{cert.description}</p>
                
                <a 
                  href={cert.link} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="certificate-link"
                >
                  <FaExternalLinkAlt />
                  View Certificate
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certificates;