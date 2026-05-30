import { motion } from "motion/react";
import { MapPin, Phone, MessageSquare, Clock, Globe, Star, Mail, ArrowUpRight, Github, Heart } from "lucide-react";
import { RESTAURANT_INFO } from "../data";

export default function Footer() {
  
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const socialLinks = [
    { label: "Facebook", href: "https://facebook.com/spicybawarchi", icon: Globe },
    { label: "Instagram", href: "https://instagram.com/spicybawarchi", icon: Star },
    { label: "WhatsApp", href: `https://wa.me/${RESTAURANT_INFO.whatsapp}`, icon: MessageSquare }
  ];

  const quickLinks = [
    { label: "The Experience", target: "why-us" },
    { label: "Royal Menu", target: "menu-section" },
    { label: "Chef's Gallery", target: "gallery-section" },
    { label: "Reservation Table", target: "reservation-section" },
    { label: "Elite Reviews", target: "reviews" }
  ];

  const scrollToAnchor = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <footer
      id="contact"
      className="bg-[#070707] border-t border-white/5 pt-20 pb-12 overflow-hidden relative"
    >
      {/* Background Flare */}
      <div className="absolute bottom-0 right-10 w-[300px] h-[300px] bg-orange-600/5 fire-glow pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Grid Footer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/5">
          
          {/* Brand block (Cols 1-4) */}
          <div className="lg:col-span-4 flex flex-col items-start gap-4">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleScrollToTop();
              }}
              className="flex items-center gap-2.5 group"
            >
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-orange-500 to-amber-500 flex items-center justify-center p-0.5">
                <span className="font-display font-black text-white text-base">SB</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-black text-lg sm:text-xl tracking-wider text-white">
                  SPICY BAWARCHI
                </span>
                <span className="text-[9px] font-mono tracking-[0.3em] uppercase text-amber-500/85 -mt-1 font-bold">
                  Forbesganj
                </span>
              </div>
            </a>

            <p className="font-sans text-xs sm:text-sm text-gray-400 mt-2 leading-relaxed">
              &ldquo;Every Bite Tells A Story.&rdquo; We are the landmark premium dining destination in Araria District, Bihar, delivering five-star culinary standards at affordable prices.
            </p>

            <div className="flex items-center gap-3 mt-4">
              {socialLinks.map((soc) => {
                const Icon = soc.icon;
                return (
                  <a
                    key={soc.label}
                    href={soc.href}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-full bg-white/5 hover:bg-orange-500/10 text-gray-400 hover:text-orange-500 border border-white/10 hover:border-orange-500/20 transition-all"
                  >
                    <Icon size={14} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick links block (Cols 5-7) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-display font-black text-xs uppercase tracking-[0.25em] text-white">
              Navigation
            </h4>
            <div className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollToAnchor(link.target)}
                  className="text-left text-xs font-sans font-semibold text-gray-400 hover:text-orange-500 transition-colors cursor-pointer w-fit"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Opening hours block (Cols 8-9) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-display font-black text-xs uppercase tracking-[0.25em] text-white">
              Gathering Hours
            </h4>
            
            <div className="space-y-3.5 text-xs">
              <div className="flex items-start gap-2.5">
                <Clock size={13} className="text-orange-500 mt-0.5" />
                <div>
                  <span className="block text-gray-200 font-bold font-display">Daily Dinner Service</span>
                  <span className="text-gray-500 leading-none">11:00 AM — 11:00 PM</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin size={13} className="text-orange-500 mt-0.5" />
                <div>
                  <span className="block text-gray-200 font-bold font-display">Elite Location</span>
                  <span className="text-gray-500 leading-normal">
                    {RESTAURANT_INFO.address}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Direct action (Cols 10-12) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-display font-black text-xs uppercase tracking-[0.25em] text-white">
              Quick Concierge
            </h4>

            <div className="space-y-3 text-xs font-mono">
              <a
                href={`tel:${RESTAURANT_INFO.phone}`}
                className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-orange-500/10 border border-white/5 hover:border-orange-500/20 text-gray-300 hover:text-white transition-all group"
              >
                <Phone size={14} className="text-orange-500 text-shadow" />
                <div className="flex-1 min-w-0">
                  <span className="block text-[8px] uppercase tracking-wider text-gray-500">Instant Call</span>
                  <span className="font-bold truncate">{RESTAURANT_INFO.phone}</span>
                </div>
                <ArrowUpRight size={12} className="text-gray-600 group-hover:text-amber-500 transition-colors" />
              </a>

              {/* Direct Maps Navigation Trigger */}
              <a
                href="https://maps.app.goo.gl/9R38L" // Replace with standard Forbesganj maps search
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-orange-500/10 border border-white/5 hover:border-orange-500/20 text-gray-300 hover:text-white transition-all group"
              >
                <MapPin size={14} className="text-orange-500" />
                <div className="flex-1 min-w-0">
                  <span className="block text-[8px] uppercase tracking-wider text-gray-500">Google Maps Navigation</span>
                  <span className="font-bold truncate text-orange-500">Open GPS Location</span>
                </div>
                <ArrowUpRight size={12} className="text-gray-600 group-hover:text-amber-500 transition-colors" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom copyright details */}
        <div className="pt-10 flex flex-col md:flex-row items-center justify-between gap-6 text-[11px] font-mono text-gray-600 uppercase tracking-wider">
          
          <div>
            © {new Date().getFullYear()} SPICY BAWARCHI LUXURY BRAND. ALL RIGHTS RESERVED.
          </div>

          <div className="flex items-center gap-1">
            <span>DESIGNED WITH</span>
            <Heart size={10} className="fill-red-500 text-red-500 hover:scale-120 transition-transform" />
            <span>FOR LUXURY RESTAURANT EXPERIENCES</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={handleScrollToTop}
              className="text-gray-500 hover:text-orange-500 transition-colors cursor-pointer text-xs"
            >
              Scroll To Top ↑
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
}
