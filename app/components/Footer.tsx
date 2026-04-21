import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0f1d2b] text-white mt-24">
      <div className="container-narrow py-16 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-teal grid place-items-center text-white font-display text-lg">
              NL
            </div>
            <div className="font-display text-xl tracking-wide">National Labs</div>
          </div>
          <p className="text-white/70 leading-relaxed max-w-md">
            National Labs is a nationally-recognized team delivering patented
            methodology and industry best practices for toxicology, PEth
            alcohol biomarker analysis, and SpotCheck Plus dried blood spot
            testing.
          </p>
          <div className="mt-6 space-y-1 text-sm text-white/60">
            <div>Hayward, CA</div>
            <div>
              <a href="tel:18008006060" className="hover:text-primary-soft">
                1 (800) 800-6060
              </a>
            </div>
          </div>
        </div>

        <div>
          <h4 className="font-display text-sm tracking-[0.18em] text-primary-soft mb-4">
            Explore
          </h4>
          <ul className="space-y-2 text-sm text-white/75">
            <li>
              <Link href="/capabilities" className="hover:text-white">
                Clinical Services
              </Link>
            </li>
            <li>
              <Link href="/spotcheckplus" className="hover:text-white">
                SpotCheck Plus
              </Link>
            </li>
            <li>
              <Link href="/spot-check-kit-form" className="hover:text-white">
                Order Free Kit
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-white">
                About
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm tracking-[0.18em] text-primary-soft mb-4">
            Contact
          </h4>
          <ul className="space-y-2 text-sm text-white/75">
            <li>
              <a
                href="mailto:info@nationallabs.com"
                className="hover:text-white"
              >
                info@nationallabs.com
              </a>
            </li>
            <li>
              <a
                href="mailto:BillingAdmin@nationallabs.com"
                className="hover:text-white"
              >
                BillingAdmin@nationallabs.com
              </a>
            </li>
            <li>
              <Link href="/billing" className="hover:text-white">
                Billing & Payments
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-narrow py-6 flex flex-col md:flex-row items-center justify-between text-xs text-white/50 gap-2">
          <div>
            © {new Date().getFullYear()} National Labs Inc, Hayward, CA. All
            Rights Reserved
          </div>
          <div>
            Powered by{" "}
            <a
              href="https://caltechweb.com"
              className="text-primary-soft hover:text-white"
            >
              CalTech Web
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
