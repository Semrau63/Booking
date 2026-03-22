import type { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/site';

const pages = ['', '/services', '/gallery', '/gift-cards', '/book', '/contact'];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map((page) => ({
    url: `${siteConfig.domain}${page}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: page === '' ? 1 : 0.8,
  }));
}
