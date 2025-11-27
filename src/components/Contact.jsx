import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const Contact = ({ translations }) => (
  <section id="contact" className="contact-section">
    <div className="container contact-grid">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2>{translations.contactTitle}</h2>
        <p>
          <strong>{translations.contactEmail} :</strong>{' '}
          <a href="mailto:ilhamalami197@gmail.com">ilhamalami197@gmail.com</a>
        </p>
        <p>
          <strong>{translations.contactPhone} :</strong>{' '}
          <a href="tel:+212603928200">06 03 92 82 00</a>
        </p>
        <p>
          <strong>{translations.contactLocation} :</strong> Fès, Maroc
        </p>
      </motion.div>

     <motion.div
  className="contact-cta"
  initial={{ opacity: 0, x: 20 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, delay: 0.15 }}
>
  <p>{translations.contactAvailability}</p>
  <a href="mailto:ilhamalami197@gmail.com" className="btn btn-primary">
    {translations.contactCta}
  </a>
</motion.div>

    </div>
  </section>
);

Contact.propTypes = {
  translations: PropTypes.object.isRequired,
};

export default Contact;

