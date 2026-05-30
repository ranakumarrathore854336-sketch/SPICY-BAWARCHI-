import { useState, MouseEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Play, ZoomIn, ChevronLeft, ChevronRight, Sparkles, Camera } from "lucide-react";
import { GALLERY_IMAGES } from "../data";

// Direct path to our generated, cinematic restaurant exterior photo
const spicyBawarchiRestaurant = "/src/assets/images/spicy_bawarchi_restaurant_1780152394941.png";

export default function GallerySection() {
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  // Combine standard food images with our beautiful generated restaurant photo as the centerpiece
  const combinedGallery = [
    {
      id: "gal-restaurant-exterior",
      url: spicyBawarchiRestaurant,
      title: "The Illumined Night Frontage",
      category: "Our Beautiful Location"
    },
    ...GALLERY_IMAGES
  ];

  const handleNext = (e: MouseEvent) => {
    e.stopPropagation();
    if (activeImageIndex !== null) {
      setActiveImageIndex((activeImageIndex + 1) % combinedGallery.length);
    }
  };

  const handlePrev = (e: MouseEvent) => {
    e.stopPropagation();
    if (activeImageIndex !== null) {
      setActiveImageIndex(
        (activeImageIndex - 1 + combinedGallery.length) % combinedGallery.length
      );
    }
  };

  return (
    <section
      id="gallery-section"
      className="relative py-24 sm:py-32 bg-[#0B0B0B] border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 mb-4">
              <Camera size={11} className="text-amber-500" />
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-amber-500">
                Visual Artistry
              </span>
            </div>

            <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white leading-none">
              GASTRONOMIC <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-amber-500">PORTFOLIO</span>
            </h2>
            
            <p className="text-gray-400 font-sans mt-3 max-w-xl text-sm sm:text-base">
              A sensory preview. Indulge your eyes in our artisanal hand-crafted plates, fresh local elements, and ambient air-conditioned dining lounge.
            </p>
          </div>

          <div className="hidden md:flex items-center gap-2 text-xs font-mono text-gray-500 uppercase tracking-widest">
            <Sparkles size={12} className="text-orange-500 animate-spin" style={{ animationDuration: "3s" }} />
            <span>Click any frame to zoom</span>
          </div>
        </div>

        {/* Masonry / Bento Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {combinedGallery.map((img, idx) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              whileHover={{ y: -6 }}
              onClick={() => setActiveImageIndex(idx)}
              className={`group relative rounded-2xl overflow-hidden bg-zinc-900 border border-white/5 shadow-lg group hover:border-orange-500/25 transition-all duration-300 cursor-pointer ${
                idx === 0 ? "sm:col-span-2 lg:col-span-2 aspect-[16/9]" : "aspect-square"
              }`}
            >
              {img.id === "gal-restaurant-exterior" && (
                <div className="absolute top-4 left-4 z-20 flex items-center gap-1.5 px-3 py-1 bg-gradient-to-r from-orange-600 to-amber-500 text-[10px] font-mono font-black text-white uppercase tracking-wider rounded-md shadow-md">
                  <Sparkles size={11} className="animate-pulse" />
                  <span>The Real Vibe</span>
                </div>
              )}

              {/* Responsive photo core */}
              <img
                src={img.url}
                alt={img.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700 brightness-[0.80] group-hover:brightness-[0.9] filter saturate-[1.05]"
              />

              {/* Dynamic mouse hover details overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-60 group-hover:opacity-85 transition-opacity duration-300 flex flex-col justify-end p-6 sm:p-8" />

              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 flex items-end justify-between translate-y-3 group-hover:translate-y-0 transition-transform duration-300 z-10">
                <div>
                  <span className="text-[10px] font-mono uppercase text-amber-500 tracking-widest font-extrabold block mb-1">
                    {img.category}
                  </span>
                  <h4 className="font-display font-black text-lg sm:text-2xl text-white">
                    {img.title}
                  </h4>
                  {img.id === "gal-restaurant-exterior" && (
                    <p className="text-[10px] sm:text-xs text-gray-400 mt-1.5 leading-relaxed font-sans max-w-sm hidden sm:block">
                      Featuring glowing strands of fairy lights, tropical greenery, and air-conditioned halls in front of Sant Nirankari Satsang Bhawan, Forbesganj.
                    </p>
                  )}
                </div>

                <div className="w-10 h-10 rounded-full bg-white/10 group-hover:bg-orange-500/10 border border-white/20 group-hover:border-orange-500/40 flex items-center justify-center text-white group-hover:text-orange-500 transition-all shadow-md">
                  <ZoomIn size={16} />
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>

      {/* Lightbox pop up */}
      <AnimatePresence>
        {activeImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveImageIndex(null)}
            className="fixed inset-0 bg-black/95 z-55 flex flex-col items-center justify-center p-4 sm:p-12"
          >
            {/* Top Close Actions bar */}
            <div className="absolute top-6 left-1/2 -translate-x-1/2 w-full max-w-5xl px-6 flex items-center justify-between z-10 select-none">
              <div>
                <span className="text-[10px] font-mono text-amber-500 uppercase tracking-widest font-bold">
                  {combinedGallery[activeImageIndex].category}
                </span>
                <h5 className="font-display font-bold text-white text-sm sm:text-base">
                  {combinedGallery[activeImageIndex].title}
                </h5>
              </div>
              
              <button
                onClick={() => setActiveImageIndex(null)}
                className="p-2 sm:p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-orange-500 transition-all cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>

            {/* Left arrow */}
            <button
              onClick={handlePrev}
              className="absolute left-4 sm:left-10 top-1/2 -translate-y-1/2 p-3 sm:p-4 rounded-full bg-white/5 border border-white/10 text-white hover:bg-orange-500 transition-all cursor-pointer z-10"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Center Image Core */}
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-4xl max-h-[70vh] rounded-xl overflow-hidden border border-white/10 shadow-2xl relative"
            >
              <img
                src={combinedGallery[activeImageIndex].url}
                alt={combinedGallery[activeImageIndex].title}
                referrerPolicy="no-referrer"
                className="w-full max-h-[70vh] object-contain bg-black"
              />
            </motion.div>

            {/* Right arrow */}
            <button
              onClick={handleNext}
              className="absolute right-4 sm:right-10 top-1/2 -translate-y-1/2 p-3 sm:p-4 rounded-full bg-white/5 border border-white/10 text-white hover:bg-orange-500 transition-all cursor-pointer z-10"
            >
              <ChevronRight size={20} />
            </button>

            {/* Bottom info indicator */}
            <div className="absolute bottom-6 font-mono text-xs text-gray-500 uppercase tracking-[0.3em] select-none">
              {activeImageIndex + 1} / {combinedGallery.length}
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
