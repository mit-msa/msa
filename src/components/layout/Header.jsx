import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/images/alchemist_final.png';

/**
 * Header component with responsive navigation
 * Includes desktop nav and mobile hamburger menu
 */
export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/prayer', label: 'Prayer' },
    { to: '/ramadan', label: 'Ramadan' },
    { to: '/resources', label: 'Resources' },
    { to: '/leadership', label: 'Leadership' },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    // Prevent background scroll when menu is open
    document.body.style.overflow = isMobileMenuOpen ? '' : 'hidden';
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = '';
  };

  return (
    <>
      <header className="header">
        <div className="container header__inner">
          <Link to="/" className="header__logo">
            <img src={logo} alt="MIT MSA" className="header__logo-img" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="nav" aria-label="Main navigation">
            <ul className="nav__list">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      `nav__link ${isActive ? 'nav__link--active' : ''}`
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
              <li>
                <Link to="/join" className="nav__link btn btn--primary btn--sm">
                  Join Us
                </Link>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="header__menu-btn"
            aria-label="Open menu"
            aria-expanded={isMobileMenuOpen}
            onClick={toggleMobileMenu}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Navigation */}
      <div
        className={`mobile-nav ${isMobileMenuOpen ? 'is-open' : ''}`}
        aria-label="Mobile navigation"
      >
        <div className="mobile-nav__header">
          <img src={logo} alt="MIT MSA" className="header__logo-img" />
          <button
            className="mobile-nav__close"
            aria-label="Close menu"
            onClick={closeMobileMenu}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
        <ul className="mobile-nav__list">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className="mobile-nav__link"
                onClick={closeMobileMenu}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
          <li>
            <Link
              to="/join"
              className="mobile-nav__link"
              onClick={closeMobileMenu}
            >
              Join Us
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
