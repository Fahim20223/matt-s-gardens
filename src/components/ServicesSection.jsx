"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    id: "hedge-trimming",
    number: "01",
    title: "Hedge Trimming",
    tagline: "Precision Hedge Care",
    description:
      "Sharp, healthy hedges every time. Matt handles all types and sizes — with clean-up and waste removal always included.",
    features: [
      "All hedge types & sizes",
      "Waste removal included",
      "Shape & height adjustments",
      "Seasonal scheduling",
    ],
    image:
      "https://t3.ftcdn.net/jpg/05/34/34/92/240_F_534349268_XLErmUsNRNWmBU2f5fBn7z29oP7CNYkW.jpg",
    href: "/services/hedge-trimming",
    accentColor: "#3d6b2c",
    bgAccent: "#eaf2e3",
    tag: "Most Popular",
  },
  {
    id: "garden-clearance",
    number: "02",
    title: "Garden Clearance",
    tagline: "Full Garden Reset",
    description:
      "Overgrown or inherited a mess? Matt clears weeds, debris, and rubbish — leaving you a clean slate. All waste removed responsibly.",
    features: [
      "Full or partial clearances",
      "Waste removal included",
      "Same-day quotes",
      "Before & after photos",
    ],
    image:
      "https://images.ctfassets.net/5kq8dse7hipf/4PHD3b9MqaxeSom0gjOeJE/463ba7f65610e41e259ed8028943641d/garden-clearance-cost-featured.jpeg",
    href: "/services/garden-clearance",
    accentColor: "#8b6340",
    bgAccent: "#f5ede3",
    tag: null,
  },
  {
    id: "tree-work",
    number: "03",
    title: "Small Tree Work",
    tagline: "Light Tree Surgery",
    description:
      "Crown reduction, deadwood removal, basic pruning — done safely and neatly. Fruit trees, ornamentals, or anything getting too large.",
    features: [
      "Crown reduction & shaping",
      "Deadwood removal",
      "Stump grinding available",
      "Safe working practice",
    ],
    image:
      "https://greenpinetreeservice.com/wp-content/uploads/2024/05/front-yard-1210x423.jpg",
    href: "/services/tree-work",
    accentColor: "#3d6b2c",
    bgAccent: "#eaf2e3",
    tag: null,
  },
  {
    id: "garden-maintenance",
    number: "04",
    title: "Garden Maintenance",
    tagline: "Ongoing Garden Care",
    description:
      "Regular visits to keep everything in order year-round. Flexible fortnightly or monthly plans tailored to your garden.",
    features: [
      "Fortnightly or monthly visits",
      "Seasonal care plans",
      "Weeding & general upkeep",
      "Fully tailored",
    ],
    image:
      "https://grdcentre.com/assets/powerhouse/uploads/images/maintenence3.jpg",
    href: "/services/garden-maintenance",
    accentColor: "#3d6b2c",
    bgAccent: "#eaf2e3",
    tag: "Recommended",
  },
  {
    id: "lawn-care",
    number: "05",
    title: "Lawn Care",
    tagline: "Grass Cutting & Health",
    description:
      "A lush, well-edged lawn transforms the whole garden. Regular mowing, edging, and treatments to keep yours looking its best.",
    features: [
      "Regular mowing & edging",
      "Scarifying & aerating",
      "Lawn treatments",
      "Stripe finishing on request",
    ],
    image:
      "https://www.thespruce.com/thmb/gIE2azGLSJr84LCnTm-8XIbAuWs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/spring-lawn-care-2132455-09-df14429ef98948e69439952f6e7287fa.jpg",
    href: "/services/lawn-care",
    accentColor: "#3d6b2c",
    bgAccent: "#eaf2e3",
    tag: null,
  },
  {
    id: "planting",
    number: "06",
    title: "Planting & Borders",
    tagline: "Colour & Structure",
    description:
      "Seasonal planting, border tidying, and new bed creation. Matt will bring colour and structure to any part of your garden.",
    features: [
      "Seasonal planting",
      "Border weeding & edging",
      "New bed preparation",
      "Plant advice included",
    ],
    image:
      "https://assets.rhs.org.uk/05836e9f-2692-012f-b4fe-e3f22d127fa9/406e1cbd-00a0-4c5f-b268-51091954c5ea/blue-and-yellow-border.jpg?w=1200&fit=clip&fm=jpg&auto=format",
    href: "/services/planting",
    accentColor: "#8b6340",
    bgAccent: "#f5ede3",
    tag: null,
  },
];

