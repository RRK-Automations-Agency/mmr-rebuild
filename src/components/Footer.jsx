import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Send } from 'lucide-react';

export default function Footer({ showNewsletter = false }) {
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
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
              <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>
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
                  <Send />
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
