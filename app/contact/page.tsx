import type { Metadata } from "next";
import PageHero from "../components/PageHero";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact National Labs",
  description:
    "Contact National Labs in Hayward, CA for toxicology testing, SpotCheck Plus demos, billing inquiries, and clinical lab partnership opportunities.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Let's talk about your testing needs."
        subtitle="For information on testing services or to get answers to your questions, our customer service team is available to assist you."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />

      <section className="py-16 md:py-20">
        <div className="container-narrow grid md:grid-cols-5 gap-12">
          {/* Contact details */}
          <div className="md:col-span-2 space-y-8">
            <div>
              <div className="section-eyebrow mb-3">Direct</div>
              <h2 className="text-2xl md:text-3xl font-bold leading-tight">
                Reach us directly.
              </h2>
              <p className="mt-4 text-foreground-muted">
                Thank you for visiting, and we look forward to speaking with you
                soon.
              </p>
            </div>

            <div className="space-y-5">
              <ContactCard
                label="General Inquiries"
                value="info@nationallabs.com"
                href="mailto:info@nationallabs.com"
              />
              <ContactCard
                label="Billing"
                value="BillingAdmin@nationallabs.com"
                href="mailto:BillingAdmin@nationallabs.com"
              />
              <ContactCard
                label="Phone"
                value="1 (800) 800-6060"
                href="tel:18008006060"
              />
              <ContactCard label="Location" value="Hayward, California" />
            </div>

            <div className="p-6 rounded-2xl bg-surface-tint/60 border border-border-subtle">
              <div className="font-display text-xs tracking-[0.2em] text-primary mb-2">
                Business Hours
              </div>
              <div className="text-sm text-foreground-muted leading-relaxed">
                Monday – Friday: 8:00 AM – 5:00 PM PT
                <br />
                Saturday – Sunday: Closed
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-3">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}

function ContactCard({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <div className="p-5 rounded-2xl border border-border-subtle bg-white hover:border-primary transition-colors">
      <div className="text-xs uppercase tracking-[0.15em] text-dark-teal">
        {label}
      </div>
      <div className="mt-1 font-semibold text-foreground break-all">
        {value}
      </div>
    </div>
  );
  return href ? (
    <a href={href} className="block">
      {inner}
    </a>
  ) : (
    inner
  );
}
