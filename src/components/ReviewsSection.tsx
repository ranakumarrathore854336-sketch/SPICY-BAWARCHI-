import { motion } from "motion/react";
import { Star, ShieldCheck, Quote, Sparkles } from "lucide-react";
import { REVIEWS } from "../data";

export default function ReviewsSection() {
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 90,
        damping: 15
      }
    }
  };

  return (
    <section
      id="reviews"
      className="relative py-24 sm:py-32 bg-[#0A0A0A] overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-orange-600/5 fire-glow pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 mb-4">
            <Sparkles size={11} className="text-amber-500" />
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-amber-500">
              The Patron Voice
            </span>
          </div>

          <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white leading-none">
            WHAT OUR <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-amber-500">ELITE PATRONS SAY</span>
          </h2>
          
          <p className="text-gray-400 font-sans mt-3 text-sm sm:text-base max-w-xl mx-auto">
            Read certified testimonial reviews from local guests and travelers who have indulged in the grand taste of Spicy Bawarchi.
          </p>
        </div>

        {/* Reviews Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {REVIEWS.map((rev) => (
            <motion.div
              key={rev.id}
              variants={cardVariants}
              whileHover={{ 
                y: -8, 
                boxShadow: "0 20px 40px rgba(0,0,0,0.4)" 
              }}
              className="relative p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-white/[0.03] to-[#121212]/50 border border-white/5 hover:border-orange-500/20 flex flex-col justify-between transition-all duration-300"
            >
              <div>
                
                {/* Shield Icon Decoration */}
                <Quote size={32} className="text-orange-500/10 absolute top-8 right-8" />

                {/* Stars list */}
                <div className="flex items-center gap-1 mb-6">
                  {Array.from({ length: rev.rating }).map((_, idx) => (
                    <Star key={idx} size={15} className="text-amber-500 fill-amber-500" />
                  ))}
                </div>

                {/* Feedback Review text */}
                <p className="font-sans text-sm sm:text-base text-gray-300 leading-relaxed italic">
                  &ldquo;{rev.text}&rdquo;
                </p>

              </div>

              {/* Author footer */}
              <div className="flex items-center gap-4 mt-8 pt-6 border-t border-white/5">
                <img
                  src={rev.avatarUrl}
                  alt={rev.name}
                  referrerPolicy="no-referrer"
                  className="w-12 h-12 rounded-full object-cover border border-white/10"
                />

                <div className="flex flex-col">
                  <div className="flex items-center gap-1.5">
                    <span className="font-display font-extrabold text-white text-sm">
                      {rev.name}
                    </span>
                    {rev.verified && (
                      <ShieldCheck size={14} className="text-emerald-500" />
                    )}
                  </div>
                  
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="text-[10px] font-mono text-gray-500 tracking-wider uppercase">Local Patron</span>
                    <span className="text-gray-700 text-[10px]">•</span>
                    <span className="text-gray-600 text-[10px] font-mono">{rev.date}</span>
                  </div>
                </div>
              </div>

            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Aggregator Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4">
            <div className="text-4xl">⭐</div>
            <div>
              <h4 className="font-display font-bold text-white text-base">Over 10,000+ happy plates served!</h4>
              <p className="text-gray-500 text-xs sm:text-sm font-sans mt-0.5">With an average 4.8-star score across multiple delivery apps in Forbesganj.</p>
            </div>
          </div>
          
          <a
            href="https://g.co/kgs/your_link" // Mocked target or genuine google maps search
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider text-white border border-white/10 cursor-pointer whitespace-nowrap transition-colors"
          >
            Leave A Google Review
          </a>
        </motion.div>

      </div>
    </section>
  );
}
