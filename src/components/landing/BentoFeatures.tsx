"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function BentoFeatures() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[30rem] md:auto-rows-[25rem]">
          
          {/* Fast Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:col-span-7 relative rounded-[2.5rem] bg-[#0a1220] border border-white/5 overflow-hidden p-12 flex flex-col justify-between group"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[80px] rounded-full group-hover:bg-primary/20 transition-all duration-700" />
            
            <div>
              <h3 className="text-5xl font-bold text-white mb-6">Fast</h3>
              <p className="text-xl text-white/50 max-w-md">
                No time? No problem! EasyA teaches you how to build with top blockchains and deploy dApps faster than you can say "WAGMI"!
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-white/5 rounded-2xl p-4 border border-white/10 max-w-sm">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-bold text-primary uppercase">In Progress</span>
                  <span className="text-xs text-white/40">2/4</span>
                </div>
                <div className="text-sm font-bold text-white mb-2">Intro to Solana</div>
                <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-1/2" />
                </div>
              </div>
              <div className="bg-white/5 rounded-2xl p-4 border border-white/10 max-w-sm opacity-60">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-bold text-purple-400 uppercase">Completed</span>
                  <span className="text-xs text-white/40">6/6</span>
                </div>
                <div className="text-sm font-bold text-white mb-2">Front-End Build</div>
                <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-purple-500 w-full" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Structured Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-5 relative rounded-[2.5rem] bg-[#0a1220] border border-white/5 overflow-hidden p-12 flex flex-col group"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-500/10 blur-[100px] rounded-full" />
            
            <h3 className="text-5xl font-bold text-white mb-6">Structured</h3>
            <p className="text-xl text-white/50 mb-12">
              Not sure where to start? Our learning experts from Harvard, Stanford and other top universities have designed each challenge series.
            </p>

            <div className="mt-auto relative mx-auto w-full max-w-[280px]">
                <div className="aspect-[9/19] rounded-[2.5rem] bg-black border-[6px] border-[#1a1a1a] p-4 overflow-hidden">
                    <div className="text-[10px] text-white/40 mb-4">9:41</div>
                    <div className="text-xs font-bold text-white mb-4">Intro to Solana</div>
                    <div className="space-y-3">
                        <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                            <div className="w-4 h-4 rounded-full border border-primary flex items-center justify-center mb-2">
                                <div className="w-2 h-2 bg-primary rounded-full" />
                            </div>
                            <div className="text-[10px] text-white">Writing your first code on Solana</div>
                        </div>
                        <div className="p-3 rounded-xl bg-primary/10 border border-primary/20">
                            <div className="text-[10px] text-primary font-bold">In Progress</div>
                        </div>
                    </div>
                </div>
            </div>
          </motion.div>

          {/* In-depth Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="md:col-span-12 relative rounded-[2.5rem] bg-[#0a1220] border border-white/5 overflow-hidden p-12 flex flex-col md:flex-row items-center gap-12 group"
          >
             <div className="flex-1">
                <div className="bg-[#050a14] rounded-2xl p-6 border border-white/5 font-mono text-sm overflow-hidden">
                    <div className="text-purple-400">pub fn <span className="text-blue-400">process_instruction</span>(</div>
                    <div className="pl-4 text-white/70">_program_id: &Pubkey,</div>
                    <div className="pl-4 text-white/70">_accounts: &[AccountInfo],</div>
                    <div className="pl-4 text-white/70">_instruction_data: &[u8]</div>
                    <div className="text-white">) {"->"} ProgramResult {"{"}</div>
                    <div className="pl-4 text-white/40">// Print something here</div>
                    <div className="text-white">{"}"}</div>
                </div>
                <div className="mt-6 space-y-2">
                    <div className="p-4 rounded-xl bg-primary/10 border border-primary/30 flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                            <svg className="w-3 h-3 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                        </div>
                        <span className="text-sm font-bold text-white">println!("Hello World!");</span>
                    </div>
                    <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full border border-white/20" />
                        <span className="text-sm text-white/60">print("Hello World");</span>
                    </div>
                </div>
             </div>

             <div className="flex-1">
                <h3 className="text-5xl font-bold text-white mb-6">In-depth</h3>
                <p className="text-xl text-white/50">
                    Learning can be tough, but EasyA makes it, well, easy! With our simple but super effective challenges, you'll go from zero to blockchain hero.
                </p>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
