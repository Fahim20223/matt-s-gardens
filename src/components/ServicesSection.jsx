"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    id: "hedge-trimming",
    title: "Hedge Trimming",
    tagline: "Crisp edges, tidy lines.",
    description:
      "From small garden hedges to large boundary privets, I'll get them looking sharp. Regular trimming keeps your garden looking well-maintained and healthy — and it's something I genuinely enjoy getting right. No jagged edges, no missed patches.",
    features: ["All hedge types & sizes", "Clean-up included", "Shape & height adjustments", "Seasonal scheduling available"],
    image: "/images/hedge-trimming.jpg",
    fallback: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    color: "from-green-900/20",
  },
  {
    id: "garden-clearance",
    title: "Garden Clearance",
    tagline: "Out with the old, in with the fresh.",
    description:
      "Overgrown garden? Inherited a mess? I'll clear it all out — weeds, debris, old plants, rubbish — and leave you with a clean slate. Ideal before a redesign or if you just want your outdoor space back. All waste is disposed of responsibly.",
    features: ["Full or partial clearances", "Waste removal included", "Before & after documentation", "Same-day quotes available"],
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80",
    fallback: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80",
    color: "from-stone-900/20",
  },
  {
    id: "small-tree-work",
    title: "Small Tree Work",
    tagline: "Keep your trees in check.",
    description:
      "Crown reduction, deadwood removal, basic pruning — I handle small tree work safely and carefully. Whether it's a fruit tree that needs a tidy up or a young tree that's getting too big for the space, I'll bring it back under control.",
    features: ["Crown reduction & shaping", "Deadwood removal", "Stump grinding available", "Safe & tidy working"],
    image: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800&q=80",
    fallback: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800&q=80",
    color: "from-emerald-900/20",
  },
  {
    id: "jet-washing",
    title: "Jet Washing",
    tagline: "Make it look brand new.",
    description:
      "Driveways, patios, decking, pathways — jet washing makes an incredible difference. Years of grime, moss, and algae lifted in a few hours. It's one of the most satisfying services I offer, and the results speak for themselves.",
    features: ["Driveways & patios", "Decking & paving", "Moss & algae removal", "Fencing & walls too"],
    image: "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=800&q=80",
    fallback: "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=800&q=80",
    color: "from-blue-900/20",
  },
];

function ServiceCard({ service, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
        isEven ? "" : "lg:[&>*:first-child]:order-last"
      }`}
    >
      {/* Image */}
      <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-base-200 group">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 1024px) 100vw, 50vw"
          onError={(e) => { e.currentTarget.src = service.fallback; }}
        />
        <div className={`absolute inset-0 bg-gradient-to-br ${service.color} to-transparent opacity-60`} />
        
        {/* Service number */}
        <div className="absolute top-5 left-5">
          <span
            className="text-white/20 font-bold leading-none"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: "4rem" }}
          >
            0{index + 1}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="py-4">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-6 h-px bg-primary" />
          <span className="text-primary text-xs tracking-[0.2em] uppercase font-sans font-medium">
            {service.tagline}
          </span>
        </div>

        <h3
          className="text-base-content mb-4 leading-tight"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
            fontWeight: 700,
          }}
        >
          {service.title}
        </h3>

        <p className="text-base-content/65 font-sans leading-relaxed mb-7 text-base">
          {service.description}
        </p>

        {/* Features */}
        <ul className="grid grid-cols-2 gap-2 mb-8">
          {service.features.map((f) => (
            <li key={f} className="flex items-center gap-2 text-sm text-base-content/70 font-sans">
              <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
              {f}
            </li>
          ))}
        </ul>

        <Link
          href="/contact"
          className="inline-flex items-center gap-2.5 bg-primary text-primary-content text-sm font-medium px-6 py-3.5 rounded-full hover:bg-primary/90 transition-all duration-200 hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5 group"
        >
          Book This Service
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 transition-transform group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </motion.div>
  );
}

export default function ServicesSection({ featured = false }) {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-60px" });
  const displayServices = featured ? services.slice(0, 2) : services;

  return (
    <section className="py-24 lg:py-36 bg-base-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div ref={headerRef} className="max-w-2xl mb-16 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-5"
          >
            <span className="w-8 h-px bg-primary" />
            <span className="text-primary text-xs tracking-[0.25em] uppercase font-sans font-medium">
              What I Do
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="text-base-content leading-tight mb-4"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 700,
            }}
          >
            Services built around{" "}
            <span className="text-primary">your garden.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-base-content/60 font-sans leading-relaxed"
          >
            Every job is done properly, with care. Here's what I offer across
            Hertfordshire — no subcontractors, just Matt.
          </motion.p>
        </div>

        {/* Services */}
        <div className="space-y-20 lg:space-y-28">
          {displayServices.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>

        {featured && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mt-16"
          >
            <Link
              href="/services"
              className="inline-flex items-center gap-2 border border-primary text-primary font-medium px-8 py-4 rounded-full hover:bg-primary hover:text-primary-content transition-all duration-200 font-sans text-sm"
            >
              View All Services
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
}
