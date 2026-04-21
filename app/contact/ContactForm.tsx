"use client";

import { useState } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="p-10 rounded-3xl bg-surface-tint border border-border-subtle">
        <div className="font-display text-xs tracking-[0.2em] text-primary mb-3">
          Message Sent
        </div>
        <h3 className="text-2xl font-bold text-foreground">
          Thank you — we'll get back to you soon.
        </h3>
        <p className="mt-4 text-foreground-muted leading-relaxed">
          A member of our team will reach out shortly. For urgent matters,
          please call{" "}
          <a href="tel:18008006060" className="text-primary font-semibold">
            1 (800) 800-6060
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="p-8 md:p-10 rounded-3xl bg-white border border-border-subtle shadow-[0_10px_40px_-20px_rgba(43,86,114,0.2)]"
    >
      <div className="font-display text-xs tracking-[0.2em] text-primary mb-3">
        Contact Us Today
      </div>
      <h3 className="text-2xl md:text-3xl font-bold text-foreground">
        Or write us using this contact form.
      </h3>

      <div className="mt-8 grid md:grid-cols-2 gap-5">
        <Field label="First name" name="firstName" required />
        <Field label="Last name" name="lastName" required />
        <Field label="Email" name="email" type="email" required />
        <Field label="Phone" name="phone" type="tel" />
        <div className="md:col-span-2">
          <Field label="Organization" name="org" />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-semibold text-foreground mb-2">
            Topic
          </label>
          <select
            name="topic"
            className="w-full px-4 py-3 rounded-xl border border-border-subtle bg-surface-tint/40 focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all"
          >
            <option>Testing services</option>
            <option>SpotCheck Plus demo</option>
            <option>Billing inquiry</option>
            <option>Clinical lab partnership</option>
            <option>Other</option>
          </select>
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-semibold text-foreground mb-2">
            Message
            <span className="text-accent ml-0.5">*</span>
          </label>
          <textarea
            name="message"
            rows={5}
            required
            placeholder="Write a message"
            className="w-full px-4 py-3 rounded-xl border border-border-subtle bg-surface-tint/40 focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all resize-none"
          />
        </div>
      </div>

      <button type="submit" className="btn-primary mt-8 w-full md:w-auto">
        Send Message
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
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
