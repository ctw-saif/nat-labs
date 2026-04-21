"use client";

import { useState } from "react";

export default function KitForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sent");
  }

  if (status === "sent") {
    return (
      <div className="p-10 rounded-3xl bg-surface-tint border border-border-subtle">
        <div className="font-display text-xs tracking-[0.2em] text-primary mb-3">
          Request Received
        </div>
        <h3 className="text-2xl font-bold text-foreground">
          Thanks — we'll be in touch soon.
        </h3>
        <p className="mt-4 text-foreground-muted leading-relaxed">
          Our team will reach out shortly to confirm shipping details. If you
          need immediate assistance, email{" "}
          <a
            href="mailto:info@nationallabs.com"
            className="text-primary font-semibold"
          >
            info@nationallabs.com
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="p-8 md:p-10 rounded-3xl bg-white border border-border-subtle shadow-[0_10px_40px_-20px_rgba(43,86,114,0.2)]"
    >
      <div className="font-display text-xs tracking-[0.2em] text-primary mb-3">
        Request Form
      </div>
      <h3 className="text-2xl md:text-3xl font-bold text-foreground">
        Tell us where to send your kit.
      </h3>

      <div className="mt-8 space-y-5">
        <Field label="Full name" name="name" type="text" required />
        <Field label="Clinic or organization" name="org" type="text" />
        <Field label="Email address" name="email" type="email" required />
        <Field label="Phone number" name="phone" type="tel" required />
        <div>
          <label className="block text-sm font-semibold text-foreground mb-2">
            Write a message
          </label>
          <textarea
            name="message"
            rows={4}
            placeholder="Tell us about your clinic or any specific questions you have..."
            className="w-full px-4 py-3 rounded-xl border border-border-subtle bg-surface-tint/40 focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all resize-none"
          />
        </div>
      </div>

      <button type="submit" className="btn-primary mt-8 w-full md:w-auto">
        Submit Kit Request
      </button>
      <p className="mt-5 text-xs text-foreground-muted leading-relaxed">
        By submitting this form you agree to be contacted by National Labs
        regarding your SpotCheck Plus kit request. We do not share your
        information with third parties.
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  type,
  required,
}: {
  label: string;
  name: string;
  type: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-sm font-semibold text-foreground mb-2">
        {label}
        {required && <span className="text-accent ml-0.5">*</span>}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full px-4 py-3 rounded-xl border border-border-subtle bg-surface-tint/40 focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all"
      />
    </div>
  );
}
