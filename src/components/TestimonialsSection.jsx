"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const testimonials = [
  {
    name: "Sarah T.",
    location: "St Albans",
    text: "Matt did an amazing job on our overgrown back garden. Turned up on time, worked hard all day, and left the place looking incredible. Will 100% be booking him again.",
    rating: 5,
    service: "Garden Clearance",
  },
  {
    name: "David H.",
    location: "Welwyn Garden City",
    text: "Had the hedges and some small trees done. Absolutely brilliant — the garden looks so much better. Really friendly bloke, fair price, and tidied up after himself. Couldn't ask for more.",
    rating: 5,
    service: "Hedge Trimming",
  },
  {
    name: "Karen M.",
    location: "Stevenage",
    text: "The patio jet wash was unreal. Years of grime gone in a few hours. It looks brand new. Neighbours have already asked for his number!",
    rating: 5,
    service: "Jet Washing",
  },
];

function StarRating({ count = 5 }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-amber-400" viewBox="0 0 20 20" fill="currentColor">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292Z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="py-24 lg:py-36 bg-base-100 relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/3 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-3 mb-5"
          >
            <span className="w-8 h-px bg-primary" />
            <span className="text-primary text-xs tracking-[0.25em] uppercase font-sans font-medium">
              Happy Customers
            </span>
            <span className="w-8 h-px bg-primary" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="text-base-content leading-tight mb-4"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 700,
            }}
          >
            What people{" "}
            <span className="text-primary">are saying.</span>
          </motion.h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.12 }}
              className="bg-base-200/50 border border-base-300/50 rounded-2xl p-7 hover:border-primary/20 hover:bg-base-200/80 transition-all duration-300 group"
            >
              {/* Quote mark */}
              <div
                className="text-primary/20 text-6xl leading-none font-serif mb-3 -mt-2"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                "
              </div>

              <StarRating count={t.rating} />

              <p className="text-base-content/70 text-sm font-sans leading-relaxed mt-4 mb-6">
                {t.text}
              </p>

              <div className="flex items-center justify-between border-t border-base-300/40 pt-4">
                <div>
                  <p className="text-base-content font-semibold text-sm font-sans">{t.name}</p>
                  <p className="text-base-content/40 text-xs font-sans mt-0.5 flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                    {t.location}
                  </p>
                </div>
                <span className="text-xs bg-primary/10 text-primary px-3 py-1.5 rounded-full font-sans font-medium">
                  {t.service}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
