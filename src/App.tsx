import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Home, 
  BookOpen, 
  ShoppingBag, 
  User, 
  Sparkles,
  Phone,
  MessageSquare
} from "lucide-react";

import HomeView from "./components/HomeView";
import MenuView from "./components/MenuView";
import OrdersView from "./components/OrdersView";
import ProfileView from "./components/ProfileView";

import { MenuItem, CartItem } from "./types";
import { RESTAURANT_INFO } from "./data";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<string>("home");
  const [ordersSubTab, setOrdersSubTab] = useState<"cart" | "booking">("cart");
  const [cart, setCart] = useState<CartItem[]>([]);

  // Initialize and restore active cart from localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem("spicy_bawarchi_cart");
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (e) {
        console.error("Failed to restore cart state:", e);
      }
    }

    // Set a solid loading sequence for premium app asset registration
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  const saveCart = (newCart: CartItem[]) => {
    setCart(newCart);
    localStorage.setItem("spicy_bawarchi_cart", JSON.stringify(newCart));
  };

  // Add Item to cart
  const handleAddToCart = (item: MenuItem) => {
    const existing = cart.find((c) => c.menuItem.id === item.id);
    let updated: CartItem[] = [];
    if (existing) {
      updated = cart.map((c) =>
        c.menuItem.id === item.id ? { ...c, quantity: c.quantity + 1 } : c
      );
    } else {
      updated = [...cart, { menuItem: item, quantity: 1 }];
    }
    saveCart(updated);
  };

  // Immediate checkout flow for BUY NOW button
  const handleBuyNow = (item: MenuItem) => {
    const existing = cart.find((c) => c.menuItem.id === item.id);
    let updated: CartItem[] = [];
    if (existing) {
      updated = cart.map((c) =>
        c.menuItem.id === item.id ? { ...c, quantity: c.quantity + 1 } : c
      );
    } else {
      updated = [...cart, { menuItem: item, quantity: 1 }];
    }
    saveCart(updated);
    
    // Switch immediately to orders checkout basket
    setOrdersSubTab("cart");
    setActiveTab("orders");
  };

  const handleUpdateQuantity = (item: MenuItem, qty: number) => {
    let updated: CartItem[] = [];
    if (qty <= 0) {
      updated = cart.filter((c) => c.menuItem.id !== item.id);
    } else {
      updated = cart.map((c) =>
        c.menuItem.id === item.id ? { ...c, quantity: qty } : c
      );
    }
    saveCart(updated);
  };

  const handleClearCart = () => {
    saveCart([]);
  };

  const handleReOrder = (reorderItems: CartItem[]) => {
    // Merge reordered template into the active basket
    const mergedCart = [...cart];
    reorderItems.forEach(reItem => {
      const existingIdx = mergedCart.findIndex(m => m.menuItem.id === reItem.menuItem.id);
      if (existingIdx > -1) {
        mergedCart[existingIdx].quantity += reItem.quantity;
      } else {
        mergedCart.push(reItem);
      }
    });
    saveCart(mergedCart);
  };

  const handleNavigateToTab = (tabId: string) => {
    if (tabId === "party-booking") {
      setOrdersSubTab("booking");
      setActiveTab("orders");
    } else {
      setActiveTab(tabId);
    }
  };

  const cartCount = cart.reduce((acc, curr) => acc + curr.quantity, 0);

  return (
    <div className="bg-[#050505] text-white selection:bg-orange-500 selection:text-white min-h-screen relative font-sans overflow-x-hidden">
      
      {/* 1. PREMIUM APP LOADING SPLASH SCREEN */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="preloader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
            className="fixed inset-0 z-[100] bg-[#070707] flex flex-col items-center justify-center p-6 select-none"
          >
            {/* Soft Warm Fire Glow Backdrop effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-orange-600/10 fire-glow" />

            <div className="relative flex flex-col items-center text-center space-y-4">
              <div className="relative w-20 h-20 p-1.5 rounded-full border border-orange-500/20">
                <div className="absolute inset-0 rounded-full border-t border-r border-orange-500 animate-spin" style={{ animationDuration: "0.8s" }} />
                <div className="w-full h-full rounded-full bg-[#121212] flex items-center justify-center">
                  <span className="font-display font-black text-white text-xl">SB</span>
                </div>
              </div>

              <div>
                <motion.h1
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="font-display font-black text-3xl tracking-widest text-white leading-none uppercase"
                >
                  SPICY BAWARCHI
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-[9px] font-mono tracking-[0.45em] text-amber-500 uppercase mt-1.5 font-bold"
                >
                  Forbesganj, Bihar
                </motion.p>
              </div>
              
              <div className="h-[1px] w-12 bg-white/10" />
              
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="text-[10px] font-mono text-gray-500 tracking-wider uppercase flex items-center gap-1.5 justify-center"
              >
                <Sparkles size={11} className="text-amber-500 animate-pulse" />
                <span>Opening Order Concierge...</span>
              </motion.span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. CHOSEN ULTRA-PREMIUM FLIPKART/SWIGGY APP VIEWPORT SIMULATOR */}
      {!isLoading && (
        <div className="w-full min-h-screen relative flex items-center justify-center bg-gradient-to-br from-[#121212] via-black to-[#1a1410]">
          
          {/* Subtle Ambient Background Food Sizzling flare */}
          <div className="hidden lg:block absolute inset-0 bg-[url('https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&w=1600&q=50')] opacity-5 filter blur-sm bg-cover bg-center" />

          {/* Centered phone proportions bezel panel */}
          <div className="w-full max-w-md min-h-screen bg-[#090909] relative flex flex-col border-x border-white/5 shadow-[0_0_80px_rgba(0,0,0,0.85)] overflow-hidden">
            


            {/* Active Content rendering viewport */}
            <div className="flex-1 flex flex-col justify-start relative">
              <AnimatePresence mode="wait">
                {activeTab === "home" && (
                  <motion.div
                    key="homeTab"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <HomeView
                      onNavigateToTab={handleNavigateToTab}
                      onAddToCart={handleAddToCart}
                      onBuyNow={handleBuyNow}
                    />
                  </motion.div>
                )}

                {activeTab === "menu" && (
                  <motion.div
                    key="menuTab"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <MenuView
                      onAddToCart={handleAddToCart}
                      onBuyNow={handleBuyNow}
                      cartCount={cartCount}
                      onNavigateToTab={handleNavigateToTab}
                    />
                  </motion.div>
                )}

                {activeTab === "orders" && (
                  <motion.div
                    key="ordersTab"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <OrdersView
                      cart={cart}
                      onUpdateQty={handleUpdateQuantity}
                      onClear={handleClearCart}
                      onNavigateToTab={handleNavigateToTab}
                      initialSubTab={ordersSubTab}
                    />
                  </motion.div>
                )}

                {activeTab === "profile" && (
                  <motion.div
                    key="profileTab"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ProfileView
                      onReOrder={handleReOrder}
                      onNavigateToTab={handleNavigateToTab}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* 3. PERMANENT STICKY BOTTOM NAVIGATION BAR */}
            <div className="absolute bottom-0 inset-x-0 bg-[#0c0c0e]/95 backdrop-blur-lg border-t border-white/5 py-2.5 px-6 flex items-center justify-between z-40 select-none">
              
              {/* HOME Tab Button */}
              <button
                onClick={() => setActiveTab("home")}
                className="flex flex-col items-center justify-center gap-1 cursor-pointer group shrink-0"
              >
                <div className={`p-1.5 rounded-full transition-all ${activeTab === "home" ? "text-orange-500 scale-110" : "text-gray-500 group-hover:text-gray-300"}`}>
                  <Home size={18} />
                </div>
                <span className={`text-[10px] font-mono font-bold tracking-wider transition-all uppercase ${activeTab === "home" ? "text-orange-500" : "text-gray-500 group-hover:text-gray-400"}`}>
                  Home
                </span>
              </button>

              {/* MENU Tab Button */}
              <button
                onClick={() => setActiveTab("menu")}
                className="flex flex-col items-center justify-center gap-1 cursor-pointer group shrink-0"
              >
                <div className={`p-1.5 rounded-full transition-all ${activeTab === "menu" ? "text-orange-500 scale-110" : "text-gray-500 group-hover:text-gray-300"}`}>
                  <BookOpen size={18} />
                </div>
                <span className={`text-[10px] font-mono font-bold tracking-wider transition-all uppercase ${activeTab === "menu" ? "text-orange-500" : "text-gray-500 group-hover:text-gray-400"}`}>
                  Menu
                </span>
              </button>

              {/* ORDERS Tab Button */}
              <button
                onClick={() => {
                  setOrdersSubTab("cart");
                  setActiveTab("orders");
                }}
                className="flex flex-col items-center justify-center gap-1 cursor-pointer group shrink-0 relative"
              >
                <div className={`p-1.5 rounded-full transition-all ${activeTab === "orders" ? "text-orange-500 scale-110" : "text-gray-500 group-hover:text-gray-300"}`}>
                  <ShoppingBag size={18} />
                </div>
                {cartCount > 0 && (
                  <span className="absolute top-0.5 right-1.5 w-4 h-4 bg-orange-600 text-white font-mono font-black text-[8px] rounded-full flex items-center justify-center animate-bounce">
                    {cartCount}
                  </span>
                )}
                <span className={`text-[10px] font-mono font-bold tracking-wider transition-all uppercase ${activeTab === "orders" ? "text-orange-500" : "text-gray-500 group-hover:text-gray-400"}`}>
                  Orders
                </span>
              </button>

              {/* PROFILE Tab Button */}
              <button
                onClick={() => setActiveTab("profile")}
                className="flex flex-col items-center justify-center gap-1 cursor-pointer group shrink-0"
              >
                <div className={`p-1.5 rounded-full transition-all ${activeTab === "profile" ? "text-orange-500 scale-110" : "text-gray-500 group-hover:text-gray-300"}`}>
                  <User size={18} />
                </div>
                <span className={`text-[10px] font-mono font-bold tracking-wider transition-all uppercase ${activeTab === "profile" ? "text-orange-500" : "text-gray-500 group-hover:text-gray-400"}`}>
                  Profile
                </span>
              </button>

            </div>

          </div>
        </div>
      )}
    </div>
  );
}
