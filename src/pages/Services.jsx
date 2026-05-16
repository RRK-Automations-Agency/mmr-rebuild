import { Link } from 'react-router-dom';
import { Zap, Scale, Sun, Dumbbell, Activity, Utensils, Box, Brain, Move, Trophy } from 'lucide-react';
import PageHeader from '../components/PageHeader.jsx';
import { adultServices, kidsServices } from '../data/services.js';

const IconMap = {
  zap: Zap,
  scale: Scale,
  sun: Sun,
  dumbbell: Dumbbell,
  activity: Activity,
  utensils: Utensils,
  box: Box,
  brain: Brain,
  move: Move,
  trophy: Trophy
};

function ServiceCard({ item }) {
  return (
    <div className="service-card glass-card reveal-up">
      <img src={item.image} alt={item.title} className="service-image" />
      <div className="service-card-content">
        <div className="service-icon">
          {IconMap[item.icon] ? (() => { const Icon = IconMap[item.icon]; return <Icon />; })() : null}
        </div>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <Link to="/contact" className="btn btn-outline" style={{ width: '100%' }}>
          Enquire Now
        </Link>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <>
      <PageHeader title="Coaching Services" subtitle="Data-driven, customized plans tailored to your specific physiology." />

      <section className="section-padding">
        <div className="container">
          <div className="mb-5">
            <h2 className="text-accent mb-2">Adult Training</h2>
            <p style={{ color: 'var(--text-gray)' }}>
              Our adult programs are open to both <strong>men and women</strong>, focusing on functional health and peak performance.
            </p>
          </div>

          <div className="services-grid">
            {adultServices.map((item) => (
              <ServiceCard key={item.title} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding" style={{ background: '#080808' }}>
        <div className="container">
          <div className="mb-5">
            <h2 className="text-accent mb-2">Kids Training</h2>
            <p style={{ color: 'var(--text-gray)' }}>
              Building the foundation for a healthy life with engaging and developmental sports programs.
            </p>
          </div>

          <div className="services-grid">
            {kidsServices.map((item) => (
              <ServiceCard key={item.title} item={item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
