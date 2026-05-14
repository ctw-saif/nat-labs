import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "../components/PageHero";

export const metadata: Metadata = {
  title: "Clinical Testing Services | Hayward CA",
  description:
    "Explore National Labs' clinical testing services including toxicology, PEth alcohol biomarker analysis, and SpotCheck Plus dried blood spot specimen processing.",
};

const SERVICES = [
  {
    tag: "Clinic Value",
    title: "Clinic Value",
    lede: "Customized services. Smarter reporting.",
    body: "Improve and enhance your drug testing experience with custom services and 360° online reporting functions for personalized patient treatment plans.",
    image: "/images/1afc8c_fbb3371a776949769978f4fffd438ee2~mv2.jpg",
  },
  {
    tag: "Toxicology",
    title: "Toxicology",
    lede: "PhD-driven confirmatory testing.",
    body: "State-of-the-art equipment and methods combine to provide the highest accuracy of confirmatory testing available, backed by a PhD-driven technical team.",
    image: "/images/1afc8c_b7c92b2305544a019b4c46ba666af208~mv2.jpg",
  },
  {
    tag: "DBS Innovation",
    title: "DBS Innovation",
    lede: "Efficient, painless specimen collection.",
    body: "Dried Blood Spot (DBS) testing paves the way for efficient specimen collection — no phlebotomist required, no cold chain to maintain, and laboratory-grade accuracy.",
    image: "/images/1afc8c_fe8a94018cd44232bcabe4114ff323db~mv2.jpg",
  },
];

export default function CapabilitiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Clinical Services"
        title="Custom testing regimens, delivered with precision."
        subtitle="Understand options to customize your testing regimen. A complete and robust solution for your patients, employees, and community."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Clinical Services" },
        ]}
      />

      {/* Specialist Services */}
      <section className="py-20 md:py-24 bg-gradient-to-b from-surface-tint/60 to-white">
        <div className="container-narrow">
          <div className="max-w-3xl mb-14">
            <div className="section-eyebrow mb-3">Specialist Services</div>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              Three specialist pillars backing every result.
            </h2>
          </div>

          <div className="space-y-10">
            {SERVICES.map((s, i) => (
              <div
                key={s.tag}
                className={`grid md:grid-cols-2 gap-10 items-center ${
                  i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""
                }`}
              >
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    sizes="(min-width: 768px) 45vw, 90vw"
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-display text-xs tracking-[0.2em] text-primary mb-3">
                    {s.tag}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold leading-tight">
                    {s.lede}
                  </h3>
                  <p className="mt-5 text-foreground-muted leading-relaxed">
                    {s.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-24">
        <div className="container-narrow">
          <div className="rounded-3xl p-10 md:p-14 bg-gradient-to-br from-primary to-teal text-white relative overflow-hidden">
            <div
              aria-hidden
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 85% 20%, rgba(255,255,255,0.3), transparent 40%)",
              }}
            />
            <div className="relative flex flex-wrap gap-8 items-center justify-between">
              <div className="max-w-xl">
                <div className="font-display tracking-[0.18em] text-xs text-white/80 mb-3">
                  Ready When You Are
                </div>
                <h3 className="text-3xl md:text-4xl font-bold leading-tight">
                  Design your ideal testing workflow with National Labs.
                </h3>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/spot-check-kit-form"
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-white text-primary font-semibold hover:bg-white/90 transition-colors"
                >
                  Free SpotCheck Kit
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-full border-2 border-white text-white hover:bg-white hover:text-primary font-semibold transition-colors"
                >
                  Contact Team
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
