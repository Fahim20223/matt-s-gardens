"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Video Background */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        src="/video/hero-video.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />

      {/* Noise texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: "256px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-3xl flex flex-col justify-center min-h-screen">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 mb-4"
          >
            <span className="text-[#8fbf7a] text-xs tracking-[0.25em] uppercase font-medium">
              Hertfordshire's Trusted Gardener
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-white mb-4 leading-tight"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.6rem, 4vw, 3rem)",
              fontWeight: 600,
              letterSpacing: "-0.01em",
            }}
          >
            Your Garden,{" "}
            <em className="not-italic text-[#a8d08d]">Transformed.</em>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-white/70 text-base md:text-lg leading-relaxed mb-8 max-w-xl"
          >
            From hedge trimming to full garden clearances — Matt brings a
            personal, reliable service to every outdoor space across
            Hertfordshire.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="flex flex-wrap gap-4"
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 bg-[#5a8a3c] text-white text-sm font-medium px-6 py-3 rounded-full hover:bg-[#4a7a2c] transition-all duration-300 hover:shadow-lg hover:shadow-green-900/30 hover:-translate-y-0.5 group"
            >
              Get a Free Quote
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>

            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-white/80 text-sm font-medium px-6 py-3 rounded-full border border-white/20 hover:border-white/50 hover:text-white hover:bg-white/5 transition-all duration-300"
            >
              View Services
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 right-10 hidden lg:flex flex-col items-center gap-2"
      >
        <span className="text-white/40 text-[10px] tracking-[0.2em] uppercase rotate-90 mb-4">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8 }}
          className="w-px h-10 bg-gradient-to-b from-white/40 to-transparent"
        />
      </motion.div>
    </section>
  );
}
