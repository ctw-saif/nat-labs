"use client";

import Link from "next/link";
import { useState } from "react";

const NAV = [
  { href: "/capabilities", label: "Clinical Services" },
  { href: "/spotcheckplus", label: "SpotCheck Plus" },
  { href: "/billing", label: "Billing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-border-subtle">
      <div className="container-narrow flex items-center justify-between h-20">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-teal grid place-items-center text-white font-display text-lg">
            NL
          </div>
          <div className="leading-tight">
            <div className="font-display text-xl text-foreground tracking-wide">
              National Labs
            </div>
            <div className="text-[0.65rem] tracking-[0.2em] uppercase text-dark-teal">
              Hayward, CA
            </div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-4 py-2 text-sm font-medium text-foreground-muted hover:text-primary transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/spot-check-kit-form"
            className="ml-3 btn-primary text-sm"
          >
            Free Kit
          </Link>
        </nav>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 text-foreground"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border-subtle bg-white">
          <div className="container-narrow py-4 flex flex-col gap-1">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-2 text-foreground-muted font-medium"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/spot-check-kit-form"
              onClick={() => setOpen(false)}
              className="btn-primary text-sm mt-3 self-start"
            >
              Free Kit
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
