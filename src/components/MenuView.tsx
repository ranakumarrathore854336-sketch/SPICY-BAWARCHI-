import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Star, Shield, Filter, Search, ShoppingCart, Sparkles, Smile } from "lucide-react";
import { MENU_ITEMS } from "../data";
import { MenuItem } from "../types";

interface MenuViewProps {
  onAddToCart: (item: MenuItem) => void;
  onBuyNow: (item: MenuItem) => void;
  cartCount: number;
  onNavigateToTab: (tabId: string) => void;
}

export default function MenuView({ onAddToCart, onBuyNow, cartCount, onNavigateToTab }: MenuViewProps) {
  const [selectedCategory, setSelectedCategory] = useState("Vegetables");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { label: "Vegetables", value: "vegetables" },
    { label: "Momos", value: "momos" },
    { label: "Noodles", value: "noodles" },
    { label: "Rice", value: "rice" },
    { label: "Dal", value: "dal" },
    { label: "Roti", value: "roti-naan" },
    { label: "Beverages", value: "beverages" },
    { label: "Special Thali", value: "special-thali" }
  ];

  // Filter items matching active category + search terms to prevent long lists
  const filteredItems = useMemo(() => {
    // Map current category label to data categories
    const mappedCategory = categories.find(cat => cat.label === selectedCategory)?.value || "vegetables";
    let items = MENU_ITEMS.filter(it => it.category === mappedCategory);

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      // Search from all items if they user types something
      items = MENU_ITEMS.filter(it => 
        it.name.toLowerCase().includes(query) || 
        it.description.toLowerCase().includes(query)
      );
    }

    return items;
  }, [selectedCategory, searchQuery]);

  return (
    <div className="space-y-4 pt-4 pb-20 px-4 overflow-y-auto max-h-[calc(100vh-140px)] select-none scrollbar-none">
      
      {/* 1. Dynamic Search Header */}
      <div className="sticky top-0 bg-[#090909]/95 backdrop-blur-md pt-1 pb-3 z-35 flex items-center gap-3">
        <div className="relative flex-1">
          <Search size={14} className="text-gray-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search our delicious delicacies..."
            className="w-full text-xs font-sans pl-10 pr-3.5 py-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.05] focus:bg-[#121212] border border-white/5 focus:border-orange-500/50 outline-none text-white placeholder-gray-500 transition-all shadow-inner"
          />
        </div>
        
        {cartCount > 0 && (
          <button
            onClick={() => onNavigateToTab("orders")}
            className="relative p-3 rounded-xl bg-gradient-to-tr from-orange-500 to-amber-500 hover:brightness-110 active:scale-95 text-white shadow-lg cursor-pointer transition-all flex items-center justify-center shrink-0"
          >
            <ShoppingCart size={15} />
            <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-white text-black font-mono font-black text-[9px] flex items-center justify-center border border-orange-500 animate-pulse">
              {cartCount}
            </span>
          </button>
        )}
      </div>

      {/* 2. Swiggy/Flipkart style horizontal category tabs */}
      {!searchQuery && (
        <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none select-none">
          {categories.map((cat) => {
            const isActive = cat.label === selectedCategory;
            return (
              <button
                key={cat.label}
                onClick={() => setSelectedCategory(cat.label)}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-extrabold whitespace-nowrap border cursor-pointer transition-all ${
                  isActive
                    ? "bg-gradient-to-r from-orange-500 to-amber-500 text-white border-transparent shadow-[0_4px_12px_rgba(249,115,22,0.25)]"
                    : "bg-white/[0.01] hover:bg-white/[0.03] text-gray-400 border-white/5"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      )}

      {searchQuery && (
        <div className="text-[10px] font-mono text-gray-500 uppercase tracking-wider mb-2">
          Filtered Results for &ldquo;{searchQuery}&rdquo; ({filteredItems.length} items found)
        </div>
      )}

      {/* 3. Flipkart-Style product item list view (with food picture, pricing blocks, original price markups, stars, add, buy now commands) */}
      <div className="grid grid-cols-1 gap-4">
        <AnimatePresence mode="popLayout">
          {filteredItems.length > 0 ? (
            filteredItems.map((item, idx) => {
              const originalPrice = Math.round(item.price * 1.25);
              const discount = 20; // 20% flat discount on menu items

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: Math.min(idx * 0.05, 0.3) }}
                  whileHover={{ y: -2 }}
                  className="flex rounded-2xl bg-gradient-to-br from-white/[0.02] to-[#121212]/30 border border-white/5 hover:border-orange-500/20 p-3.5 gap-4 items-center transition-all duration-300 relative overflow-hidden"
                >
                  {/* Food Image with Star rating badge */}
                  <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-xl overflow-hidden bg-zinc-900 border border-white/5 relative shrink-0">
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover filter saturate-[1.05]"
                    />
                    
                    {/* Flat Veg markup badge */}
                    {item.isVeg && (
                      <div className="absolute top-1.5 left-1.5 p-0.5 bg-black/75 rounded flex items-center justify-center border border-emerald-500">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      </div>
                    )}

                    {/* Star badge */}
                    <div className="absolute bottom-1.5 left-1.5 flex items-center gap-0.5 px-1.5 py-0.5 bg-black/80 rounded-md text-[8px] font-mono font-black text-amber-500 select-none">
                      <Star size={7} className="fill-amber-500 text-amber-500" />
                      <span>{item.rating}</span>
                    </div>

                    {/* Highly eye-catching bestseller badge */}
                    {item.isBestseller && (
                      <div className="absolute right-1 top-1 text-[7px] font-mono font-extrabold uppercase bg-orange-600 text-white px-1 py-0.5 rounded-sm tracking-wide">
                        Bestseller
                      </div>
                    )}
                  </div>

                  {/* Pricing details, star rating, buttons */}
                  <div className="flex-1 flex flex-col justify-between h-24 sm:h-28 min-w-0">
                    <div>
                      <h4 className="font-display font-black text-sm sm:text-base text-white tracking-tight leading-snug truncate">
                        {item.name}
                      </h4>
                      <p className="font-sans text-[10px] text-gray-400 mt-0.5 leading-relaxed line-clamp-2 pr-2">
                        {item.description}
                      </p>
                    </div>

                    {/* Price and Add/Buy actions formatted to feel extremely Swiggy/Flipkart structure */}
                    <div className="flex items-center justify-between gap-2 border-t border-white/5 pt-2">
                      <div className="flex flex-col">
                        <div className="flex items-baseline gap-1.5">
                          <span className="font-display font-black text-xs sm:text-sm text-white">₹{item.price}</span>
                          <span className="text-[9px] font-sans text-gray-500 line-through">₹{originalPrice}</span>
                        </div>
                        <span className="text-[8px] font-mono text-emerald-500 font-bold uppercase tracking-wider">{discount}% Special App Off</span>
                      </div>

                      <div className="flex items-center gap-1.5 shrink-0">
                        {/* Add to Cart button */}
                        <button
                          onClick={() => onAddToCart(item)}
                          className="px-2.5 py-1.5 bg-white/5 hover:bg-orange-600 border border-white/5 hover:border-transparent active:scale-95 text-[9px] font-mono font-black text-white hover:text-white rounded-lg cursor-pointer transition-all"
                        >
                          ADD +
                        </button>

                        {/* Buy Now button */}
                        <button
                          onClick={() => onBuyNow(item)}
                          className="px-2.5 py-1.5 bg-gradient-to-r from-orange-500 to-amber-500 active:scale-95 text-[9px] font-mono font-black text-black rounded-lg cursor-pointer transition-all hover:brightness-110 shadow-md"
                        >
                          BUY NOW
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <Smile size={32} className="text-gray-600 mx-auto mb-3" />
              <p className="font-sans text-xs text-gray-500">No dishes found with your search. Try another query.</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
