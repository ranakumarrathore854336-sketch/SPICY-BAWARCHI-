import { ComponentType } from "react";
import { motion } from "motion/react";
import { Award, Leaf, Zap, Users, BadgeIndianRupee, Heart } from "lucide-react";
import { WHY_CHOOSE_US_CARDS } from "../data";

// Match string to icon element dynamically
const iconMap: Record<string, ComponentType<{ className?: string; size?: number }>> = {
  Award,
  Leaf,
  Zap,
  Users,
  BadgeIndianRupee,
  Heart
};

export default function WhyChooseUs() {
  
  // Stagger animation setups
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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15
      }
    }
  };

  return (
    <section
      id="why-us"
      className="relative py-24 sm:py-32 bg-[#0B0B0B] overflow-hidden"
    >
      {/* Decorative light washes */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-orange-600/5 fire-glow" />
      <div className="absolute top-0 right-10 w-[350px] h-[350px] rounded-full bg-amber-500/5 fire-glow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 mb-4"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
            <span className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-widest text-orange-500">
              The Sovereign Brand Standards
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="font-display font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white"
          >
            WHY <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-amber-400">CHOOSE US</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 font-sans mt-4 text-base sm:text-lg leading-relaxed"
          >
            At Spicy Bawarchi, we raise the traditional Indian culinary craft to an ultra-luxurious, fine-dining philosophy. Experience unmatched hygiene, exceptional ambiance, and rich heritage spices.
          </motion.p>
        </div>

        {/* Carousel / Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {WHY_CHOOSE_US_CARDS.map((card, idx) => {
            const IconComponent = iconMap[card.iconName] || Heart;

            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                whileHover={{ 
                  y: -10, 
                  boxShadow: "0 20px 40px rgba(0,0,0,0.4)" 
                }}
                className="relative group p-8 sm:p-10 rounded-2xl bg-gradient-to-b from-white/[0.04] to-transparent border border-white/5 hover:border-orange-500/20 overflow-hidden cursor-default transition-all duration-300"
              >
                {/* Subtle active background flare */}
                <div className="absolute top-0 right-0 -mr-6 -mt-6 w-24 h-24 rounded-full bg-orange-500/5 blur-xl group-hover:bg-orange-500/20 group-hover:scale-150 transition-all duration-500" />
                
                {/* Glowing border card lining */}
                <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-orange-500/0 via-orange-500/0 to-orange-500/0 group-hover:from-orange-500/10 group-hover:via-amber-500/5 group-hover:to-orange-500/10 transition-all duration-500" />

                {/* Icon Circle */}
                <div className="relative w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center mb-6 border border-white/10 group-hover:border-orange-500/30 group-hover:bg-[#FF6B00]/10 transition-all duration-500">
                  <IconComponent className="text-orange-500 group-hover:text-amber-400 group-hover:scale-110 transition-all duration-500" size={24} />
                  <div className={`absolute inset-0 rounded-xl blur-md opacity-0 group-hover:opacity-40 bg-gradient-to-tr ${card.color} transition-all duration-500`} />
                </div>

                {/* Text Group */}
                <h3 className="font-display font-extrabold text-xl text-white mb-3 group-hover:text-orange-500 transition-colors">
                  {card.title}
                </h3>
                
                <p className="font-sans text-sm text-gray-400 group-hover:text-gray-300 leading-relaxed transition-colors">
                  {card.description}
                </p>

                {/* Golden Corner Tag */}
                <span className="absolute bottom-5 right-5 text-gray-800 group-hover:text-amber-500/40 font-mono text-xs font-bold transition-colors">
                  0{idx + 1}
                </span>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Dynamic decorative line */}
        <div className="mt-20 flex justify-center">
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-orange-500 to-transparent" />
        </div>

      </div>
    </section>
  );
}
