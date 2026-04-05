"use client";

import React, { useState, useEffect } from "react";
import { MessageCircle, Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const WHATSAPP_NUMBER = "919831013846";
  const getWhatsAppLink = (message) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;
      setScrollProgress(Number(scroll) * 100);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div id="progress" style={{ width: `${scrollProgress}%` }}></div>

      <nav className="sticky top-0 z-50 w-full h-[64px] flex items-center bg-[#0D1B2A]/92 backdrop-blur-[12px] border-b border-[#C8D6E5]/15 transition-all">
        <div className="max-w-[1100px] w-full mx-auto flex items-center justify-between px-6 lg:px-10">
          <Link href="/" className="font-cormorant text-2xl tracking-widest text-[var(--off-white)] font-bold">OTTIS</Link>

          <div className="hidden md:flex items-center gap-8 text-[13px] uppercase tracking-[0.08em] font-semibold">
            <a href="#boutique" className="text-[var(--steel)] hover:text-[var(--off-white)] pb-1 border-b-2 border-transparent hover:border-[var(--accent)] transition-colors h-[48px] flex items-center">The Boutique</a>
            <a href="#warehouse" className="text-[var(--steel)] hover:text-[var(--off-white)] pb-1 border-b-2 border-transparent hover:border-[var(--accent)] transition-colors h-[48px] flex items-center">Wholesale/B2B</a>
            <a href="#legacy" className="text-[var(--steel)] hover:text-[var(--off-white)] pb-1 border-b-2 border-transparent hover:border-[var(--accent)] transition-colors h-[48px] flex items-center">Our Roots</a>
            <a href="#contact" className="text-[var(--steel)] hover:text-[var(--off-white)] pb-1 border-b-2 border-transparent hover:border-[var(--accent)] transition-colors h-[48px] flex items-center">Contact</a>
          </div>

          <button
            className="md:hidden p-2 text-[var(--off-white)] cursor-pointer relative z-50 focus:outline-none min-h-[48px] min-w-[48px] flex items-center justify-center"
            onClick={(e) => {
              e.preventDefault();
              setIsMobileMenuOpen(!isMobileMenuOpen);
            }}
            aria-label="Toggle menu"
          >
            <Menu size={28} />
          </button>
        </div>
      </nav>

      <div 
        className={`fixed inset-0 bg-black/60 z-[60] transition-opacity duration-300 md:hidden ${isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={() => setIsMobileMenuOpen(false)}
      ></div>

      <div 
        className={`fixed top-0 left-0 h-full w-[75vw] max-w-[280px] bg-[var(--navy)] border-r border-[var(--silver)] z-[70] transform transition-transform duration-300 ease-in-out md:hidden flex flex-col ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex items-center justify-between p-6 mt-2">
          <Link href="/" className="font-cormorant text-2xl tracking-widest text-[var(--off-white)] font-bold">OTTIS</Link>
          <button onClick={() => setIsMobileMenuOpen(false)} className="text-[var(--off-white)] p-2 min-h-[48px] min-w-[48px] flex items-center justify-center">
            <X size={28} />
          </button>
        </div>
        <div className="flex flex-col mt-8 px-6 text-[13px] uppercase tracking-widest font-semibold">
          <a href="#boutique" onClick={() => setIsMobileMenuOpen(false)} className="text-[var(--off-white)] py-4 border-b border-[var(--silver)]/10 flex items-center min-h-[48px]">The Boutique</a>
          <a href="#warehouse" onClick={() => setIsMobileMenuOpen(false)} className="text-[var(--off-white)] py-4 border-b border-[var(--silver)]/10 flex items-center min-h-[48px]">Wholesale/B2B</a>
          <a href="#legacy" onClick={() => setIsMobileMenuOpen(false)} className="text-[var(--off-white)] py-4 border-b border-[var(--silver)]/10 flex items-center min-h-[48px]">Our Roots</a>
          <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="text-[var(--off-white)] py-4 flex items-center min-h-[48px]">Contact</a>
        </div>
      </div>

      <main className="w-full bg-[var(--navy)]">

        <section className="relative w-full min-h-[100svh] md:min-h-[90vh] flex flex-col items-center justify-center text-center px-[24px] overflow-hidden bg-[var(--navy)]">
          <div className="absolute inset-0 z-0">
            <img src="https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80" alt="Minimalist Signature EDP Bottle" className="w-full h-full object-cover object-center" />
          </div>
          <div className="absolute inset-0 transition-opacity bg-gradient-to-b from-[#0D1B2A]/55 to-[#0D1B2A]/85 z-0"></div>

          <div className="z-10 flex flex-col items-center max-w-4xl mt-0 w-full">
            <h1 className="text-[clamp(2.2rem,6vw,4rem)] font-cormorant font-bold text-[var(--off-white)] mb-4 -tracking-[0.01em] leading-tight">
              OTTIS PERFUMERY.
            </h1>
            <p className="text-[clamp(1rem,2.5vw,1.25rem)] font-cormorant italic text-[var(--silver)] max-w-[560px] leading-[1.6] mb-6">
              &quot;Authentic Artistry. Affordable Luxury.<br/>From the Heart of Pollock Street.&quot;
            </p>
            <div className="h-[1px] w-[120px] bg-[var(--silver)]/30 mx-auto mb-10"></div>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a href="#boutique" className="bg-[var(--accent)] text-[var(--navy)] rounded-[4px] px-[28px] py-[14px] font-semibold tracking-[0.05em] transition-all duration-200 hover:bg-[var(--silver)] hover:-translate-y-[2px] hover:shadow-[0_4px_20px_rgba(168,197,232,0.3)] w-full sm:w-auto text-center min-h-[48px] flex items-center justify-center">
                Shop Collection
              </a>
              <a href={getWhatsAppLink("Hi Ottis Perfumery, I'd like to schedule a fragrance consultation.")} target="_blank" rel="noreferrer" className="bg-transparent border border-[var(--silver)] text-[var(--off-white)] rounded-[4px] px-[28px] py-[14px] font-semibold tracking-[0.05em] transition-all duration-200 hover:bg-[var(--silver)]/10 hover:-translate-y-[2px] w-full sm:w-auto text-center min-h-[48px] flex items-center justify-center">
                WhatsApp Consultation
              </a>
            </div>
          </div>
        </section>

        <section id="boutique" className="bg-[var(--midnight)] py-[80px] px-[24px] md:py-[100px] md:px-[40px]">
          <div className="max-w-[1100px] mx-auto">
            <div className="text-center mb-[60px] md:mb-[80px]">
              <h2 className="font-cormorant text-[var(--off-white)] font-bold mb-4 flex justify-center items-center gap-3">
                <span className="w-[24px] h-[1px] bg-[var(--accent)] inline-block"></span>The Fragrance Boutique
              </h2>
              <p className="text-[0.75rem] tracking-[0.15em] uppercase text-[var(--steel)]">Consumer Retail Collections</p>
            </div>

            <div className="mb-[100px]">
              <h3 className="text-2xl font-cormorant text-[var(--off-white)] mb-8 border-b border-[var(--silver)]/10 pb-4 flex items-center gap-3">
                <span className="w-[24px] h-[1px] bg-[var(--accent)] inline-block"></span> Pure Attars
              </h3>
              <div className="grid grid-cols-1 gap-6 min-[480px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                {[
                  { name: "Rose", file: "rose.avif" },
                  { name: "Sandalwood", file: "sandalwood.avif" },
                  { name: "Oud", file: "oudchips.webp" },
                  { name: "Khas", file: "vetiver.avif" },
                  { name: "Mitti", file: "mitti.avif" }
                ].map((attar) => (
                  <div key={attar.name} className="group bg-[var(--midnight)] border border-[rgba(200,214,229,0.12)] rounded-[12px] overflow-hidden transition-all duration-250 hover:border-[var(--accent)]/40 hover:-translate-y-[4px] hover:shadow-[0_8px_32px_rgba(0,0,0,0.4)] flex flex-col h-full">
                    <img src={`/images/${attar.file}`} alt={`${attar.name} Attar`} loading="lazy" className="w-[100%] aspect-[4/3] object-cover filter brightness-90 group-hover:brightness-[1.05] transition-all duration-250" />
                    <div className="flex-1 flex flex-col items-center">
                      <h4 className="text-[1rem] font-semibold text-[var(--off-white)] p-[16px] pb-[6px] w-[100%] text-center">{attar.name}</h4>
                    </div>
                    <a href={getWhatsAppLink(`Hi Ottis Perfumery, I am interested in purchasing the ${attar.name} Pure Attar.`)} target="_blank" rel="noreferrer" className="w-[100%] bg-transparent border-t border-[rgba(200,214,229,0.1)] text-[var(--accent)] p-[12px] text-[0.85rem] tracking-[0.05em] text-center transition-all duration-200 hover:bg-[#A8C5E8]/10 min-h-[48px] flex items-center justify-center font-inter uppercase mt-4">
                      Inquire
                    </a>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-cormorant text-[var(--off-white)] mb-8 border-b border-[var(--silver)]/10 pb-4 flex items-center gap-3">
                <span className="w-[24px] h-[1px] bg-[var(--accent)] inline-block"></span> Inspired EDPs <span className="text-[0.75rem] tracking-[0.15em] uppercase text-[var(--steel)] ml-2 whitespace-nowrap">(30ml  100ml)</span>
              </h3>
              <div className="grid grid-cols-1 gap-6 min-[480px]:grid-cols-2 lg:grid-cols-3">
                {[
                  { tier: "Regular", color: "bg-[var(--steel)]" },
                  { tier: "Premium", color: "bg-[var(--accent)]" },
                  { tier: "Signature", color: "bg-[#D4AF37]" }
                ].map((item) => (
                  <div key={item.tier} className="group relative bg-[var(--midnight)] border border-[rgba(200,214,229,0.12)] rounded-[12px] overflow-hidden transition-all duration-250 hover:border-[var(--accent)]/40 hover:-translate-y-[4px] hover:shadow-[0_8px_32px_rgba(0,0,0,0.4)] flex flex-col h-full pt-[3px]">
                    <div className={`absolute top-0 left-0 w-full h-[3px] ${item.color}`}></div>
                    <div className="absolute top-[12px] right-[12px] px-3 py-1 rounded-full border border-[var(--silver)]/20 text-[0.65rem] uppercase tracking-widest text-[var(--silver)] text-center">{item.tier}</div>
                    <div className="p-[24px] pt-[40px] flex-1 flex flex-col items-center">
                      <h4 className="text-[1.1rem] font-semibold text-[var(--off-white)] mb-4 tracking-wider uppercase text-center">{item.tier} Collection</h4>
                    </div>
                    <a href={getWhatsAppLink(`Hi Ottis Perfumery, I would like to explore your ${item.tier} Tier Inspired EDPs.`)} target="_blank" rel="noreferrer" className="w-[100%] bg-transparent border-t border-[rgba(200,214,229,0.1)] text-[var(--accent)] p-[12px] text-[0.85rem] tracking-[0.05em] text-center transition-all duration-200 hover:bg-[#A8C5E8]/10 min-h-[48px] flex items-center justify-center font-inter uppercase">
                      WhatsApp
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="warehouse" className="bg-[var(--navy)] py-[80px] px-[24px] md:py-[100px] md:px-[40px]">
          <div className="max-w-[1100px] mx-auto">
            <div className="text-center mb-[60px] md:mb-[80px]">
              <h2 className="font-cormorant text-[var(--off-white)] font-bold mb-4 flex justify-center items-center gap-3">
                <span className="w-[24px] h-[1px] bg-[var(--accent)] inline-block"></span>The Perfumer&apos;s Warehouse
              </h2>
              <p className="text-[0.75rem] tracking-[0.15em] uppercase text-[var(--steel)]">Wholesale & B2B Connect  Premium Industrial & Corporate Offerings</p>
            </div>

            <div className="grid grid-cols-1 gap-6 min-[480px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {[
                { name: "Perfumery Compounds", file: "sandalwood.avif" },
                { name: "Agarbatti Compounds", file: "agarbatti.avif" },
                { name: "Hand Spray Raw Perfume", file: "sprayperfume.avif" },
                { name: "Cosmetics Compounds", file: "cosmeticCompund.avif" },
                { name: "Soap Compounds", file: "soapCompound.avif" },
                { name: "Hair Oil Compounds", file: "hairoilCompound.avif" },
                { name: "Phenyl Compounds", file: "phenylCompound.avif" }
              ].map((compound) => (
                <div key={compound.name} className="group bg-[var(--midnight)] border border-[rgba(200,214,229,0.12)] rounded-[12px] overflow-hidden transition-all duration-250 hover:border-[var(--accent)]/40 hover:-translate-y-[4px] hover:shadow-[0_8px_32px_rgba(0,0,0,0.4)] flex flex-col h-full">
                  <img src={`/images/${compound.file}`} loading="lazy" alt={compound.name} className="w-[100%] aspect-[4/3] object-cover filter brightness-90 group-hover:brightness-[1.05] transition-all duration-250" />
                  <div className="flex-1 flex flex-col items-center justify-center p-[16px]">
                    <h4 className="text-[1rem] font-semibold text-[var(--off-white)] pb-[6px] w-[100%] text-center">{compound.name}</h4>
                  </div>
                  <a href={getWhatsAppLink(`Hi Ottis Perfumery, I'd like to request a wholesale quote for ${compound.name} for a bulk order.`)} target="_blank" rel="noreferrer" className="w-[100%] bg-transparent border-t border-[rgba(200,214,229,0.1)] text-[var(--accent)] p-[12px] text-[0.85rem] tracking-[0.05em] text-center transition-all duration-200 hover:bg-[#A8C5E8]/10 min-h-[48px] flex items-center justify-center font-inter uppercase mt-2">
                    Inquire
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="legacy" className="bg-[var(--midnight)] py-[80px] px-[24px] md:py-[100px] md:px-[40px] overflow-hidden">
          <div className="max-w-[1100px] mx-auto">
            <div className="text-center mb-[60px] md:mb-[80px] relative z-10">
              <h2 className="font-cormorant text-[var(--off-white)] font-bold mb-4 flex justify-center items-center gap-3">
                <span className="w-[24px] h-[1px] bg-[var(--accent)] inline-block"></span>Our Heritage
              </h2>
              <p className="text-[0.75rem] tracking-[0.15em] uppercase text-[var(--steel)]">A Three-Generation Lineage</p>
            </div>

            <div className="relative space-y-[60px] md:space-y-[80px] z-10">
              {/* Desktop timeline line */}
              <div className="hidden md:block absolute top-[50px] bottom-[50px] left-[50%] w-[2px] border-l-2 border-dashed border-[var(--silver)]/50" style={{ transform: "translateX(-50%)" }}></div>

              <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
                <div className="w-[100%] md:w-1/2 flex justify-center md:justify-end relative">
                  <div className="absolute top-[-20px] left-[10%] md:left-[auto] md:right-[260px] z-20 bg-[var(--royal)] text-[var(--off-white)] w-[40px] h-[40px] rounded-full flex items-center justify-center font-bold text-[1rem]">I</div>
                  <img src="/images/kaderbashaSahib.jpeg" loading="lazy" alt="OT Kader Basha Sahib" className="w-[100%] max-w-[320px] aspect-[4/5] object-cover object-top rounded-[8px] border border-[rgba(200,214,229,0.2)] relative z-10" />
                </div>
                <div className="w-[100%] md:w-1/2 text-center md:text-left md:pr-4">
                  <h3 className="text-[0.75rem] tracking-[0.15em] uppercase text-[var(--steel)] mb-2">The Journey</h3>
                  <h4 className="text-2xl font-cormorant text-[var(--off-white)] mb-4">OT Kader Basha Sahib</h4>
                  <p className="text-base text-[var(--steel)] leading-[1.7]">
                    The story begins with a monumental 1,000-mile journey. From the botanical heartlands of Veerasolam, Tamil Nadu, OT Kader Basha Sahib traveled to Kolkata. Bringing with him generational knowledge and an uncompromising standard for purity, he laid the very foundation of Ottis Perfumery House.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-16">
                <div className="w-[100%] md:w-1/2 flex justify-center md:justify-start relative">
                  <div className="absolute top-[-20px] right-[10%] md:right-[auto] md:left-[260px] z-20 bg-[var(--royal)] text-[var(--off-white)] w-[40px] h-[40px] rounded-full flex items-center justify-center font-bold text-[1rem]">II</div>
                  <img src="/images/otkvellaiameer.jpeg" loading="lazy" alt="OTK Vellai Amir" className="w-[100%] max-w-[320px] aspect-[4/5] object-cover object-top rounded-[8px] border border-[rgba(200,214,229,0.2)] relative z-10" />
                </div>
                <div className="w-[100%] md:w-1/2 text-center md:text-right md:pl-4">
                  <h3 className="text-[0.75rem] tracking-[0.15em] uppercase text-[var(--steel)] mb-2">The Growth</h3>
                  <h4 className="text-2xl font-cormorant text-[var(--off-white)] mb-4">OTK Vellai Amir</h4>
                  <p className="text-base text-[var(--steel)] leading-[1.7]">
                    As Generation II, OTK Vellai Amir deeply rooted the family&apos;s legacy. He expanded the prestigious Pollock Street reputation, cementing Ottis among the finest, most trusted attar merchants in Kolkata while relentlessly guarding the founder&apos;s original recipes.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
                <div className="w-[100%] md:w-1/2 flex justify-center md:justify-end relative">
                  <div className="absolute top-[-20px] left-[10%] md:left-[auto] md:right-[260px] z-20 bg-[var(--royal)] text-[var(--off-white)] w-[40px] h-[40px] rounded-full flex items-center justify-center font-bold text-[1rem]">III</div>
                  <img src="/images/kaderShamshulhaque.jpeg" loading="lazy" alt="Modern Generation" className="w-[100%] max-w-[320px] aspect-[4/5] object-cover object-top rounded-[8px] border border-[rgba(200,214,229,0.2)] relative z-10" />
                </div>
                <div className="w-[100%] md:w-1/2 text-center md:text-left md:pr-4">
                  <h3 className="text-[0.75rem] tracking-[0.15em] uppercase text-[var(--steel)] mb-2">The Future</h3>
                  <h4 className="text-2xl font-cormorant text-[var(--off-white)] mb-4">
                    OT Kader Basha & OT Kader Shamshul Haque <span className="text-[var(--steel)]/80 italic font-cormorant font-normal text-lg">(CEO)</span>
                  </h4>
                  <p className="text-base text-[var(--steel)] leading-[1.7]">
                    Today, the present generation steers the House into a digital-first era. Marrying a century of analog mastery with modern accessibility, they are transforming traditional wholesale excellence into an accessible, beloved lifestyle brand.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

      </main>

      <footer id="contact" className="bg-[#070F1A] text-[var(--steel)] border-t border-[rgba(200,214,229,0.12)] py-16 md:py-20 px-[24px] md:px-[40px]">
        <div className="max-w-[1100px] mx-auto text-center md:text-left">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            
            <div className="flex flex-col md:items-start items-center">
              <h3 className="font-cormorant text-[1.1rem] font-bold text-[var(--off-white)] mb-2 uppercase tracking-widest">OTTIS PERFUMERY</h3>
              <p className="text-[var(--steel)] text-[0.85rem] leading-[1.8] max-w-[300px] mb-4">
                Warm, expert, and deeply rooted in our community.<br/>
                A 3-generation legacy of pristine Indian botanical oils and attars. 
              </p>
              <div className="flex items-center gap-3 text-[0.95rem] min-h-[48px]">
                <MessageCircle size={20} className="text-[#25D366]"/>
                <a href={getWhatsAppLink("Hi Ottis Perfumery, I have a general inquiry about your products and services.")} target="_blank" rel="noreferrer" className="hover:text-[var(--off-white)] text-[var(--accent)] transition">WhatsApp: +91 98310 13846</a>
              </div>
            </div>

            <div className="flex flex-col md:items-start items-center">
              <h4 className="text-[0.85rem] font-bold uppercase tracking-widest mb-4 text-[var(--off-white)] text-center md:text-left">Flagship Store</h4>
              <address className="not-italic text-[0.85rem] leading-[1.8] text-center md:text-left text-[var(--steel)]/90">
                Ground Floor (Near Tea Board),<br/>
                3A, Pollock Street,<br/>
                Kolkata - 700001<br/>
                India
              </address>
              <div className="mt-4 text-[0.85rem] text-center md:text-left">
                <a href="tel:+919831013846" className="text-[var(--accent)] no-underline hover:underline block mb-2 min-h-[48px] flex items-center justify-center md:justify-start">Phone: +91 98310 13846</a>
                <a href="mailto:ottisperfumeryhaque@gmail.com" className="text-[var(--accent)] no-underline hover:underline block min-h-[48px] flex items-center justify-center md:justify-start">Email: ottisperfumeryhaque@gmail.com</a>
              </div>
            </div>

            <div className="flex flex-col md:items-start items-center">
              <h4 className="text-[0.85rem] font-bold uppercase tracking-widest mb-4 text-[var(--off-white)] text-center md:text-left">Quick Links</h4>
              <div className="flex flex-col gap-2 text-[0.85rem] w-[100%] max-w-[200px]">
                <a href="https://instagram.com/ottis_perfumery" target="_blank" rel="noreferrer" className="text-[var(--accent)] no-underline hover:underline min-h-[48px] flex items-center justify-center md:justify-start">Instagram (@ottis_perfumery)</a>
                <a href="#legacy" className="text-[var(--accent)] no-underline hover:underline min-h-[48px] flex items-center justify-center md:justify-start">Heritage Story</a>
                <a href="#warehouse" className="text-[var(--accent)] no-underline hover:underline min-h-[48px] flex items-center justify-center md:justify-start">Wholesale Inquiries</a>
              </div>
            </div>

          </div>
        </div>

        <div className="max-w-[1100px] mx-auto mt-16">
          <div className="border-t border-[rgba(200,214,229,0.08)] pt-6 text-center text-[0.75rem] flex flex-col justify-between items-center gap-4 text-[var(--steel)]">
            <span>&copy; {new Date().getFullYear()} Ottis Perfumery House. All rights reserved.</span>
          </div>
        </div>
      </footer>

      <a 
        href={getWhatsAppLink("Hi Ottis Perfumery, I'm interested in booking a bespoke blending session!")} 
        target="_blank" 
        rel="noreferrer" 
        className="md:hidden fixed bottom-6 right-6 z-[999] bg-[#25D366] text-white w-[52px] h-[52px] rounded-full shadow-[0_4px_16px_rgba(0,0,0,0.4)] transition-transform flex items-center justify-center"
      >
        <MessageCircle size={28} />
      </a>
    </>
  );
}
