import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, ArrowRight, CheckCircle2, Factory, Package, ShieldCheck, Truck, Users, Menu, X, MessageCircle, MapPinned } from "lucide-react";

function FacebookIcon({ className = "h-5 w-5" }) {
  return <span className={`${className} inline-flex items-center justify-center rounded-full bg-current text-[10px] font-black`} aria-hidden="true"><span className="text-white">f</span></span>;
}

const logoUrl = "https://lh3.googleusercontent.com/p/AF1QipN-esWgY33d5bS3REara_BSsZmnim8KJ_tGFw1E=w243-h244-n-k-no-nu";
const facebookUrl = "https://www.facebook.com/p/Plastmasterss-Manufacturing-Inc-100076153209329/";
const messengerUrl = "https://m.me/100076153209329";
const mapsUrl = "https://www.google.com/maps/search/?api=1&query=Plastmasterss+Manufacturing+Inc+Blk+11+Lot+11+Global+Aseana+Business+Park+2+Brgy+Mexico+2015+Pampanga";
const mapEmbedUrl = "https://www.google.com/maps?q=Plastmasterss%20Manufacturing%20Inc%20Blk%2011%20Lot%2011%20Global%20Aseana%20Business%20Park%202%20Brgy%20Mexico%202015%20Pampanga&output=embed";
const facebookPluginUrl = `https://www.facebook.com/plugins/page.php?href=${encodeURIComponent(facebookUrl)}&tabs=timeline&width=500&height=620&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true`;

const products = [
  { name: "PET Bottles", desc: "Clear, durable plastic bottles for water, beverages, sauces, oils, and liquid products.", specs: "250ml, 350ml, 500ml, 1L and more", visual: "pet" },
  { name: "HDPE Gallons", desc: "Strong gallon containers for food ingredients, cleaning solutions, chemicals, and industrial use.", specs: "Half gallon, 1 gallon and custom requirements", visual: "gallon" },
  { name: "PP Jars", desc: "Premium polypropylene jars ideal for peanut butter, spreads, powders, dry goods, and supplements.", specs: "Multiple jar sizes with secure caps", visual: "jar" },
  { name: "Caps & Closures", desc: "Secure sealing solutions designed for dependable packaging performance.", specs: "Orange, white, blue and custom closure options", visual: "caps" },
];

function ProductVisual({ type, large = false }) {
  const size = large ? "scale-110" : "scale-100";
  if (type === "gallon") return (
    <div className={`relative h-40 w-36 ${size}`} aria-hidden="true">
      <div className="absolute left-14 top-1 h-7 w-12 rounded-t-xl bg-white shadow-inner ring-1 ring-blue-100" />
      <div className="absolute left-8 top-8 h-28 w-28 rounded-[2rem] bg-gradient-to-br from-white via-blue-50 to-slate-100 shadow-xl ring-1 ring-blue-100" />
      <div className="absolute left-16 top-10 h-12 w-12 rounded-full border-[10px] border-slate-200 bg-transparent" />
    </div>
  );
  if (type === "jar") return (
    <div className={`relative h-40 w-32 ${size}`} aria-hidden="true">
      <div className="absolute left-8 top-5 h-5 w-16 rounded-t-lg bg-orange-500 shadow" />
      <div className="absolute left-6 top-10 h-24 w-20 rounded-b-3xl rounded-t-lg bg-gradient-to-br from-white via-slate-100 to-slate-200 shadow-xl ring-1 ring-slate-200" />
      <div className="absolute left-9 top-16 h-10 w-14 rounded-xl bg-white/60" />
    </div>
  );
  if (type === "caps") return (
    <div className={`relative flex h-40 w-40 items-center justify-center gap-3 ${size}`} aria-hidden="true">
      {["bg-orange-500", "bg-blue-600", "bg-white"].map((color) => (
        <div key={color} className="flex flex-col items-center">
          <div className={`h-7 w-14 rounded-t-lg ${color} shadow ring-1 ring-slate-200`} />
          <div className="h-9 w-14 rounded-b-xl bg-slate-100 shadow-inner ring-1 ring-slate-200" />
        </div>
      ))}
    </div>
  );
  return (
    <div className={`relative flex h-40 w-40 items-end justify-center gap-2 ${size}`} aria-hidden="true">
      {[24, 32, 40, 48].map((height, index) => (
        <div key={`pet-bottle-${index}`} className="relative flex flex-col items-center">
          <div className="h-5 w-8 rounded-t-md bg-white shadow ring-1 ring-blue-100" />
          <div className="rounded-t-xl bg-gradient-to-br from-blue-100 via-white to-blue-200 shadow-xl ring-1 ring-blue-200" style={{ height: `${height * 2}px`, width: index === 0 ? 30 : 40 }} />
        </div>
      ))}
    </div>
  );
}

