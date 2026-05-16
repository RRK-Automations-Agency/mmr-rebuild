import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader.jsx';
import { certifications } from '../data/certifications.js';
import { coachGallery } from '../data/team.js';

export default function About() {
  return (
    <>
      <PageHeader title="Meet Your Coach" subtitle="National Gold Medalist | 4 Years Experience | Science-Based Training" />

      <section className="section-padding" id="about">
        <div className="container">
          <div className="about-grid">
            <div className="about-image reveal-left">
              <img src="/images/about_coach.png" alt="Mettu Manohar Reddy" />
            </div>
            <div className="about-content reveal-right">
              <h2 className="text-accent mb-4">Elite Fitness is a Science.</h2>
              <p className="mb-4">
                Elite fitness is more than just lifting weights; it is a science. As a National-level Gold Medalist and competitive Bodybuilding and Powerlifting athlete, I bring a high-performance mindset to your personal fitness journey.
              </p>
              <p className="mb-4">
                With 4 years of professional coaching experience, I specialize in bridging the gap between where you are and where you want to be. My approach is holistic, combining advanced strength training with specialized nutrition and yoga to ensure your transformation is sustainable, healthy, and powerful.
              </p>

              <h3 className="mb-3 text-accent">Why Train With Me?</h3>
              <p className="mb-4">
                I don&apos;t believe in cookie-cutter programs. Whether your goal is to shatter a personal record or undergo a total body transformation, you receive a plan backed by professional certifications:
              </p>
              <ul style={{ listStyle: 'none', padding: 0, marginBottom: '2rem' }}>
                <li className="mb-3 flex items-center gap-2"><i data-lucide="check-circle" className="text-accent"></i> <strong>Elite Expertise:</strong> National-level Gold Medalist in competitive sports.</li>
                <li className="mb-3 flex items-center gap-2"><i data-lucide="check-circle" className="text-accent"></i> <strong>Scientific Nutrition:</strong> Certified in Sports Nutrition and Thyroid Nutrition Mastery.</li>
                <li className="mb-3 flex items-center gap-2"><i data-lucide="check-circle" className="text-accent"></i> <strong>Diverse Skill Set:</strong> Expertise ranging from Powerlifting to Holistic Yoga.</li>
                <li className="mb-3 flex items-center gap-2"><i data-lucide="check-circle" className="text-accent"></i> <strong>Proven Results:</strong> 4 years of experience helping clients achieve peak results.</li>
              </ul>

              <h3 className="mb-3 text-accent">Specialized Online Coaching</h3>
              <p className="mb-4">I provide data-driven, customized plans tailored to your specific physiology and goals.</p>

              <Link to="/contact" className="btn btn-primary">
                Ready to Start Your Transformation?
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding" style={{ background: '#080808' }}>
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="text-accent">Coach Highlights</h2>
            <p>Focused training moments from the Fit FUTURE studio.</p>
          </div>
          <div className="services-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
            {coachGallery.map((item) => (
              <div key={item.image} className="glass-card overflow-hidden reveal-up">
                <img
                  src={item.image}
                  alt={item.alt}
                  style={{ width: '100%', height: '380px', objectFit: 'cover', background: '#000' }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="text-accent">Professional Credentials</h2>
            <p>Industry-standard certifications and expert knowledge.</p>
          </div>
          <div className="services-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
            {certifications.map((cert) => (
              <div key={cert.title} className="glass-card p-4 text-center reveal-up">
                <i data-lucide="award" className="text-accent mb-3" style={{ width: '40px', height: '40px', margin: '0 auto' }}></i>
                <h4>{cert.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