function ServiceCard({ service, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
        delay: (index % 3) * 0.1,
      }}
      className="group relative bg-white rounded-2xl overflow-hidden flex flex-col"
      style={{
        boxShadow: "0 2px 20px rgba(0,0,0,0.07)",
        border: "1px solid #ede9e1",
      }}
    >
      {/* Image */}
      <div
        className="relative overflow-hidden"
        style={{ aspectRatio: "16/10" }}
      >
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.35) 0%, transparent 55%)",
          }}
        />
        {/* Number */}
        <span
          className="absolute bottom-3 left-4 text-white/30 font-bold leading-none select-none"
          style={{ fontFamily: "'Playfair Display', serif", fontSize: 56 }}
        >
          {service.number}
        </span>
        {/* Tag */}
        {service.tag && (
          <span
            className="absolute top-3 right-3 text-white text-xs font-semibold px-3 py-1 rounded-full"
            style={{
              background: service.accentColor,
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            {service.tag}
          </span>
        )}
        {/* Accent bar */}
        <div
          className="absolute bottom-0 left-0 right-0 h-0.5"
          style={{ background: service.accentColor }}
        />
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-6">
        <span
          className="text-xs font-semibold uppercase tracking-widest mb-2"
          style={{
            color: service.accentColor,
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          {service.tagline}
        </span>

        <h3
          className="text-xl font-bold mb-3 leading-snug"
          style={{ fontFamily: "'Playfair Display', serif", color: "#1a2e12" }}
        >
          {service.title}
        </h3>

        <p
          className="text-sm leading-relaxed mb-5"
          style={{ fontFamily: "'DM Sans', sans-serif", color: "#5c6b50" }}
        >
          {service.description}
        </p>

        <ul className="grid grid-cols-2 gap-x-3 gap-y-1.5 mb-6">
          {service.features.map((f) => (
            <li key={f} className="flex items-center gap-1.5">
              <div
                className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{ background: service.accentColor }}
              />
              <span
                className="text-xs font-medium"
                style={{
                  color: "#4a5c3f",
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                {f}
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-auto flex items-center justify-between">
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200 hover:opacity-85 hover:-translate-y-0.5"
            style={{
              background: service.accentColor,
              fontFamily: "'DM Sans', sans-serif",
              boxShadow: `0 4px 14px ${service.accentColor}38`,
            }}
          >
            Book Now
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </Link>

          <Link
            href={service.href}
            className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wide transition-all duration-200 hover:gap-2"
            style={{
              color: service.accentColor,
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            Details
            <svg
              className="w-3 h-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default function ServicesSection({ featured = false }) {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-60px" });
  const displayServices = featured ? services.slice(0, 3) : services;

  return (
    <section className="bg-white px-5 md:px-10 pt-20 pb-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div
          ref={headerRef}
          className="flex flex-wrap justify-between items-end gap-5 mb-12"
        >
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              className="flex items-center gap-2.5 mb-4"
            >
              <div className="w-8 h-8 rounded-full bg-[#eaf2e3] flex items-center justify-center">
                <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4">
                  <path
                    d="M10 17C10 17 4 12.5 4 8C4 5.5 6.7 3.5 10 3.5C13.3 3.5 16 5.5 16 8C16 12.5 10 17 10 17Z"
                    fill="#3d6b2c"
                  />
                </svg>
              </div>
              <span
                className="text-xs font-semibold uppercase tracking-widest text-[#3d6b2c]"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                What We Do
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.12 }}
              className="text-4xl lg:text-5xl font-bold leading-tight"
              style={{
                fontFamily: "'Playfair Display', serif",
                color: "#1a2e12",
              }}
            >
              Our Services, Built Around{" "}
              <span className="text-[#3d6b2c]">Your Garden</span>
            </motion.h2>
          </div>

          {featured && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={headerInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
            >
              <Link
                href="/services"
                className="inline-flex items-center gap-2 border border-[#c8bfaf] text-[#3a4a30] text-sm font-medium px-5 py-2.5 rounded-full transition-all hover:border-[#3d6b2c] hover:text-[#3d6b2c]"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                All Services
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </motion.div>
          )}
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayServices.map((s, i) => (
            <ServiceCard key={s.id} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
