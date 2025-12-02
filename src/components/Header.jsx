import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import ThemeToggle from './ThemeToggle.jsx';

const socialLinks = [
  { id: 'github', icon: 'fa-brands fa-github', href: 'https://github.com/ilham2-ops' },
  { id: 'linkedin', icon: 'fa-brands fa-linkedin-in', href: 'https://www.linkedin.com/in/ilham-alami-9565482a5/' },

];

const Header = ({ translations, lang, onLangChange, theme, onThemeChange }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [menuOpen]);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <div className="logo-wrapper">
          <span className="logo-icon">
            <img src={`${import.meta.env.BASE_URL}logo.png`} alt="Logo Ilham" />
          </span>
          
        </div>

        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          {translations.nav.map((label, index) => (
            <a key={label} href={['#home', '#skills', '#projects', '#contact'][index]} onClick={() => setMenuOpen(false)}>
              {label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <ThemeToggle theme={theme} onToggle={onThemeChange} />
          <select value={lang} onChange={(e) => onLangChange(e.target.value)} className="lang-switch" aria-label="Changer de langue">
            <option value="fr">FR</option>
            <option value="en">EN</option>
            <option value="es">ES</option>
          </select>
          <button className="menu-toggle" aria-expanded={menuOpen} onClick={() => setMenuOpen((prev) => !prev)}>
            ☰
          </button>
        </div>
      </div>
      <div className="header-social">
        {socialLinks.map((link) => (
          <a key={link.id} href={link.href} target="_blank" rel="noreferrer" aria-label={link.id}>
            <i className={link.icon} />
          </a>
        ))}
      </div>
    </header>
  );
};

Header.propTypes = {
  translations: PropTypes.object.isRequired,
  lang: PropTypes.string.isRequired,
  onLangChange: PropTypes.func.isRequired,
  theme: PropTypes.oneOf(['light', 'dark']).isRequired,
  onThemeChange: PropTypes.func.isRequired,
};

export default Header;

