"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

const services = [
  "Hedge Trimming",
  "Garden Clearance",
  "Small Tree Work",
  "Jet Washing",
];

export default function Footer() {
  return (
    <footer className="bg-base-200/60 border-t border-base-300/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4 group w-fit">
              <div className="relative w-8 h-8">
                <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <circle cx="18" cy="18" r="17" className="fill-primary/10 stroke-primary" strokeWidth="1.5" />
                  <path d="M18 28 C18 28 10 22 10 15 C10 11 13.5 8 18 8 C22.5 8 26 11 26 15 C26 22 18 28 18 28Z" className="fill-primary" opacity="0.85" />
                  <line x1="18" y1="28" x2="18" y2="32" className="stroke-primary" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M18 12 C18 12 14 17 18 24" className="stroke-base-100" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
                </svg>
              </div>
              <span
                className="font-bold text-base-content text-base leading-none"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Matt's Gardens
              </span>
            </Link>
            <p className="text-base-content/55 text-sm font-sans leading-relaxed max-w-xs mb-6">
              Reliable, friendly gardening services across Hertfordshire.
              One man, one van, and a genuine love for the job.
            </p>
            <div className="flex items-center gap-2.5 bg-primary/8 border border-primary/15 rounded-full px-4 py-2 w-fit">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-primary text-xs font-medium font-sans">
                Taking bookings now
              </span>
            </div>
          </div>

          {/* Pages */}
          <div>
            <h4 className="text-base-content font-semibold text-xs uppercase tracking-[0.18em] mb-5 font-sans">
              Pages
            </h4>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-base-content/55 text-sm font-sans hover:text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-base-content font-semibold text-xs uppercase tracking-[0.18em] mb-5 font-sans">
              Contact
            </h4>
            <ul className="space-y-3">
              {[
                { label: "07700 000 000" },
                { label: "hello@mattsgardens.co.uk" },
                { label: "Hertfordshire, UK" },
              ].map((item) => (
                <li key={item.label} className="text-base-content/55 text-sm font-sans">
                  {item.label}
                </li>
              ))}
            </ul>

            <div className="mt-6">
              <h4 className="text-base-content font-semibold text-xs uppercase tracking-[0.18em] mb-4 font-sans">
                Services
              </h4>
              <ul className="space-y-2">
                {services.map((s) => (
                  <li key={s}>
                    <Link
                      href="/services"
                      className="text-base-content/55 text-sm font-sans hover:text-primary transition-colors duration-200"
                    >
                      {s}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-base-300/40 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-base-content/35 text-xs font-sans">
            © {new Date().getFullYear()} Matt's Gardens. All rights reserved.
          </p>
          <p className="text-base-content/30 text-xs font-sans">
            Hertfordshire, UK · Friendly Local Gardener
          </p>
        </div>
      </div>
    </footer>
  );
}
