import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Calendar, Users, Clock, Sparkles, Check, Armchair, ChevronRight, MessageSquare, Phone } from "lucide-react";

export default function ReservationSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    guests: "4",
    date: "",
    time: "07:30 PM",
    tableStyle: "Family AC Salon",
    notes: ""
  });

  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [ticketId, setTicketId] = useState("");

  const timeSlots = [
    "12:00 PM", "01:30 PM", "03:00 PM", 
    "06:30 PM", "07:30 PM", "08:30 PM", "09:30 PM", "10:30 PM"
  ];

  const seatingStyles = [
    { id: "Family AC Salon", label: "👑 Family AC Salon", desc: "Private, spacious dining cabins for group bonding." },
    { id: "Candlelight Dinner Set", label: "🕯️ Couple Luxury Booth", desc: "Dim romantic lights, central rose settings." },
    { id: "Window Garden Front", label: "🌿 Window Side Alcove", desc: "Watch the premium fairy-lit entrance." },
    { id: "Grand King Lounge", label: "⚜️ Emperor's Banquet", desc: "Our highest VIP gold tier circular configurations." }
  ];

  const handleReserveSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.date) {
      alert("Please complete Name, Phone, and Date to secure your luxury reservation.");
      return;
    }

    // Generate a beautiful, pseudo-random premium ticket number
    const generatedTicket = "SB-" + Math.floor(100000 + Math.random() * 900000);
    setTicketId(generatedTicket);
    setBookingConfirmed(true);
  };

  const shareConfirmationOnWhatsApp = () => {
    const text = `*👑 SPICY BAWARCHI - LUXURY TABLE CONFIRMATION 👑*\n` +
      `-------------------------------------------\n` +
      `*🎫 Reservation ID:* ${ticketId}\n` +
      `*👤 Primary Guest:* ${formData.name}\n` +
      `*📞 Phone:* ${formData.phone}\n` +
      `*👥 Group Size:* ${formData.guests} Persons\n` +
      `*📅 Date:* ${formData.date}\n` +
      `*⏰ Selected Time:* ${formData.time}\n` +
      `*🪑 Seating Zone:* ${formData.tableStyle}\n` +
      `-------------------------------------------\n` +
      `_I have successfully requested my table online. Please prepare the welcome drinks!_ ✨`;
    
    window.open(`https://wa.me/917643097915?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <section
      id="reservation-section"
      className="relative py-24 sm:py-32 bg-[#0B0B0B] border-t border-white/5"
    >
      {/* Dynamic Background Flare */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] rounded-full bg-orange-600/5 fire-glow pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 mb-4">
            <Calendar size={11} className="text-amber-500" />
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-amber-500">
              Direct Digital Concierge
            </span>
          </div>
          
          <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white leading-none">
            RESERVE A <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-amber-500">LUXURY TABLE</span>
          </h2>
          
          <p className="text-gray-400 font-sans mt-3 text-sm sm:text-base max-w-xl mx-auto">
            Avoid wait times. Book your ambient dining cabinet or romantic romantic couple layout at least 2 hours in advance.
          </p>
        </div>

        {/* Content Panel Box */}
        <div className="max-w-4xl mx-auto bg-[#121212]/80 backdrop-blur-md rounded-2xl border border-white/5 overflow-hidden shadow-2xl relative">
          
          <AnimatePresence mode="wait">
            {!bookingConfirmed ? (
              
              /* RESERVATION FORM */
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleReserveSubmit}
                id="luxury-reservation-form"
                className="p-6 sm:p-10 lg:p-12 space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  {/* Name field */}
                  <div>
                    <label className="block text-[10px] font-mono uppercase text-gray-400 tracking-widest mb-2 font-bold">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Chandan Kumar"
                      className="w-full bg-[#181818] border border-white/10 hover:border-white/20 focus:border-orange-500 rounded-xl px-4 py-3.5 text-sm text-white outline-none transition-all placeholder-gray-600"
                    />
                  </div>

                  {/* Phone field */}
                  <div>
                    <label className="block text-[10px] font-mono uppercase text-gray-400 tracking-widest mb-2 font-bold">
                      WhatsApp/Call Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. 7643097915"
                      className="w-full bg-[#181818] border border-white/10 hover:border-white/20 focus:border-orange-500 rounded-xl px-4 py-3.5 text-sm text-white outline-none transition-all placeholder-gray-600"
                    />
                  </div>

                  {/* Date picker */}
                  <div>
                    <label className="block text-[10px] font-mono uppercase text-gray-400 tracking-widest mb-2 font-bold">
                      Date of Gathering *
                    </label>
                    <input
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full bg-[#181818] border border-white/10 hover:border-white/20 focus:border-orange-500 rounded-xl px-4 py-3.5 text-sm text-white outline-none transition-all text-gray-300 [&::-webkit-calendar-picker-indicator]:invert"
                    />
                  </div>

                  {/* Guests count selector */}
                  <div>
                    <label className="block text-[10px] font-mono uppercase text-gray-400 tracking-widest mb-2 font-bold">
                      Gourmet Party Size *
                    </label>
                    <div className="relative">
                      <Users size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                      <select
                        value={formData.guests}
                        onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                        className="w-full bg-[#181818] border border-white/10 hover:border-white/20 focus:border-orange-500 rounded-xl pl-11 pr-4 py-3.5 text-sm text-white outline-none transition-all appearance-none cursor-pointer"
                      >
                        <option value="1">1 Connoisseur</option>
                        <option value="2">2 Experts (Couple Booth)</option>
                        <option value="4">4 Family Members</option>
                        <option value="6">6 Relatives (Dining Cabin)</option>
                        <option value="8">8 Guests (VIP Banquet)</option>
                        <option value="12">12+ Grand Gathering</option>
                      </select>
                    </div>
                  </div>

                </div>

                {/* Seating style choice layout */}
                <div>
                  <label className="block text-[10px] font-mono uppercase text-gray-400 tracking-widest mb-4 font-bold flex items-center gap-1">
                    <Armchair size={12} className="text-orange-500" />
                    <span>Selected Seating Zone</span>
                  </label>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {seatingStyles.map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setFormData({ ...formData, tableStyle: item.id })}
                        className={`p-4 rounded-xl border text-left cursor-pointer transition-all duration-300 group ${
                          formData.tableStyle === item.id
                            ? "bg-gradient-to-tr from-orange-500/10 to-amber-500/5 text-white border-orange-500/40 shadow-inner"
                            : "bg-[#181818]/40 text-gray-400 border-white/5 hover:border-white/10"
                        }`}
                      >
                        <div className={`font-display font-extrabold text-sm mb-1 ${
                          formData.tableStyle === item.id ? "text-orange-500" : "text-white"
                        }`}>
                          {item.label}
                        </div>
                        <div className="text-[11px] text-gray-500 font-sans group-hover:text-gray-400 font-medium transition-colors">
                          {item.desc}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Time slot picker */}
                <div>
                  <label className="block text-[10px] font-mono uppercase text-gray-400 tracking-widest mb-3 font-bold flex items-center gap-1">
                    <Clock size={12} className="text-orange-500" />
                    <span>Gathering Hours</span>
                  </label>
                  
                  <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar -mx-2 px-2">
                    {timeSlots.map((slot) => (
                      <button
                        type="button"
                        key={slot}
                        onClick={() => setFormData({ ...formData, time: slot })}
                        className={`px-4 py-2 rounded-lg text-xs font-mono font-bold whitespace-nowrap transition-all duration-300 cursor-pointer ${
                          formData.time === slot
                            ? "bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-md border-transparent"
                            : "bg-[#181818] text-gray-400 hover:text-white border border-white/5"
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Notes textarea */}
                <div>
                  <label className="block text-[10px] font-mono uppercase text-gray-400 tracking-widest mb-2 font-bold">
                    Special Accommodations / Custom Requests (Optional)
                  </label>
                  <textarea
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="e.g., Please arrange decorations for an anniversary, high-chair baby requirements, or dry-spice levels."
                    rows={2}
                    className="w-full bg-[#181818] border border-white/10 hover:border-white/20 focus:border-orange-500 rounded-xl px-4 py-3.5 text-xs text-white outline-none transition-all placeholder-gray-600 resize-none font-sans"
                  />
                </div>

                {/* Form CTA */}
                <button
                  type="submit"
                  id="reservation-submit-button"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 text-white font-display font-extrabold text-sm tracking-wider uppercase hover:from-orange-600 hover:to-amber-600 active:scale-98 transition-all hover:shadow-lg hover:shadow-orange-500/15 cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>Submit Seating Request Online</span>
                  <ChevronRight size={15} />
                </button>

              </motion.form>
            ) : (
              
              /* CONFIRMATION TICKET DISPLAY */
              <motion.div
                key="ticket"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="p-6 sm:p-12 text-center flex flex-col items-center"
              >
                {/* Glowing tick marker */}
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-6 animate-bounce">
                  <Check size={28} />
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-4 text-emerald-400">
                  <Sparkles size={11} className="animate-spin" />
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest">
                    Imperial Seating Active
                  </span>
                </div>

                <h3 className="font-display font-black text-3xl sm:text-4xl text-white">
                  YOUR TABLE IS RESERVED
                </h3>
                
                <p className="text-gray-400 text-xs sm:text-sm font-sans mt-2 max-w-sm">
                  Congratulations {formData.name}! Your request has been logged. We will contact you shortly to confirm the assigned table slot.
                </p>

                {/* Visual Gold Ticket layout */}
                <div className="relative w-full max-w-sm rounded-xl border border-amber-500/15 bg-gradient-to-b from-[#1C1710] to-[#121212] p-6 text-left my-8 shadow-inner overflow-hidden">
                  
                  {/* Circle punches (Ticket aesthetics) */}
                  <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-[#121212] border-r border-amber-500/15" />
                  <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-[#121212] border-l border-amber-500/15" />

                  <div className="flex justify-between items-center pb-4 border-b border-white/5 mb-4">
                    <span className="text-xs font-mono uppercase text-gray-500 tracking-wide">SPICY BAWARCHI Concierge</span>
                    <span className="font-mono text-sm font-extrabold text-amber-500">{ticketId}</span>
                  </div>

                  <div className="grid grid-cols-2 gap-y-4 gap-x-2 text-xs">
                    <div>
                      <span className="block text-[9px] font-mono uppercase text-gray-500">GUEST</span>
                      <span className="font-display font-bold text-gray-200">{formData.name}</span>
                    </div>

                    <div>
                      <span className="block text-[9px] font-mono uppercase text-gray-500">PHONE</span>
                      <span className="font-mono text-gray-200">{formData.phone}</span>
                    </div>

                    <div>
                      <span className="block text-[9px] font-mono uppercase text-gray-500">DATE</span>
                      <span className="font-mono text-gray-200">{formData.date}</span>
                    </div>

                    <div>
                      <span className="block text-[9px] font-mono uppercase text-gray-500">HOURS SLOT</span>
                      <span className="font-mono text-yellow-500 font-bold">{formData.time}</span>
                    </div>

                    <div className="col-span-2">
                      <span className="block text-[9px] font-mono uppercase text-gray-500">SEATING STYLE</span>
                      <span className="font-display font-semibold text-gray-200">{formData.tableStyle} ({formData.guests} seats)</span>
                    </div>
                  </div>
                </div>

                {/* Subheading actions */}
                <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                  <button
                    onClick={shareConfirmationOnWhatsApp}
                    id="reservation-whatsapp-share"
                    className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#25D366]/15 hover:bg-[#25D366]/25 text-[#25D366] font-display font-bold text-xs uppercase tracking-wide border border-[#25D366]/30 cursor-pointer transition-all"
                  >
                    <MessageSquare size={14} />
                    <span>Send confirmation on WhatsApp</span>
                  </button>

                  <button
                    onClick={() => {
                      setBookingConfirmed(false);
                      setFormData({
                        name: "",
                        phone: "",
                        guests: "4",
                        date: "",
                        time: "07:30 PM",
                        tableStyle: "Family AC Salon",
                        notes: ""
                      });
                    }}
                    className="px-6 py-3.5 rounded-full bg-white/5 hover:bg-white/10 text-xs font-mono font-bold uppercase tracking-wider text-gray-300 border border-white/10 cursor-pointer transition-all"
                  >
                    Book another
                  </button>
                </div>

              </motion.div>
            )}
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
}
