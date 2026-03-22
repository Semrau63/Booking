import type { Metadata } from 'next';
import Link from 'next/link';
import { SectionHeading } from '@/components/section-heading';
import { services, siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Explore premium men\'s grooming services, memberships, beard care, scalp treatments, and wedding packages.',
  alternates: { canonical: '/services' },
};

export default function ServicesPage() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Services"
          title="Luxury grooming services designed for repeat bookings and higher-ticket visits."
          description="These are sample packages you can keep, edit, or expand inside Square Appointments so your website and booking menu match perfectly."
        />
        <div className="three-up">
          {services.map((service) => (
            <article className="card" key={service.name}>
              <div className="badge">{service.duration}</div>
              <h3>{service.name}</h3>
              <p className="service-price">{service.price}</p>
              <p className="lead">{service.description}</p>
            </article>
          ))}
        </div>
        <div className="card spacer-top">
          <h3 style={{ marginTop: 0 }}>Recommended setup with Square</h3>
          <ul className="list">
            <li>Create matching service names in Square Appointments.</li>
            <li>Add duration, pricing, deposits, and cancellation rules.</li>
            <li>Use Square text reminders and intake questions for new clients.</li>
            <li>Link each website button to your live Square booking page.</li>
          </ul>
          <div className="hero-actions">
            <a className="button" href={siteConfig.bookingUrl} target="_blank" rel="noreferrer">
              Open Square booking
            </a>
            <Link className="button-secondary" href="/book">
              Review booking page
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
