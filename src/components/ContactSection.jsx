"use client";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const services = [
  "Hedge Trimming",
  "Garden Clearance",
  "Small Tree Work",
  "Jet Washing",
  "Not Sure — Just Get in Touch",
];

export default function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section ref={ref} className="py-24 lg:py-36 bg-base-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20 items-start">
          {/* Left info */}
          <div className="lg:sticky lg:top-28">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-5"
            >
              <span className="w-8 h-px bg-primary" />
              <span className="text-primary text-xs tracking-[0.25em] uppercase font-sans font-medium">
                Get in Touch
              </span>
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
              Let's talk about{" "}
              <span className="text-primary">your garden.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base-content/60 font-sans leading-relaxed mb-10 text-base"
            >
              Got a question or ready to book? Drop me a message and I'll get back
              to you within 24 hours. No hard sell, no obligation.
            </motion.p>

            {/* Contact details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="space-y-4"
            >
              {[
                {
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                    </svg>
                  ),
                  label: "Phone",
                  value: "07700 000 000",
                },
                {
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                  ),
                  label: "Email",
                  value: "hello@mattsgardens.co.uk",
                },
                {
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                  ),
                  label: "Location",
                  value: "Hertfordshire, UK",
                },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs text-base-content/40 font-sans uppercase tracking-wider mb-0.5">{item.label}</p>
                    <p className="text-base-content/80 text-sm font-sans font-medium">{item.value}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Availability badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-8 inline-flex items-center gap-2.5 bg-primary/8 border border-primary/15 rounded-full px-4 py-2.5"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-primary text-xs font-medium font-sans">
                Currently taking new bookings
              </span>
            </motion.div>
          </div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="bg-base-200/40 border border-base-300/50 rounded-3xl p-8 lg:p-10"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-16 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-primary/15 flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                </div>
                <h3
                  className="text-base-content text-2xl font-bold mb-2"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Message Sent!
                </h3>
                <p className="text-base-content/60 font-sans text-sm max-w-xs">
                  Thanks for getting in touch. Matt will get back to you within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-medium text-base-content/60 uppercase tracking-wider font-sans mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Smith"
                      className="w-full bg-base-100 border border-base-300 rounded-xl px-4 py-3.5 text-base-content placeholder-base-content/30 text-sm font-sans focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/10 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-base-content/60 uppercase tracking-wider font-sans mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="07700 000 000"
                      className="w-full bg-base-100 border border-base-300 rounded-xl px-4 py-3.5 text-base-content placeholder-base-content/30 text-sm font-sans focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/10 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-base-content/60 uppercase tracking-wider font-sans mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full bg-base-100 border border-base-300 rounded-xl px-4 py-3.5 text-base-content placeholder-base-content/30 text-sm font-sans focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/10 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-base-content/60 uppercase tracking-wider font-sans mb-2">
                    Service Needed
                  </label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="w-full bg-base-100 border border-base-300 rounded-xl px-4 py-3.5 text-base-content text-sm font-sans focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/10 transition-all appearance-none cursor-pointer"
                  >
                    <option value="">Select a service…</option>
                    {services.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-base-content/60 uppercase tracking-wider font-sans mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tell me a bit about your garden and what you need…"
                    className="w-full bg-base-100 border border-base-300 rounded-xl px-4 py-3.5 text-base-content placeholder-base-content/30 text-sm font-sans focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/10 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-primary-content font-medium py-4 rounded-xl hover:bg-primary/90 transition-all duration-200 hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5 font-sans text-sm tracking-wide"
                >
                  Send Message
                </button>

                <p className="text-center text-xs text-base-content/35 font-sans">
                  No spam, ever. I'll only use your details to get back to you.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
