import React from "react";
import { MessageCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const WHATSAPP_NUMBER = "919831013846";
  const getWhatsAppLink = (message: string) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  return (
    <>
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full bg-[#0D1B2A] text-[#C8D6E5] p-4 shadow-md bg-opacity-95 backdrop-blur">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="font-georgia text-2xl tracking-widest text-[#C8D6E5]">OTTIS</Link>
          <div className="hidden md:flex gap-8 text-sm uppercase tracking-wider font-semibold">
            <a href="#boutique" className="hover:text-white transition">The Boutique</a>
            <a href="#warehouse" className="hover:text-white transition">Wholesale/B2B</a>
            <a href="#legacy" className="hover:text-white transition">Our Roots</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* Floating WhatsApp */}
      <a href={getWhatsAppLink("Hi Ottis Perfumery, I'm interested in booking a bespoke blending session!")} target="_blank" rel="noreferrer" title="Bespoke Blending Sessions" className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-xl hover:scale-105 transition-transform flex items-center gap-2">
        <MessageCircle size={28} />
      </a>

      {/* Main Content */}
      <main className="w-full bg-[#FAFAFA]">
        
        {/* HERO SECTION & BRAND ENTRY */}
        <section className="relative w-full h-[85vh] flex flex-col items-center justify-center bg-[#0D1B2A] text-center p-6 overflow-hidden">
          {/* High-def minimalist background image */}
          <div className="absolute inset-0 z-0 opacity-40">
            <img src="https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80" alt="Minimalist Signature EDP Bottle" className="w-full h-full object-cover object-center" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A] to-transparent z-0"></div>
          
          <div className="z-10 flex flex-col items-center max-w-4xl mt-12">
            <h1 className="text-5xl md:text-7xl font-georgia mb-6 font-normal tracking-wide leading-tight text-[#C8D6E5]">
              OTTIS PERFUMERY.
            </h1>
            <p className="text-xl md:text-3xl font-garamond italic max-w-3xl mb-12 text-[#C8D6E5]/90">
              "Authentic Artistry. Affordable Luxury.<br/>From the Heart of Pollock Street."
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <a href="#boutique" className="bg-[#C8D6E5] text-[#0D1B2A] px-10 py-4 uppercase tracking-widest text-sm font-semibold hover:bg-white transition duration-300">
                Shop Collection
              </a>
              <a href={getWhatsAppLink("Hi Ottis Perfumery, I'd like to schedule a fragrance consultation.")} target="_blank" rel="noreferrer" className="border border-[#C8D6E5] text-[#C8D6E5] px-10 py-4 uppercase tracking-widest text-sm hover:bg-[#C8D6E5] hover:text-[#0D1B2A] transition duration-300">
                WhatsApp Consultation
              </a>
            </div>
          </div>
        </section>

        {/* 2. PRODUCT ARCHITECTURE */}
        
        {/* The Fragrance Boutique (Consumer Retail) */}
        <section id="boutique" className="py-24 px-6 text-[#0D1B2A]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl font-georgia mb-6 uppercase tracking-widest">The Fragrance Boutique</h2>
              <div className="w-24 h-px bg-[#0D1B2A]/20 mx-auto mb-6"></div>
              <p className="text-2xl italic font-garamond text-gray-600 max-w-2xl mx-auto">Consumer Retail Collections</p>
            </div>

            {/* Pure Attars */}
            <div className="mb-24">
              <h3 className="text-3xl font-georgia mb-10 border-b border-[#0D1B2A]/10 pb-4">Pure Attars</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
                {[
                  { name: 'Rose', file: 'rose.avif' }, 
                  { name: 'Sandalwood', file: 'sandalwood.avif' }, 
                  { name: 'Oud', file: 'oudchips.webp' }, 
                  { name: 'Khas', file: 'vetiver.avif' }, 
                  { name: 'Mitti', file: 'mitti.avif' }
                ].map((attar) => (
                  <div key={attar.name} className="group bg-white border border-gray-100 text-center hover:shadow-xl transition-all duration-300 flex flex-col h-full overflow-hidden">
                    <div className="w-full h-48 bg-gray-100 relative">
                      <img src={`/images/${attar.file}`} alt={`${attar.name} Attar`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <h4 className="text-xl mb-4 font-georgia">{attar.name}</h4>
                      <a href={getWhatsAppLink(`Hi Ottis Perfumery, I am interested in purchasing the ${attar.name} Pure Attar. Could you provide more details and pricing?`)} target="_blank" rel="noreferrer" className="mt-auto text-xs uppercase tracking-widest border-b border-[#0D1B2A] pb-1 hover:text-[#a54f4f] hover:border-[#a54f4f] transition inline-block mx-auto">
                        Inquire on WhatsApp
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Inspired EDPs */}
            <div>
              <h3 className="text-3xl font-georgia mb-10 border-b border-[#0D1B2A]/10 pb-4">Inspired EDPs <span className="text-lg font-garamond text-gray-500 italic lowercase ml-4">(30ml – 100ml)</span></h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {['Regular', 'Premium', 'Signature'].map((tier) => (
                  <div key={tier} className="bg-white border border-gray-100 p-10 flex flex-col items-center hover:shadow-xl transition duration-500">
                    <h4 className="text-2xl mb-2 font-georgia uppercase tracking-widest">{tier} Tier</h4>
                    <div className="w-12 h-px bg-[#a54f4f] my-6"></div>
                    <p className="text-center text-gray-600 font-garamond mb-10 text-lg">Finely crafted EDP formulations for daily luxury, available in versatile 30ml to 100ml sizing.</p>
                    <a href={getWhatsAppLink(`Hi Ottis Perfumery, I would like to explore your ${tier} Tier Inspired EDPs. Please share the catalog and prices.`)} target="_blank" rel="noreferrer" className="bg-[#0D1B2A] text-[#C8D6E5] px-8 py-3 text-sm uppercase tracking-widest hover:bg-black transition w-full text-center">
                      Inquire on WhatsApp
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* The Perfumer's Warehouse (Wholesale/B2B) */}
        <section id="warehouse" className="py-24 bg-[#EBE9E1] px-6 text-[#0D1B2A] border-t border-gray-300">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-georgia mb-6 uppercase tracking-widest">The Perfumer&apos;s Warehouse</h2>
              <div className="w-24 h-px bg-[#0D1B2A]/20 mx-auto mb-6"></div>
              <p className="text-2xl italic font-garamond text-gray-700 max-w-3xl mx-auto">Wholesale &amp; B2B Connect — Premium Industrial &amp; Corporate Offerings</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[
                { name: 'Perfumery Compounds', file: 'sandalwood.avif' }, 
                { name: 'Agarbatti Compounds', file: 'agarbatti.avif' }, 
                { name: 'Hand Spray Raw Perfume', file: 'sprayperfume.avif' }, 
                { name: 'Cosmetics Compounds', file: 'cosmeticCompund.avif' }, 
                { name: 'Soap Compounds', file: 'soapCompound.avif' }, 
                { name: 'Hair Oil Compounds', file: 'hairoilCompound.avif' }, 
                { name: 'Phenyl Compounds', file: 'phenylCompound.avif' }
              ].map((compound) => (
                <div key={compound.name} className="bg-[#FAFAFA] text-center flex flex-col items-center shadow-sm border border-gray-200 hover:border-[#0D1B2A] transition duration-300 overflow-hidden group">
                  <div className="w-full h-40 bg-gray-200 overflow-hidden">
                    <img src={`/images/${compound.file}`} alt={compound.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-8 flex flex-col flex-1 w-full">
                    <h4 className="text-xl mb-8 font-georgia leading-snug flex-1">{compound.name}</h4>
                    <a href={getWhatsAppLink(`Hi Ottis Perfumery, I'd like to request a wholesale quote for ${compound.name} for a bulk order.`)} target="_blank" rel="noreferrer" className="w-full py-3 bg-transparent border border-[#0D1B2A] text-[#0D1B2A] uppercase tracking-wider text-xs font-bold hover:bg-[#0D1B2A] hover:text-[#C8D6E5] transition text-center px-2">
                      Request Wholesale Quote
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. THE "LEGACY & ROOTS" SECTION (Scroll-block just before Footer) */}
        <section id="legacy" className="py-24 bg-[#0D1B2A] text-[#C8D6E5] px-6">
          <div className="max-w-5xl mx-auto border border-[#C8D6E5]/10 p-8 md:p-16 bg-white/5 backdrop-blur-sm relative overflow-hidden">
            
            {/* Subtle background element (Family Tree concept) */}
            <div className="absolute top-0 right-0 opacity-5 pointer-events-none w-2/3 h-full">
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full stroke-current">
                <path d="M100 20 L100 60 M100 60 L50 100 M100 60 L150 100 M50 100 L50 140 M150 100 L150 140" strokeWidth="1" fill="none"/>
                <circle cx="100" cy="20" r="4" fill="currentColor"/>
                <circle cx="50" cy="100" r="4" fill="currentColor"/>
                <circle cx="150" cy="100" r="4" fill="currentColor"/>
                <circle cx="50" cy="140" r="4" fill="currentColor"/>
                <circle cx="150" cy="140" r="4" fill="currentColor"/>
              </svg>
            </div>

            <div className="text-center mb-16 relative z-10">
              <h2 className="text-4xl md:text-5xl font-georgia mb-4 text-white">Our Heritage</h2>
              <p className="text-xl font-garamond italic text-[#C8D6E5]/80">A Three-Generation Lineage</p>
            </div>

            <div className="space-y-20 relative z-10">
              {/* The Journey */}
              <div className="flex flex-col md:flex-row gap-10 items-center">
                <div className="md:w-1/3">
                  <div className="aspect-square bg-gray-800 shadow-2xl rounded-full overflow-hidden border-4 border-[#0D1B2A]">
                    <img src="/images/kaderbashaSahib.jpeg" alt="OT Kader Basha Sahib" className="w-full h-full object-cover object-top" />
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-sm font-bold tracking-widest text-[#C8D6E5]/60 mb-2 uppercase">The Journey</h3>
                  <h4 className="text-3xl mb-4 font-georgia text-white">OT Kader Basha Sahib</h4>
                  <p className="text-xl leading-relaxed font-garamond text-[#C8D6E5]/90">
                    The story begins with a monumental 1,000-mile journey. From the botanical heartlands of Veerasolam, Tamil Nadu, OT Kader Basha Sahib traveled to Kolkata. Bringing with him generational knowledge and an uncompromising standard for purity, he laid the very foundation of Ottis Perfumery House.
                  </p>
                </div>
              </div>

              {/* The Growth */}
              <div className="flex flex-col md:flex-row-reverse gap-10 items-center">
                <div className="md:w-1/3">
                  <div className="aspect-square bg-gray-800 shadow-2xl rounded-full overflow-hidden border-4 border-[#0D1B2A]">
                    <img src="/images/otkvellaiameer.jpeg" alt="OTK Vellai Amir" className="w-full h-full object-cover object-top" />
                  </div>
                </div>
                <div className="md:w-2/3 text-left md:text-right">
                  <h3 className="text-sm font-bold tracking-widest text-[#C8D6E5]/60 mb-2 uppercase">The Growth</h3>
                  <h4 className="text-3xl mb-4 font-georgia text-white">OTK Vellai Amir</h4>
                  <p className="text-xl leading-relaxed font-garamond text-[#C8D6E5]/90">
                    As Generation II, OTK Vellai Amir deeply rooted the family&apos;s legacy. He expanded the prestigious Pollock Street reputation, cementing Ottis among the finest, most trusted attar merchants in Kolkata while relentlessly guarding the founder&apos;s original recipes.
                  </p>
                </div>
              </div>

              {/* The Future */}
              <div className="flex flex-col md:flex-row gap-10 items-center">
                <div className="md:w-1/3">
                  <div className="aspect-square bg-gray-800 shadow-2xl rounded-full overflow-hidden border-4 border-[#0D1B2A]">
                    <img src="/images/kaderShamshulhaque.jpeg" alt="Modern Generation" className="w-full h-full object-cover object-top" />
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-sm font-bold tracking-widest text-[#C8D6E5]/60 mb-2 uppercase">The Future</h3>
                  <h4 className="text-3xl mb-4 font-georgia text-white">OT Kader Basha &amp; OT Kader Shamshul Haque <span className="text-[#C8D6E5]/80 font-garamond italic text-xl ml-2">(CEO)</span></h4>
                  <p className="text-xl leading-relaxed font-garamond text-[#C8D6E5]/90">
                    Today, the present generation steers the House into a digital-first era. Marrying a century of analog mastery with modern accessibility, they are transforming traditional wholesale excellence into an accessible, beloved lifestyle brand.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* 4. DETAILED FOOTER & CONTACT */}
      <footer id="contact" className="bg-[#0A1521] text-[#C8D6E5] py-20 px-6 border-t-4 border-[#a54f4f]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
          
          <div className="md:col-span-5">
            <h3 className="text-3xl font-georgia mb-6 tracking-widest text-white">OTTIS PERFUMERY</h3>
            <p className="text-xl font-garamond text-[#C8D6E5]/80 italic leading-relaxed mb-6">
              Warm, expert, and deeply rooted in our community. <br/>
              A 3-generation legacy of pristine Indian botanical oils and attars. 
            </p>
            <div className="flex items-center gap-3 text-lg font-garamond">
              <MessageCircle size={20} className="text-[#25D366]"/>
              <a href={getWhatsAppLink("Hi Ottis Perfumery, I have a general inquiry about your products and services.")} target="_blank" rel="noreferrer" className="hover:text-white transition">WhatsApp: +91 98310 13846</a>
            </div>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-white border-b border-[#C8D6E5]/10 pb-2 inline-block">Flagship Store</h4>
            <address className="not-italic font-garamond text-[#C8D6E5]/80 leading-loose text-xl mb-4">
              Ground Floor (Near Tea Board),<br/>
              3A, Pollock Street,<br/>
              Kolkata - 700001<br/>
              India
            </address>
            <p className="font-garamond text-lg text-[#C8D6E5]/80">
              Phone: <a href="tel:+919831013846" className="hover:text-white transition">9831013846</a><br />
              Email: <a href="mailto:ottisperfumeryhaque@gmail.com" className="hover:text-white transition">ottisperfumeryhaque@gmail.com</a>
            </p>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-white border-b border-[#C8D6E5]/10 pb-2 inline-block">Quick Links</h4>
            <div className="flex flex-col gap-3 font-garamond text-xl text-[#C8D6E5]/80">
              <a href="https://instagram.com/ottis_perfumery" target="_blank" rel="noreferrer" className="hover:text-white transition">Instagram (@ottis_perfumery)</a>
              <a href="#legacy" className="hover:text-white transition">Heritage Story</a>
              <a href="#warehouse" className="hover:text-white transition">Wholesale Inquiries</a>
            </div>
          </div>

        </div>
        
        <div className="mt-20 pt-8 border-t border-[#C8D6E5]/10 text-center text-lg font-garamond text-[#C8D6E5]/40 flex flex-col md:flex-row justify-between items-center gap-4 max-w-7xl mx-auto">
          <span>&copy; {new Date().getFullYear()} Ottis Perfumery House. All rights reserved.</span>
          <span className="italic">Authentic Artistry. Affordable Luxury.</span>
        </div>
      </footer>
    </>
  );
}
