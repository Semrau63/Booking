import type { Metadata } from 'next';
import { SectionHeading } from '@/components/section-heading';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Gift Cards',
  description: 'Sell digital gift cards for luxury haircuts, beard sculpting, memberships, and special event grooming.',
  alternates: { canonical: '/gift-cards' },
};

export default function GiftCardsPage() {
  return (
    <section className="section">
      <div className="container two-up">
        <div>
          <SectionHeading
            eyebrow="Gift Cards"
            title="Turn holidays, birthdays, and Father&apos;s Day into easy online sales."
            description="This page gives you a branded destination for gift card purchases. Connect it to Square gift cards or Square Checkout when your account is ready."
          />
          <ul className="list">
            <li>Offer preset values like $50, $100, $150, and custom amounts.</li>
            <li>Promote memberships, father-and-son experiences, and wedding packages.</li>
            <li>Use email delivery so buyers can purchase in seconds.</li>
          </ul>
          <div className="hero-actions">
            <a className="button" href={siteConfig.squareGiftCardUrl} target="_blank" rel="noreferrer">
              Buy with Square
            </a>
            <a className="button-secondary" href={siteConfig.phoneHref}>
              Need help? Call us
            </a>
          </div>
        </div>
        <div className="card">
          <h3 style={{ marginTop: 0 }}>Gift card ideas that sell well</h3>
          <div className="grid">
            <div className="card">
              <strong>The Signature Gift — $85</strong>
              <p className="muted">A polished first-visit experience with haircut, beard finish, and styling.</p>
            </div>
            <div className="card">
              <strong>VIP Grooming Credit — $150</strong>
              <p className="muted">Perfect for executive clients, wedding prep, or multi-service upgrades.</p>
            </div>
            <div className="card">
              <strong>Membership Starter — $199</strong>
              <p className="muted">A strong way to introduce recurring monthly care and premium retention.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
