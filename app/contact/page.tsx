import type { Metadata } from 'next';
import { SectionHeading } from '@/components/section-heading';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact James Walters Grooming for appointments, memberships, gift cards, and premium grooming questions.',
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return (
    <section className="section">
      <div className="container two-up">
        <div>
          <SectionHeading
            eyebrow="Contact"
            title="Everything a first-time client needs to reach you confidently."
            description="Clear contact details build trust fast. This page is also a perfect place to add maps, FAQs, and live chat later."
          />
          <div className="card">
            <p>
              <strong>Phone:</strong> <a href={siteConfig.phoneHref}>{siteConfig.phone}</a>
            </p>
            <p>
              <strong>Email:</strong> <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            </p>
            <p>
              <strong>Address:</strong> {siteConfig.address}
            </p>
            <p className="muted">Hours example: Tuesday–Saturday, 9 AM–7 PM. Sunday and Monday by special request.</p>
          </div>
        </div>
        <form className="card form">
          <h3 style={{ marginTop: 0 }}>Ask a question</h3>
          <label>
            Name
            <input type="text" placeholder="Your name" />
          </label>
          <label>
            Email
            <input type="email" placeholder="your@email.com" />
          </label>
          <label>
            Message
            <textarea placeholder="How can we help? Ask about appointments, gift cards, memberships, or event grooming."></textarea>
          </label>
          <button className="button" type="button">
            Send message
          </button>
          <p className="muted" style={{ margin: 0 }}>
            Tip: connect this form to Formspree, Basin, or your email provider if you want a no-code message inbox.
          </p>
        </form>
      </div>
    </section>
  );
}
