import { motion } from "motion/react";
import { Sparkles, ArrowRight, MessageSquare, Phone, Utensils } from "lucide-react";
import { RESTAURANT_INFO } from "../data";

interface HeroProps {
  onExploreMenuClick: () => void;
  onOrderWhatsAppClick: () => void;
  onCallClick: () => void;
}

export default function Hero({ onExploreMenuClick, onOrderWhatsAppClick, onCallClick }: HeroProps) {
  
  // Custom spice representations using luxury vector geometry
  const floatingSpices = [
    { delay: 0.2, top: "22%", left: "12%", scale: 1.1, label: "🌶️", rotate: 35, duration: 6 },
    { delay: 1.4, top: "67%", left: "8%", scale: 0.85, label: "🍃", rotate: -45, duration: 8 },
    { delay: 0.8, top: "78%", left: "80%", scale: 1.3, label: "⭐", rotate: 15, duration: 7 }, // Anise
    { delay: 2.1, top: "18%", left: "76%", scale: 0.9, label: "🌿", rotate: 120, duration: 9 },
    { delay: 2.8, top: "45%", left: "88%", scale: 1.2, label: "🥢", rotate: -10, duration: 5 },
    { delay: 1.9, top: "54%", left: "15%", scale: 1.0, label: "🧄", rotate: 90, duration: 11 }
  ];

  return (
    <section
      id="hero-section"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#070707] pt-24"
    >
      {/* Background Cinematic Food Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30 transform scale-105 filter saturate-[0.8] contrast-[1.1]"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1920&q=80')"
          }}
        />
        {/* Fire Grill Gradient Effects */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/85 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0B] via-transparent to-[#0B0B0B]" />
        
        {/* Extreme Fire Glow Circles (Simulating charcoal griddle warmth) */}
        <div className="absolute -bottom-40 left-1/4 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] rounded-full bg-orange-600/10 fire-glow" />
        <div className="absolute top-1/4 right-10 w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] rounded-full bg-amber-500/5 fire-glow" style={{ animationDelay: "2s" }} />
      </div>

      {/* Floating Animated Spices */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
        {floatingSpices.map((spice, idx) => (
          <motion.div
            key={idx}
            className="absolute text-2xl filter drop-shadow-[0_4px_12px_rgba(255,107,0,0.4)] select-none opacity-45"
            style={{
              top: spice.top,
              left: spice.left,
              transform: `scale(${spice.scale}) rotate(${spice.rotate}deg)`,
            }}
            animate={{
              y: [0, -25, 0],
              rotate: [spice.rotate, spice.rotate + 15, spice.rotate - 15, spice.rotate],
              opacity: [0.35, 0.65, 0.35]
            }}
            transition={{
              duration: spice.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: spice.delay
            }}
          >
            {spice.label}
          </motion.div>
        ))}
      </div>

      {/* Content Container */}
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 z-20 text-center flex flex-col items-center">
        
        {/* Premium Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/5 border border-orange-500/20 backdrop-blur-md mb-6 hover:border-orange-500/40 transition-colors"
        >
          <Sparkles size={11} className="text-amber-400 animate-pulse" />
          <span className="text-[10px] sm:text-xs font-mono font-bold tracking-[0.25em] text-amber-400 uppercase">
            The Pinnacle of Gastronomy in Bihar
          </span>
          <Sparkles size={11} className="text-amber-400 animate-pulse" />
        </motion.div>

        {/* Master Logo Ring */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, type: "spring", stiffness: 90 }}
          className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full mb-8 flex items-center justify-center border-2 border-dashed border-amber-500/25 p-1 bg-[#121212]/90 shadow-2xl"
        >
          <div className="absolute inset-0 rounded-full border border-orange-500/40 animate-spin" style={{ animationDuration: "12s" }} />
          <div className="w-full h-full rounded-full bg-gradient-to-tr from-[#161616] to-[#20150d] border border-white/10 flex flex-col items-center justify-center relative shadow-inner">
            <span className="font-display font-black text-white text-3xl sm:text-4xl tracking-tight -mb-1 bg-clip-text text-transparent bg-gradient-to-tr from-white to-amber-300">
              SB
            </span>
            <Utensils size={14} className="text-orange-500" />
          </div>
        </motion.div>

        {/* Main Brand Title */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-display font-black text-5xl sm:text-7xl lg:text-8xl tracking-tight leading-none text-white text-shadow-xl"
        >
          <span className="block mb-2">SPICY</span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-amber-400 to-white">
            BAWARCHI
          </span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-serif italic text-lg sm:text-2xl text-gray-300 mt-6 max-w-2xl tracking-wide"
        >
          &ldquo;{RESTAURANT_INFO.tagline}&rdquo;
        </motion.p>

        {/* Supporting description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-xs sm:text-sm text-gray-400 mt-4 max-w-lg leading-relaxed font-sans"
        >
          Experience luxurious fine dining and premium authentic Indochinese & Tandoor delicacies crafted by culinary artists in the heart of Forbesganj, Bihar.
        </motion.p>

        {/* CTAs Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center gap-4 mt-10 w-full sm:w-auto"
        >
          <button
            onClick={onExploreMenuClick}
            id="hero-explore-button"
            className="flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white font-display font-bold text-base hover:from-orange-600 hover:to-amber-600 shadow-xl shadow-orange-500/20 hover:shadow-orange-500/40 w-full sm:w-auto hover:scale-[1.03] active:scale-95 transition-all cursor-pointer border border-orange-400/20"
          >
            <span>Explore Royal Menu</span>
            <ArrowRight size={16} />
          </button>

          <button
            onClick={onOrderWhatsAppClick}
            id="hero-whatsapp-button"
            className="flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#25D366] font-display font-bold text-base border border-[#25D366]/30 hover:border-[#25D366]/60 w-full sm:w-auto hover:scale-[1.03] active:scale-95 transition-all cursor-pointer"
          >
            <MessageSquare size={16} />
            <span>Order on WhatsApp</span>
          </button>

          <button
            onClick={onCallClick}
            id="hero-call-button"
            className="flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-white/5 hover:bg-white/10 text-white font-sans font-semibold text-sm border border-white/10 w-full sm:w-auto hover:scale-[1.03] active:scale-95 transition-all cursor-pointer"
          >
            <Phone size={14} className="text-orange-500" />
            <span>Call Now</span>
          </button>
        </motion.div>

        {/* Location / Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1 }}
          className="mt-16 flex flex-col sm:flex-row items-center gap-6 sm:gap-12 text-gray-500 font-mono text-[10px] sm:text-xs uppercase tracking-[0.2em]"
        >
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-ping" />
            <span className="text-gray-400">Pure Veg culinary excellence</span>
          </div>
          <div className="hidden sm:block text-orange-500/40">|</div>
          <div>📍 Near College Flyover, Forbesganj</div>
          <div className="hidden sm:block text-orange-500/40">|</div>
          <div>✨ Family air-conditioned salon</div>
        </motion.div>

      </div>

      {/* Elegant scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20 opacity-40 hover:opacity-100 transition-opacity">
        <span className="text-[9px] font-mono uppercase tracking-[0.3em] text-gray-500">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border-2 border-gray-600 flex justify-center p-1"
        >
          <div className="w-1 h-2 rounded-full bg-orange-500" />
        </motion.div>
      </div>
    </section>
  );
}
