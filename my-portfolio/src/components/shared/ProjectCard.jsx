// 1. Import 'Link' from react-router-dom
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';
import './ProjectCard.css';

function ProjectCard({ project }) {
  return (
    // 2. Wrap your ENTIRE card in a <Link> component.
    // We're using the 'project.id' from your data file
    // to build the correct URL (e.g., "/project/healthtech-redesign")
    <Link to={`/project/${project.id}`} className="project-card-link">
      <article className="project-card">
        
        {/* All your existing card content goes inside the link */}
        <div className="project-card-content">
          <div className="glass-badge">{project.badge}</div>
          <h2 className="project-card-title">{project.title}</h2>
          {/* ... all your other content ... */}
          <div className="project-card-stats">
            {project.stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <span className="stat-label">{stat.label}</span>
                <span className={`stat-value ${stat.direction === 'up' ? 'positive' : 'negative'}`}>
                  {stat.direction === 'up' ? <ArrowUpRight size="1em" /> : <ArrowDownRight size="1em" />}
                  {stat.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="project-card-image">
          <img src={project.image} alt={project.title} />
        </div>
      </article>
    </Link>
  );
}

export default ProjectCard;