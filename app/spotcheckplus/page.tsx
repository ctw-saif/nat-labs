import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "../components/PageHero";

export const metadata: Metadata = {
  title: "SpotCheck Plus Dried Blood Spot Testing",
  description:
    "SpotCheck Plus is the industry's first all-in-one dried blood spot solution for PEth alcohol and toxicology testing. Detects 65+ substances from a finger prick.",
};

const STATS = [
  { k: "65+", v: "Substances Detected" },
  { k: "1", v: "Painless Finger-Prick" },
  { k: "24h", v: "Fast Turnaround" },
  { k: "0", v: "Cold-Chain Burden" },
];

const STEPS = [
  {
    n: "01",
    title: "Request the kit",
    body: "Order a free SpotCheck Plus kit online — no contract, no commitment.",
  },
  {
    n: "02",
    title: "Collect at the point of care",
    body: "A quick finger-prick, no phlebotomist needed. Blood spots dry on the card in minutes.",
  },
  {
    n: "03",
    title: "Ship to National Labs",
    body: "Drop the pre-addressed envelope in the mail. No cold chain, no special handling.",
  },
  {
    n: "04",
    title: "Review via web portal",
    body: "Customized results summary and EMR integration available through our online reporting platform.",
  },
];

export default function SpotCheckPlusPage() {
  return (
    <>
      <PageHero
        eyebrow="SpotCheck Plus"
        title="The key to early intervention."
        subtitle="The industry's first all-in-one dried blood spot solution for PEth alcohol and toxicology testing."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "SpotCheck Plus" },
        ]}
      />

      {/* Overview */}
      <section className="py-20 md:py-24">
        <div className="container-narrow grid md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-primary/10 to-teal/10">
            <Image
              src="/images/1afc8c_037400c258524ac59d2f9d032a6d3126~mv2.jpg"
              alt="SpotCheck Plus kit"
              fill
              sizes="(min-width: 768px) 45vw, 90vw"
              className="object-cover"
            />
          </div>
          <div>
            <div className="section-eyebrow mb-3">Personalized Plans Save Lives</div>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              A quick, painless finger-prick provides vital data.
            </h2>
            <p className="mt-5 text-foreground-muted leading-relaxed">
              SpotCheck Plus detects 65+ substances from a single dried blood
              spot — covering PEth alcohol biomarker analysis and a broad
              toxicology panel in one collection. Simpler than blood draws,
              faster than lab-based alternatives, and designed for the point of
              care.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {STATS.map((s) => (
                <div
                  key={s.v}
                  className="p-5 rounded-2xl border border-border-subtle bg-surface-tint/50"
                >
                  <div className="font-display text-3xl text-primary">
                    {s.k}
                  </div>
                  <div className="text-xs uppercase tracking-[0.14em] text-dark-teal mt-1">
                    {s.v}
                  </div>
                </div>
              ))}
            </div>
            <Link href="/spot-check-kit-form" className="btn-accent mt-8">
              Request FREE SpotCheck Kit
            </Link>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 md:py-24 bg-surface-tint/60">
        <div className="container-narrow">
          <div className="max-w-3xl mb-14">
            <div className="section-eyebrow mb-3">How It Works</div>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              From kit to results in four simple steps.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {STEPS.map((s) => (
              <div
                key={s.n}
                className="p-7 rounded-2xl bg-white border border-border-subtle card-lift"
              >
                <div className="font-display text-4xl text-primary/20">
                  {s.n}
                </div>
                <div className="mt-3 font-bold text-lg text-foreground">
                  {s.title}
                </div>
                <p className="mt-3 text-sm text-foreground-muted leading-relaxed">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 md:py-24">
        <div className="container-narrow grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="section-eyebrow mb-3">Why SpotCheck Plus</div>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Built for clinicians who refuse to compromise.
            </h2>
            <ul className="mt-8 space-y-4">
              {[
                "All-in-one PEth alcohol + toxicology testing from one spot",
                "Patented methodology and PhD-driven technical oversight",
                "No phlebotomist, no cold chain, no complex logistics",
                "Electronic reporting portal with EMR integration",
                "Accepted by all insurance providers, no patient cost",
              ].map((b, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-1 w-6 h-6 shrink-0 rounded-full bg-primary text-white grid place-items-center">
                    <svg
                      className="w-3.5 h-3.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-foreground-muted leading-relaxed">
                    {b}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
            <Image
              src="/images/1afc8c_89cade4f68304bf08cff3e949932936e~mv2.jpg"
              alt="SpotCheck Plus benefits"
              fill
              sizes="(min-width: 768px) 45vw, 90vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Resources / Documents */}
      <section className="py-20 md:py-24 bg-gradient-to-b from-white to-surface-tint/60">
        <div className="container-narrow">
          <div className="max-w-3xl mb-10">
            <div className="section-eyebrow mb-3">Resources</div>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Download the clinical documentation.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {[
              {
                title: "SpotCheck Plus — Clinical Overview",
                file: "/files/1afc8c_b6f71bd4a85245008d73856e78e43bd1.pdf",
              },
              {
                title: "SpotCheck Plus — Collection Protocol",
                file: "/files/1afc8c_cf39c215b8164b249293e2ea332b9c0a.pdf",
              },
            ].map((r) => (
              <a
                key={r.file}
                href={r.file}
                target="_blank"
                rel="noopener"
                className="group flex items-center justify-between p-6 rounded-2xl bg-white border border-border-subtle hover:border-primary transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent grid place-items-center">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 17v-2a4 4 0 014-4h4m-6 6h6m2-10a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V7z"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">
                      {r.title}
                    </div>
                    <div className="text-xs uppercase tracking-[0.14em] text-dark-teal mt-1">
                      PDF Download
                    </div>
                  </div>
                </div>
                <span className="text-primary group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-24">
        <div className="container-narrow">
          <div className="rounded-3xl p-10 md:p-14 bg-[#0f1d2b] text-white relative overflow-hidden">
            <div
              aria-hidden
              className="absolute inset-0 opacity-40"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 15% 20%, rgba(245,106,7,0.3), transparent 45%)",
              }}
            />
            <div className="relative text-center max-w-2xl mx-auto">
              <div className="section-eyebrow !text-primary-soft mb-3">
                Ready to start?
              </div>
              <h3 className="font-display text-4xl md:text-5xl leading-tight">
                Get your free SpotCheck Plus kit.
              </h3>
              <p className="mt-5 text-white/70">
                No cost, no commitment. Just submit the request and we'll ship
                a starter kit to your clinic.
              </p>
              <Link
                href="/spot-check-kit-form"
                className="btn-accent mt-8 inline-flex"
              >
                Request Your Free Kit
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
