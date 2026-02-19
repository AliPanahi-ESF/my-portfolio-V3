// 1. Import 'Link' from react-router-dom
import { Link } from 'react-router-dom';
import { useAnalytics } from '../../hooks/useAnalytics';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';
import './ProjectCard.css';

function ProjectCard({ project }) {
  const { trackEvent } = useAnalytics();

  const handleProjectClick = () => {
    trackEvent('Project', 'Click', project.title);
  };
  return (
    // 2. Wrap your ENTIRE card in a <Link> component.
    // We're using the 'project.id' from your data file
    // to build the correct URL (e.g., "/project/healthtech-redesign")
    <Link
      to={`/project/${project.id}`}
      className="project-card-link"
      onClick={handleProjectClick}
    >
      <article className="project-card">

        {/* All your existing card content goes inside the link */}
        <div className="project-card-content">
          <div className="project-card-badges">
            {Array.isArray(project.badge) ? (
              project.badge.map((b, index) => (
                <div key={index} className="glass-badge">{b}</div>
              ))
            ) : (
              <div className="glass-badge">{project.badge}</div>
            )}
          </div>
          <h2 className="project-card-title">{project.title}</h2>

          {/* [NEW] Why Read This? */}
          {project.highlights && (
            <div className="project-card-highlights">
              <h4 className="highlight-title">WHY READ THIS?</h4>
              <ul className="highlight-list">
                {project.highlights.map((highlight, index) => (
                  <li key={index} className="highlight-item">
                    <span className="highlight-bullet">✦</span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Description removed as per new layout request 
          <p className="project-card-description">{project.description}</p> 
          */}

          <div className="project-card-stats">
            {project.stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <span className="stat-label">{stat.label}</span>
                <span
                  className={`stat-value ${stat.direction === 'down' ? 'negative' : 'positive'
                    }`}
                >
                  {stat.direction === 'up' && <ArrowUpRight size="1em" />}
                  {stat.direction === 'down' && <ArrowDownRight size="1em" />}
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