import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Phone, 
  MessageSquare, 
  CalendarDays, 
  ChevronLeft, 
  ChevronRight, 
  Star, 
  Sparkles, 
  MapPin, 
  ArrowRight,
  TrendingUp,
  Tag,
  ShieldCheck,
  Plus
} from "lucide-react";
import { RESTAURANT_INFO, MENU_ITEMS } from "../data";
import { MenuItem } from "../types";

interface HomeViewProps {
  onNavigateToTab: (tabId: string) => void;
  onAddToCart: (item: MenuItem) => void;
  onBuyNow: (item: MenuItem) => void;
}

export default function HomeView({ onNavigateToTab, onAddToCart, onBuyNow }: HomeViewProps) {
  const [activeSlide, setActiveSlide] = useState(0);
  const sliderInterval = useRef<NodeJS.Timeout | null>(null);

  // Filter premium bestsellers for the Featured slider
  const featuredDishes = MENU_ITEMS.filter(it => it.isBestseller).slice(0, 5);
  // Filter popular items
  const popularItems = MENU_ITEMS.filter(it => it.rating >= 4.9 && !it.isBestseller).slice(0, 4);

  const specialOffers = [
    {
      id: "off1",
      title: "Royal Table Privilege",
      subtitle: "FREE Delivery or Premium Table Service",
      badge: "No Minimum Pay",
      desc: "Order directly to your table via our interactive companion app.",
      code: "FESTIVE10",
      color: "from-orange-600/20 to-amber-600/10 border-orange-500/20"
    },
    {
      id: "off2",
      title: "The King's Feast Combo",
      subtitle: "Royal Thali at Sweet Prices",
      badge: "Classic Favourite",
      desc: "Includes Paneer Butter Masala, Dal Makhani, Butter Naan & Rice for ₹210",
      code: "ROYALFEAST",
      color: "from-amber-600/20 to-yellow-600/10 border-amber-500/20"
    }
  ];

  // Auto-run slider
  useEffect(() => {
    sliderInterval.current = setInterval(() => {
      setActiveSlide(prev => (prev + 1) % featuredDishes.length);
    }, 4000);
    return () => {
      if (sliderInterval.current) clearInterval(sliderInterval.current);
    };
  }, [featuredDishes.length]);

  const handleNextSlide = () => {
    if (sliderInterval.current) clearInterval(sliderInterval.current);
    setActiveSlide(prev => (prev + 1) % featuredDishes.length);
  };

  const handlePrevSlide = () => {
    if (sliderInterval.current) clearInterval(sliderInterval.current);
    setActiveSlide(prev => (prev - 1 + featuredDishes.length) % featuredDishes.length);
  };

  return (
    <div className="space-y-6 pb-20 pt-4 px-4 overflow-y-auto max-h-[calc(100vh-140px)] select-none scrollbar-none">
      {/* 1. Header Bar with Name in Center */}
      <div className="text-center py-3 relative">
        <div className="absolute right-0 top-1">
          <span className="flex items-center gap-1 text-[9px] font-mono tracking-widest text-[#25D366] bg-[#25D366]/10 px-2 py-0.5 rounded-full font-bold">
            <span className="w-1.5 h-1.5 bg-[#25D366] rounded-full animate-ping" />
            LIVE ORDERING
          </span>
        </div>
        
        <div className="flex flex-col items-center justify-center gap-1">
          <div className="inline-flex items-center gap-1.5 bg-orange-600/10 border border-orange-500/20 px-2.5 py-0.5 rounded-full">
            <Sparkles size={12} className="text-amber-500 animate-pulse" />
            <span className="text-[8px] font-mono font-extrabold tracking-widest text-amber-500 uppercase">Forbesganj&apos;s Pride</span>
          </div>
          
          <h1 
            id="restaurant-brand-title" 
            className="font-display font-black text-3xl sm:text-4xl tracking-tight bg-gradient-to-r from-orange-500 via-amber-400 to-yellow-500 bg-clip-text text-transparent drop-shadow-md m-0 py-0.5 font-extrabold uppercase leading-snug"
          >
            {RESTAURANT_INFO.name}
          </h1>
        </div>
        <p className="text-[9px] font-mono tracking-[0.2em] text-gray-400 uppercase mt-0.5 font-bold">
          ★ {RESTAURANT_INFO.tagline} ★
        </p>
      </div>

      {/* 2. Short Premium Address block */}
      <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 flex items-start gap-2.5">
        <MapPin size={16} className="text-orange-500 shrink-0 mt-0.5" />
        <div className="text-[11px] text-gray-400 font-sans leading-relaxed">
          <span className="font-bold text-gray-300 block">Forbesganj Address</span>
          {RESTAURANT_INFO.address.replace(", Forbesganj, Bihar 854318", "")}
        </div>
      </div>

      {/* 3. Global Mobile Action Call To Action Buttons */}
      <div className="grid grid-cols-3 gap-2">
        <a
          href={`tel:${RESTAURANT_INFO.phone}`}
          className="flex flex-col items-center justify-center p-3 rounded-xl bg-orange-600/10 border border-orange-500/20 text-orange-500 hover:bg-orange-600/20 transition-all text-center gap-1.5 active:scale-95"
        >
          <Phone size={16} />
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider">Call Agent</span>
        </a>

        <button
          onClick={() => onNavigateToTab("menu")}
          className="flex flex-col items-center justify-center p-3 rounded-xl bg-[#25D366]/10 border border-[#25D366]/20 text-[#25D366] hover:bg-[#25D366]/20 transition-all text-center gap-1.5 active:scale-95"
        >
          <MessageSquare size={16} />
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider">Browse Cards</span>
        </button>

        <button
          onClick={() => onNavigateToTab("party-booking")}
          className="flex flex-col items-center justify-center p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-500 hover:bg-amber-500/20 transition-all text-center gap-1.5 active:scale-95"
        >
          <CalendarDays size={16} />
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider">Book Party</span>
        </button>
      </div>

      {/* 4. Special Offers Banner */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <Tag size={13} className="text-orange-500" />
          <h3 className="font-display font-black text-xs uppercase tracking-widest text-white">
            Exclusive App Offers
          </h3>
        </div>
        
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-none snap-x snap-mandatory">
          {specialOffers.map(offer => (
            <div
              key={offer.id}
              className={`min-w-[280px] w-[280px] p-4 rounded-xl bg-gradient-to-br ${offer.color} border flex flex-col justify-between gap-3 snap-start relative overflow-hidden`}
            >
              <div className="absolute -right-3 -top-3 w-12 h-12 bg-white/[0.02] rounded-full" />
              <div>
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className="font-display font-black text-white text-xs">{offer.title}</span>
                  <span className="text-[8px] font-mono font-bold bg-orange-500 text-white px-1.5 py-0.5 rounded uppercase">
                    {offer.badge}
                  </span>
                </div>
                <p className="text-[10px] text-gray-400 font-sans leading-relaxed">
                  {offer.desc}
                </p>
              </div>
              
              <div className="flex items-center justify-between text-[10px] font-mono pt-1">
                <span className="text-amber-500/90 font-bold uppercase tracking-wider">Code: {offer.code}</span>
                <span className="text-gray-500 font-sans">Active Today</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 5. Featured Dishes Slider (Bestsellers Carousel) */}
      <div className="relative">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Sparkles size={13} className="text-amber-500 animate-spin" style={{ animationDuration: "3s" }} />
            <h3 className="font-display font-black text-xs uppercase tracking-widest text-white">
              Signature Royalty
            </h3>
          </div>
          <div className="flex items-center gap-1 font-mono text-[9px] text-gray-400">
            <span>{activeSlide + 1}</span>
            <span>/</span>
            <span>{featuredDishes.length}</span>
          </div>
        </div>

        {/* Carousel slide active display */}
        <div className="relative h-44 rounded-2xl overflow-hidden bg-zinc-900 border border-white/5 group shadow-lg">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSlide}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0"
            >
              <img
                src={featuredDishes[activeSlide].imageUrl}
                alt={featuredDishes[activeSlide].name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover brightness-[0.70] filter saturate-[1.1]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-4">
                <div className="space-y-0.5">
                  <div className="flex items-center gap-1.5">
                    {featuredDishes[activeSlide].isVeg && (
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 border border-emerald-400 flex items-center justify-center text-[5px]" />
                    )}
                    <span className="text-[9px] font-mono font-bold text-amber-500 uppercase tracking-widest">
                      {featuredDishes[activeSlide].category.replace("-", " ")}
                    </span>
                  </div>
                  <h4 className="font-display font-extrabold text-base tracking-tight text-white">
                    {featuredDishes[activeSlide].name}
                  </h4>
                  <div className="flex items-center gap-2">
                    <span className="font-display font-black text-xs text-white">₹{featuredDishes[activeSlide].price}</span>
                    <span className="text-[9px] font-sans text-gray-500 line-through">₹{Math.round(featuredDishes[activeSlide].price * 1.25)}</span>
                    <span className="text-[9px] font-mono text-emerald-500 font-bold">20% off</span>
                  </div>
                </div>

                <button
                  onClick={() => onAddToCart(featuredDishes[activeSlide])}
                  className="px-3 py-1.5 bg-orange-600 hover:bg-orange-500 active:scale-95 text-xs font-mono font-black text-white rounded-lg shadow-md flex items-center gap-1 cursor-pointer transition-colors shrink-0"
                >
                  <Plus size={12} />
                  <span>ADD</span>
                </button>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <button
            onClick={handlePrevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/60 border border-white/5 hover:bg-orange-600 transition-colors cursor-pointer text-white"
          >
            <ChevronLeft size={14} />
          </button>
          <button
            onClick={handleNextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/60 border border-white/5 hover:bg-orange-600 transition-colors cursor-pointer text-white"
          >
            <ChevronRight size={14} />
          </button>
        </div>
      </div>

      {/* 6. Popular Items Grid */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <TrendingUp size={13} className="text-orange-500" />
          <h3 className="font-display font-black text-xs uppercase tracking-widest text-white">
            Most Popular Plates
          </h3>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {popularItems.map(item => (
            <div
              key={item.id}
              className="p-2.5 rounded-xl bg-white/[0.02] hover:bg-white/[0.04] border border-white/5 flex flex-col justify-between transition-all group scale-100"
            >
              <div className="relative aspect-video w-full rounded-lg overflow-hidden bg-zinc-900 border border-white/5">
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-1 right-1 flex items-center gap-0.5 px-1 py-0.5 bg-black/75 rounded text-[8px] font-mono text-amber-400 font-bold">
                  <Star size={8} className="fill-amber-400 text-amber-400" />
                  <span>{item.rating}</span>
                </div>
              </div>

              <div className="mt-2.5">
                <div className="flex items-start gap-1 pb-1">
                  {item.isVeg && (
                    <span className="w-2 h-2 rounded-full bg-emerald-500 block shrink-0 mt-1" />
                  )}
                  <h4 className="font-display font-bold text-xs text-white truncate w-full">
                    {item.name}
                  </h4>
                </div>
                
                <div className="flex items-center justify-between mt-1">
                  <div className="flex items-baseline gap-1">
                    <span className="font-display font-extrabold text-xs text-white">₹{item.price}</span>
                    <span className="text-[9px] font-sans text-gray-500 line-through">₹{Math.round(item.price * 1.15)}</span>
                  </div>
                  
                  <button
                    onClick={() => onAddToCart(item)}
                    className="p-1 rounded bg-white/5 hover:bg-orange-600 transition-colors text-white hover:text-white cursor-pointer active:scale-95 shrink-0"
                    title="Add to order list"
                  >
                    <Plus size={12} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 7. Bottom trust logo section */}
      <div className="pt-2 text-center">
        <div className="inline-flex items-center gap-1 px-3 py-1 bg-white/[0.01] border border-white/5 rounded-full">
          <ShieldCheck size={11} className="text-emerald-500" />
          <span className="text-[8px] font-mono uppercase tracking-[0.2em] text-gray-500">
            100% Verified Pure Veg Kitchen
          </span>
        </div>
      </div>
    </div>
  );
}
