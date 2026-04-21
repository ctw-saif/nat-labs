import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "../components/PageHero";

export const metadata: Metadata = {
  title: "About National Labs",
  description:
    "National Labs: founded with a purpose, built by its people. Meet founder Ron Perkes and learn our CRED values — Commitment, Reliability, Excellence, Dedication.",
};

const VALUES = [
  {
    letter: "C",
    name: "Commitment",
    body: "We stand behind every specimen, every result, and every client partnership — from collection to billing.",
  },
  {
    letter: "R",
    name: "Reliability",
    body: "Patented methodology and rigorous QA deliver consistent, defensible results that clinicians trust.",
  },
  {
    letter: "E",
    name: "Excellence",
    body: "Our PhD-driven technical team holds every process to the highest industry standard.",
  },
  {
    letter: "D",
    name: "Dedication",
    body: "We surpass expectations and cultivate strong partnerships through steadfast follow-through.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About National Labs"
        title="Founded with a purpose, built by its people."
        subtitle="Values, experience, certifications, and employment opportunities at National Labs."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
      />

      {/* Founder's Statement */}
      <section className="py-20 md:py-24">
        <div className="container-narrow grid md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
            <Image
              src="/images/1afc8c_82cdf9742431448d9c1f4a2171460d5a~mv2.jpg"
              alt="Ron Perkes, founder of National Labs"
              fill
              sizes="(min-width: 768px) 45vw, 90vw"
              className="object-cover"
            />
          </div>
          <div>
            <div className="section-eyebrow mb-3">Founder's Statement</div>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              "Hi. I'm Ron Perkes, founder of National Labs."
            </h2>
            <p className="mt-6 text-foreground-muted leading-relaxed">
              What started as a vision for accurate, accessible toxicology
              testing has grown into a nationally-recognized lab serving
              clinics, hospitals, and treatment programs across the country.
              Every decision we make traces back to the patients we ultimately
              serve — and the clinicians who depend on us to get it right.
            </p>
            <p className="mt-4 text-foreground-muted leading-relaxed">
              Our SpotCheck Plus platform — the industry's first all-in-one
              dried blood spot solution for PEth alcohol and toxicology — is
              the most recent chapter in that story. It won't be the last.
            </p>
          </div>
        </div>
      </section>

      {/* Commitment */}
      <section className="py-20 md:py-24 bg-surface-tint/60">
        <div className="container-narrow">
          <div className="max-w-3xl">
            <div className="section-eyebrow mb-3">Our Commitment</div>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              A nationally-recognized team — committed every step of the way.
            </h2>
            <p className="mt-5 text-foreground-muted leading-relaxed">
              From specimen collection to report return to specimen billing,
              we're committed to our core CRED values every step of the way.
            </p>
          </div>

          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {VALUES.map((v) => (
              <div
                key={v.letter}
                className="p-7 rounded-2xl bg-white border border-border-subtle card-lift"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-teal text-white grid place-items-center font-display text-2xl">
                  {v.letter}
                </div>
                <div className="mt-5 font-display text-lg tracking-wide text-foreground">
                  {v.name}
                </div>
                <p className="mt-3 text-sm text-foreground-muted leading-relaxed">
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-20 md:py-24">
        <div className="container-narrow grid md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-3">
            <div className="section-eyebrow mb-3">Methodology</div>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Patented methodology, experience-enhanced best practices.
            </h2>
            <p className="mt-5 text-foreground-muted leading-relaxed">
              Our patented methodology combines with industry best practices —
              refined by decades of hands-on experience — to deliver optimal
              precision, accuracy, and rapid throughput. Every sample is
              processed through automated workflows backed by PhD-level
              oversight.
            </p>
            <Link href="/capabilities" className="btn-primary mt-8">
              Explore Our Capabilities
            </Link>
          </div>
          <div className="md:col-span-2 relative aspect-square rounded-3xl overflow-hidden">
            <Image
              src="/images/1afc8c_3aa867b8a5154b8dbb7783774192375c~mv2.jpg"
              alt="Laboratory methodology"
              fill
              sizes="(min-width: 768px) 40vw, 90vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Values strip */}
      <section className="py-20 bg-[#0f1d2b] text-white relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 opacity-40 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 80% 20%, rgba(17,109,255,0.3), transparent 45%)",
          }}
        />
        <div className="container-narrow relative text-center">
          <div className="section-eyebrow !text-primary-soft mb-3">
            The National Labs Family
          </div>
          <h2 className="font-display text-4xl md:text-5xl">
            We are steadfast in our follow-through.
          </h2>
          <p className="mt-6 text-white/70 max-w-2xl mx-auto">
            Surpassing expectations and cultivating strong partnerships — the
            foundation of every client relationship we earn.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="btn-accent">
              Partner With Us
            </Link>
            <Link
              href="/spotcheckplus"
              className="btn-ghost !border-white/40 !text-white hover:!bg-white hover:!text-[#0f1d2b]"
            >
              About SpotCheck Plus
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
