import PropTypes from 'prop-types';
import { useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectModal = ({ project, onClose, techLabel }) => {
  const scrollRef = useRef(null);

  const handleScroll = (direction) => {
    if (!scrollRef.current) return;
    const delta = direction === 'down' ? 220 : -220;
    scrollRef.current.scrollBy({ top: delta, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="project-modal"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 80, opacity: 0 }}
          >
            <button className="close-modal" onClick={onClose} aria-label="Fermer le modal">
              &times;
            </button>

            <div className="modal-body" ref={scrollRef}>
              <img src={project.image} alt={project.title} />
              <h3>{project.title}</h3>
              <p className="modal-details">{project.details}</p>
              <div className="tech-used">
                <span>{techLabel} :</span>
                {project.tech.map((tech) => (
                  <span key={tech} className="chip">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="modal-scroll-buttons">
              <button type="button" onClick={() => handleScroll('up')} aria-label="Faire défiler vers le haut">
                <i className="fa-solid fa-arrow-up" />
              </button>
              <button type="button" onClick={() => handleScroll('down')} aria-label="Faire défiler vers le bas">
                <i className="fa-solid fa-arrow-down" />
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

ProjectModal.propTypes = {
  project: PropTypes.object,
  onClose: PropTypes.func.isRequired,
  techLabel: PropTypes.string.isRequired,
};

export default ProjectModal;

