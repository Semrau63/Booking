import Image from 'next/image';
import Link from 'next/link';
import { JsonLd } from '@/components/json-ld';
import { SectionHeading } from '@/components/section-heading';
import { checklist, galleryImages, services, siteConfig, steps } from '@/lib/site';

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Barbershop',
          name: siteConfig.name,
          url: siteConfig.domain,
          description: siteConfig.description,
          telephone: siteConfig.phone,
          email: siteConfig.email,
          address: {
            '@type': 'PostalAddress',
            streetAddress: siteConfig.address,
          },
          priceRange: '$$-$$$',
          sameAs: [siteConfig.bookingUrl, siteConfig.squareGiftCardUrl],
        }}
      />
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="badge">Black & Gold Luxury Experience</div>
            <h1>Premium grooming with modern booking built to grow your brand.</h1>
            <p className="lead">
              This starter website is designed for jameswaltersgrooming.com with a polished home page, services, gallery,
              gift card page, SEO structure, and a booking experience ready to connect with Square Appointments.
            </p>
            <div className="hero-actions">
              <Link className="button" href="/book">
                View Booking Flow
              </Link>
              <a className="button-secondary" href={siteConfig.bookingUrl} target="_blank" rel="noreferrer">
                Connect Square Booking
              </a>
            </div>
            <div className="stat-grid">
              <div className="card">
                <strong style={{ fontSize: '2rem', color: 'var(--gold-soft)' }}>4</strong>
                <p className="muted">core pages plus contact and booking built in</p>
              </div>
              <div className="card">
                <strong style={{ fontSize: '2rem', color: 'var(--gold-soft)' }}>SEO</strong>
                <p className="muted">metadata, schema, robots, and sitemap ready</p>
              </div>
              <div className="card">
                <strong style={{ fontSize: '2rem', color: 'var(--gold-soft)' }}>Square</strong>
                <p className="muted">ready to swap demo links for live payments and appointments</p>
              </div>
            </div>
          </div>
          <div className="card hero-panel">
            <div className="hero-panel-content">
              <div className="badge">Featured Offer</div>
              <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Signature Grooming Session</h2>
              <p className="lead">
                Precision haircut, beard detailing, hot towel finish, and a premium product consultation in one visit.
              </p>
              <div className="hero-actions">
                <a className="button" href={siteConfig.squareGiftCardUrl} target="_blank" rel="noreferrer">
                  Buy Gift Card
                </a>
                <a className="button-secondary" href={siteConfig.phoneHref}>
                  Call {siteConfig.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Services Preview"
            title="Built to sell premium grooming, memberships, and events."
            description="These service cards are designed to feel luxurious and easy to scan on mobile so new visitors can book quickly."
          />
          <div className="three-up">
            {services.slice(0, 3).map((service) => (
              <article className="card" key={service.name}>
                <div className="badge">{service.duration}</div>
                <h3>{service.name}</h3>
                <p className="service-price">{service.price}</p>
                <p className="lead">{service.description}</p>
              </article>
            ))}
          </div>
          <div className="spacer-top">
            <Link className="button-secondary" href="/services">
              See all services
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container two-up">
          <div>
            <SectionHeading
              eyebrow="How booking works"
              title="A clean booking flow that can plug into Square without confusing clients."
              description="The goal is simple: guide the customer from page visit to paid booking with reminders and optional AI support."
            />
            <ol className="list">
              {steps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </div>
          <div className="card">
            <h3 style={{ marginTop: 0 }}>AI answering service setup</h3>
            <p className="lead">
              If you want missed calls handled automatically, add an AI receptionist to answer service questions, send links,
              and collect booking requests after hours.
            </p>
            <ul className="list">
              <li>Voice AI for missed calls and after-hours inquiries.</li>
              <li>Website chat widget for service, pricing, and hours.</li>
              <li>SMS confirmations and reminder follow-ups.</li>
              <li>Escalation to you for VIP clients or same-day schedule changes.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Gallery"
            title="Use real photos to make the brand feel established from day one."
            description="The design already includes a gallery layout. Replace the example images with your best real cuts, beard work, studio shots, and product photos."
          />
          <div className="gallery-grid">
            {galleryImages.slice(0, 3).map((image) => (
              <article key={image.src} className="card gallery-card">
                <Image src={image.src} alt={image.alt} width={900} height={1000} />
                <div className="gallery-meta">
                  <strong>{image.title}</strong>
                </div>
              </article>
            ))}
          </div>
          <div className="spacer-top">
            <Link className="button-secondary" href="/gallery">
              Open full gallery
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container two-up">
          <div>
            <SectionHeading
              eyebrow="Launch checklist"
              title="Everything you need to do next, even if you have never coded before."
              description="This section is written in plain language so you can follow it step by step after the design is ready."
            />
          </div>
          <div className="grid">
            {checklist.map((group) => (
              <div className="card" key={group.title}>
                <h3 style={{ marginTop: 0 }}>{group.title}</h3>
                <ul className="list">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
