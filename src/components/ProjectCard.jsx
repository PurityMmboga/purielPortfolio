import React from 'react';

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div className="project-image">
        <img 
          src={project.image} 
          alt={project.title}
          onError={(e) => {
            e.target.onerror = null;
            e.target.style.display = 'none';
            e.target.parentElement.style.background = 'linear-gradient(135deg, #667eea, #764ba2)';
            e.target.parentElement.style.display = 'flex';
            e.target.parentElement.style.alignItems = 'center';
            e.target.parentElement.style.justifyContent = 'center';
            e.target.parentElement.innerHTML = '<span style="color: white; font-size: 24px;">' + project.title + '</span>';
          }}
        />
      </div>
      <div className="project-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-tech">
          {project.technologies.map((tech, index) => (
            <span key={index} className="tech-tag">{tech}</span>
          ))}
        </div>
        <div className="project-links">
          <a 
            href={project.githubLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-small"
          >
            GitHub
          </a>
          <a 
            href={project.liveLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-small"
          >
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;