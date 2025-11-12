function Projects() {
    return (
      <section>
        <h2>Personal Projects</h2>
        <div className="card">
          <h3>Online Gamezone Platform (React)</h3>
          <p>April 2025</p>
          <p>Technologies: HTML-CSS, Bootstrap, React, JavaScript, MongoDB</p>
          <p>Description: Developed a full-stack online gaming platform...</p>
          <img src="/project-gamezone.jpg" alt="Gamezone" style={{ width: '100%' }} />
          <a href="https://github.com/your-repo/gamezone" target="_blank">View Project</a> {/* Replace with real link */}
        </div>
        <div className="card">
          <h3>Obstacle Avoiding Robot With Brain Interface</h3>
          <p>April 2024</p>
          <p>Technologies: Arduino, C#, Unity, NextMind SDK, EEG Sensor</p>
          <p>Description: Developed an obstacle-avoiding robotic vehicle...</p>
          <img src="/project-robot.jpg" alt="Robot" style={{ width: '100%' }} />
          <a href="https://github.com/your-repo/robot" target="_blank">View Project</a>
        </div>
        <div className="card">
          <h3>Online Electrical Energy Delivery System</h3>
          <p>April 2023</p>
          <p>Technologies: JavaScript, Html, Php, CSS, MySQL</p>
          <p>Description: Designed and developed a comprehensive...</p>
          <img src="/project-energy.jpg" alt="Energy System" style={{ width: '100%' }} />
          <a href="https://github.com/your-repo/energy" target="_blank">View Project</a>
        </div>
        <div className="card">
          <h3>Disney+ Hotstar Clone using HTML and CSS</h3>
          <p>June 2022</p>
          <p>Technologies: HTML, CSS, JavaScript</p>
          <p>Description: Created Disney+ Hotstar frontend...</p>
          <img src="/project-disney.jpg" alt="Disney Clone" style={{ width: '100%' }} />
          <a href="https://github.com/your-repo/disney-clone" target="_blank">View Project</a>
        </div>
      </section>
    );
  }
  
  export default Projects;