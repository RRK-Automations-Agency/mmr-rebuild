import { NavLink, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function NavBar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', onScroll);
    onScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const navClassName = `${isScrolled || !isHome ? 'scrolled' : ''}`;
  const navLinksClassName = `nav-links ${isMenuOpen ? 'mobile-active' : ''}`;

  return (
    <nav id="navbar" className={navClassName}>
      <div className="container nav-content">
        <NavLink to="/" className="logo">
          <img src="/images/logo.png" alt="Fit FUTURE" />
        </NavLink>
        <div className={navLinksClassName}>
          <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>
            Home
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>
            About
          </NavLink>
          <NavLink to="/transformations" className={({ isActive }) => (isActive ? 'active' : '')}>
            Transformations
          </NavLink>
          <NavLink to="/services" className={({ isActive }) => (isActive ? 'active' : '')}>
            Services
          </NavLink>
          <NavLink to="/certifications" className={({ isActive }) => (isActive ? 'active' : '')}>
            Certifications
          </NavLink>
          <NavLink to="/testimonials" className={({ isActive }) => (isActive ? 'active' : '')}>
            Testimonials
          </NavLink>
          <NavLink to="/contact" className="btn btn-primary" style={{ padding: '0.6rem 1.5rem' }}>
            Join Now
          </NavLink>
        </div>
        <button
          className="mobile-menu-btn"
          id="mobile-menu-btn"
          aria-label="Toggle navigation"
          type="button"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
    </nav>
  );
}
