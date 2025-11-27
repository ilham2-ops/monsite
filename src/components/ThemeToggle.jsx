import PropTypes from 'prop-types';

const ThemeToggle = ({ theme, onToggle }) => (
  <button
    id="themeToggle"
    className="theme-toggle"
    aria-label="Changer de thème"
    onClick={onToggle}
  >
    <i className={`fa-solid ${theme === 'dark' ? 'fa-moon' : 'fa-sun'}`} />
  </button>
);

ThemeToggle.propTypes = {
  theme: PropTypes.oneOf(['light', 'dark']).isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default ThemeToggle;

