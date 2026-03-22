import type { Metadata } from 'next';
import Image from 'next/image';
import { SectionHeading } from '@/components/section-heading';
import { galleryImages } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Gallery',
  description: 'Preview the black-and-gold studio aesthetic, example grooming work, and premium brand photography layout.',
  alternates: { canonical: '/gallery' },
};

export default function GalleryPage() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Gallery"
          title="A visual gallery made for strong first impressions and SEO-friendly image content."
          description="Replace these starter visuals with real client transformations, shop interiors, product shelves, and event prep photos."
        />
        <div className="gallery-grid">
          {galleryImages.map((image) => (
            <article key={image.src} className="card gallery-card">
              <Image src={image.src} alt={image.alt} width={900} height={1100} />
              <div className="gallery-meta">
                <strong>{image.title}</strong>
                <p className="muted" style={{ marginBottom: 0 }}>
                  {image.alt}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
