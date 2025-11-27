import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const Projects = ({ translations, onProjectClick }) => (
  <section id="projects" className="projects-section">
    <div className="container">
      <h2>{translations.projectsTitle}</h2>
      <div className="projects-grid">
        {translations.projects.map((project, index) => (
          <motion.article
            key={project.id}
            className="project-card"
            onClick={() => onProjectClick(project)}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.05, duration: 0.5 }}
          >
            <img src={project.image} alt={project.title} />
            <div className="project-content">
              <p className="project-badge">{project.tech[0]}</p>
              <h3>{project.title}</h3>
              <p>{project.excerpt}</p>
              <button className="view-details" type="button">
                {translations.primaryCta}
              </button>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

Projects.propTypes = {
  translations: PropTypes.object.isRequired,
  onProjectClick: PropTypes.func.isRequired,
};

export default Projects;
