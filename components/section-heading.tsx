type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div style={{ maxWidth: '48rem', marginBottom: '2rem' }}>
      <div className="eyebrow">{eyebrow}</div>
      <h2 className="section-title">{title}</h2>
      <p className="lead">{description}</p>
    </div>
  );
}
