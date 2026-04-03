"use client";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { use } from "react";

const services = {
  "hedge-trimming": {
    number: "01",
    title: "Hedge Trimming",
    tagline: "Precision Hedge Care",
    tag: "Most Popular",
    accentColor: "#3d6b2c",
    bgAccent: "#eaf2e3",
    image: "https://t3.ftcdn.net/jpg/05/34/34/92/240_F_534349268_XLErmUsNRNWmBU2f5fBn7z29oP7CNYkW.jpg",
    summary: "Sharp, healthy hedges every time. Matt handles all types and sizes — with clean-up and waste removal always included.",
    description: "A well-maintained hedge does more than look good — it defines your garden's structure, provides privacy, and adds real kerb appeal. Matt has been trimming hedges of all shapes and sizes across Hertfordshire for over eight years. Whether it's a small front garden privet or a long boundary leylandii, you'll get clean lines, a tidy finish, and all waste removed before he leaves.",
    features: [
      "All hedge types & sizes",
      "Waste removal included",
      "Shape & height adjustments",
      "Seasonal scheduling available",
      "Boundary & privacy hedges",
      "Same-day quotes",
    ],
    faqs: [
      { q: "How often should hedges be trimmed?", a: "Most hedges benefit from 1–2 cuts per year. Fast-growing species like leylandii may need more frequent attention." },
      { q: "Do you remove all the clippings?", a: "Yes — all clippings and waste are loaded and taken away as standard. No mess left behind." },
      { q: "Can you reshape an overgrown hedge?", a: "Absolutely. Matt can bring overgrown hedges back under control and reshape them to your preference." },
    ],
  },
  "garden-clearance": {
    number: "02",
    title: "Garden Clearance",
    tagline: "Full Garden Reset",
    tag: null,
    accentColor: "#8b6340",
    bgAccent: "#f5ede3",
    image: "https://images.ctfassets.net/5kq8dse7hipf/4PHD3b9MqaxeSom0gjOeJE/463ba7f65610e41e259ed8028943641d/garden-clearance-cost-featured.jpeg",
    summary: "Overgrown or inherited a mess? Matt clears weeds, debris, and rubbish — leaving you a clean slate.",
    description: "Whether you've let things go over winter, inherited an overgrown plot, or just need a fresh start before a redesign — Matt will clear it all. Weeds, old plants, rubbish, debris — everything goes. He works efficiently, takes care around anything you want to keep, and leaves the space clean and ready for whatever comes next.",
    features: [
      "Full or partial clearances",
      "Waste removal included",
      "Same-day quotes available",
      "Before & after photos",
      "Works around plants to keep",
      "Responsible disposal",
    ],
    faqs: [
      { q: "How long does a clearance take?", a: "It depends on the size and condition of the garden. Most residential clearances are completed in a single day." },
      { q: "Can I keep certain plants?", a: "Of course. Just let Matt know what you'd like to keep and he'll work carefully around them." },
      { q: "Do you dispose of waste responsibly?", a: "Yes — all green waste and rubbish is disposed of responsibly and legally. No fly-tipping, ever." },
    ],
  },
  "tree-work": {
    number: "03",
    title: "Small Tree Work",
    tagline: "Light Tree Surgery",
    tag: null,
    accentColor: "#3d6b2c",
    bgAccent: "#eaf2e3",
    image: "https://greenpinetreeservice.com/wp-content/uploads/2024/05/front-yard-1210x423.jpg",
    summary: "Crown reduction, deadwood removal, basic pruning — done safely and neatly.",
    description: "Trees add character to any garden, but they need managing. Matt handles small tree work including crown reduction, deadwood removal, and basic pruning. Whether it's a fruit tree that needs a seasonal tidy, an ornamental that's outgrown its space, or a young tree that needs shaping — Matt will bring it back under control safely and neatly.",
    features: [
      "Crown reduction & shaping",
      "Deadwood removal",
      "Stump grinding available",
      "Safe & tidy working practice",
      "Fruit tree pruning",
      "Waste removal included",
    ],
    faqs: [
      { q: "What size trees do you work on?", a: "Matt handles small to medium trees that don't require specialist climbing equipment or a full arborist team." },
      { q: "Do I need permission to have a tree pruned?", a: "In most cases no, but if your tree has a TPO (Tree Preservation Order) or is in a conservation area, you may need council approval first." },
      { q: "Is stump grinding always necessary?", a: "Not always — it depends on your plans for the space. Matt will advise on the best approach for your situation." },
    ],
  },
  "garden-maintenance": {
    number: "04",
    title: "Garden Maintenance",
    tagline: "Ongoing Garden Care",
    tag: "Recommended",
    accentColor: "#3d6b2c",
    bgAccent: "#eaf2e3",
    image: "https://grdcentre.com/assets/powerhouse/uploads/images/maintenence3.jpg",
    summary: "Regular visits to keep everything in order year-round. Flexible fortnightly or monthly plans.",
    description: "A garden that's looked after regularly stays manageable, healthy, and looking great all year. Matt offers flexible maintenance plans — fortnightly or monthly — tailored to your garden's needs and the season. From weeding and pruning to general tidying and seasonal tasks, he'll keep on top of everything so you don't have to.",
    features: [
      "Fortnightly or monthly visits",
      "Seasonal care plans",
      "Weeding & general upkeep",
      "Fully tailored to your garden",
      "Pruning & deadheading",
      "Consistent, reliable service",
    ],
    faqs: [
      { q: "How do I set up a regular schedule?", a: "Just get in touch and Matt will come out for a free visit, assess your garden, and suggest a plan that works for you." },
      { q: "Can I pause or cancel visits?", a: "Yes — Matt is flexible. If you're going away or need to skip a visit, just let him know in advance." },
      { q: "What's included in a maintenance visit?", a: "It varies by season and garden, but typically includes weeding, pruning, edging, and general tidying. Matt will agree a scope with you upfront." },
    ],
  },
  "lawn-care": {
    number: "05",
    title: "Lawn Care",
    tagline: "Grass Cutting & Health",
    tag: null,
    accentColor: "#3d6b2c",
    bgAccent: "#eaf2e3",
    image: "https://www.thespruce.com/thmb/gIE2azGLSJr84LCnTm-8XIbAuWs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/spring-lawn-care-2132455-09-df14429ef98948e69439952f6e7287fa.jpg",
    summary: "A lush, well-edged lawn transforms the whole garden. Regular mowing, edging, and treatments.",
    description: "A healthy, well-kept lawn is the foundation of a great garden. Matt provides regular mowing and edging to keep your grass looking sharp, as well as seasonal treatments like scarifying and aerating to improve lawn health over time. Stripe finishing available on request for that classic, professional look.",
    features: [
      "Regular mowing & edging",
      "Scarifying & aerating",
      "Lawn treatments",
      "Stripe finishing on request",
      "Moss & weed control",
      "Seasonal lawn care",
    ],
    faqs: [
      { q: "How often should a lawn be mowed?", a: "During the growing season (spring–autumn), most lawns benefit from mowing every 1–2 weeks. Matt can set up a regular schedule." },
      { q: "What is scarifying?", a: "Scarifying removes the layer of dead grass and moss (thatch) that builds up over time, allowing the lawn to breathe and absorb nutrients better." },
      { q: "Can you fix a patchy or damaged lawn?", a: "Yes — Matt can overseed bare patches and advise on treatments to improve overall lawn health." },
    ],
  },
  "planting": {
    number: "06",
    title: "Planting & Borders",
    tagline: "Colour & Structure",
    tag: null,
    accentColor: "#8b6340",
    bgAccent: "#f5ede3",
    image: "https://assets.rhs.org.uk/05836e9f-2692-012f-b4fe-e3f22d127fa9/406e1cbd-00a0-4c5f-b268-51091954c5ea/blue-and-yellow-border.jpg?w=1200&fit=clip&fm=jpg&auto=format",
    summary: "Seasonal planting, border tidying, and new bed creation. Colour and structure for any garden.",
    description: "The right planting transforms a garden from tidy to truly beautiful. Matt can help with seasonal planting, border weeding and edging, and creating new beds from scratch. He'll work with your existing garden style and give honest advice on what will thrive in your soil and conditions — no unnecessary upselling.",
    features: [
      "Seasonal planting",
      "Border weeding & edging",
      "New bed preparation",
      "Plant advice included",
      "Bulb planting",
      "Soil preparation",
    ],
    faqs: [
      { q: "Can you advise on what to plant?", a: "Yes — Matt will give honest, practical advice on plants that will thrive in your garden's conditions, soil type, and aspect." },
      { q: "Do you supply the plants?", a: "Matt can source plants on your behalf or work with plants you've already purchased — whichever you prefer." },
      { q: "When is the best time to plant?", a: "It depends on the plant type. Spring and autumn are generally the best planting seasons, but Matt will advise based on what you want to grow." },
    ],
  },
};

