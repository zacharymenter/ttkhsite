// Sticky site header with logo, nav links, social icons, and a hamburger menu for mobile viewports.
import { useState, useEffect, useRef, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_LINKS, EXTERNAL_LINKS } from '../data/navLinks';
import { SOCIAL_LINKS } from '../data/socialLinks';

// Hoisted static JSX: avoids re-creating this SVG element on every render (rendering-hoist-jsx)
const hamburgerIcon = (
  <svg viewBox="0 0 100 80" width="40" height="40">
    <rect fill="white" width="100" height="10"></rect>
    <rect fill="white" y="30" width="100" height="10"></rect>
    <rect fill="white" y="60" width="100" height="10"></rect>
  </svg>
);

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    function handleClick(e) {
      // Early return if click is inside nav or button (js-early-exit)
      if (buttonRef.current?.contains(e.target)) return;
      if (navRef.current?.contains(e.target)) return;
      setMenuOpen(false);
    }
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  // Close menu on navigation
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Stable callback via functional setState — no deps needed (rerender-functional-setstate)
  const toggleMenu = useCallback((e) => {
    setMenuOpen((prev) => !prev);
    e.stopPropagation();
  }, []);

  return (
    <header>
      <Link id="logo-a" to="/">
        <img
          className="head-logo"
          src="/images/ttkhlogonowords.png"
          alt="TTKH Logo"
        />
      </Link>

      <div id="menu-button" ref={buttonRef} onClick={toggleMenu}>
        {hamburgerIcon}
      </div>

      <nav id="navigation" ref={navRef} className={menuOpen ? 'open' : ''}>
        <ul>
          <li className="social">
            <ul>
              {SOCIAL_LINKS.map((link) => (
                <li key={link.href} className="social-nav">
                  <a href={link.href} target="_blank" rel="noreferrer">
                    <img src={link.img} alt={link.alt} />
                  </a>
                </li>
              ))}
            </ul>
          </li>

          {NAV_LINKS.map((link) => (
            <li key={link.to}>
              <Link
                className={location.pathname === link.to ? 'active' : ''}
                to={link.to}
              >
                {link.label}
              </Link>
            </li>
          ))}

          {EXTERNAL_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} target="_blank" rel="noreferrer">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
