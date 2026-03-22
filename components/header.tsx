import Link from 'next/link';
import { siteConfig } from '@/lib/site';

const links = [
  ['Home', '/'],
  ['Services', '/services'],
  ['Gallery', '/gallery'],
  ['Gift Cards', '/gift-cards'],
  ['Book', '/book'],
  ['Contact', '/contact'],
] as const;

export function Header() {
  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <Link className="brand" href="/">
          James <span>Walters</span> Grooming
        </Link>
        <nav className="nav-links" aria-label="Primary">
          {links.map(([label, href]) => (
            <Link key={href} href={href}>
              {label}
            </Link>
          ))}
        </nav>
        <a className="button" href={siteConfig.bookingUrl} target="_blank" rel="noreferrer">
          Book with Square
        </a>
      </div>
    </header>
  );
}
