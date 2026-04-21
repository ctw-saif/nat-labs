import Link from "next/link";

type Crumb = { label: string; href?: string };

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  breadcrumbs,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  breadcrumbs?: Crumb[];
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-surface-tint via-white to-surface-tint">
      <div
        aria-hidden
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 20%, rgba(17,109,255,0.12), transparent 40%), radial-gradient(circle at 85% 70%, rgba(0,134,175,0.12), transparent 45%)",
        }}
      />
      <div className="container-narrow relative py-20 md:py-28">
        {breadcrumbs && (
          <nav className="mb-6 text-xs tracking-[0.15em] uppercase text-dark-teal">
            {breadcrumbs.map((c, i) => (
              <span key={i}>
                {c.href ? (
                  <Link href={c.href} className="hover:text-primary">
                    {c.label}
                  </Link>
                ) : (
                  <span>{c.label}</span>
                )}
                {i < breadcrumbs.length - 1 && (
                  <span className="mx-2 text-dark-teal/40">/</span>
                )}
              </span>
            ))}
          </nav>
        )}
        {eyebrow && <div className="section-eyebrow mb-4">{eyebrow}</div>}
        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground leading-[1.05] max-w-4xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-6 text-lg md:text-xl text-foreground-muted max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
