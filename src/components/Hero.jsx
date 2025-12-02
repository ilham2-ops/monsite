import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';

const heroImage = `${import.meta.env.BASE_URL}A.jpeg`;
const heroImage = `${import.meta.env.BASE_URL}A.jpeg`;

const Hero = ({ translations }) => {
  const badgeRef = useRef(null);
  const [showAbout, setShowAbout] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (badgeRef.current) {
      gsap.fromTo(
        badgeRef.current,
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.1, ease: 'elastic.out(1, 0.8)' }
      );
    }
  }, [translations.heroBadge]);

  return (
    <section id="home" className="hero">
      <div className="container hero-container">
        <div className="hero-text">
          <span className="badge" ref={badgeRef}>
            {translations.heroBadge}
          </span>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {translations.heroTitle}
          </motion.h1>
          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            {translations.heroSubtitle}
          </motion.p>
          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.8 }}
          >
            {translations.heroDescription}
          </motion.p>

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <a href="#contact" className="btn btn-primary">
              {translations.primaryCta}
            </a>
            <a href="#projects" className="btn btn-secondary">
              {translations.secondaryCta}
            </a>
            <a href={`${import.meta.env.BASE_URL}CV.pdf`} className="btn btn-secondary ghost" download>
              {translations.resumeCta}
            </a>
            <button
              type="button"
              className="btn btn-secondary ghost"
              onClick={() => setShowAbout(true)}
            >
              {translations.aboutCta}
            </button>
          </motion.div>
        </div>

        <motion.div
          className="hero-image"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          style={{ transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}
          onMouseMove={(event) => {
            const { currentTarget } = event;
            const rect = currentTarget.getBoundingClientRect();
            const offsetX = event.clientX - rect.left;
            const offsetY = event.clientY - rect.top;
            const rotateY = ((offsetX - rect.width / 2) / rect.width) * 20;
            const rotateX = -((offsetY - rect.height / 2) / rect.height) * 20;
            setTilt({ x: rotateX, y: rotateY });
          }}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => {
            setIsHovering(false);
            setTilt({ x: 0, y: 0 });
          }}
        >
          <div className="hero-visual">
            <img
              src={heroImage}
              alt="Ilham Alami Chentoufi"
              className={`hero-photo ${isHovering ? 'hidden' : ''}`}
            />
            <img
              src={heroImageAlt}
              alt="Ilham Alami Chentoufi seconde pose"
              className={`hero-photo alt ${isHovering ? 'visible' : ''}`}
            />
          </div>
          
        </motion.div>
      </div>
      <AnimatePresence>
        {showAbout && (
          <motion.div
            className="hero-about"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
          >
            <div className="hero-about__header">
              <h3>{translations.aboutTitle}</h3>
              <button type="button" onClick={() => setShowAbout(false)} aria-label="Fermer">
                &times;
              </button>
            </div>
            <p>{translations.aboutContent}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

Hero.propTypes = {
  translations: PropTypes.object.isRequired,
};

export default Hero;

