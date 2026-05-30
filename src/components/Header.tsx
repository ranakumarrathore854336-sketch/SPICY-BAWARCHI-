import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ShoppingBag, Phone, Menu, X, Calendar, Sparkles } from "lucide-react";
import { RESTAURANT_INFO } from "../data";

interface HeaderProps {
  cartCount: number;
  onCartClick: () => void;
  onReserveClick: () => void;
}

export default function Header({ cartCount, onCartClick, onReserveClick }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const menuItems = [
    { label: "The Experience", target: "why-us" },
    { label: "Royal Menu", target: "menu-section" },
    { label: "Chef's Gallery", target: "gallery-section" },
    { label: "Elite Reviews", target: "reviews" },
    { label: "Prithvi Map", target: "contact" }
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "py-4 bg-[#0B0B0B]/85 backdrop-blur-md border-b border-white/5 shadow-xl shadow-black/40"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Brand Name */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <div className="relative w-10 h-10 rounded-full bg-gradient-to-tr from-orange-500 to-amber-500 flex items-center justify-center shadow-lg shadow-orange-500/20 group-hover:shadow-orange-500/40 transition-shadow">
              <span className="font-display font-extrabold text-white text-lg tracking-wide">SB</span>
              <div className="absolute -inset-0.5 bg-gradient-to-tr from-orange-500 to-amber-500 rounded-full blur-sm opacity-30 group-hover:opacity-65 transition-opacity" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-black text-xl sm:text-2xl tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-white via-orange-300 to-amber-400 group-hover:brightness-110 transition-all">
                SPICY BAWARCHI
              </span>
              <span className="text-[9px] font-mono tracking-[0.3em] uppercase text-amber-500/80 -mt-1 font-bold">
                Forbesganj
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {menuItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.target)}
                className="font-sans text-sm font-medium text-gray-300 hover:text-orange-500 tracking-wide transition-colors cursor-pointer relative py-1 group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-orange-500 to-amber-400 transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-3 sm:gap-4">
            
            {/* Phone Quick-Call (Desktop hidden, shown as text link or icon) */}
            <a
              href={`tel:${RESTAURANT_INFO.phone}`}
              className="hidden sm:flex items-center gap-2 text-xs font-mono font-bold text-gray-400 hover:text-white transition-colors bg-white/5 border border-white/10 px-3 py-1.5 rounded-full hover:border-amber-500/40"
            >
              <Phone size={12} className="text-orange-500" />
              <span>{RESTAURANT_INFO.phone}</span>
            </a>

            {/* Floating Shopping Cart Bell */}
            <button
              onClick={onCartClick}
              id="cart-trigger"
              className="relative p-2.5 rounded-full bg-white/5 hover:bg-orange-500/10 border border-white/10 hover:border-orange-500/30 text-gray-100 hover:text-orange-500 transition-all cursor-pointer group"
            >
              <ShoppingBag size={20} className="group-hover:scale-110 transition-transform" />
              {cartCount > 0 && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  id="cart-badge"
                  className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-gradient-to-r from-orange-600 to-amber-500 rounded-full flex items-center justify-center text-[10px] font-mono font-bold text-white shadow-md shadow-orange-600/30"
                >
                  {cartCount}
                </motion.div>
              )}
            </button>

            {/* Appointment / Reservation CTA */}
            <button
              onClick={onReserveClick}
              id="reserve-nav-button"
              className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white font-display font-semibold text-sm hover:from-orange-600 hover:to-amber-600 shadow-lg shadow-orange-500/20 active:scale-95 transition-all cursor-pointer border border-orange-400/20"
            >
              <Calendar size={15} />
              <span>Reserve Table</span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              id="mobile-menu-toggle"
              className="lg:hidden p-2.5 rounded-full bg-white/5 text-gray-100 hover:text-orange-500 focus:outline-none cursor-pointer border border-white/10"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden absolute top-full left-0 w-full glass-panel border-b border-white/5 shadow-2xl overflow-hidden"
          >
            <div className="px-5 py-6 space-y-4 flex flex-col">
              {menuItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.target)}
                  className="text-left font-display font-medium text-lg text-gray-300 hover:text-orange-500 py-2.5 border-b border-white/5 transition-colors"
                >
                  {item.label}
                </button>
              ))}

              <div className="pt-4 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onReserveClick();
                  }}
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 text-white font-display font-bold text-center border border-orange-400/20 shadow-lg"
                >
                  <Calendar size={16} />
                  <span>Request Table Online</span>
                </button>

                <a
                  href={`tel:${RESTAURANT_INFO.phone}`}
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-white/5 text-gray-100 font-display font-semibold text-center border border-white/10"
                >
                  <Phone size={16} className="text-orange-500" />
                  <span>Call {RESTAURANT_INFO.phone}</span>
                </a>
              </div>

              <div className="flex items-center justify-center gap-2 pt-2 text-[10px] font-mono text-gray-500 uppercase tracking-widest">
                <Sparkles size={10} className="text-amber-500" />
                <span>SPICY BAWARCHI LUXURY BRAND</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
