import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Footer({ showNewsletter }) {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div>
            <Link to="/" className="logo footer-logo">
              <img src="/images/logo.png" alt="Fit FUTURE" style={{ height: '60px' }} />
            </Link>
            <p className="footer-tagline">Transform Your Body. Upgrade Your Life.</p>
            <div className="social-links">
              <a
                href="https://www.instagram.com/m.m.r_indian_beast?igsh=MXh1bzQ2dDJ2eDJ4bw%3D%3D&utm_source=qr"
                target="_blank"
                rel="noreferrer"
              >
                <i data-lucide="instagram"></i>
              </a>
              <a href="#">
                <i data-lucide="facebook"></i>
              </a>
              <a href="#">
                <i data-lucide="twitter"></i>
              </a>
              <a href="#">
                <i data-lucide="youtube"></i>
              </a>
            </div>
          </div>
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/contact">Join Now</Link>
              </li>
            </ul>
          </div>
          <div className="footer-links">
            <h4>Contact</h4>
            <ul>
              <li>
                <a href="mailto:teammmreddy@gmail.com">teammmreddy@gmail.com</a>
              </li>
              <li>
                <a href="https://wa.me/919014045934" target="_blank" rel="noreferrer">
                  WhatsApp: +91 90140 45934
                </a>
              </li>
              <li>
                <a
                  href="https://whatsapp.com/channel/0029Vaj4w0iDeONAke9UJY1V"
                  target="_blank"
                  rel="noreferrer"
                >
                  Join WhatsApp Channel
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/m.m.r_indian_beast?igsh=MXh1bzQ2dDJ2eDJ4bw%3D%3D&utm_source=qr"
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram: @m.m.r_indian_beast
                </a>
              </li>
              <li>Hyderabad, India</li>
            </ul>
          </div>
          {showNewsletter ? (
            <div className="footer-links">
              <h4>Newsletter</h4>
              <p className="mb-3">Get fitness tips and transformation stories.</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Email Address"
                  style={{ padding: '0.8rem', background: '#111', border: '1px solid #333', color: 'white' }}
                />
                <button className="btn btn-primary" style={{ padding: '0.8rem' }} type="button">
                  <i data-lucide="send"></i>
                </button>
              </div>
            </div>
          ) : null}
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Fit FUTURE | Mettu Manohar Reddy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  showNewsletter: PropTypes.bool
};

Footer.defaultProps = {
  showNewsletter: false
};
