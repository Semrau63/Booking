import type { Metadata } from 'next';
import { SectionHeading } from '@/components/section-heading';
import { services, siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Book Now',
  description: 'Book premium grooming services with an easy online flow, Square integration, and AI receptionist support.',
  alternates: { canonical: '/book' },
};

export default function BookPage() {
  return (
    <section className="section">
      <div className="container two-up">
        <div>
          <SectionHeading
            eyebrow="Booking"
            title="A simple booking experience that feels premium and easy to trust."
            description="This page can work as a pre-booking intake form or as a branded handoff page to your Square Appointments calendar."
          />
          <div className="card">
            <h3 style={{ marginTop: 0 }}>How to make this live</h3>
            <ul className="list">
              <li>Keep this form for lead capture, or replace it with a live Square embed.</li>
              <li>Use Square for deposits, reminders, staff calendars, and gift cards.</li>
              <li>Add your AI receptionist link or chat widget on this page for instant answers.</li>
            </ul>
          </div>
          <div className="hero-actions spacer-top">
            <a className="button" href={siteConfig.bookingUrl} target="_blank" rel="noreferrer">
              Book in Square
            </a>
            <a className="button-secondary" href={siteConfig.aiAssistantUrl} target="_blank" rel="noreferrer">
              AI answering setup idea
            </a>
          </div>
        </div>
        <form className="card form">
          <h3 style={{ marginTop: 0 }}>Example booking request</h3>
          <div className="form-row">
            <label>
              Full name
              <input type="text" placeholder="James Walters" />
            </label>
            <label>
              Phone number
              <input type="tel" placeholder="(214) 555-0199" />
            </label>
          </div>
          <div className="form-row">
            <label>
              Email address
              <input type="email" placeholder="you@example.com" />
            </label>
            <label>
              Preferred service
              <select defaultValue="">
                <option value="" disabled>
                  Select a service
                </option>
                {services.map((service) => (
                  <option key={service.name} value={service.name}>
                    {service.name}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <div className="form-row">
            <label>
              Preferred date
              <input type="date" />
            </label>
            <label>
              Preferred time
              <input type="time" />
            </label>
          </div>
          <label>
            Notes for your appointment
            <textarea placeholder="Tell us about your style goals, beard needs, event date, or preferred barber."></textarea>
          </label>
          <button className="button" type="button">
            Submit request
          </button>
          <p className="muted" style={{ margin: 0 }}>
            For a real launch, connect this form to email, CRM, or Square. Right now it serves as a polished example workflow.
          </p>
        </form>
      </div>
    </section>
  );
}
