"use client";

import { motion } from "framer-motion";

export default function AppDownload() {
  return (
    <section className="relative py-32 px-6 overflow-hidden bg-[#050505]">
      {/* Dynamic Background with Glows */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-purple-600/20 rounded-full blur-[120px]" />
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-emerald-600/10 rounded-full blur-[100px]" />
      </div>

      <div className="container relative z-10 mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter" style={{ fontFamily: "var(--font-orbitron)" }}>
            Download the App
          </h2>
          <p className="text-lg text-white/60">
            Learn about the world's leading blockchains, right from your phone.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <a href="#" className="transition-transform hover:scale-105 active:scale-95">
              <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" className="h-12" />
            </a>
            <a href="#" className="transition-transform hover:scale-105 active:scale-95">
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="h-12" />
            </a>
          </div>
        </motion.div>

        {/* Floating UI Elements */}
        <div className="relative h-[400px] md:h-[500px] max-w-5xl mx-auto">
          {/* Central Rank Card */}
          <motion.div
            animate={{ 
              y: [0, -15, 0],
              rotateX: [0, 5, 0],
              rotateY: [0, -5, 0]
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-[300px] md:w-[450px]"
          >
            <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-6 shadow-2xl overflow-hidden">
               <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-white/20">
                    <img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=200" alt="User" className="w-full h-full object-cover" />
                  </div>
                  <div className="text-left">
                    <div className="text-white/40 text-xs font-bold uppercase tracking-widest italic mb-1">Rank</div>
                    <div className="h-2 w-48 bg-white/10 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: '65%' }}
                        className="h-full bg-gradient-to-r from-purple-500 to-emerald-400"
                      />
                    </div>
                  </div>
               </div>
               
               <div className="flex justify-between items-center pt-4 border-t border-white/5">
                 <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full">
                    <span className="text-purple-400">⚡</span>
                    <span className="text-white font-bold">56 XP</span>
                 </div>
                 <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full">
                    <span className="text-orange-400">🔥</span>
                    <span className="text-white font-bold">2d</span>
                 </div>
               </div>
            </div>
          </motion.div>

          {/* Floating Orbiting Elements */}
          <motion.div
            animate={{ 
              y: [0, 20, 0],
              x: [0, 10, 0]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute top-0 left-[10%] bg-emerald-500/20 backdrop-blur-md p-6 rounded-3xl border border-emerald-500/30 rotate-12"
          >
            <div className="w-12 h-12 flex items-center justify-center text-emerald-400 text-3xl">✓</div>
          </motion.div>

          <motion.div
            animate={{ 
              y: [0, -20, 0],
              x: [0, -15, 0]
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-10 right-[15%] bg-primary/20 backdrop-blur-md p-8 rounded-[2rem] border border-primary/30 -rotate-12"
          >
            <div className="w-16 h-16 flex items-center justify-center text-primary text-4xl">▶</div>
          </motion.div>

          <motion.div
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 360]
            }}
            transition={{ 
              scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
              rotate: { duration: 20, repeat: Infinity, ease: "linear" }
            }}
            className="absolute top-1/4 right-[20%] w-24 h-24 rounded-full border-4 border-emerald-500/30 border-t-emerald-500 flex items-center justify-center"
          >
             <div className="text-[10px] font-black text-emerald-400 text-center uppercase tracking-tighter">32%<br/>Complete</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