export default function ServiceDetailPage({ params }) {
  const { slug } = use(params);
  const service = services[slug];
  if (!service) notFound();

  return (
    <main style={{ background: "#faf7f2", minHeight: "100vh" }}>

      {/* Hero */}
      <div style={{ position: "relative", height: "clamp(260px,35vw,420px)", overflow: "hidden" }}>
        <Image src={service.image} alt={service.title} fill style={{ objectFit: "cover" }} sizes="100vw" priority />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(26,46,18,.55) 0%, rgba(26,46,18,.75) 100%)" }} />
        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "0 24px" }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p style={{ color: "rgba(255,255,255,.5)", fontSize: ".72rem", letterSpacing: ".18em", textTransform: "uppercase", marginBottom: 12 }}>
              <Link href="/" style={{ color: "inherit", textDecoration: "none" }}>Home</Link>
              {" › "}
              <Link href="/services" style={{ color: "inherit", textDecoration: "none" }}>Services</Link>
              {" › "}
              <span style={{ color: "rgba(255,255,255,.8)" }}>{service.title}</span>
            </p>
            {service.tag && (
              <span style={{ display: "inline-block", background: service.accentColor, color: "#fff", fontSize: ".7rem", fontWeight: 600, letterSpacing: ".12em", textTransform: "uppercase", padding: "4px 14px", borderRadius: 99, marginBottom: 14, fontFamily: "'DM Sans', sans-serif" }}>
                {service.tag}
              </span>
            )}
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem,5vw,3.6rem)", color: "#fff", fontWeight: 700, lineHeight: 1.1, marginBottom: 10 }}>
              {service.title}
            </h1>
            <p style={{ color: "rgba(255,255,255,.65)", fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(.9rem,2vw,1.05rem)", maxWidth: 520 }}>
              {service.summary}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "clamp(40px,7vw,80px) clamp(20px,5vw,48px)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: "clamp(32px,5vw,64px)", alignItems: "start" }} className="detail-grid">

          {/* Left */}
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }}>

            {/* About */}
            <div style={{ background: "#fff", borderRadius: 20, padding: "clamp(24px,4vw,40px)", border: "1px solid #ede9e1", marginBottom: 24 }}>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.4rem,2.5vw,1.9rem)", color: "#1a2e12", marginBottom: 16 }}>
                About This Service
              </h2>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15.5, color: "#5c6b50", lineHeight: 1.78, fontWeight: 300 }}>
                {service.description}
              </p>
            </div>

            {/* Features */}
            <div style={{ background: "#fff", borderRadius: 20, padding: "clamp(24px,4vw,40px)", border: "1px solid #ede9e1", marginBottom: 24 }}>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.4rem,2.5vw,1.9rem)", color: "#1a2e12", marginBottom: 20 }}>
                What&apos;s Included
              </h2>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px,1fr))", gap: "12px 24px" }}>
                {service.features.map((f) => (
                  <div key={f} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <div style={{ width: 28, height: 28, borderRadius: "50%", background: service.bgAccent, border: `1.5px solid ${service.accentColor}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <svg width="11" height="11" viewBox="0 0 16 16" fill="none">
                        <path d="M3 8l4 4 6-7" stroke={service.accentColor} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: "#3a4a30", fontWeight: 500 }}>{f}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQs */}
            <div style={{ background: "#fff", borderRadius: 20, padding: "clamp(24px,4vw,40px)", border: "1px solid #ede9e1" }}>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.4rem,2.5vw,1.9rem)", color: "#1a2e12", marginBottom: 20 }}>
                Common Questions
              </h2>
              <div>
                {service.faqs.map((faq, i) => (
                  <div key={i} style={{ borderBottom: i < service.faqs.length - 1 ? "1px solid #ede9e1" : "none", paddingBottom: i < service.faqs.length - 1 ? 20 : 0, marginBottom: i < service.faqs.length - 1 ? 20 : 0 }}>
                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, fontWeight: 600, color: "#1a2e12", marginBottom: 8 }}>{faq.q}</p>
                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14.5, color: "#5c6b50", lineHeight: 1.7, fontWeight: 300 }}>{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — sticky sidebar */}
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.25 }} style={{ position: "sticky", top: 96 }} className="detail-sidebar">

            {/* Book card */}
            <div style={{ background: "#fff", borderRadius: 20, padding: 28, border: "1px solid #ede9e1", marginBottom: 16 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                <div style={{ width: 36, height: 36, borderRadius: "50%", background: service.bgAccent, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg viewBox="0 0 20 20" fill="none" style={{ width: 16, height: 16 }}>
                    <path d="M10 17C10 17 4 12.5 4 8C4 5.5 6.7 3.5 10 3.5C13.3 3.5 16 5.5 16 8C16 12.5 10 17 10 17Z" fill={service.accentColor} />
                  </svg>
                </div>
                <div>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, color: "#8b9c7e", textTransform: "uppercase", letterSpacing: ".12em" }}>Service</p>
                  <p style={{ fontFamily: "'Playfair Display', serif", fontSize: 16, fontWeight: 700, color: "#1a2e12" }}>{service.title}</p>
                </div>
              </div>

              <div style={{ background: "#faf7f2", borderRadius: 12, padding: "12px 16px", marginBottom: 16 }}>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, color: "#8b9c7e", textTransform: "uppercase", letterSpacing: ".12em", marginBottom: 4 }}>Pricing</p>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: "#3a4a30", fontWeight: 500 }}>Free quote — no obligation</p>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 20 }}>
                <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#3d6b2c", display: "block", flexShrink: 0 }} />
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "#2f5422", fontWeight: 600 }}>Currently taking bookings</span>
              </div>

              <Link href="/contact" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, background: service.accentColor, color: "#fff", fontFamily: "'DM Sans', sans-serif", fontSize: 15, fontWeight: 600, padding: "14px", borderRadius: 12, textDecoration: "none", boxShadow: `0 4px 16px ${service.accentColor}35`, marginBottom: 10 }}>
                Get a Free Quote
                <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </Link>
              <a href="tel:+441234567890" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, background: service.bgAccent, color: service.accentColor, fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 600, padding: "12px", borderRadius: 12, textDecoration: "none" }}>
                📞 07700 000 000
              </a>
            </div>

            {/* Other services */}
            <div style={{ background: "#fff", borderRadius: 20, padding: 24, border: "1px solid #ede9e1" }}>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, fontWeight: 600, color: "#8b9c7e", textTransform: "uppercase", letterSpacing: ".14em", marginBottom: 14 }}>Other Services</p>
              {Object.entries(services).filter(([k]) => k !== slug).slice(0, 4).map(([k, s]) => (
                <Link key={k} href={`/services/${k}`} style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 0", borderBottom: "1px solid #f0ece5", textDecoration: "none" }}>
                  <div style={{ width: 8, height: 8, borderRadius: "50%", background: s.accentColor, flexShrink: 0 }} />
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: "#3a4a30", fontWeight: 500 }}>{s.title}</span>
                </Link>
              ))}
              <Link href="/services" style={{ display: "block", textAlign: "center", marginTop: 14, fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: service.accentColor, fontWeight: 600, textDecoration: "none" }}>
                View All Services →
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 860px) {
          .detail-grid { grid-template-columns: 1fr !important; }
          .detail-sidebar { position: static !important; }
        }
      `}</style>
    </main>
  );
}
