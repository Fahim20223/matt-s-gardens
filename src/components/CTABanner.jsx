"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

export default function CTABanner() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="py-16 lg:py-20 bg-primary relative overflow-hidden">
      {/* Noise texture */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "200px",
        }}
      />

      {/* Decorative circle */}
      <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-primary-content/5 pointer-events-none" />
      <div className="absolute -left-10 -bottom-10 w-60 h-60 rounded-full bg-primary-content/5 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center md:text-left"
          >
            <h2
              className="text-primary-content leading-tight mb-2"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)",
                fontWeight: 700,
              }}
            >
              Ready for a garden you're proud of?
            </h2>
            <p className="text-primary-content/70 font-sans text-base max-w-lg">
              Get in touch today for a free, no-obligation quote. I cover all of
              Hertfordshire and I'd love to help.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row gap-4 shrink-0"
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-primary-content text-primary font-semibold px-8 py-4 rounded-full hover:bg-primary-content/90 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl text-sm font-sans"
            >
              Get a Free Quote
            </Link>
            <Link
              href="tel:07700000000"
              className="inline-flex items-center justify-center gap-2.5 border border-primary-content/30 text-primary-content font-medium px-8 py-4 rounded-full hover:border-primary-content/60 hover:bg-primary-content/5 transition-all duration-200 text-sm font-sans"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
              </svg>
              07700 000 000
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
