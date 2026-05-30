import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search, Star, Plus, Minus, Check, Sparkles, Filter, Leaf } from "lucide-react";
import { MENU_ITEMS, MENU_CATEGORIES } from "../data";
import { MenuItem, CartItem } from "../types";

interface MenuProps {
  cart: CartItem[];
  onAdd: (item: MenuItem) => void;
  onRemove: (item: MenuItem) => void;
  onUpdateQty: (item: MenuItem, qty: number) => void;
}

export default function Menu({ cart, onAdd, onRemove, onUpdateQty }: MenuProps) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [isVegOnly, setIsVegOnly] = useState(false);

  // Map of cart item quantities for easy O(1) lookup
  const cartQuantities = useMemo(() => {
    const map: Record<string, number> = {};
    cart.forEach((item) => {
      map[item.menuItem.id] = item.quantity;
    });
    return map;
  }, [cart]);

  // Filter items dynamically based on category, search, and veg filter
  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchesCategory = selectedCategory === "all" || item.category === selectedCategory;
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            item.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesVeg = !isVegOnly || item.isVeg;
      return matchesCategory && matchesSearch && matchesVeg;
    });
  }, [selectedCategory, searchQuery, isVegOnly]);

  return (
    <section
      id="menu-section"
      className="relative py-24 bg-[#0A0A0A] border-y border-white/5"
    >
      {/* Dynamic Back Ambient Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4/5 h-[150px] bg-orange-600/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 w-fit mb-3">
              <Sparkles size={11} className="text-amber-500 animate-pulse" />
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-amber-500">
                Gastronomic Excellence
              </span>
            </div>
            <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white leading-none">
              OUR <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-amber-500">ROYAL RECIPES</span>
            </h2>
            <p className="text-gray-400 font-sans mt-3 max-w-xl text-sm sm:text-base">
              Browse through our authentic local recipes cooked over charcoal fire and woks, seasoned to perfection using pure ingredients.
            </p>
          </div>

          {/* Quick Veg Filter Toggle */}
          <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-2.5 rounded-full select-none max-w-xs">
            <span className="text-xs font-mono text-gray-400 tracking-wide uppercase">Pure Veg Filter</span>
            <button
              onClick={() => setIsVegOnly(!isVegOnly)}
              id="veg-filter-toggle"
              className={`relative w-12 h-6 rounded-full transition-colors ${
                isVegOnly ? "bg-emerald-600" : "bg-white/10"
              } cursor-pointer`}
            >
              <motion.div
                layout
                className="absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white flex items-center justify-center shadow-md shadow-black/40"
              >
                <Leaf size={10} className={`${isVegOnly ? "text-emerald-700" : "text-gray-400"}`} />
              </motion.div>
            </button>
          </div>
        </div>

        {/* Search Bar / Filter Panel */}
        <div className="bg-[#121212]/70 backdrop-blur-md rounded-2xl border border-white/5 p-4 sm:p-6 mb-12 shadow-2xl">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-hover:text-orange-500 transition-colors" size={20} />
            <input
              type="text"
              id="menu-search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search delectable butter paneer, spicy noodles, hot momos..."
              className="w-full bg-[#0B0B0B] border border-white/10 hover:border-white/20 focus:border-orange-500 rounded-xl py-3.5 pl-12 pr-4 text-white text-sm font-sans placeholder-gray-500 outline-none transition-all shadow-inner focus:shadow-orange-500/5 focus:ring-1 focus:ring-orange-500/20"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-mono font-bold text-gray-400 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>

          <div className="flex items-center gap-2 mt-4 text-xs font-mono uppercase text-gray-500 tracking-wider">
            <Filter size={10} className="text-orange-500" />
            <span>Category selection</span>
          </div>

          {/* Categories Row */}
          <div className="flex items-center gap-2.5 overflow-x-auto pt-3 pb-1 no-scrollbar -mx-2 px-2 scroll-smooth">
            {MENU_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full text-xs font-display font-bold whitespace-nowrap transition-all duration-300 cursor-pointer ${
                  selectedCategory === cat.id
                    ? "bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg shadow-orange-500/20 border-transparent scale-103"
                    : "bg-[#181818] text-gray-400 hover:text-gray-200 border border-white/5 hover:border-white/10"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Grid display of menu cards */}
        <AnimatePresence mode="popLayout">
          {filteredItems.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="text-center py-24 glass-panel rounded-2xl border border-white/5"
            >
              <div className="text-5xl mb-4 text-gray-600">🥘</div>
              <h3 className="font-display font-extrabold text-xl text-white mb-2">No Royal Dishes Found</h3>
              <p className="text-gray-500 text-sm font-sans max-w-sm mx-auto">
                We couldn&apos;t find any delicacies matching &ldquo;{searchQuery}&rdquo;. Try looking for paneer, naan, momo, or explore other categories.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("all");
                  setIsVegOnly(false);
                }}
                className="mt-6 px-6 py-2.5 bg-white/5 border border-white/10 text-xs font-mono font-bold tracking-wider hover:bg-orange-500/10 hover:text-orange-500 text-gray-400 rounded-full transition-all"
              >
                Reset Filters
              </button>
            </motion.div>
          ) : (
            <motion.div
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-7"
            >
              {filteredItems.map((item) => {
                const qty = cartQuantities[item.id] || 0;

                return (
                  <motion.div
                    layout
                    key={item.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 100, damping: 15 }}
                    id={`menu-card-${item.id}`}
                    className="group relative flex flex-col justify-between bg-[#121212]/90 rounded-2xl border border-white/5 hover:border-orange-500/20 shadow-xl hover:shadow-black/60 transition-all duration-300 overflow-hidden"
                  >
                    {/* Bestseller banner */}
                    {item.isBestseller && (
                      <div className="absolute top-3 left-3 z-20 flex items-center gap-1.5 px-2.5 py-1 bg-gradient-to-r from-orange-600 to-amber-500 text-[9px] font-mono font-black text-white uppercase tracking-wider rounded-md shadow-md animate-pulse">
                        <Sparkles size={10} />
                        <span>Bestseller</span>
                      </div>
                    )}

                    {/* Veg / Non-veg dot overlay (Flipkart/Zomato style) */}
                    <div className="absolute top-3 right-3 z-20 w-6 h-6 rounded-md bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center">
                      <div className="w-3.5 h-3.5 border border-emerald-600 flex items-center justify-center bg-transparent rounded-[3px]">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                      </div>
                    </div>

                    {/* Image Block with Luxury Scale */}
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-900 border-b border-white/5">
                      <img
                        src={item.imageUrl}
                        alt={item.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-108 transition-all duration-500 group-hover:brightness-105 filter saturate-[0.95]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-10 transition-opacity" />
                    </div>

                    {/* Content Group */}
                    <div className="p-5 flex-1 flex flex-col justify-between">
                      <div>
                        {/* Rating & Veg */}
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">
                            {item.category.replace("-", " ")}
                          </span>
                          
                          {/* Flipkart style rating bubble (glowing green/gold) */}
                          <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-emerald-500/15 border border-emerald-500/30 text-emerald-400">
                            <span className="font-mono text-xs font-extrabold">{item.rating}</span>
                            <Star size={11} className="fill-emerald-400 text-emerald-400" />
                          </div>
                        </div>

                        {/* Food Name */}
                        <h3 className="font-display font-extrabold text-lg text-white group-hover:text-orange-500 tracking-wide line-clamp-1 transition-colors">
                          {item.name}
                        </h3>

                        {/* Food Description */}
                        <p className="font-sans text-xs text-gray-400 mt-2 line-clamp-2 leading-relaxed">
                          {item.description}
                        </p>
                      </div>

                      {/* Pricing Tag and Button Actions (Flipkart style layout) */}
                      <div className="flex items-center justify-between mt-6 pt-3 border-t border-white/5">
                        <div className="flex flex-col">
                          <span className="text-[9px] font-mono uppercase text-gray-500">Price</span>
                          <span className="font-mono text-lg font-black text-white tracking-tight flex items-center">
                            ₹{item.price}
                          </span>
                        </div>

                        <div className="relative h-10 w-28 flex items-center justify-center">
                          {qty === 0 ? (
                            <motion.button
                              whileTap={{ scale: 0.95 }}
                              onClick={() => onAdd(item)}
                              id={`add-to-cart-${item.id}`}
                              className="absolute inset-0 flex items-center justify-center gap-1.5 rounded-lg border border-orange-500/40 bg-[#FF6B00]/5 text-orange-500 hover:bg-orange-500 hover:text-white font-display font-extrabold text-xs tracking-wider uppercase transition-all duration-300 cursor-pointer"
                            >
                              <Plus size={13} />
                              <span>Add</span>
                            </motion.button>
                          ) : (
                            <motion.div
                              initial={{ scale: 0.9 }}
                              animate={{ scale: 1 }}
                              className="absolute inset-0 flex items-center justify-between bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg text-white font-mono p-1 border border-orange-400/20 shadow-md shadow-orange-600/20"
                            >
                              <button
                                onClick={() => onUpdateQty(item, qty - 1)}
                                className="w-8 h-full flex items-center justify-center hover:bg-black/10 rounded transition-colors text-white font-bold cursor-pointer"
                              >
                                {qty === 1 ? <Minus size={12} /> : <Minus size={12} />}
                              </button>
                              
                              <span className="text-xs font-black tracking-tight select-none">
                                {qty}
                              </span>

                              <button
                                onClick={() => onUpdateQty(item, qty + 1)}
                                className="w-8 h-full flex items-center justify-center hover:bg-black/10 rounded transition-colors text-white font-bold cursor-pointer"
                              >
                                <Plus size={12} />
                              </button>
                            </motion.div>
                          )}
                        </div>
                      </div>

                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Dynamic decorative line */}
        <div className="mt-20 flex justify-center">
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-orange-500 to-transparent" />
        </div>

      </div>
    </section>
  );
}
