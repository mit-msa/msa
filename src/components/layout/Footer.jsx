import { Link } from 'react-router-dom';
import logo from '../../assets/images/alchemist_final.png';

/**
 * Footer component with quick links, resources, and social media
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <div className="footer__logo">
              <img src={logo} alt="MIT MSA" className="footer__logo-img" />
            </div>
            <p className="footer__description">
              MIT Muslim Students Association is dedicated to serving the Muslim
              community at MIT and fostering understanding between people of all
              faiths.
            </p>
          </div>

          <div>
            <h3 className="footer__heading">Quick Links</h3>
            <ul className="footer__links">
              <li>
                <Link to="/about" className="footer__link">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/prayer" className="footer__link">
                  Prayer Spaces
                </Link>
              </li>
              <li>
                <Link to="/resources" className="footer__link">
                  Resources
                </Link>
              </li>
              <li>
                <Link to="/community-activities" className="footer__link">
                  Community Activities
                </Link>
              </li>
              <li>
                <Link to="/leadership" className="footer__link">
                  Leadership
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="footer__heading">Resources</h3>
            <ul className="footer__links">
              <li>
                <Link to="/resources#halal-food" className="footer__link">
                  Halal Food
                </Link>
              </li>
              <li>
                <Link to="/resources#mosques" className="footer__link">
                  Local Mosques
                </Link>
              </li>
              <li>
                <a
                  href="https://calendar.google.com/calendar/embed?src=mit.msa.docs%40gmail.com&ctz=America%2FNew_York"
                  className="footer__link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  MIT Events Calendar
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="footer__heading">Connect</h3>
            <div className="footer__social">
              <a
                href="https://www.instagram.com/mitmsa/"
                className="footer__social-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a
                href="mailto:msa-exec@mit.edu"
                className="footer__social-link"
                aria-label="Email"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            &copy; {currentYear} MIT Muslim Students Association. All rights
            reserved.
          </p>
          <p className="footer__copyright">
            A recognized student organization at MIT.
          </p>
          <p className="footer__copyright">
            <a
              href="https://accessibility.mit.edu/"
              className="footer__link"
              target="_blank"
              rel="noopener noreferrer"
            >
              MIT Accessibility
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
