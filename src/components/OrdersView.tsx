import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ShoppingBag, 
  Trash2, 
  ArrowRight, 
  MessageSquare, 
  User, 
  Armchair, 
  Calendar, 
  Users, 
  Sparkles, 
  Check, 
  PhoneCall, 
  FileText,
  BookmarkCheck,
  ChevronRight
} from "lucide-react";
import { CartItem, MenuItem } from "../types";
import { RESTAURANT_INFO } from "../data";

interface OrdersViewProps {
  cart: CartItem[];
  onUpdateQty: (item: MenuItem, qty: number) => void;
  onClear: () => void;
  onNavigateToTab: (tabId: string) => void;
  initialSubTab?: "cart" | "booking";
}

export default function OrdersView({ 
  cart, 
  onUpdateQty, 
  onClear, 
  onNavigateToTab,
  initialSubTab = "cart"
}: OrdersViewProps) {
  const [activeSubTab, setActiveSubTab] = useState<"cart" | "booking">(initialSubTab);

  // 1. Table Order checkout state
  const [customerName, setCustomerName] = useState("");
  const [tableNumber, setTableNumber] = useState("");
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);

  // 2. Party Booking state
  const [partyName, setPartyName] = useState("");
  const [partyPhone, setPartyPhone] = useState("");
  const [partyType, setPartyType] = useState("🎂 Birthday Party");
  const [partyDate, setPartyDate] = useState("");
  const [partyGuests, setPartyGuests] = useState("");
  const [partyNotes, setPartyNotes] = useState("");
  const [bookingSuccess, setBookingSuccess] = useState(false);

  // Calculations for basket items
  const subtotal = cart.reduce((acc, curr) => acc + curr.menuItem.price * curr.quantity, 0);
  const totalAmount = subtotal; // Pure cost, zero redundant service tax

  // Party categories requested
  const partyCategories = [
    { label: "Birthday Party", val: "🎂 Birthday Party" },
    { label: "Anniversary Party", val: "💍 Anniversary Party" },
    { label: "Wedding Function", val: "👰 Wedding Function" },
    { label: "Engagement Party", val: "🎉 Engagement Party" },
    { label: "Family Gathering", val: "👨👩👧 Family Gathering" },
    { label: "Corporate Event", val: "🏢 Corporate Event" }
  ];

  // Handle active food checkout dispatch to WhatsApp
  const handleConfirmOrderSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!customerName.trim() || !tableNumber.trim()) {
      alert("Please provide the Customer Name and the Table Number to process your table order.");
      return;
    }

    if (cart.length === 0) {
      alert("Your order list is empty. Please select food dishes from the Menu.");
      return;
    }

    // Format selected items for summary
    const itemDetails = cart
      .map((c) => `- ${c.menuItem.name} [x${c.quantity}] — ₹${c.menuItem.price * c.quantity}`)
      .join("\n");

    // Pre-save order state to localStorage for the Profile Page
    const orderRecord = {
      id: "SB-TBL-" + Math.floor(1000 + Math.random() * 9000),
      name: customerName,
      table: tableNumber,
      items: cart,
      total: totalAmount,
      date: new Date().toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit"
      })
    };

    const savedOrders = localStorage.getItem("spicy_bawarchi_previous_orders");
    let ordersList = [];
    if (savedOrders) {
      try {
        ordersList = JSON.parse(savedOrders);
      } catch (err) {}
    }
    ordersList.unshift(orderRecord);
    localStorage.setItem("spicy_bawarchi_previous_orders", JSON.stringify(ordersList));

    // WhatsApp Message Compilation (STRICTLY conforming to instructions)
    const whatsAppMessage = `Hello SPICY BAWARCHI,

New Table Order

Customer Name: ${customerName}

Table Number: ${tableNumber}

Order Details:
${itemDetails}

Total Amount:
₹${totalAmount}

Please prepare my order.`;

    // Construct final direct WhatsApp redirection link
    const waUrl = `https://wa.me/${RESTAURANT_INFO.whatsapp}?text=${encodeURIComponent(whatsAppMessage)}`;

    // Clear local active basket upon sending
    onClear();
    setCheckoutSuccess(true);

    // Redirect
    setTimeout(() => {
      window.open(waUrl, "_blank");
      setCheckoutSuccess(false);
      setCustomerName("");
      setTableNumber("");
    }, 2000);
  };

  // Handle Party Booking submission
  const handleConfirmBookingSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!partyName.trim() || !partyPhone.trim() || !partyDate || !partyGuests.trim()) {
      alert("Please fill in Name, Phone, Date and expected Guest Count to submit booking.");
      return;
    }

    // Pre-save booking state to localStorage for the Profile Page
    const bookingRecord = {
      id: "SB-BK-" + Math.floor(100 + Math.random() * 900),
      name: partyName,
      phone: partyPhone,
      eventType: partyType,
      date: partyDate,
      guests: partyGuests,
      notes: partyNotes || "No special requests",
      timestamp: new Date().toLocaleDateString("en-US", {
        month: "short",
        day: "numeric"
      })
    };

    const savedBookings = localStorage.getItem("spicy_bawarchi_party_bookings");
    let bookingsList = [];
    if (savedBookings) {
      try {
        bookingsList = JSON.parse(savedBookings);
      } catch (err) {}
    }
    bookingsList.unshift(bookingRecord);
    localStorage.setItem("spicy_bawarchi_party_bookings", JSON.stringify(bookingsList));

    // Generate WhatsApp direct text
    const bookingWhatsAppMessage = `Hello SPICY BAWARCHI,

New Party Booking Request

Host Name: ${partyName}
Phone Number: ${partyPhone}
Event Type: ${partyType}
Date: ${partyDate}
Expected Guests: ${partyGuests}
Special Requirements: ${partyNotes || "None"}

Please confirm our party booking reservation. Thank you!`;

    const waUrl = `https://wa.me/${RESTAURANT_INFO.whatsapp}?text=${encodeURIComponent(bookingWhatsAppMessage)}`;

    setBookingSuccess(true);

    setTimeout(() => {
      window.open(waUrl, "_blank");
      setBookingSuccess(false);
      // Reset form
      setPartyName("");
      setPartyPhone("");
      setPartyType("🎂 Birthday Party");
      setPartyDate("");
      setPartyGuests("");
      setPartyNotes("");
    }, 2000);
  };

  return (
    <div className="space-y-4 pt-4 pb-20 px-4 overflow-y-auto max-h-[calc(100vh-140px)] select-none scrollbar-none">
      
      {/* Sub-tabs for switching between Table Order (Cart) and Party Booking */}
      <div className="flex bg-white/[0.02] border border-white/5 p-1 rounded-xl">
        <button
          onClick={() => setActiveSubTab("cart")}
          className={`flex-1 text-center py-2.5 rounded-lg text-xs font-mono font-bold tracking-wider transition-all cursor-pointer ${
            activeSubTab === "cart"
              ? "bg-orange-600 text-white shadow-md font-black"
              : "text-gray-400 hover:text-white"
          }`}
        >
          🛒 Table Basket ({cart.length})
        </button>

        <button
          onClick={() => setActiveSubTab("booking")}
          className={`flex-1 text-center py-2.5 rounded-lg text-xs font-mono font-bold tracking-wider transition-all cursor-pointer ${
            activeSubTab === "booking"
              ? "bg-orange-600 text-white shadow-md font-black"
              : "text-gray-400 hover:text-white"
          }`}
        >
          🎉 Party Booking
        </button>
      </div>

      <AnimatePresence mode="wait">
        {/* ==================== SUB-TAB 1: FOOD CART & CHECKOUT ==================== */}
        {activeSubTab === "cart" && (
          <motion.div
            key="cartSubSection"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="space-y-5"
          >
            {checkoutSuccess ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-500 mx-auto animate-bounce">
                  <Check size={28} />
                </div>
                <div>
                  <h3 className="font-display font-black text-lg text-white">Order Dispatching!</h3>
                  <p className="font-sans text-xs text-gray-400 mt-1 max-w-xs mx-auto">
                    We are compiling your order ticket and opening WhatsApp to confirm directly with our chefs...
                  </p>
                </div>
              </div>
            ) : cart.length > 0 ? (
              <div className="space-y-5">
                
                {/* Cart Items list */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between font-mono text-[10px] text-gray-500 uppercase tracking-widest px-1">
                    <span>Selected Plates</span>
                    <button 
                      onClick={onClear}
                      className="text-orange-500 font-bold hover:underline cursor-pointer flex items-center gap-1"
                    >
                      <Trash2 size={10} />
                      <span>Empty</span>
                    </button>
                  </div>

                  <div className="space-y-2 max-h-60 overflow-y-auto scrollbar-none pr-0.5">
                    {cart.map(({ menuItem, quantity }) => (
                      <div
                        key={menuItem.id}
                        className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/5 gap-3"
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <img
                            src={menuItem.imageUrl}
                            alt={menuItem.name}
                            referrerPolicy="no-referrer"
                            className="w-10 h-10 rounded-lg object-cover bg-zinc-900 border border-white/10 shrink-0"
                          />
                          <div className="min-w-0">
                            <span className="font-display font-bold text-xs text-white block truncate">{menuItem.name}</span>
                            <span className="text-[10px] font-mono text-gray-500 block">₹{menuItem.price} each</span>
                          </div>
                        </div>

                        {/* Quantity control */}
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => onUpdateQty(menuItem, quantity - 1)}
                            className="w-6 h-6 rounded bg-white/5 hover:bg-orange-600 transition-colors flex items-center justify-center text-xs font-mono text-white cursor-pointer active:scale-90"
                          >
                            -
                          </button>
                          <span className="font-mono text-xs w-5 text-center text-white font-bold">{quantity}</span>
                          <button
                            onClick={() => onUpdateQty(menuItem, quantity + 1)}
                            className="w-6 h-6 rounded bg-white/5 hover:bg-orange-600 transition-colors flex items-center justify-center text-xs font-mono text-white cursor-pointer active:scale-90"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Subtotal Banner */}
                <div className="p-3.5 rounded-xl bg-white/[0.01] border border-white/5 space-y-2">
                  <div className="flex items-center justify-between text-xs font-sans text-gray-400">
                    <span>Items Subtotal</span>
                    <span className="font-mono text-white font-bold">₹{subtotal}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs font-sans text-gray-400">
                    <span>GCT / Packaging</span>
                    <span className="font-mono text-emerald-500 font-black uppercase text-[10px]">FREE</span>
                  </div>
                  <div className="h-[1px] bg-white/5 my-1" />
                  <div className="flex items-center justify-between">
                    <span className="font-display font-bold text-xs text-white uppercase tracking-wider">Total Amount</span>
                    <span className="font-display font-black text-base text-orange-500">₹{totalAmount}</span>
                  </div>
                </div>

                {/* TABLE ORDER DETAILS FORM */}
                <form onSubmit={handleConfirmOrderSubmit} className="p-4 rounded-2xl bg-gradient-to-b from-[#121212]/90 to-transparent border border-white/5 space-y-4">
                  <div className="flex items-center gap-2 border-b border-white/5 pb-2">
                    <Sparkles size={13} className="text-amber-500 animate-pulse" />
                    <h4 className="font-display font-black text-xs uppercase tracking-widest text-white">
                      Table Details / Ticket Form
                    </h4>
                  </div>

                  <div className="space-y-3.5">
                    <div>
                      <label className="block text-[9px] font-mono font-bold text-gray-500 uppercase tracking-widest mb-1.5">
                        Customer Name
                      </label>
                      <div className="relative">
                        <User size={13} className="text-gray-500 absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          required
                          value={customerName}
                          onChange={(e) => setCustomerName(e.target.value)}
                          placeholder="E.g., Princess Vikram"
                          className="w-full text-xs font-sans pl-9 pr-3 py-2.5 rounded-xl bg-white/[0.02] border border-white/5 focus:border-orange-500/50 outline-none text-white transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[9px] font-mono font-bold text-gray-500 uppercase tracking-widest mb-1.5">
                        Table Number
                      </label>
                      <div className="relative">
                        <Armchair size={13} className="text-gray-500 absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          required
                          value={tableNumber}
                          onChange={(e) => setTableNumber(e.target.value)}
                          placeholder="E.g., Table 5 / Family Lounge"
                          className="w-full text-xs font-sans pl-9 pr-3 py-2.5 rounded-xl bg-white/[0.02] border border-white/5 focus:border-orange-500/50 outline-none text-white transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Submission triggers */}
                  <button
                    type="submit"
                    className="w-full py-3.5 mt-2 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 hover:brightness-110 active:scale-95 text-xs font-mono font-black text-white flex items-center justify-center gap-2 cursor-pointer transition-all shadow-md select-none"
                  >
                    <MessageSquare size={14} />
                    <span>CONFIRM & PLACE ORDER</span>
                  </button>
                </form>

              </div>
            ) : (
              <div className="py-16 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-white/[0.02] border border-white/5 flex items-center justify-center text-gray-600 mx-auto">
                  <ShoppingBag size={22} />
                </div>
                <div>
                  <h3 className="font-display font-black text-sm text-white uppercase tracking-wider">Your Basket is Empty</h3>
                  <p className="font-sans text-[11px] text-gray-500 mt-1 max-w-xs mx-auto leading-relaxed">
                    Explore our high-fidelity premium mockups, bestsellers and royal combos on the royal Menu tab to select delicacies.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => onNavigateToTab("menu")}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-orange-600/10 border border-orange-500/20 text-orange-500 hover:bg-orange-600/20 text-xs font-mono font-black uppercase tracking-wider transition-all cursor-pointer active:scale-95"
                >
                  <span>Go to Menu</span>
                  <ChevronRight size={12} />
                </button>
              </div>
            )}
          </motion.div>
        )}

        {/* ==================== SUB-TAB 2: PARTY BOOKING SYSTEM ==================== */}
        {activeSubTab === "booking" && (
          <motion.div
            key="bookingSubSection"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="space-y-4"
          >
            {bookingSuccess ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-500 mx-auto animate-bounce">
                  <BookmarkCheck size={28} />
                </div>
                <div>
                  <h3 className="font-display font-black text-lg text-white font-extrabold pb-0.5">Booking Registered!</h3>
                  <p className="font-sans text-xs text-gray-400 mt-1 max-w-xs mx-auto">
                    Saving records locally and loading WhatsApp thread to coordinate menus, catering, and seating configurations...
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleConfirmBookingSubmit} className="space-y-4">
                
                {/* Custom booking grid of categories */}
                <div>
                  <label className="block text-[9px] font-mono font-bold text-gray-400 uppercase tracking-widest mb-2 px-1">
                    Select Event Theme
                  </label>
                  
                  <div className="grid grid-cols-2 gap-2">
                    {partyCategories.map((p) => {
                      const isSelected = partyType === p.val;
                      return (
                        <button
                          key={p.val}
                          type="button"
                          onClick={() => setPartyType(p.val)}
                          className={`p-3 text-left rounded-xl border text-xs font-sans font-bold flex items-center gap-2 cursor-pointer transition-all ${
                            isSelected
                              ? "bg-amber-500/10 text-amber-400 border-amber-500/30 font-extrabold"
                              : "bg-white/[0.01] hover:bg-white/[0.02] text-gray-400 border-white/5"
                          }`}
                        >
                          <span>{p.val}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Form fields inputs */}
                <div className="p-4 rounded-xl bg-white/[0.01] border border-white/5 space-y-4">
                  <div className="flex items-center gap-2 border-b border-white/5 pb-2">
                    <Calendar size={13} className="text-orange-500" />
                    <h4 className="font-display font-black text-xs uppercase tracking-widest text-white">
                      Organizer details
                    </h4>
                  </div>

                  <div className="space-y-3">
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[8px] font-mono uppercase text-gray-500 tracking-wider mb-1">Name</label>
                        <input
                          type="text"
                          required
                          value={partyName}
                          onChange={(e) => setPartyName(e.target.value)}
                          placeholder="Organizer Name"
                          className="w-full text-xs font-sans p-2.5 rounded-lg bg-white/[0.02] border border-white/5 text-white outline-none focus:border-amber-500/40"
                        />
                      </div>
                      <div>
                        <label className="block text-[8px] font-mono uppercase text-gray-500 tracking-wider mb-1">Phone Number</label>
                        <input
                          type="tel"
                          required
                          value={partyPhone}
                          onChange={(e) => setPartyPhone(e.target.value)}
                          placeholder="Mobil Phone"
                          className="w-full text-xs font-sans p-2.5 rounded-lg bg-white/[0.02] border border-white/5 text-white outline-none focus:border-amber-500/40"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[8px] font-mono uppercase text-gray-500 tracking-wider mb-1">Event Date</label>
                        <input
                          type="date"
                          required
                          value={partyDate}
                          onChange={(e) => setPartyDate(e.target.value)}
                          className="w-full text-xs font-sans p-2.5 rounded-lg bg-white/[0.02] border border-white/5 text-white outline-none focus:border-amber-500/40"
                        />
                      </div>
                      <div>
                        <label className="block text-[8px] font-mono uppercase text-gray-500 tracking-wider mb-1">Expected Guests</label>
                        <input
                          type="number"
                          required
                          value={partyGuests}
                          onChange={(e) => setPartyGuests(e.target.value)}
                          placeholder="E.g., 50"
                          className="w-full text-xs font-sans p-2.5 rounded-lg bg-white/[0.02] border border-white/5 text-white outline-none focus:border-amber-500/40"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[8px] font-mono uppercase text-gray-500 tracking-wider mb-1">Special Requirements (Optional)</label>
                      <textarea
                        value={partyNotes}
                        onChange={(e) => setPartyNotes(e.target.value)}
                        placeholder="E.g., Balloons, Saffron Rabdi dessert requirement, Royal seating decor..."
                        className="w-full text-xs font-sans p-2.5 h-16 rounded-lg bg-white/[0.02] border border-white/5 text-white outline-none focus:border-amber-500/40 resize-none"
                      />
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-orange-600 hover:bg-orange-500 active:scale-95 text-xs font-mono font-black text-white flex items-center justify-center gap-2 cursor-pointer transition-all shadow-md select-none"
                >
                  <MessageSquare size={14} />
                  <span>DISPATCH PARTY ENQUIRY</span>
                </button>
              </form>
            )}
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
