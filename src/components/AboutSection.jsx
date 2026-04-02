"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const values = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
    title: "Reliable & Punctual",
    desc: "I show up on time, every time. No flaking, no excuses.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
      </svg>
    ),
    title: "Friendly & Approachable",
    desc: "No jargon, no fuss. Just a good chat and honest work.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
      </svg>
    ),
    title: "Quality Results",
    desc: "I take pride in every job, big or small. Your garden deserves the best.",
  },
];

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-24 lg:py-36 bg-base-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative pb-0 lg:pb-8"
          >
            {/* Main image */}
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-base-200">
              <Image
                src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&q=80"
                alt="Matt working in a garden"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Decorative overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute bottom-4 right-4 lg:-bottom-6 lg:-right-10 bg-primary text-primary-content rounded-2xl p-4 lg:p-6 shadow-2xl shadow-primary/30 max-w-[150px] lg:max-w-[180px]"
            >
              <p
                className="text-2xl lg:text-3xl font-bold leading-none mb-1"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                10+
              </p>
              <p className="text-[10px] lg:text-xs text-primary-content/70 font-sans leading-snug uppercase tracking-wider">
                Years of hands-on experience
              </p>
            </motion.div>

            {/* Decorative element */}
            <div className="absolute -top-4 -left-4 w-24 h-24 rounded-full bg-primary/8 -z-10 hidden lg:block" />
            <div className="absolute top-1/3 -left-8 w-3 h-3 rounded-full bg-primary/40 hidden lg:block" />
          </motion.div>

          {/* Text side */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-3 mb-5"
            >
              <span className="w-8 h-px bg-primary" />
              <span className="text-primary text-xs tracking-[0.25em] uppercase font-sans font-medium">
                About Matt
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="text-base-content mb-6 leading-tight"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 700,
              }}
            >
              A local touch,{" "}
              <span className="text-primary">professional results.</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="space-y-4 text-base-content/65 font-sans leading-relaxed text-base mb-10"
            >
              <p>
                Hi, I'm Matt — a one-man gardening operation based right here in
                Hertfordshire. I've been transforming outdoor spaces for over a decade,
                and I still love every bit of it.
              </p>
              <p>
                There's no team of strangers turning up to your home. When you book with
                Matt's Gardens, you get me — the same friendly face every time, with the
                same commitment to doing a proper job.
              </p>
              <p>
                Whether it's a quick tidy-up or a full garden clearance, I treat every
                garden like my own.
              </p>
            </motion.div>

            {/* Values */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="space-y-4"
            >
              {values.map((v, i) => (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.65 + i * 0.1 }}
                  className="flex gap-4 p-4 rounded-xl bg-base-200/50 border border-base-300/40 hover:border-primary/20 hover:bg-primary/5 transition-all duration-200 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary/20 transition-colors">
                    {v.icon}
                  </div>
                  <div>
                    <p className="font-semibold text-base-content text-sm mb-0.5 font-sans">
                      {v.title}
                    </p>
                    <p className="text-base-content/55 text-sm font-sans">{v.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
