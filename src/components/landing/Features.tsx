"use client";
 
 import { resume } from "@/data/resume";
 import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
 import { motion } from "framer-motion";
 import { cn } from "@/lib/utils";
 
 export function Features() {
   return (
     <section id="services" className="py-24 sm:py-40 relative overflow-hidden bg-[#010916]">
       {/* Background accents */}
       <div className="absolute top-[10%] right-[5%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
       <div className="absolute bottom-[10%] left-[5%] w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px]" />
 
       <div className="container relative z-10 mx-auto px-6 lg:px-8">
         <div className="mx-auto max-w-3xl text-center mb-20 sm:mb-32">
           <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="inline-block px-4 py-1.5 mb-6 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm"
           >
             <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">
               Excelencia en Ingeniería
             </span>
           </motion.div>
           
           <motion.h2
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
             className="text-5xl font-black tracking-tighter text-white sm:text-7xl mb-8 leading-[0.9] uppercase"
           >
             Construimos el <span className="text-primary italic">Futuro</span> Digital
           </motion.h2>
           <motion.p
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6, delay: 0.2 }}
             className="text-xl text-white/50 leading-relaxed font-medium max-w-2xl mx-auto"
           >
             Fusionamos diseño audaz con ingeniería de alto rendimiento para crear productos que no solo funcionan, sino que dominan el mercado.
           </motion.p>
         </div>
 
         <div className="mx-auto mt-16 max-w-7xl">
           <BentoGrid className="lg:grid-cols-3 gap-8 auto-rows-[25rem]">
             {resume.features.map((feature, index) => (
               <BentoCard
                 key={feature.name}
                 name={feature.name}
                 className={cn(
                   "bg-[#0a1220] border-white/5 hover:border-primary/50 transition-all duration-500 rounded-[32px] overflow-hidden group",
                   index === 0 || index === 2 ? "lg:col-span-2" : "lg:col-span-1"
                 )}
                 background={
                   <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                 }
                 Icon={({ className }) => (
                   <div className="p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:bg-primary/20 group-hover:border-primary/50 transition-all duration-700 shadow-xl">
                     <feature.icon className={cn("h-8 w-8 text-white group-hover:text-primary transition-colors", className)} />
                   </div>
                 )}
                 description={feature.description}
                 href="#"
                 cta="Saber más"
               />
             ))}
           </BentoGrid>
         </div>
       </div>
     </section>
   );
 }
