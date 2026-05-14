"use client";

import { motion } from "framer-motion";

export default function LearnByDoing() {
  return (
    <section className="py-32 bg-black overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative w-full bg-[#0d1117] rounded-[3rem] border border-white/5 p-12 md:p-24 overflow-hidden"
        >
          {/* Background Glow */}
          <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Column: Visuals */}
            <div className="relative order-2 lg:order-1">
              {/* Profile Card Floater */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-10 -left-10 z-20 bg-[#161b22]/90 backdrop-blur-xl border border-white/10 rounded-2xl p-4 flex items-center gap-4 shadow-2xl"
              >
                <div className="w-12 h-12 rounded-full overflow-hidden bg-zinc-800">
                  <img src="https://i.pravatar.cc/100?img=15" alt="profile" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-black text-primary px-1.5 py-0.5 bg-primary/10 rounded">50 XP</span>
                    <span className="text-[10px] font-black text-orange-400 px-1.5 py-0.5 bg-orange-400/10 rounded">2d</span>
                  </div>
                  <div className="text-[10px] text-white/40 font-bold uppercase tracking-widest">Rank 18,019 / 70,708</div>
                </div>
              </motion.div>

              {/* Phone Mockup */}
              <div className="relative mx-auto w-full max-w-[320px] aspect-[9/18.5] bg-black rounded-[3rem] border-[8px] border-[#1c2128] shadow-2xl overflow-hidden flex flex-col">
                <div className="h-8 w-full flex items-center justify-center pt-2">
                  <div className="w-20 h-5 bg-[#1c2128] rounded-full" />
                </div>
                <div className="flex-1 p-6 space-y-6">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] text-white/40 font-bold">2 of 10</span>
                    <div className="h-1 flex-1 mx-4 bg-white/10 rounded-full overflow-hidden">
                       <div className="h-full bg-primary w-1/5" />
                    </div>
                    <div className="w-4 h-4 rounded-full border border-white/20 flex items-center justify-center text-[8px] text-white">×</div>
                  </div>
                  
                  <h4 className="text-xl font-bold text-white leading-tight">
                    Now, update the code to print something (anything!) in this Solana program
                  </h4>

                  <div className="bg-[#161b22] rounded-xl p-4 font-mono text-[10px] text-white/60 space-y-1">
                    <p><span className="text-orange-400">use</span> solana_program::{"{"}</p>
                    <p className="pl-4">account_info::AccountInfo,</p>
                    <p className="pl-4 text-blue-400">entrypoint,</p>
                    <p className="pl-4">entrypoint::ProgramResult,</p>
                    <p className="pl-4">pubkey::Pubkey,</p>
                    <p>{"};"}</p>
                  </div>

                  {/* Virtual Keyboard Simulation */}
                  <div className="grid grid-cols-10 gap-1 pt-4">
                    {"qwertyuiop".split("").map(l => (
                      <div key={l} className="aspect-square rounded bg-[#1c2128] border border-white/5 flex items-center justify-center text-[10px] text-white uppercase">{l}</div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating Ethereum Logo */}
              <motion.div
                animate={{ rotateY: 360, y: [0, 20, 0] }}
                transition={{ rotateY: { duration: 10, repeat: Infinity, ease: "linear" }, y: { duration: 5, repeat: Infinity, ease: "easeInOut" } }}
                className="absolute top-10 -right-10 w-24 h-24 pointer-events-none"
              >
                <svg viewBox="0 0 784 1277" className="w-full h-full drop-shadow-[0_0_30px_rgba(168,85,247,0.4)]">
                  <path fill="#C99AFF" d="M392.07 0l-7.84 26.68v874.52l7.84 7.82 392.06-231.75L392.07 0z"/>
                  <path fill="#A355FF" d="M392.07 0L0 650.57l392.07 231.75V0z"/>
                  <path fill="#C99AFF" d="M392.07 925.33l-4.42 5.39v320.17l4.42 26.11 392.21-552.75-392.21 201.08z"/>
                  <path fill="#A355FF" d="M392.07 1277v-351.67L0 679.33l392.07 597.67z"/>
                  <path fill="#8235FF" d="M392.07 874.52l392.06-231.75-392.06-180.24v411.99z"/>
                  <path fill="#6215FF" d="M0 642.77l392.07 180.24V462.53L0 642.77z"/>
                </svg>
              </motion.div>
            </div>

            {/* Right Column: Text & Stats */}
            <div className="order-1 lg:order-2">
              <span className="inline-block px-4 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-[10px] font-black uppercase tracking-[0.2em] mb-8">
                Learn by doing
              </span>
              
              <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-none" style={{ fontFamily: "var(--font-orbitron)" }}>
                Read less.<br />Build more.
              </h2>
              
              <p className="text-xl text-white/50 mb-12 leading-relaxed font-bold tracking-tight">
                Spend less time reading boring docs and more time building! Learn and launch your project right from your phone and follow in the footsteps of STRAY builders who've been funded by a16z, YC and many more world-leading VCs.
              </p>

              {/* Comparison Stats */}
              <div className="space-y-8">
                <div className="flex flex-col gap-4">
                   <div className="flex justify-between items-center">
                     <span className="text-white/40 text-sm font-bold">Devs on STRAY learn up to 100x faster</span>
                   </div>
                   
                   <div className="space-y-6">
                      <div className="space-y-2">
                        <div className="flex justify-between text-[10px] font-bold text-white/40 uppercase tracking-widest">
                          <span>Other learning apps</span>
                          <span>1x</span>
                        </div>
                        <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                           <div className="h-full bg-white/20 w-[1%]" />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between text-[10px] font-bold text-white uppercase tracking-widest">
                          <span>STRAY</span>
                          <span className="text-primary">100x</span>
                        </div>
                        <div className="h-3 w-full bg-white/5 rounded-full overflow-hidden p-0.5">
                           <motion.div 
                              initial={{ width: 0 }}
                              whileInView={{ width: "100%" }}
                              viewport={{ once: true }}
                              transition={{ duration: 1.5, ease: "easeOut" }}
                              className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" 
                           />
                        </div>
                      </div>
                   </div>
                </div>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
