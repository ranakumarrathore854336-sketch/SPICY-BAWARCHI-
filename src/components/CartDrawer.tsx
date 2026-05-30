import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ShoppingBag, Trash2, ArrowRight, MessageSquare, Truck, ClipboardList, Phone } from "lucide-react";
import { CartItem, MenuItem } from "../types";
import { RESTAURANT_INFO } from "../data";

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQty: (item: MenuItem, qty: number) => void;
  onClear: () => void;
}

export default function CartDrawer({ isOpen, onClose, cart, onUpdateQty, onClear }: CartDrawerProps) {
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [deliveryType, setDeliveryType] = useState<"delivery" | "dine-in" | "takeaway">("delivery");
  const [customerAddress, setCustomerAddress] = useState("");
  const [isOrdering, setIsOrdering] = useState(false);

  // Math aggregates
  const subtotal = cart.reduce((acc, curr) => acc + curr.menuItem.price * curr.quantity, 0);
  const deliveryCharge = deliveryType === "delivery" ? 0 : 0; // FREE Delivery as per client banners!
  const grandTotal = subtotal + deliveryCharge;

  const handleCheckout = (e: FormEvent) => {
    e.preventDefault();
    if (!customerName || !customerPhone) {
      alert("Please provide a Name and a Phone Number to customize your luxury table/delivery ticket.");
      return;
    }
    if (deliveryType === "delivery" && !customerAddress) {
      alert("Please provide your delivery address in Forbesganj.");
      return;
    }

    setIsOrdering(true);

    // Compile a highly formatted, beautiful invoice text for WhatsApp
    let message = `*👑 SPICY BAWARCHI - NEW ORDER 👑*\n`;
    message += `-------------------------------------------\n`;
    message += `*👤 Name:* ${customerName}\n`;
    message += `*📞 Phone:* ${customerPhone}\n`;
    message += `*📦 Service Type:* ${
      deliveryType === "delivery"
        ? "🚚 Free Home Delivery"
        : deliveryType === "dine-in"
        ? "🍽️ Premium Dine-in"
        : "🛍️ Quick Takeaway"
    }\n`;

    if (deliveryType === "delivery") {
      message += `*📍 Address:* ${customerAddress}\n`;
    }
    
    message += `-------------------------------------------\n`;
    message += `*📋 ITEM LISTING:*\n`;

    cart.forEach((item, index) => {
      message += `${index + 1}. *${item.menuItem.name}* \n`;
      message += `   (Qty: ${item.quantity} x ₹${item.menuItem.price}) = *₹${item.quantity * item.menuItem.price}*\n`;
    });

    message += `-------------------------------------------\n`;
    message += `*💰 Subtotal:* ₹${subtotal}\n`;
    message += `*🚚 Delivery Fee:* FREE\n`;
    message += `*💵 GRAND TOTAL:* *₹${grandTotal}*\n`;
    message += `-------------------------------------------\n`;
    message += `_Every bite tells a story. Please confirm availability and prepare my order. Thank you!_ ✨`;

    const encodedText = encodeURIComponent(message);
    const whatsappLink = `https://wa.me/${RESTAURANT_INFO.whatsapp}?text=${encodedText}`;

    // Anchor action inside our sandbox bounds
    window.open(whatsappLink, "_blank");
    setIsOrdering(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Sheet Backdrop Mask */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black z-50 backdrop-blur-sm"
          />

          {/* Drawer Wrapper */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 220 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-[#101010] z-50 shadow-2xl flex flex-col justify-between border-l border-white/5"
          >
            {/* Header section */}
            <div className="p-6 border-b border-white/5 flex items-center justify-between bg-[#141414]">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500">
                  <ShoppingBag size={16} />
                </div>
                <div>
                  <h3 className="font-display font-extrabold text-lg text-white">Your Royal Bag</h3>
                  <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest -mt-1">
                    {cart.length} unique treasures
                  </p>
                </div>
              </div>
              
              <button
                onClick={onClose}
                className="p-1.5 rounded-full bg-white/5 text-gray-400 hover:text-white transition-colors cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>

            {/* Scrollable list of items */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6 no-scrollbar">
              {cart.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-24 text-center">
                  <span className="text-5xl mb-4">🫓</span>
                  <h4 className="font-display font-extrabold text-base text-gray-400">Bag is empty</h4>
                  <p className="text-xs text-gray-600 font-sans max-w-xs mt-2 leading-relaxed">
                    Explore our exquisite recipes of succulent paneer, hot momos, and aromatic pulaos to crown your day!
                  </p>
                  <button
                    onClick={onClose}
                    className="mt-6 px-5 py-2.5 bg-gradient-to-r from-orange-500 to-amber-500 font-display font-bold text-xs uppercase tracking-wider text-white rounded-full shadow-lg"
                  >
                    Browse Recipes
                  </button>
                </div>
              ) : (
                <>
                  {/* Cart Header Actions */}
                  <div className="flex items-center justify-between pb-3 border-b border-white/5">
                    <span className="text-xs font-mono text-gray-400 tracking-wide uppercase">Gourmet Selection</span>
                    <button
                      onClick={onClear}
                      className="text-[10px] font-mono text-red-400 hover:text-red-300 font-bold uppercase tracking-widest flex items-center gap-1.5 cursor-pointer"
                    >
                      <Trash2 size={11} />
                      <span>Discard All</span>
                    </button>
                  </div>

                  {/* Individual Cart item rows */}
                  <div className="space-y-4">
                    {cart.map((item) => (
                      <div
                        key={item.menuItem.id}
                        className="flex items-center justify-between gap-4 p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors"
                      >
                        <img
                          src={item.menuItem.imageUrl}
                          alt={item.menuItem.name}
                          referrerPolicy="no-referrer"
                          className="w-12 h-12 rounded-lg object-cover bg-zinc-800"
                        />

                        <div className="flex-1 min-w-0">
                          <h5 className="font-display font-bold text-sm text-white truncate">
                            {item.menuItem.name}
                          </h5>
                          <span className="font-mono text-xs text-orange-500 font-extrabold mt-0.5 block">
                            ₹{item.menuItem.price}
                          </span>
                        </div>

                        {/* Quantity controls */}
                        <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg p-1 text-xs">
                          <button
                            onClick={() => onUpdateQty(item.menuItem, item.quantity - 1)}
                            className="p-1 text-gray-400 hover:text-white font-black truncate"
                          >
                            <Trash2 size={11} className="text-red-400/80" />
                          </button>
                          
                          <span className="font-mono font-black text-white w-5 text-center">
                            {item.quantity}
                          </span>

                          <button
                            onClick={() => onUpdateQty(item.menuItem, item.quantity + 1)}
                            className="p-1 text-gray-400 hover:text-white font-heavy cursor-pointer"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Customer Credentials Form */}
                  <form onSubmit={handleCheckout} className="space-y-4 pt-6 border-t border-white/5">
                    <span className="text-xs font-mono text-gray-400 tracking-wide uppercase block pb-1">
                      👑 Royal Ticket Generation
                    </span>

                    {/* Name */}
                    <div>
                      <label className="block text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        placeholder="e.g., Shanu Mishra"
                        className="w-full bg-[#181818] border border-white/10 focus:border-orange-500 rounded-xl px-4 py-3 text-sm text-white outline-none transition-all placeholder-gray-600"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-1.5">
                        WhatsApp Call / Text Phone *
                      </label>
                      <div className="relative">
                        <Phone size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                        <input
                          type="tel"
                          required
                          value={customerPhone}
                          onChange={(e) => setCustomerPhone(e.target.value)}
                          placeholder="e.g., 7643097915"
                          className="w-full bg-[#181818] border border-white/10 focus:border-orange-500 rounded-xl pl-10 pr-4 py-3 text-sm text-white outline-none transition-all placeholder-gray-600"
                        />
                      </div>
                    </div>

                    {/* Delivery / Dine-in choices */}
                    <div>
                      <label className="block text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-1.5">
                        Delivery Scheme *
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        {[
                          { id: "delivery", label: "Delivery" },
                          { id: "dine-in", label: "Dine-in" },
                          { id: "takeaway", label: "Takeaway" }
                        ].map((type) => (
                          <button
                            key={type.id}
                            type="button"
                            onClick={() => setDeliveryType(type.id as any)}
                            className={`py-2 rounded-xl text-xs font-display font-semibold transition-all cursor-pointer border ${
                              deliveryType === type.id
                                ? "bg-orange-500/10 text-orange-500 border-orange-500/30"
                                : "bg-[#181818]/60 text-gray-400 border-white/5 hover:border-white/10"
                            }`}
                          >
                            {type.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Address block (Shows on Delivery selection) */}
                    <AnimatePresence>
                      {deliveryType === "delivery" && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="overflow-hidden"
                        >
                          <label className="block text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-1.5">
                            Delivery Address in Forbesganj *
                          </label>
                          <textarea
                            required={deliveryType === "delivery"}
                            value={customerAddress}
                            onChange={(e) => setCustomerAddress(e.target.value)}
                            placeholder="Near Forbesganj College, Flyover Area, Sant Nirankari Satsang Bhawan, etc."
                            rows={3}
                            className="w-full bg-[#181818] border border-white/10 focus:border-orange-500 rounded-xl px-4 py-3 text-sm text-white outline-none transition-all placeholder-gray-600 resize-none font-sans"
                          />
                          <div className="flex items-center gap-2 mt-1.5 text-[10px] font-mono text-emerald-500 bg-emerald-500/5 p-2 rounded border border-emerald-500/10">
                            <Truck size={12} />
                            <span>Free home delivery provided directly to your location!</span>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Form submit anchor trigger */}
                    <button
                      type="submit"
                      disabled={isOrdering}
                      className="w-full mt-6 py-4 rounded-xl bg-gradient-to-r from-emerald-600 to-green-500 text-white font-display font-bold text-sm tracking-wide hover:brightness-110 shadow-lg shadow-emerald-600/10 flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-[0.98]"
                    >
                      <MessageSquare size={16} />
                      <span>{isOrdering ? "Redirecting..." : "Launch Order on WhatsApp"}</span>
                    </button>
                  </form>
                </>
              )}
            </div>

            {/* Sticky summary subtotal panel */}
            {cart.length > 0 && (
              <div className="p-6 bg-[#141414] border-t border-white/5">
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-gray-500 font-mono">
                    <span>Subtotal</span>
                    <span className="font-bold text-gray-300">₹{subtotal}</span>
                  </div>

                  <div className="flex items-center justify-between text-xs text-gray-500 font-mono">
                    <span>Delivering Charge</span>
                    <span className="text-emerald-500 font-black">FREE Delivery</span>
                  </div>

                  <div className="h-[1px] bg-white/5" />

                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs font-mono text-gray-400 capitalize">Final Total</span>
                      <span className="text-[10px] text-gray-600 block leading-tight font-sans">prices include taxes</span>
                    </div>
                    <span className="font-mono text-xl font-black text-amber-500">
                      ₹{grandTotal}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
