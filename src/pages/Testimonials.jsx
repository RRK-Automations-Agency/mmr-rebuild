import { Star } from 'lucide-react';
import { testimonials } from '../data/testimonials.js';

export default function Testimonials() {
  return (
    <>
      <header className="section-padding" style={{ paddingTop: '150px', background: '#0a0a0a', borderBottom: '1px solid #111' }}>
        <div className="container text-center max-w-3xl mx-auto">
          <h3 className="text-gray mb-2">Our Testimonial</h3>
          <h1 className="text-accent mb-4" style={{ fontSize: '3.5rem' }}>What Our Clients Says</h1>
          <p style={{ maxWidth: '800px', margin: '0 auto', color: 'var(--text-gray)', fontSize: '1.1rem' }}>
            Pay close attention to the feedback from my clients regarding the quality of my services. I prioritize accurately diagnosing and treating underlying health issues for each individual. Additionally, I specialize in assisting clients in gaining weight, building strength, and achieving weight loss goals. Below, you&apos;ll find testimonials from my recent clients to attest to this commitment.
          </p>
        </div>
      </header>

      <section className="section-padding">
        <div className="container">
          <div className="services-grid">
            {testimonials.map((item) => (
              <div key={item.name} className="glass-card p-4 reveal-up">
                <div className="flex items-center gap-3 mb-3">
                  <div className="avatar">{item.initials}</div>
                  <div>
                    <h4 className="m-0">{item.name}</h4>
                    <div className="text-accent flex gap-1">
                      {Array.from({ length: item.rating }).map((_, index) => (
                        <Star key={`${item.name}-star-${index}`} className="filled-star" />
                      ))}
                    </div>
                  </div>
                </div>
                <p>{`"${item.quote}"`}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
