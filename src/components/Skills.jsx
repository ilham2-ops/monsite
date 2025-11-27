import { useState } from 'react';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';
import { skills } from '../data/skills.js';

const Skills = ({ translations }) => {
  const [active, setActive] = useState('prog');

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2>{translations.skillsTitle}</h2>
        <div className='skills-accordion'>
          {translations.skillsList.map((skill) => (
            <div key={skill.id} className={`skill-item ${skill.id === active ? 'active' : ''}`}>
              <button
                className="skill-title"
                onClick={() => setActive((prev) => (prev === skill.id ? '' : skill.id))}
              >
                {skill.title}
                <i className="fa-solid fa-chevron-down" />
              </button>
              <AnimatePresence initial={false}>
                {active === skill.id && (
                  <motion.ul
                    className="skill-content"
                    initial="collapsed"
                    animate="open"
                    exit="collapsed"
                    variants={{
                      open: { opacity: 1, height: 'auto' },
                      collapsed: { opacity: 0, height: 0 },
                    }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    {skill.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


Skills.propTypes = {
  translations: PropTypes.object.isRequired,
};

export default Skills;

