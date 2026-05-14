"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";

const testimonials = [
  {
    id: 1,
    name: "Jeremy",
    role: "Harvard University Student",
    university: "HARVARD UNIVERSITY",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/2/29/Harvard_shield.svg/1200px-Harvard_shield.svg.png",
    quote: "On behalf of the entire team here, we wanted to extend a sincere thank you for all of your support during the earliest stages of the Lockbox. The two hackathons we did last semester were monumental in turning a random late-night idea into a functional MVP.",
    image: "https://images.unsplash.com/photo-1523050335102-c32509145260?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: 2,
    name: "Vivian",
    role: "MIT Student",
    university: "MIT",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/MIT_logo.svg/2560px-MIT_logo.svg.png",
    quote: "Thanks for the incredible event to bring together people from different backgrounds and provide a platform for stimulating discussions and ideas! ✨",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: 3,
    name: "Alex",
    role: "Stanford Student",
    university: "STANFORD",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b1/Stanford_University_seal.svg/1200px-Stanford_University_seal.svg.png",
    quote: "The energy at the hackathon was unlike anything I've experienced. Connecting with top-tier developers and mentors helped us ship our project in record time. Truly a world-class experience!",
    image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=1000",
  }
];

export default function Testimonials() {
  const [scrollX, setScrollX] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (containerRef.current) {
      const scrollAmount = 500;
      const target = direction === "left" ? containerRef.current.scrollLeft - scrollAmount : containerRef.current.scrollLeft + scrollAmount;
      containerRef.current.scrollTo({
        left: target,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="py-24 bg-[#050505] overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-white tracking-tighter"
            style={{ fontFamily: "var(--font-orbitron)" }}
          >
            Testimonials
          </motion.h2>

          <div className="flex gap-2">
            <button 
              onClick={() => scroll("left")}
              className="p-3 rounded-full border border-white/10 text-white/40 hover:text-white hover:border-white/30 transition-all"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={() => scroll("right")}
              className="p-3 rounded-full border border-white/10 text-white/40 hover:text-white hover:border-white/30 transition-all"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <div 
          ref={containerRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-8 px-4 -mx-4"
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex-shrink-0 w-full md:w-[650px] snap-center"
            >
              <div className="relative rounded-[2rem] bg-[#0d1421] border border-white/5 p-8 md:p-10 h-full flex flex-col md:flex-row gap-8 group hover:border-white/10 transition-colors">
                {/* Image Section with Folder Cutout Look */}
                <div className="relative w-full md:w-56 h-64 md:h-72 flex-shrink-0">
                   {/* This div creates the 'folder' cutout effect */}
                  <div className="absolute inset-0 bg-[#0d1421] z-10" style={{ clipPath: 'polygon(0 0, 85% 0, 100% 15%, 100% 100%, 0 100%)' }}>
                    <img 
                      src={t.image} 
                      alt={t.name} 
                      className="w-full h-full object-cover rounded-2xl grayscale group-hover:grayscale-0 transition-all duration-700"
                    />
                  </div>
                  <div className="absolute -inset-2 bg-gradient-to-tr from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
                </div>

                {/* Content Section */}
                <div className="flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-6">
                    <img src={t.logo} alt={t.university} className="h-8 object-contain opacity-80" />
                  </div>

                  <p className="text-white/70 text-lg leading-relaxed italic mb-8 line-clamp-6">
                    "{t.quote}"
                  </p>

                  <div className="mt-auto pt-6 border-t border-white/5 flex justify-between items-end">
                    <div>
                      <h4 className="text-white font-bold text-lg">{t.name}, {t.role}</h4>
                      <p className="text-white/40 text-sm uppercase tracking-widest font-black mt-1">{t.university}</p>
                    </div>
                    
                    <a href="#" className="p-2 text-white/30 hover:text-white transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
