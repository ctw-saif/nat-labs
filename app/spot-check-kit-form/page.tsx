import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "../components/PageHero";
import KitForm from "./KitForm";

export const metadata: Metadata = {
  title: "Order Your Free SpotCheck Kit",
  description:
    "Order your SpotCheck Plus dried blood spot kit from National Labs. Simple finger-prick collection that detects 65+ substances with fast, accurate results.",
};

export default function SpotCheckKitFormPage() {
  return (
    <>
      <PageHero
        eyebrow="Free SpotCheck Kit"
        title="Order your free SpotCheck Plus kit."
        subtitle="Fill out a short request — we'll ship a starter kit to your clinic. No cost, no commitment."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "SpotCheck Plus", href: "/spotcheckplus" },
          { label: "Free Kit" },
        ]}
      />

      <section className="py-16 md:py-20">
        <div className="container-narrow grid md:grid-cols-5 gap-12">
          <div className="md:col-span-2 space-y-6">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden">
              <Image
                src="/images/1afc8c_16f65d76c860445bbe0d2d7885ea0b9e~mv2.jpg"
                alt="SpotCheck Plus free kit"
                fill
                sizes="(min-width: 768px) 40vw, 90vw"
                className="object-cover"
              />
            </div>
            <div className="p-6 rounded-2xl bg-surface-tint/60 border border-border-subtle">
              <div className="font-display text-xs tracking-[0.2em] text-primary mb-3">
                What's Included
              </div>
              <ul className="space-y-3 text-sm text-foreground-muted">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">—</span>
                  Pre-packaged collection card and lancet
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">—</span>
                  Step-by-step collection protocol
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">—</span>
                  Pre-paid return envelope
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">—</span>
                  Access to our online reporting portal
                </li>
              </ul>
            </div>
          </div>

          <div className="md:col-span-3">
            <KitForm />
          </div>
        </div>
      </section>
    </>
  );
}
