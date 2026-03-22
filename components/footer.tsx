import Link from 'next/link';
import { siteConfig } from '@/lib/site';

export function Footer() {
  return (
    <footer className="footer">
      <div className="container two-up">
        <div>
          <p className="brand">
            James <span>Walters</span> Grooming
          </p>
          <p>
            Luxury men&apos;s grooming with polished service, modern booking, and a premium black-and-gold brand experience.
          </p>
        </div>
        <div className="grid" style={{ justifyItems: 'start' }}>
          <Link href="/services">Services</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/gift-cards">Gift Cards</Link>
          <Link href="/book">Booking</Link>
          <a href={siteConfig.phoneHref}>{siteConfig.phone}</a>
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
        </div>
      </div>
    </footer>
  );
}
