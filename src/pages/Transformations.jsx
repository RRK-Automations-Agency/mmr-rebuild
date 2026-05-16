import PageHeader from '../components/PageHeader.jsx';
import { transformations } from '../data/transformations.js';

export default function Transformations() {
  return (
    <>
      <PageHeader title="Real Transformations" subtitle="Proven results from clients around the globe." />

      <section className="section-padding">
        <div className="container">
          <div className="services-grid">
            {transformations.map((item) => (
              <div key={item.name} className="glass-card overflow-hidden reveal-up">
                <img
                  src={item.image}
                  alt={`${item.name} Transformation`}
                  style={{ width: '100%', height: '500px', objectFit: 'contain', background: '#000' }}
                />
                <div className="p-4">
                  <h4 className="text-accent">{item.name}</h4>
                  <p>{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
