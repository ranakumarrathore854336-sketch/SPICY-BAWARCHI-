import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  User, 
  MapPin, 
  Clock, 
  Heart, 
  Phone, 
  Mail, 
  Share2, 
  History, 
  Calendar, 
  Check, 
  Edit2, 
  Plus, 
  Sparkles,
  ChevronRight,
  ShieldCheck,
  Compass
} from "lucide-react";
import { RESTAURANT_INFO, MENU_ITEMS } from "../data";
import { MenuItem, CartItem } from "../types";

interface ProfileViewProps {
  onReOrder: (items: CartItem[]) => void;
  onNavigateToTab: (tabId: string) => void;
}

export default function ProfileView({ onReOrder, onNavigateToTab }: ProfileViewProps) {
  const [profileName, setProfileName] = useState("Royal Patron");
  const [isEditingName, setIsEditingName] = useState(false);
  const [tempName, setTempName] = useState("Royal Patron");

  // Local state arrays loaded from LocalStorage
  const [previousOrders, setPreviousOrders] = useState<any[]>([]);
  const [partyBookings, setPartyBookings] = useState<any[]>([]);

  // Seed simulated entries if localStorage is initially blank
  useEffect(() => {
    // 1. Saved Name
    const savedName = localStorage.getItem("spicy_bawarchi_profile_name");
    if (savedName) {
      setProfileName(savedName);
      setTempName(savedName);
    }

    // 2. Previous Orders list
    const storedOrders = localStorage.getItem("spicy_bawarchi_previous_orders");
    if (storedOrders) {
      try {
        setPreviousOrders(JSON.parse(storedOrders));
      } catch (e) {}
    } else {
      // Mock some stunning past history so initial display looks like a real App profile
      const mockHistory = [
        {
          id: "SB-TBL-9014",
          name: "Royal Patron",
          table: "Table 4 - AC Cabin",
          items: [
            { menuItem: MENU_ITEMS[0], quantity: 1 }, // Paneer Butter Masala
            { menuItem: MENU_ITEMS[29], quantity: 2 }  // Butter Naan
          ],
          total: 300,
          date: "May 24, 2026, 08:30 PM"
        },
        {
          id: "SB-TBL-8841",
          name: "Royal Patron",
          table: "Table 1 - Fast Track",
          items: [
            { menuItem: MENU_ITEMS[16], quantity: 1 }  // Veg Momo
          ],
          total: 70,
          date: "May 19, 2026, 05:15 PM"
        }
      ];
      setPreviousOrders(mockHistory);
      localStorage.setItem("spicy_bawarchi_previous_orders", JSON.stringify(mockHistory));
    }

    // 3. Party Bookings list
    const storedBookings = localStorage.getItem("spicy_bawarchi_party_bookings");
    if (storedBookings) {
      try {
        setPartyBookings(JSON.parse(storedBookings));
      } catch (e) {}
    } else {
      const mockBookings = [
        {
          id: "SB-BK-912",
          name: "Royal Patron",
          phone: "76430 97915",
          eventType: "🎂 Birthday Party",
          date: "2026-06-15",
          guests: "30 Guests",
          notes: "Need premium red carpet entry decor & full sound setup.",
          timestamp: "May 28"
        }
      ];
      setPartyBookings(mockBookings);
      localStorage.setItem("spicy_bawarchi_party_bookings", JSON.stringify(mockBookings));
    }
  }, []);

  const handleSaveName = () => {
    if (tempName.trim()) {
      setProfileName(tempName);
      localStorage.setItem("spicy_bawarchi_profile_name", tempName);
      setIsEditingName(false);
    }
  };

  const executeReorder = (orderItems: CartItem[]) => {
    onReOrder(orderItems);
    alert("Royal order combination loaded into basket. Directing to Checkout!");
    onNavigateToTab("orders");
  };

  // Mock static "Saved Orders" favorites that users look for
  const savedComboFavorites = [
    {
      name: "🔥 Paneer Tikka + Butter Garlic Naan Feast",
      items: [
        { menuItem: MENU_ITEMS[5], quantity: 1 }, // Paneer Tikka Masala
        { menuItem: MENU_ITEMS[30], quantity: 2 } // Garlic Naan
      ],
      estimatedCost: 380,
      description: "Creamy grilled paneer combo with aromatic double-rolled garlic breads."
    },
    {
      name: "🥢 Oriental Sizzler & Himalayan Momo Trio",
      items: [
        { menuItem: MENU_ITEMS[21], quantity: 1 }, // Chilly Momo
        { menuItem: MENU_ITEMS[28], quantity: 1 }  // Chowmein
      ],
      estimatedCost: 260,
      description: "Spicy Schezwan street-style noodle tossed with crispy fiery momos."
    }
  ];

  return (
    <div className="space-y-6 pt-4 pb-20 px-4 overflow-y-auto max-h-[calc(100vh-140px)] select-none scrollbar-none">
      
      {/* 1. Hero Brand Card with SPICY BAWARCHI and official Address */}
      <div className="p-6 rounded-2xl bg-gradient-to-br from-orange-600/20 via-amber-600/5 to-[#121212]/90 border border-white/5 relative overflow-hidden flex flex-col items-center text-center">
        <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/[0.02] rounded-full blur-2xl" />
        
        {/* Brand Rounded Logo Representation */}
        <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-orange-500 to-amber-500 p-0.5 flex items-center justify-center shadow-[0_4px_16px_rgba(249,115,22,0.2)] relative mb-3.5">
          <div className="w-full h-full rounded-full bg-[#0c0c0e] flex items-center justify-center">
            <Sparkles size={22} className="text-orange-500 animate-pulse" />
          </div>
          <div className="absolute -bottom-1 -right-1 bg-[#25D366] text-black p-0.5 rounded-full border-2 border-[#090909] flex items-center justify-center">
            <ShieldCheck size={11} className="text-white" />
          </div>
        </div>

        {/* Restaurant Name Header */}
        <div className="space-y-1">
          <span className="text-[8px] font-mono uppercase tracking-[0.25em] text-amber-500 font-extrabold block">
            OFFICIAL OUTLET
          </span>
          <h2 className="font-display font-black text-xl sm:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-400 uppercase tracking-tight m-0">
            {RESTAURANT_INFO.name}
          </h2>
        </div>

        {/* Restaurant Address displayed exactly in place of user name text/edit components */}
        <div className="mt-3.5 p-3 rounded-xl bg-white/[0.02] border border-white/5 w-full flex flex-col items-center gap-1.5">
          <div className="flex items-center gap-1 text-[10px] font-mono text-gray-500 font-bold uppercase tracking-wider">
            <MapPin size={11} className="text-orange-500" />
            <span>Forbesganj Address</span>
          </div>
          <p className="font-sans text-[11px] text-gray-300 leading-relaxed max-w-xs px-2 m-0 select-text">
            {RESTAURANT_INFO.address}
          </p>
        </div>

        <div className="flex items-center gap-1.5 mt-3 justify-center">
          <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-[#25D366] bg-[#25D366]/10 px-2 py-0.5 rounded-full font-bold">
            Verified Pure Veg 
          </span>
        </div>
      </div>

      {/* 2. Previous Orders Tab List */}
      <div>
        <div className="flex items-center gap-1.5 mb-3 px-1">
          <History size={13} className="text-orange-500 animate-pulse" />
          <h3 className="font-display font-black text-xs uppercase tracking-widest text-white">
            Previous Orders List
          </h3>
        </div>

        <div className="space-y-3">
          {previousOrders.map((ord) => (
            <div
              key={ord.id}
              className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-3 hover:border-white/10 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono text-gray-400 block font-bold leading-normal">{ord.id}</span>
                  <span className="text-[9px] font-mono text-gray-500 block -mt-0.5">{ord.date}</span>
                </div>
                <span className="text-[9px] font-mono text-emerald-500 font-bold bg-emerald-500/10 px-2 py-0.5 rounded-full uppercase tracking-wider">
                  {ord.table}
                </span>
              </div>

              {/* Items summary */}
              <div className="space-y-1">
                {ord.items.map((it: any, index: number) => (
                  <div key={index} className="flex justify-between items-center text-[11px] font-sans text-gray-400">
                    <span className="truncate max-w-[200px]">
                      {it.menuItem.name} <span className="text-gray-600">x{it.quantity}</span>
                    </span>
                    <span className="font-mono text-gray-300">₹{it.menuItem.price * it.quantity}</span>
                  </div>
                ))}
              </div>

              <div className="h-[1px] bg-white/5 my-1" />

              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[9px] font-sans text-gray-500">Paid Grand Total</span>
                  <span className="text-xs font-display font-black text-white block -mt-1">₹{ord.total}</span>
                </div>

                <button
                  onClick={() => executeReorder(ord.items)}
                  className="px-3 py-1.5 bg-orange-600/10 hover:bg-orange-600 text-orange-500 hover:text-white border border-orange-500/20 hover:border-transparent text-[9px] font-mono font-bold uppercase rounded-lg cursor-pointer transition-all active:scale-95"
                >
                  RE-ORDER ↺
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Saved Orders Combinations (Swipeable re-orders) */}
      <div>
        <div className="flex items-center gap-1.5 mb-3 px-1">
          <Heart size={13} className="text-rose-500 fill-rose-500" />
          <h3 className="font-display font-black text-xs uppercase tracking-widest text-white">
            Saved Order Templates
          </h3>
        </div>

        <div className="space-y-3">
          {savedComboFavorites.map((combo, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-[#121212]/40 border border-white/5 flex flex-col justify-between gap-3 hover:border-orange-500/10 transition-colors"
            >
              <div>
                <h4 className="font-display font-bold text-xs text-white leading-normal">
                  {combo.name}
                </h4>
                <p className="font-sans text-[10px] text-gray-400 mt-1 leading-relaxed">
                  {combo.description}
                </p>
                <div className="text-[9px] font-mono text-amber-500 font-bold uppercase tracking-wider mt-1.5">
                  Est: ₹{combo.estimatedCost}
                </div>
              </div>

              <button
                onClick={() => executeReorder(combo.items)}
                className="w-full py-2 bg-white/5 hover:bg-orange-600 text-white text-[9px] font-mono font-black uppercase rounded-lg cursor-pointer transition-all active:scale-95 text-center flex items-center justify-center gap-1"
              >
                <Plus size={10} />
                <span>LOAD TEMPLATE</span>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* 4. Active Party Sessions/Bookings history */}
      <div>
        <div className="flex items-center gap-1.5 mb-3 px-1">
          <Calendar size={13} className="text-orange-500 animate-spin" style={{ animationDuration: "6s" }} />
          <h3 className="font-display font-black text-xs uppercase tracking-widest text-white">
            Party Booking Requests
          </h3>
        </div>

        {partyBookings.length > 0 ? (
          <div className="space-y-2.5">
            {partyBookings.map((bk) => (
              <div
                key={bk.id}
                className="p-3.5 rounded-xl bg-orange-600/5 border border-orange-500/10 flex items-center justify-between gap-3"
              >
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-sans font-bold text-white block">
                      {bk.eventType}
                    </span>
                    <span className="text-[9px] font-mono text-gray-600">•</span>
                    <span className="text-[9px] font-mono text-gray-500">
                      {bk.timestamp}
                    </span>
                  </div>
                  
                  <div className="text-[10px] text-gray-400 font-sans mt-0.5">
                    Date: <span className="font-bold text-gray-300">{bk.date}</span> &bull; Ext: <span className="font-bold text-amber-500">{bk.guests}</span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[8px] font-mono text-amber-500 bg-amber-500/10 px-2 py-0.5 rounded uppercase font-black tracking-wider">
                    PENDING CONFIRM
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-6 border border-white/5 rounded-xl bg-white/[0.01]">
            <span className="text-[10px] font-mono text-gray-500">No active bookings registered.</span>
          </div>
        )}
      </div>

      {/* 5. Direct Concierge Contact blocks */}
      <div>
        <h3 className="font-display font-black text-xs uppercase tracking-widest text-white mb-3 px-1">
          Concierge Support
        </h3>

        <div className="grid grid-cols-2 gap-2 text-xs font-mono">
          <a
            href={`tel:${RESTAURANT_INFO.phone}`}
            className="flex items-center gap-2 p-3 rounded-xl bg-white/[0.02] border border-white/5 text-gray-300 hover:text-white transition-all text-center justify-center active:scale-95"
          >
            <Phone size={13} className="text-orange-500" />
            <span>Call Desk</span>
          </a>

          <a
            href="https://maps.app.goo.gl/9R38L"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 p-3 rounded-xl bg-white/[0.02] border border-white/5 text-gray-300 hover:text-white transition-all text-center justify-center active:scale-95"
          >
            <Compass size={13} className="text-amber-500 animate-pulse" />
            <span>Open GPS</span>
          </a>
        </div>
      </div>

    </div>
  );
}
