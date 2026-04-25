import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import logo from '../../assets/images/alchemist_final.png';

/**
 * Header component with responsive navigation
 * Includes desktop nav and mobile hamburger menu
 */
export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isMobileResourcesOpen, setIsMobileResourcesOpen] = useState(false);
  const resourcesItemRef = useRef(null);
  const location = useLocation();

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/prayer', label: 'Prayer' },
    // { to: '/ramadan', label: 'Ramadan' },
    { to: '/community-activities', label: 'Community Activities' },
    { to: '/leadership', label: 'Leadership' },
    { to: '/executive-committee', label: 'Executive Committee' },
  ];

  const resourcesLinks = [
    { to: '/resources#halal-food', label: 'Halal Restaurants' },
    { to: '/resources#groceries', label: 'Halal Groceries' },
    { to: '/resources#mosques', label: 'Local Mosques' },
    { to: '/resources#msa-lounge', label: 'MSA Lounge' },
    { to: '/resources#useful-links', label: 'Useful Links' },
    { to: '/resources#islamic-resources', label: 'Deen Exploration' },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    // Prevent background scroll when menu is open
    document.body.style.overflow = isMobileMenuOpen ? '' : 'hidden';
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsMobileResourcesOpen(false);
    document.body.style.overflow = '';
  };

  // Close the desktop dropdown when the URL changes (after a sub-link click)
  useEffect(() => {
    setIsResourcesOpen(false);
  }, [location.pathname, location.hash]);

  // Close the dropdown on Escape or click outside
  useEffect(() => {
    if (!isResourcesOpen) return;

    const handleClickOutside = (event) => {
      if (
        resourcesItemRef.current &&
        !resourcesItemRef.current.contains(event.target)
      ) {
        setIsResourcesOpen(false);
      }
    };
    const handleKey = (event) => {
      if (event.key === 'Escape') setIsResourcesOpen(false);
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKey);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKey);
    };
  }, [isResourcesOpen]);

  const isResourcesActive = location.pathname.startsWith('/resources');

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
                    end={link.to === '/'}
                    className={({ isActive }) =>
                      `nav__link ${isActive ? 'nav__link--active' : ''}`
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}

              <li
                ref={resourcesItemRef}
                className={`nav__item nav__item--dropdown ${
                  isResourcesOpen ? 'is-open' : ''
                }`}
                onMouseEnter={() => setIsResourcesOpen(true)}
                onMouseLeave={() => setIsResourcesOpen(false)}
              >
                <NavLink
                  to="/resources"
                  className={`nav__link nav__link--with-caret ${
                    isResourcesActive ? 'nav__link--active' : ''
                  }`}
                  aria-haspopup="menu"
                  aria-expanded={isResourcesOpen}
                  onFocus={() => setIsResourcesOpen(true)}
                >
                  Resources
                  <svg
                    className="nav__caret"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </NavLink>
                <div className="nav__dropdown" role="menu">
                  <ul className="nav__dropdown-list">
                    {resourcesLinks.map((link) => (
                      <li key={link.to}>
                        <Link
                          to={link.to}
                          className="nav__dropdown-link"
                          role="menuitem"
                          onClick={() => setIsResourcesOpen(false)}
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>

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
                end={link.to === '/'}
                className="mobile-nav__link"
                onClick={closeMobileMenu}
              >
                {link.label}
              </NavLink>
            </li>
          ))}

          <li className="mobile-nav__group">
            <button
              type="button"
              className="mobile-nav__link mobile-nav__link--toggle"
              aria-expanded={isMobileResourcesOpen}
              onClick={() => setIsMobileResourcesOpen((open) => !open)}
            >
              <span>Resources</span>
              <svg
                className={`mobile-nav__caret ${
                  isMobileResourcesOpen ? 'is-open' : ''
                }`}
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
            {isMobileResourcesOpen && (
              <ul className="mobile-nav__sublist">
                {resourcesLinks.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="mobile-nav__sublink"
                      onClick={closeMobileMenu}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>

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
