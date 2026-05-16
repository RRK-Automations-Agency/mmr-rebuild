import { Award } from 'lucide-react';
import PageHeader from '../components/PageHeader.jsx';
import { certifications } from '../data/certifications.js';

export default function Certifications() {
  return (
    <>
      <PageHeader title="Professional Credentials" subtitle="Certified expertise in training, nutrition, and holistic health." />

      <section className="section-padding">
        <div className="container">
          <div className="services-grid">
            {certifications.map((cert) => (
              <div key={cert.title} className="service-card glass-card reveal-up">
                <img src={cert.image} alt={cert.title} className="service-image" />
                <div className="service-card-content">
                  <div className="service-icon">
                    <Award />
                  </div>
                  <h3>{cert.title}</h3>
                  <p>{cert.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
