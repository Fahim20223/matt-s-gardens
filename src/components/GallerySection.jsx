"use client";
import { useState, useRef, useCallback, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Garden Clearance",
    location: "St Albans",
    before: "/images/Before_1.jpg",
    after: "/images/After_1.jpg",
    beforeFallback:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80",
    afterFallback:
      "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&q=80",
  },
  {
    id: 2,
    title: "Hedge & Tidy",
    location: "Welwyn Garden City",
    before: "/images/Before_2.jpg",
    after: "/images/After_2.jpg",
    beforeFallback:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    afterFallback:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80",
  },
  {
    id: 3,
    title: "Patio Jet Wash",
    location: "Stevenage",
    before: "/images/Before_3.jpg",
    after: "/images/After_3.jpg",
    beforeFallback:
      "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=800&q=80",
    afterFallback:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80",
  },
];

function BeforeAfterSlider({ project }) {
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const updateSlider = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setSliderPos((x / rect.width) * 100);
  }, []);

  const handleMouseMove = useCallback(
    (e) => {
      if (isDragging) updateSlider(e.clientX);
    },
    [isDragging, updateSlider],
  );
  const handleTouchMove = useCallback(
    (e) => {
      if (isDragging) updateSlider(e.touches[0].clientX);
    },
    [isDragging, updateSlider],
  );
  const stopDrag = () => setIsDragging(false);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", stopDrag);
      window.addEventListener("touchmove", handleTouchMove);
      window.addEventListener("touchend", stopDrag);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", stopDrag);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", stopDrag);
    };
  }, [isDragging, handleMouseMove, handleTouchMove]);

  return (
    <div
      ref={containerRef}
      className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-base-200 cursor-col-resize select-none"
      onMouseMove={handleMouseMove}
      onMouseUp={stopDrag}
    >
      {/* After image (full width) */}
      <div className="absolute inset-0">
        <Image
          src={project.after}
          alt="After"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
          onError={(e) => {
            e.currentTarget.src = project.afterFallback;
          }}
        />
        <div className="absolute top-4 right-4 bg-primary text-primary-content text-xs font-medium px-3 py-1.5 rounded-full font-sans tracking-wider uppercase">
          After
        </div>
      </div>

      {/* Before image (clipped) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${sliderPos}%` }}
      >
        <Image
          src={project.before}
          alt="Before"
          fill
          // className="object-cover"
          className="object-cover pointer-events-none select-none"
          // style={{ width: `${10000 / sliderPos}%`, maxWidth: "none" }}
          sizes="(max-width: 768px) 100vw, 33vw"
          onError={(e) => {
            e.currentTarget.src = project.beforeFallback;
          }}
        />
        <div className="absolute top-4 left-4 bg-black/60 text-white text-xs font-medium px-3 py-1.5 rounded-full font-sans tracking-wider uppercase">
          Before
        </div>
      </div>

      {/* Divider handle */}
      <div
        className="absolute inset-y-0 flex items-center justify-center"
        style={{ left: `${sliderPos}%`, transform: "translateX(-50%)" }}
        onMouseDown={(e) => {
          e.preventDefault();
          setIsDragging(true);
        }}
        onTouchStart={(e) => {
          e.preventDefault();
          setIsDragging(true);
        }}
      >
        <div className="w-px h-full bg-white/60" />
        <div className="absolute w-10 h-10 bg-white rounded-full shadow-2xl flex items-center justify-center cursor-grab active:cursor-grabbing">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 9l-3 3 3 3m8-6l3 3-3 3"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function GallerySection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="py-24 lg:py-36 bg-base-200/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="max-w-2xl mb-14 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-5"
          >
            <span className="w-8 h-px bg-primary" />
            <span className="text-primary text-xs tracking-[0.25em] uppercase font-sans font-medium">
              The Work
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.8,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-base-content leading-tight mb-4"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 700,
            }}
          >
            Before & After — <span className="text-primary">real results.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base-content/60 font-sans"
          >
            Drag the slider to see the transformation. These are real jobs from
            around Hertfordshire.
          </motion.p>
        </div>

        {/* Sliders grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.12 }}
            >
              <BeforeAfterSlider project={project} />
              <div className="mt-4">
                <h4
                  className="text-base-content font-semibold text-base"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {project.title}
                </h4>
                <p className="text-base-content/50 text-sm font-sans flex items-center gap-1.5 mt-0.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-3.5 h-3.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                    />
                  </svg>
                  {project.location}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
