import Link from "next/link";
import Image from "next/image";

const CAPABILITIES = [
  "Average TAT under 24 hours post specimen receipt",
  "Full-service, onsite facility testing and specimen collection",
  "Dried blood spot (DBS) finger-prick specimen collection",
  "PEth alcohol biomarker and toxicology confirmatory testing",
  "Automated specimen processing",
  "Acceptance of all insurance providers with no cost to patients",
  "Competitive contract pricing",
  "Electronic web portal with customized results summary and EMR integration",
];

const SERVICES = [
  {
    tag: "Clinic Value",
    title: "Smarter clinic workflows",
    body: "Improve and enhance your drug testing experience with custom services and 360° online reporting functions for personalized patient treatment plans.",
    color: "from-primary/10 to-primary-soft/10",
    accent: "text-primary",
  },
  {
    tag: "Toxicology",
    title: "PhD-driven confirmatory testing",
    body: "State-of-the-art equipment and methods combine to provide the highest accuracy of confirmatory testing available, backed by a PhD-driven technical team.",
    color: "from-teal/10 to-primary/10",
    accent: "text-teal",
  },
  {
    tag: "DBS Innovation",
    title: "Dried blood spot, reinvented",
    body: "DBS testing paves the way for efficient specimen collection at the point of care — no phlebotomist, no cold chain, no compromise on accuracy.",
    color: "from-accent/10 to-primary-soft/10",
    accent: "text-accent",
  },
];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-surface-tint via-white to-surface-tint">
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 30%, rgba(17,109,255,0.14), transparent 45%), radial-gradient(circle at 85% 70%, rgba(0,134,175,0.14), transparent 45%)",
          }}
        />
        <div className="container-narrow relative py-20 md:py-32 grid md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-3">
            <div className="section-eyebrow mb-4">SpotCheck Plus · Hayward, CA</div>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[1.02] text-foreground">
              <span className="text-primary">SpotCheck Plus</span>: PEth Alcohol
              and Toxicology Testing
            </h1>
            <p className="mt-6 text-lg md:text-xl text-foreground-muted max-w-xl leading-relaxed">
              The industry's first all-in-one dried blood spot solution for PEth
              alcohol and toxicology testing. A quick, painless finger-prick
              provides vital data that personalized treatment plans depend on.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/spot-check-kit-form" className="btn-primary">
                Request a FREE SpotCheck Kit
              </Link>
              <Link href="/capabilities" className="btn-ghost">
                Explore Capabilities
              </Link>
            </div>
          </div>

          <div className="md:col-span-2 relative">
            <div className="aspect-square relative rounded-3xl overflow-hidden bg-gradient-to-br from-primary/5 to-teal/10 shadow-[0_30px_80px_-30px_rgba(17,109,255,0.35)]">
              <Image
                src="/images/1afc8c_d3cc93e5bfed48da8624036c8ef0a676~mv2.webp"
                alt="SpotCheck Plus dried blood spot test kit"
                fill
                sizes="(min-width: 768px) 40vw, 90vw"
                className="object-cover"
                priority
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white shadow-lg rounded-2xl p-5 border border-border-subtle hidden md:block">
              <div className="font-display text-3xl text-primary">65+</div>
              <div className="text-xs uppercase tracking-[0.18em] text-dark-teal mt-1">
                Substances Detected
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="container-narrow grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="section-eyebrow mb-3">About Us</div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
              Founded with a purpose, built by its people.
            </h2>
            <p className="mt-5 text-foreground-muted leading-relaxed">
              National Labs is a nationally-recognized team. From specimen
              collection to report return to specimen billing, we're committed
              to our core CRED values every step of the way — steadfast in our
              follow-through, surpassing expectations, and cultivating strong
              partnerships.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { k: "Methodology", v: "Patented" },
                { k: "Team", v: "PhD-driven" },
                { k: "TAT", v: "< 24 hrs" },
                { k: "Coverage", v: "Nationwide" },
              ].map((s) => (
                <div
                  key={s.k}
                  className="p-4 rounded-xl border border-border-subtle bg-surface-tint/50"
                >
                  <div className="font-display text-xl text-primary">{s.v}</div>
                  <div className="text-xs uppercase tracking-[0.14em] text-dark-teal mt-1">
                    {s.k}
                  </div>
                </div>
              ))}
            </div>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 mt-8 text-primary font-semibold hover:gap-3 transition-all"
            >
              Read our story <span>→</span>
            </Link>
          </div>

          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden">
            <Image
              src="/images/1afc8c_9d4db9832cf540f7967d03c07394e726~mv2.jpg"
              alt="National Labs team at work"
              fill
              sizes="(min-width: 768px) 45vw, 90vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-gradient-to-b from-surface-tint/60 to-white">
        <div className="container-narrow">
          <div className="max-w-3xl">
            <div className="section-eyebrow mb-3">Testing Capabilities</div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight">
              A complete, robust solution for your testing regimen.
            </h2>
            <p className="mt-5 text-foreground-muted leading-relaxed">
              Ensuring the health and safety of your patients, employees, and
              community requires more than results — it requires reliability,
              speed, and integration.
            </p>
          </div>

          <ul className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {CAPABILITIES.map((cap, i) => (
              <li
                key={i}
                className="group p-6 rounded-2xl bg-white border border-border-subtle card-lift"
              >
                <div className="flex items-start gap-3">
                  <div className="mt-1 w-8 h-8 shrink-0 rounded-full bg-primary/10 grid place-items-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p className="text-sm leading-relaxed text-foreground-muted">
                    {cap}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="container-narrow">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
            <div className="max-w-2xl">
              <div className="section-eyebrow mb-3">Our Services</div>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight">
                Purpose-built services for clinicians who care.
              </h2>
            </div>
            <Link href="/capabilities" className="btn-ghost">
              All Services
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {SERVICES.map((s) => (
              <div
                key={s.tag}
                className={`group relative rounded-3xl p-8 bg-gradient-to-br ${s.color} border border-border-subtle card-lift overflow-hidden`}
              >
                <div
                  className={`font-display text-xs tracking-[0.2em] ${s.accent} mb-4`}
                >
                  {s.tag}
                </div>
                <h3 className="text-2xl font-bold text-foreground leading-snug">
                  {s.title}
                </h3>
                <p className="mt-4 text-foreground-muted text-sm leading-relaxed">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-[#0f1d2b] text-white relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 30%, rgba(17,109,255,0.3), transparent 40%), radial-gradient(circle at 85% 70%, rgba(245,106,7,0.2), transparent 40%)",
          }}
        />
        <div className="container-narrow relative grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="section-eyebrow !text-primary-soft mb-3">
              Specimens Reported
            </div>
            <div className="font-display text-6xl md:text-7xl text-white">
              & counting
            </div>
            <p className="mt-6 text-white/70 max-w-md">
              From specimen collection to report return, our CRED values drive
              every step — commitment, reliability, excellence, dedication.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 md:justify-end">
            <Link href="/spot-check-kit-form" className="btn-accent">
              Order Your Free Kit
            </Link>
            <Link
              href="/contact"
              className="btn-ghost !border-white/40 !text-white hover:!bg-white hover:!text-[#0f1d2b]"
            >
              Talk to Our Team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