const benefits = [
  [Factory, "Manufacturing Expertise", "Quality-controlled plastic packaging production from Mexico, Pampanga."],
  [Package, "Bulk Order Ready", "Built for dealers, resellers, distributors, and growing business owners."],
  [ShieldCheck, "Reliable Quality", "Durable packaging designed to protect your products and your brand reputation."],
  [Truck, "Responsive Supply", "Fast inquiry handling and dependable production coordination."],
];

const industries = ["Food Manufacturing", "Beverages", "Cosmetics", "Household Products", "Industrial Supplies", "Retail Distribution"];
const faqs = [
  ["Do you accept bulk orders?", "Yes. Plastmasters Manufacturing Inc. accepts wholesale and large-volume packaging requirements."],
  ["Where are you located?", "We are a plastic manufacturing plant located in Mexico, Pampanga."],
  ["What products do you manufacture?", "We manufacture PET bottles, HDPE gallons, PP jars, and caps & closures."],
  ["How can I request pricing?", "Call 0917 163 8921 or email plastmasters.mfg@gmail.com for quotation details."],
  ["Do you work with dealers and resellers?", "Yes. We welcome inquiries from dealers, resellers, distributors, and business owners looking for reliable plastic packaging supply."],
];

const legalContent = {
  privacy: { title: "Privacy Policy", body: "Plastmasters Manufacturing Inc. collects contact information only when you voluntarily submit an inquiry by phone, email, or website form. We use this information to respond to quotation requests, confirm product requirements, and coordinate packaging inquiries. We do not sell personal information." },
  terms: { title: "Terms of Use", body: "Website content is provided for general company and product information. Product availability, specifications, pricing, production lead times, and delivery arrangements must be confirmed directly with Plastmasters Manufacturing Inc. through an official quotation." },
};

function Button({ children, variant = "primary", href = "#contact", as: Tag = "a", ...rest }) {
  const base = "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition focus:outline-none focus:ring-4 focus:ring-blue-200";
  const styles = variant === "primary" ? "bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-600/20" : "bg-white text-blue-800 hover:bg-blue-50 border border-blue-100";
  return <Tag href={Tag === "a" ? href : undefined} className={`${base} ${styles}`} {...rest}>{children}</Tag>;
}

