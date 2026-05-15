"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Play, Terminal } from "lucide-react";

export default function BentoFeatures() {
  return (
    <section className="py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Header: Join others */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-12"
        >
          <div className="flex -space-x-3">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="w-10 h-10 rounded-full border-2 border-background bg-zinc-800 flex items-center justify-center text-[10px] font-bold text-white overflow-hidden">
                <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="avatar" />
              </div>
            ))}
          </div>
          <p className="text-white/60 font-bold text-sm tracking-tight">
            Únete a las marcas que están <span className="text-primary">redefiniendo</span> el mercado
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 auto-rows-fr">
          
          {/* LEFT COLUMN: Fast & In-depth */}
          <div className="md:col-span-8 flex flex-col gap-8">
            
            {/* Fast Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative rounded-[2.5rem] bg-[#0d1117] border border-white/5 overflow-hidden p-10 flex flex-col md:flex-row gap-10 group"
            >
              <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-primary/10 blur-[100px] rounded-full group-hover:bg-primary/20 transition-all duration-700" />
              
              <div className="flex-1">
                <h3 className="text-3xl font-black text-white mb-6 uppercase tracking-tighter">Rendimiento</h3>
                <p className="text-lg text-white/50 max-w-sm leading-relaxed font-bold tracking-tight">
                  Software que vuela. Optimizamos cada línea de código para que tu negocio escale sin fricción técnica.
                </p>
              </div>

              <div className="flex-1 space-y-4 relative z-10">
                {/* Progress Card 1 */}
                <div className="bg-[#161b22]/80 backdrop-blur-md rounded-2xl p-5 border border-white/10 transform rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-[10px] font-black text-primary uppercase tracking-widest px-2 py-1 bg-primary/10 rounded-full">Optimizando</span>
                    <div className="w-8 h-8 rounded-full border-2 border-primary/30 flex items-center justify-center">
                       <span className="text-[10px] text-white">99</span>
                    </div>
                  </div>
                  <div className="text-[15px] font-black text-white mb-1">Core Web Vitals</div>
                  <div className="text-[10px] text-white/40 uppercase font-bold">LCP: 0.8s</div>
                </div>
                
                {/* Progress Card 2 */}
                <div className="bg-[#161b22]/80 backdrop-blur-md rounded-2xl p-5 border border-white/10 transform rotate-[1deg] translate-x-4">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-[10px] font-black text-purple-400 uppercase tracking-widest px-2 py-1 bg-purple-400/10 rounded-full">Escalado</span>
                    <CheckCircle2 className="w-6 h-6 text-purple-400" />
                  </div>
                  <div className="text-[15px] font-black text-white mb-1">Infraestructura Edge</div>
                  <div className="text-[10px] text-white/40 uppercase font-bold">Global Deployment</div>
                </div>

                {/* CTA Card */}
                <div className="bg-[#161b22]/80 backdrop-blur-md rounded-2xl p-4 border border-white/10 flex items-center justify-between group/btn cursor-pointer">
                   <div className="text-sm font-bold text-white/60">Ver auditoría técnica</div>
                   <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center group-hover/btn:bg-primary/40 transition-colors">
                     <Play className="w-4 h-4 text-primary fill-primary" />
                   </div>
                </div>
              </div>
            </motion.div>

            {/* In-depth Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="relative rounded-[2.5rem] bg-[#0d1117] border border-white/5 overflow-hidden p-10 flex flex-col md:flex-row items-center gap-10 group"
            >
              <div className="flex-1 w-full space-y-4">
                {/* Code Window */}
                <div className="bg-black/40 backdrop-blur-md rounded-2xl border border-white/10 overflow-hidden font-mono text-[11px] p-6 text-white/60 leading-relaxed">
                  <div className="flex gap-1.5 mb-4">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                  </div>
                  <p className="text-orange-300">class <span className="text-blue-400">StrayEngine</span> {"{"}</p>
                  <p className="pl-4">async <span className="text-green-400">solveComplexity</span>(problem) {"{"}</p>
                  <p className="pl-8 text-zinc-500">// Implementando arquitectura de vanguardia</p>
                  <p className="pl-8">return await this.ai.optimize(problem);</p>
                  <p className="pl-4">{"}"}</p>
                  <p>{"}"}</p>
                </div>
                
                {/* Choice List */}
                <div className="space-y-2">
                  <div className="p-3 rounded-xl border border-primary bg-primary/5 flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span className="text-xs font-bold text-white">Full-Stack Development</span>
                  </div>
                  <div className="p-3 rounded-xl border border-white/5 bg-white/5 flex items-center gap-3 opacity-50">
                    <div className="w-4 h-4 rounded-full border border-white/20" />
                    <span className="text-xs font-bold text-white">AI Integration</span>
                  </div>
                </div>
              </div>

              <div className="flex-1 text-left">
                <h3 className="text-3xl font-black text-white mb-6 uppercase tracking-tighter">Ingeniería</h3>
                <p className="text-lg text-white/50 leading-relaxed font-bold tracking-tight">
                  Construimos soluciones técnicas robustas que otros consideran imposibles. Desde MVPs hasta sistemas distribuidos.
                </p>
              </div>
            </motion.div>

          </div>

          {/* RIGHT COLUMN: Structured */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-4 relative rounded-[2.5rem] bg-[#0d1117] border border-white/5 overflow-hidden p-10 flex flex-col group"
          >
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-blue-500/5 to-transparent pointer-events-none" />
            
            {/* Phone Mockup / Preview */}
            <div className="relative mx-auto w-full aspect-[9/16] bg-black rounded-[3rem] border-[6px] border-[#161b22] shadow-2xl overflow-hidden mb-10 flex flex-col">
              <div className="h-10 w-full bg-black flex items-center justify-center">
                 <div className="w-16 h-4 bg-[#161b22] rounded-full" />
              </div>
              <div className="flex-1 p-6 flex flex-col items-center justify-center text-center space-y-6">
                <div className="text-white/40 text-xs font-bold uppercase tracking-widest">Growth Marketing</div>
                <div className="w-20 h-20 bg-primary/20 rounded-2xl flex items-center justify-center border border-primary/30">
                   <img src="https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg" alt="Meta" className="w-10 opacity-60" />
                </div>
                <div className="space-y-2">
                   <div className="text-xs font-black text-white">ROAS +400%</div>
                   <div className="text-[10px] text-white/40 font-bold">Scaling Campaign</div>
                </div>
              </div>
            </div>

            <h3 className="text-4xl font-black text-white mb-6 uppercase tracking-tighter">Marketing</h3>
            <p className="text-lg text-white/50 leading-relaxed font-bold tracking-tight">
              Marketing de guerrilla digital. No compramos anuncios, compramos atención y resultados medibles.
            </p>
          </motion.div>

        </div>
      </div>
      
      {/* Background Floater: Check Mark */}
      <motion.div 
         animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
         transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
         className="absolute bottom-10 left-10 w-24 h-24 bg-primary/20 rounded-3xl backdrop-blur-xl border border-primary/30 flex items-center justify-center z-0 shadow-[0_0_50px_rgba(0,242,147,0.2)]"
      >
        <CheckCircle2 className="w-12 h-12 text-primary" />
      </motion.div>
    </section>
  );
}
