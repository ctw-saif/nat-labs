import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "../components/PageHero";

export const metadata: Metadata = {
  title: "Billing & Payments",
  description:
    "Manage your National Labs billing and payments. Access invoices, payment options, and financial resources for your toxicology and SpotCheck Plus testing account.",
};

const FAQ = [
  {
    q: "How do I pay an invoice?",
    a: "Invoices can be paid by check, ACH, or major credit card. Payment details are included on every invoice and our billing team is available to assist with any questions.",
  },
  {
    q: "Which insurance providers do you accept?",
    a: "We accept all major insurance providers. For covered testing, there is no cost to the patient when billing insurance directly.",
  },
  {
    q: "Can I request a copy of a past invoice?",
    a: "Yes — email BillingAdmin@nationallabs.com with your account information and we'll send copies of any invoices you need.",
  },
  {
    q: "Is there a contracted pricing option?",
    a: "We offer competitive contract pricing for clinics, hospitals, and treatment programs. Contact our team to discuss a custom pricing agreement.",
  },
];

export default function BillingPage() {
  return (
    <>
      <PageHero
        eyebrow="Billing & Payments"
        title="Simple, transparent billing."
        subtitle="Access invoices, explore payment options, and find financial resources for your testing account."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Billing" }]}
      />

      {/* Contact cards */}
      <section className="py-16 md:py-20">
        <div className="container-narrow grid md:grid-cols-3 gap-5">
          <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-primary/10 border border-border-subtle card-lift">
            <div className="section-eyebrow mb-3">Billing Email</div>
            <a
              href="mailto:BillingAdmin@nationallabs.com"
              className="block text-lg md:text-xl font-bold text-foreground hover:text-primary break-all"
            >
              BillingAdmin@nationallabs.com
            </a>
            <p className="mt-3 text-sm text-foreground-muted">
              For invoices, account questions, and payment support.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-gradient-to-br from-teal/5 to-teal/10 border border-border-subtle card-lift">
            <div className="section-eyebrow !text-teal mb-3">Phone Support</div>
            <a
              href="tel:18008006060"
              className="block text-lg md:text-xl font-bold text-foreground hover:text-teal"
            >
              1 (800) 800-6060
            </a>
            <p className="mt-3 text-sm text-foreground-muted">
              Monday – Friday. Our team is ready to help with any billing
              question.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-gradient-to-br from-accent/5 to-accent/10 border border-border-subtle card-lift">
            <div className="section-eyebrow !text-accent mb-3">General</div>
            <a
              href="mailto:info@nationallabs.com"
              className="block text-lg md:text-xl font-bold text-foreground hover:text-accent break-all"
            >
              info@nationallabs.com
            </a>
            <p className="mt-3 text-sm text-foreground-muted">
              For non-billing inquiries and general questions.
            </p>
          </div>
        </div>
      </section>

      {/* Payment options */}
      <section className="py-16 md:py-20 bg-surface-tint/60">
        <div className="container-narrow">
          <div className="max-w-3xl mb-12">
            <div className="section-eyebrow mb-3">Payment Options</div>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              Pay the way that works best for your clinic.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                title: "Check or ACH",
                body: "Mail a check to the address on your invoice, or remit via ACH. Preferred for larger recurring accounts.",
              },
              {
                title: "Credit Card",
                body: "Pay online via credit or debit card. Major cards accepted with secure processing.",
              },
              {
                title: "Insurance Billing",
                body: "Covered testing is billed directly to your insurance provider — no cost to the patient.",
              },
            ].map((p) => (
              <div
                key={p.title}
                className="p-7 rounded-2xl bg-white border border-border-subtle"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary grid place-items-center font-display text-xl mb-5">
                  $
                </div>
                <div className="font-bold text-lg text-foreground">
                  {p.title}
                </div>
                <p className="mt-3 text-sm text-foreground-muted leading-relaxed">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20">
        <div className="container-narrow">
          <div className="max-w-3xl mb-10">
            <div className="section-eyebrow mb-3">Billing FAQ</div>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Common billing questions.
            </h2>
          </div>
          <div className="space-y-4 max-w-4xl">
            {FAQ.map((f, i) => (
              <details
                key={i}
                className="group p-6 rounded-2xl bg-white border border-border-subtle"
              >
                <summary className="cursor-pointer flex items-center justify-between gap-4">
                  <span className="font-bold text-foreground text-lg">
                    {f.q}
                  </span>
                  <span className="text-primary text-2xl group-open:rotate-45 transition-transform">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-foreground-muted leading-relaxed">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20">
        <div className="container-narrow">
          <div className="rounded-3xl p-10 md:p-14 bg-gradient-to-br from-primary to-teal text-white text-center">
            <div className="font-display text-xs tracking-[0.2em] text-white/80 mb-3">
              Need personalized help?
            </div>
            <h3 className="font-display text-3xl md:text-4xl">
              We're here for your clinic — every step of the way.
            </h3>
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-white text-primary font-semibold hover:bg-white/90 transition-colors"
              >
                Contact Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