export default function PlastmastersWebsite() {
  const [open, setOpen] = useState(false);
  const [legalModal, setLegalModal] = useState(null);
  const nav = ["Products", "Why Us", "Process", "About", "FAQ", "Contact"];

  useEffect(() => {
    document.title = "Plastmasters Manufacturing Inc. | PET & HDPE Packaging Manufacturer in Pampanga";
    const setMeta = (name, content, attr = "name") => {
      let tag = document.querySelector(`meta[${attr}="${name}"]`);
      if (!tag) { tag = document.createElement("meta"); tag.setAttribute(attr, name); document.head.appendChild(tag); }
      tag.setAttribute("content", content);
    };
    setMeta("description", "Plastmasters Manufacturing Inc. is an SEC-registered plastic products supplier in Mexico, Pampanga specializing in PET bottles, HDPE containers, PP jars, caps, closures, and packaging development.");
    setMeta("og:title", "Plastmasters Manufacturing Inc. | Plastic Packaging Manufacturer", "property");
    setMeta("og:description", "PET bottles, HDPE gallons, PP jars, caps, and closures from Mexico, Pampanga.", "property");
    setMeta("og:type", "website", "property");
    setMeta("og:image", logoUrl, "property");
    setMeta("og:image:width", "243", "property");
    setMeta("og:image:height", "244", "property");
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:image", logoUrl);
    setMeta("robots", "index, follow");

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) { canonical = document.createElement("link"); canonical.setAttribute("rel", "canonical"); document.head.appendChild(canonical); }
    canonical.setAttribute("href", window.location.origin + window.location.pathname);

    const existingSchema = document.getElementById("ld-json-schema");
    if (existingSchema) existingSchema.remove();
    const schema = document.createElement("script");
    schema.type = "application/ld+json";
    schema.id = "ld-json-schema";
    schema.textContent = JSON.stringify([
      { "@context": "https://schema.org", "@type": "LocalBusiness", name: "Plastmasters Manufacturing Inc.", image: logoUrl, address: { "@type": "PostalAddress", streetAddress: "Blk 11 Lot 11, Global Aseana Business Park 2, Brgy. Mexico", addressLocality: "Mexico", postalCode: "2015", addressRegion: "Pampanga", addressCountry: "PH" }, telephone: "+639171638921", email: "plastmasters.mfg@gmail.com", areaServed: "Philippines", makesOffer: products.map((product) => ({ "@type": "Offer", itemOffered: { "@type": "Product", name: product.name, description: product.desc } })) },
      { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(([question, answer]) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })) }
    ]);
    document.head.appendChild(schema);
    return () => schema.remove();
  }, []);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">

      {/* ── HEADER ── */}
      <header className="sticky top-0 z-50 border-b border-white/40 bg-white/85 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8" aria-label="Main navigation">
          <a href="#home" className="flex items-center gap-3" aria-label="Plastmasters Manufacturing Inc. home">
            <img src={logoUrl} alt="Plastmasters Manufacturing Inc. logo" className="h-14 w-auto rounded-xl object-contain" width="160" height="56" loading="eager" decoding="async" />
          </a>
          <div className="hidden items-center gap-8 md:flex">
            {nav.map((item) => <a key={item} href={`#${item.toLowerCase().replace(/\s+/g, "-")}`} className="text-sm font-medium text-slate-600 hover:text-blue-700">{item}</a>)}
            <Button href="#contact">Request Quote</Button>
          </div>
          <button onClick={() => setOpen(!open)} className="rounded-xl p-2 focus:outline-none focus:ring-4 focus:ring-blue-200 md:hidden" aria-label="Toggle menu" aria-expanded={open} aria-controls="mobile-menu">{open ? <X /> : <Menu />}</button>
        </nav>
        {open && <div id="mobile-menu" className="border-t bg-white px-5 py-4 md:hidden">{nav.map((item) => <a key={item} href={`#${item.toLowerCase().replace(/\s+/g, "-")}`} onClick={() => setOpen(false)} className="block py-3 font-medium text-slate-700">{item}</a>)}</div>}
      </header>

      {/* ── HERO ── */}
      <section id="home" className="relative overflow-hidden bg-[radial-gradient(circle_at_top_right,#dbeafe,transparent_35%),linear-gradient(135deg,#ffffff,#eff6ff)]">
        <div className="absolute -right-24 top-28 h-72 w-72 rounded-full bg-blue-200/50 blur-3xl" />
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-[1.05fr_.95fr] lg:px-8 lg:py-28">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="mb-6 inline-flex items-center gap-3 rounded-2xl bg-white/80 px-4 py-3 shadow-sm ring-1 ring-blue-100">
              <img src={logoUrl} alt="Plastmasters Manufacturing Inc. logo" className="h-12 w-auto rounded-lg object-contain" width="140" height="48" loading="eager" decoding="async" />
              <span className="text-sm font-bold text-blue-800">Plastic Packaging Manufacturer in Pampanga</span>
            </div>
            <h1 className="max-w-4xl text-5xl font-black tracking-tight text-blue-950 md:text-7xl">PET Bottles, HDPE Containers, PP Jars & Closures Manufactured in Pampanga</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">Plastmasters Manufacturing Inc. is an SEC-registered plastic products supplier in Pampanga with over 40 years of experience in the plastic industry, specializing in general packaging PET and HDPE bottles, product conceptualization, and packaging development.</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button href="#contact">Request a Quote <ArrowRight className="h-4 w-4" /></Button>
              <Button href="tel:09171638921" variant="secondary"><Phone className="h-4 w-4" /> Call 0917 163 8921</Button>
            </div>
            <div className="mt-10 grid max-w-2xl grid-cols-2 gap-4 text-sm font-semibold text-slate-700 md:grid-cols-3">
              {industries.slice(0, 6).map((item) => <div key={item} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-blue-600" />{item}</div>)}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.1 }} className="relative">
            <div className="rounded-[2rem] bg-gradient-to-br from-blue-700 to-blue-950 p-6 shadow-2xl shadow-blue-900/20">
              <div className="rounded-[1.5rem] bg-white/10 p-5 ring-1 ring-white/20">
                <div className="grid gap-4 sm:grid-cols-2">
                  {products.map((p) => <div key={p.name} className="rounded-3xl bg-white p-5 shadow-xl shadow-blue-950/10"><div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-700"><Package /></div><h3 className="text-lg font-extrabold text-blue-950">{p.name}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{p.desc}</p><p className="mt-4 text-xs font-bold uppercase tracking-wider text-blue-600">{p.specs}</p></div>)}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── PRODUCTS ── */}
      <section id="products" className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="max-w-2xl">
          <p className="font-bold text-blue-700">Our Products</p>
          <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">Packaging made for real business demand.</h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">From food-grade jars to durable gallons, we support packaging requirements for distributors, manufacturers, and retail businesses.</p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {products.map((p) => <article key={p.name} className="group rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"><div className="mb-6 flex h-44 items-center justify-center rounded-3xl bg-gradient-to-br from-blue-50 via-white to-slate-100"><ProductVisual type={p.visual} /></div><h3 className="text-xl font-extrabold text-blue-950">{p.name}</h3><p className="mt-3 text-sm leading-6 text-slate-600">{p.desc}</p><p className="mt-4 text-xs font-bold uppercase tracking-wider text-blue-600">{p.specs}</p></article>)}
        </div>
      </section>

      {/* ── WHY US ── */}
      <section id="why-us" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
            <div>
              <p className="font-bold text-blue-700">Why Choose Plastmasters</p>
              <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">A dependable partner for dealers, resellers, and business owners.</h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">We focus on practical packaging solutions, responsive communication, and consistent manufacturing quality.</p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {benefits.map(([Icon, title, text]) => <div key={title} className="rounded-[2rem] bg-slate-50 p-6 ring-1 ring-slate-100"><Icon className="h-8 w-8 text-blue-600" /><h3 className="mt-5 text-lg font-extrabold text-blue-950">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{text}</p></div>)}
            </div>
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section id="process" className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="rounded-[2rem] bg-blue-950 p-8 text-white md:p-12">
          <p className="font-bold text-blue-200">Simple Process</p>
          <h2 className="mt-3 text-4xl font-black tracking-tight">From inquiry to production coordination.</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-4">
            {["Send Requirements", "Receive Quote", "Production Planning", "Quality Check & Delivery"].map((step, i) => <div key={step} className="rounded-3xl bg-white/10 p-6 ring-1 ring-white/10"><p className="text-3xl font-black text-blue-200">0{i + 1}</p><h3 className="mt-4 font-extrabold">{step}</h3><p className="mt-2 text-sm leading-6 text-blue-100">Clear coordination to help your business secure the right packaging supply.</p></div>)}
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2 lg:px-8">
          <div className="rounded-[2rem] bg-gradient-to-br from-blue-100 to-white p-8 ring-1 ring-blue-100">
            <Users className="h-12 w-12 text-blue-700" />
            <h2 className="mt-6 text-4xl font-black tracking-tight text-blue-950">Over 40 Years of Plastic Manufacturing Expertise</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">Plastmasters Manufacturing Inc. is an SEC-registered company in the Philippines with over 40 years of experience in the plastic industry. We specialize in general packaging PET and HDPE bottles, PP jars, caps and closures, product conceptualization, and packaging development for businesses nationwide.</p>
          </div>
          <div className="space-y-5">
            {["Factory-direct plastic packaging supply", "Products for food, beverage, household, cosmetic, and industrial use", "Ideal for dealers, resellers, and business owners", "Professional quotation support through phone and email"].map((item) => <div key={item} className="flex gap-4 rounded-3xl border border-slate-200 bg-slate-50 p-5"><CheckCircle2 className="h-6 w-6 shrink-0 text-blue-600" /><p className="font-semibold text-slate-700">{item}</p></div>)}
          </div>
        </div>
      </section>

      {/* ── PARTNERS ── */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {["Dealers", "Resellers", "Business Owners"].map((label) => <div key={label} className="rounded-[2rem] bg-white p-8 text-center shadow-sm ring-1 ring-slate-100"><h3 className="text-4xl font-black text-blue-700">{label}</h3><p className="mt-3 text-slate-600">We are looking for long-term partners and packaging buyers.</p></div>)}
        </div>
      </section>

      {/* ── GALLERY ── */}
      <section id="gallery" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid items-end gap-8 md:grid-cols-[1fr_auto]">
            <div>
              <p className="font-bold text-blue-700">Product Gallery</p>
              <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">Bottle and container visuals built for a clean website look.</h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">These are custom no-watermark product-style visuals for the website. They can be replaced anytime with actual Plastmasters product photos.</p>
            </div>
            <a href={facebookUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-6 py-3 font-bold text-blue-800 hover:bg-blue-100 focus:outline-none focus:ring-4 focus:ring-blue-100"><FacebookIcon className="h-5 w-5" /> View Facebook Page</a>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-4">
            {products.map((product) => <div key={product.name} className="rounded-[2rem] bg-slate-50 p-6 text-center ring-1 ring-slate-100"><div className="flex h-56 items-center justify-center rounded-3xl bg-gradient-to-br from-white to-blue-50"><ProductVisual type={product.visual} large /></div><h3 className="mt-5 text-lg font-extrabold text-blue-950">{product.name}</h3><p className="mt-2 text-sm text-slate-600">{product.specs}</p></div>)}
          </div>
        </div>
      </section>

      {/* ── FACEBOOK ── */}
      <section id="facebook" className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="rounded-[2rem] bg-gradient-to-br from-blue-700 to-blue-950 p-6 text-white md:p-10">
          <div className="grid gap-10 lg:grid-cols-[.82fr_1.18fr]">
            <div>
              <p className="font-bold text-blue-200">Facebook Feed</p>
              <h2 className="mt-3 text-4xl font-black tracking-tight">Latest posts from Plastmasters' Facebook page.</h2>
              <p className="mt-5 text-lg leading-8 text-blue-100">Visitors can see Plastmasters's Facebook timeline directly on the website, then follow the page or send a Messenger inquiry.</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={facebookUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 font-bold text-blue-900 hover:bg-blue-50 focus:outline-none focus:ring-4 focus:ring-white/30"><FacebookIcon className="h-5 w-5" /> Open Facebook Page</a>
                <a href={messengerUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-500 px-6 py-3 font-bold text-white hover:bg-blue-400 focus:outline-none focus:ring-4 focus:ring-white/30"><MessageCircle className="h-5 w-5" /> Message on Messenger</a>
              </div>
            </div>
            <div className="overflow-hidden rounded-[1.75rem] bg-white p-3 shadow-2xl shadow-blue-950/20">
              <noscript><div className="flex h-[620px] items-center justify-center bg-slate-100 p-6 text-center"><p className="text-slate-700">JavaScript is disabled. <a href={facebookUrl} className="text-blue-700 underline">View our Facebook Page</a></p></div></noscript>
              <iframe title="Plastmasters Manufacturing Inc. Facebook page timeline" src={facebookPluginUrl} className="h-[620px] w-full rounded-[1.25rem] border-0" loading="lazy" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" />
            </div>
          </div>
        </div>
      </section>

      {/* ── LOCATION ── */}
      <section id="location" className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-[.82fr_1.18fr] lg:px-8">
          <div>
            <p className="font-bold text-blue-700">Google Map</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight">Find Plastmasters Manufacturing Inc. in Mexico, Pampanga.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">Address: Blk 11 Lot 11, Global Aseana Business Park 2, Brgy. Mexico, 2015 Pampanga.</p>
            <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3 font-bold text-white hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-200"><MapPinned className="h-5 w-5" /> Open in Google Maps</a>
          </div>
          <div className="overflow-hidden rounded-[2rem] bg-slate-100 p-3 shadow-xl ring-1 ring-slate-200">
            <iframe title="Google Map showing Plastmasters Manufacturing Inc. in Mexico Pampanga" src={mapEmbedUrl} className="h-[420px] w-full rounded-[1.5rem] border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="bg-blue-950 py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[.9fr_1.1fr] lg:px-8">
          <div>
            <p className="font-bold text-blue-200">Request a Quote</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">Tell us what packaging you need.</h2>
            <p className="mt-5 text-lg leading-8 text-blue-100">Contact Plastmasters Manufacturing Inc. for PET bottles, HDPE gallons, PP jars, caps, and closures.</p>
            <div className="mt-8 space-y-4">
              <a href="tel:09171638921" className="flex items-center gap-3 text-lg font-bold"><Phone className="h-5 w-5" />0917 163 8921</a>
              <a href="mailto:plastmasters.mfg@gmail.com" className="flex items-center gap-3 text-lg font-bold"><Mail className="h-5 w-5" />plastmasters.mfg@gmail.com</a>
              <p className="flex items-center gap-3 text-lg font-bold"><MapPin className="h-5 w-5" />Blk 11 Lot 11, Global Aseana Business Park 2, Brgy. Mexico, 2015 Pampanga</p>
            </div>
          </div>
          <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" className="rounded-[2rem] bg-white p-6 text-slate-950 shadow-2xl" aria-label="Quote request form">
            <input name="_gotcha" type="text" className="hidden" tabIndex={-1} aria-hidden="true" />
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="block"><label htmlFor="input-name" className="text-sm font-bold">Name</label><input id="input-name" name="name" autoComplete="name" required className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:ring-4 focus:ring-blue-100" placeholder="Your name" /></div>
              <div className="block"><label htmlFor="input-phone" className="text-sm font-bold">Phone</label><input id="input-phone" name="phone" type="tel" autoComplete="tel" required className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:ring-4 focus:ring-blue-100" placeholder="Contact number" /></div>
              <div className="block sm:col-span-2"><label htmlFor="input-email" className="text-sm font-bold">Email</label><input id="input-email" name="email" type="email" autoComplete="email" required className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:ring-4 focus:ring-blue-100" placeholder="you@company.com" /></div>
              <div className="block sm:col-span-2"><label htmlFor="input-product" className="text-sm font-bold">Product Needed</label><select id="input-product" name="product" required autoComplete="off" className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:ring-4 focus:ring-blue-100"><option>PET Bottles</option><option>HDPE Gallons</option><option>PP Jars</option><option>Caps & Closures</option><option>Multiple Products</option></select></div>
              <div className="block sm:col-span-2"><label htmlFor="input-message" className="text-sm font-bold">Message</label><textarea id="input-message" name="message" required autoComplete="off" className="mt-2 min-h-32 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:ring-4 focus:ring-blue-100" placeholder="Share sizes, quantity, and delivery location." /></div>
            </div>
            <button type="submit" className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-4 font-bold text-white hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-200">Submit Inquiry <ArrowRight className="h-4 w-4" /></button>
            <p className="mt-4 text-center text-xs text-slate-500">We'll receive your inquiry directly in email.</p>
          </form>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          <h2 className="text-center text-4xl font-black tracking-tight">Frequently asked questions</h2>
          <div className="mt-10 space-y-4">
            {faqs.map(([q, a]) => (
              <details key={q} className="rounded-3xl border border-slate-200 bg-slate-50 p-6" aria-label={q}>
                <summary className="cursor-pointer font-extrabold text-blue-950" role="button">{q}</summary>
                <p className="mt-3 leading-7 text-slate-600">
                  {q === "How can I request pricing?"
                    ? <>Call 0917 163 8921 or email <a href="mailto:plastmasters.mfg@gmail.com" className="text-blue-700 underline">plastmasters.mfg@gmail.com</a> for quotation details.</>
                    : a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between lg:px-8">
          <p>© {new Date().getFullYear()} Plastmasters Manufacturing Inc. All rights reserved.</p>
          <div className="flex gap-5">
            <button type="button" onClick={() => setLegalModal("privacy")} className="rounded-lg hover:text-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-100">Privacy Policy</button>
            <button type="button" onClick={() => setLegalModal("terms")} className="rounded-lg hover:text-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-100">Terms</button>
          </div>
        </div>
      </footer>

      {/* ── LEGAL MODAL ── */}
      {legalModal && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-950/60 px-5 py-8" role="dialog" aria-modal="true" aria-labelledby="legal-modal-title">
          <div className="max-w-lg rounded-[2rem] bg-white p-6 text-slate-950 shadow-2xl">
            <div className="flex items-start justify-between gap-6">
              <h2 id="legal-modal-title" className="text-2xl font-black text-blue-950">{legalContent[legalModal].title}</h2>
              <button type="button" onClick={() => setLegalModal(null)} className="rounded-xl p-2 text-slate-500 hover:bg-slate-100 focus:outline-none focus:ring-4 focus:ring-blue-100" aria-label="Close legal information"><X className="h-5 w-5" /></button>
            </div>
            <p className="mt-4 leading-7 text-slate-600">{legalContent[legalModal].body}</p>
            <button type="button" onClick={() => setLegalModal(null)} className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-blue-600 px-5 py-3 font-bold text-white hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-200">Close</button>
          </div>
        </div>
      )}
    </main>
  );
}
