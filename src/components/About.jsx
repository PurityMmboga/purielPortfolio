import React from 'react';

function About() {
  const skills = [
    'React', 'JavaScript', 'Node.js', 'Python', 
    'MongoDB', 'Git', 'HTML5', 'CSS3', 
    'Express', 'REST APIs', 'Tailwind CSS', 'Figma'
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Hi! I'm Puriel, a passionate Full Stack Developer with a love for creating 
              beautiful and functional web applications. I enjoy solving complex problems 
              and turning ideas into reality through code.
            </p>
            <p>
              With a strong foundation in both frontend and backend technologies, 
              I strive to build seamless user experiences that make a difference. 
              I'm constantly learning and exploring new technologies to improve my skills.
            </p>
            <div className="skills">
              <h3>Skills & Technologies</h3>
              <div className="skill-tags">
                {skills.map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;