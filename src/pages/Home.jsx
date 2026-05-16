import { Link } from 'react-router-dom';
import { MessageCircle, Check } from 'lucide-react';
import Loader from '../components/Loader.jsx';

export default function Home() {
  return (
    <>
      <Loader />
      <section className="hero" id="home">
        <div className="hero-bg"></div>
        <div className="container">
          <div className="hero-content">
            <h1 className="reveal-text">
              TRAINED BY <span>Mettu Manohar Reddy</span>
            </h1>
            <div className="subtitle">
              <span>Online Fitness Coach</span>
              <span>Strength &amp; Conditioning Specialist</span>
              <span>Sports Nutrition Expert</span>
            </div>
            <p className="description">
              Elite fitness is more than just lifting weights; it is a science. Let&apos;s build the best version of you together with data-driven, customized plans.
            </p>
            <div className="hero-ctas">
              <Link to="/contact" className="btn btn-primary">
                Start Your Transformation
              </Link>
              <Link to="/services" className="btn btn-outline">
                Explore Programs
              </Link>
              <a href="https://wa.me/919014045934" target="_blank" rel="noreferrer" className="btn btn-whatsapp">
                <MessageCircle /> WhatsApp
              </a>
            </div>
          </div>

          <div
            className="stats-grid reveal-up"
            style={{ marginTop: '4rem', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '1rem' }}
          >
            <div className="stat-card glass-card" style={{ padding: '1.5rem' }}>
              <span className="stat-number" data-target="1000" data-suffix="+">
                0+
              </span>
              <span className="stat-label" style={{ fontSize: '0.6rem' }}>offline/online</span>
            </div>
            <div className="stat-card glass-card" style={{ padding: '1.5rem' }}>
              <span className="stat-number" data-target="800" data-suffix="+">
                0+
              </span>
              <span className="stat-label" style={{ fontSize: '0.6rem' }}>Happy clients</span>
            </div>
            <div className="stat-card glass-card" style={{ padding: '1.5rem' }}>
              <span className="stat-number" data-target="100" data-suffix="%">
                0%
              </span>
              <span className="stat-label" style={{ fontSize: '0.6rem' }}>Success rate</span>
            </div>
            <div
              className="stat-card glass-card"
              style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}
            >
              <span
                className="text-accent"
                style={{ fontSize: '2.5rem', fontWeight: 800, lineHeight: 1.2, marginBottom: '0.5rem' }}
              >
                24/7
              </span>
              <span className="stat-label" style={{ fontSize: '0.6rem' }}>Support</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding" id="about-teaser">
        <div className="container">
          <div className="about-grid" style={{ alignItems: 'center' }}>
            <div className="about-image reveal-left">
              <img src="/images/about_coach.png" alt="Manohar Reddy" />
            </div>
            <div className="about-content reveal-right">
              <h2 className="text-accent mb-2">Build Discipline.</h2>
              <h3 className="mb-4" style={{ fontSize: '2.5rem', lineHeight: 1.1 }}>
                Building More Than Just Physiques.
              </h3>
              <p className="mb-4">
                As a National-level Gold Medalist and competitive athlete, I bring a high-performance mindset to your fitness journey. My approach is holistic, combining advanced strength training with specialized nutrition.
              </p>
              <Link to="/about" className="btn btn-outline">
                Meet Your Coach
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding" id="pricing" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="text-center mb-5 reveal-up">
            <h2 className="text-accent mb-2">Pricing Plan</h2>
            <p>Choose the commitment that fits your goals.</p>
          </div>

          <div className="services-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
            <div className="glass-card p-4 reveal-up" style={{ display: 'flex', flexDirection: 'column' }}>
              <div className="text-center mb-4">
                <h3 className="mb-2">1 Month</h3>
                <div className="text-accent" style={{ fontSize: '2.5rem', fontWeight: 800 }}>₹9,999/-</div>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, marginBottom: '2rem', flexGrow: 1 }}>
                <li className="mb-3 flex items-center gap-2"><Check className="text-accent" style={{ width: '18px' }} /> Nutrition Plan</li>
                <li className="mb-3 flex items-center gap-2"><Check className="text-accent" style={{ width: '18px' }} /> Workout Plan</li>
                <li className="mb-3 flex items-center gap-2"><Check className="text-accent" style={{ width: '18px' }} /> Workout Video Explanation</li>
                <li className="mb-3 flex items-center gap-2"><Check className="text-accent" style={{ width: '18px' }} /> 24/7 Chat Support</li>
                <li className="mb-3 flex items-center gap-2"><Check className="text-accent" style={{ width: '18px' }} /> Supplements Guidance</li>
                <li className="mb-3 flex items-center gap-2"><Check className="text-accent" style={{ width: '18px' }} /> Weekly Check-ins</li>
              </ul>
              <Link to="/contact" className="btn btn-outline" style={{ width: '100%', textAlign: 'center' }}>
                Get Started
              </Link>
            </div>

            <div
              className="glass-card p-4 reveal-up"
              style={{ display: 'flex', flexDirection: 'column', borderColor: 'var(--accent)', position: 'relative' }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  background: 'var(--accent)',
                  color: '#000',
                  padding: '0.2rem 1rem',
                  borderRadius: '20px',
                  fontWeight: 'bold',
                  fontSize: '0.8rem'
                }}
              >
                POPULAR
              </div>
              <div className="text-center mb-4 mt-2">
                <h3 className="mb-2">3 Months</h3>
                <div className="text-accent" style={{ fontSize: '2.5rem', fontWeight: 800 }}>₹24,999/-</div>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, marginBottom: '2rem', flexGrow: 1 }}>
                <li className="mb-3 flex items-center gap-2"><Check className="text-accent" style={{ width: '18px' }} /> Nutrition Plan</li>
                <li className="mb-3 flex items-center gap-2"><Check className="text-accent" style={{ width: '18px' }} /> Workout Plan</li>
                <li className="mb-3 flex items-center gap-2"><Check className="text-accent" style={{ width: '18px' }} /> Workout Video Explanation</li>
                <li className="mb-3 flex items-center gap-2"><Check className="text-accent" style={{ width: '18px' }} /> 24/7 Chat Support</li>
                <li className="mb-3 flex items-center gap-2"><Check className="text-accent" style={{ width: '18px' }} /> Supplements Guidance</li>
                <li className="mb-3 flex items-center gap-2"><Check className="text-accent" style={{ width: '18px' }} /> Weekly Check-ins</li>
              </ul>
              <Link to="/contact" className="btn btn-primary" style={{ width: '100%', textAlign: 'center' }}>
                Get Started
              </Link>
            </div>

            <div className="glass-card p-4 reveal-up" style={{ display: 'flex', flexDirection: 'column' }}>
              <div className="text-center mb-4">
                <h3 className="mb-2">6 Months</h3>
                <div className="text-accent" style={{ fontSize: '2.5rem', fontWeight: 800 }}>₹49,999/-</div>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, marginBottom: '2rem', flexGrow: 1 }}>
                <li className="mb-3 flex items-center gap-2"><Check className="text-accent" style={{ width: '18px' }} /> Nutrition Plan</li>
                <li className="mb-3 flex items-center gap-2"><Check className="text-accent" style={{ width: '18px' }} /> Workout Plan</li>
                <li className="mb-3 flex items-center gap-2"><Check className="text-accent" style={{ width: '18px' }} /> Workout Video Explanation</li>
                <li className="mb-3 flex items-center gap-2"><Check className="text-accent" style={{ width: '18px' }} /> 24/7 Chat Support</li>
                <li className="mb-3 flex items-center gap-2"><Check className="text-accent" style={{ width: '18px' }} /> Supplements Guidance</li>
                <li className="mb-3 flex items-center gap-2"><Check className="text-accent" style={{ width: '18px' }} /> Weekly Check-ins</li>
              </ul>
              <Link to="/contact" className="btn btn-outline" style={{ width: '100%', textAlign: 'center' }}>
                Get Started
              </Link>
            </div>

            <div className="glass-card p-4 reveal-up" style={{ display: 'flex', flexDirection: 'column' }}>
              <div className="text-center mb-4">
                <h3 className="mb-2">12 Months</h3>
                <div className="text-accent" style={{ fontSize: '2.5rem', fontWeight: 800 }}>₹79,999/-</div>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, marginBottom: '2rem', flexGrow: 1 }}>
                <li className="mb-3 flex items-center gap-2"><Check className="text-accent" style={{ width: '18px' }} /> Nutrition Plan</li>
                <li className="mb-3 flex items-center gap-2"><Check className="text-accent" style={{ width: '18px' }} /> Workout Plan</li>
                <li className="mb-3 flex items-center gap-2"><Check className="text-accent" style={{ width: '18px' }} /> Workout Video Explanation</li>
                <li className="mb-3 flex items-center gap-2"><Check className="text-accent" style={{ width: '18px' }} /> 24/7 Chat Support</li>
                <li className="mb-3 flex items-center gap-2"><Check className="text-accent" style={{ width: '18px' }} /> Supplements Guidance</li>
                <li className="mb-3 flex items-center gap-2"><Check className="text-accent" style={{ width: '18px' }} /> Weekly Check-ins</li>
              </ul>
              <Link to="/contact" className="btn btn-outline" style={{ width: '100%', textAlign: 'center' }}>
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
