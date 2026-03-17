import React from 'react';
// Fixed import path - note the '../' at the beginning
import heroImage from '../assets/images/Snapchat-71918223.jpg'; 

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-text">
          <h1>
            Hi, I'm <span className="highlight">Puriel</span>
          </h1>
          <h2>Software Developer</h2>
          <p>
            I build exceptional digital experiences that make a difference. 
            Passionate about creating beautiful and functional web applications.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              View My Work
            </a>
            <a href="#contact" className="btn btn-secondary">
              Get In Touch
            </a>
          </div>
        </div>
        <div className="hero-image">
          <img src={heroImage} alt="Puriel - Software Developer" />
        </div>
      </div>
    </section>
  );
}

export default Hero;