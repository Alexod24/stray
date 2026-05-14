"use client";
 
 import { resume } from "@/data/resume";
 import Marquee from "@/components/magicui/marquee";
 import { motion } from "framer-motion";
 import { ArrowRight } from "lucide-react";
 
 export function LogoCloud() {
   const allLogos = [
     ...resume.logos.items,
     {
       name: resume.name,
       src: "/logo/logo-redondo-white.png",
     },
   ];
 
   // Split logos for two rows
   const firstRow = allLogos.slice(0, Math.ceil(allLogos.length / 2));
   const secondRow = allLogos.slice(Math.ceil(allLogos.length / 2));
 
   return (
     <section className="relative z-10 py-32 bg-[#010916] overflow-hidden">
       {/* Top and Bottom lines with glow */}
       <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
       <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
 
       <div className="container mx-auto px-6 lg:px-8">
         <motion.div
           initial={{ opacity: 0, y: 10 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="flex flex-col items-center mb-20"
         >
           <span className="text-[10px] font-black uppercase tracking-[0.5em] text-primary mb-4">Trusted By</span>
           <h3 className="text-2xl font-black text-white/90 text-center tracking-tighter uppercase">
             {resume.logos.title}
           </h3>
         </motion.div>
 
         <div className="relative flex w-full flex-col items-center justify-center gap-12 overflow-hidden">
           <Marquee pauseOnHover className="[--duration:40s]">
             {[...firstRow, ...firstRow].map((logo, idx) => (
               <div key={`${logo.name}-${idx}`} className="px-12 flex items-center justify-center grayscale brightness-200 opacity-30 hover:opacity-100 hover:grayscale-0 transition-all duration-500">
                 <img
                   alt={logo.name}
                   src={logo.src}
                   className="h-8 w-auto"
                 />
               </div>
             ))}
           </Marquee>
 
           <Marquee reverse pauseOnHover className="[--duration:40s]">
             {[...secondRow, ...secondRow].map((logo, idx) => (
               <div key={`${logo.name}-${idx}`} className="px-12 flex items-center justify-center grayscale brightness-200 opacity-30 hover:opacity-100 hover:grayscale-0 transition-all duration-500">
                 <img
                   alt={logo.name}
                   src={logo.src}
                   className="h-8 w-auto"
                 />
               </div>
             ))}
           </Marquee>
 
           {/* Gradient masks for smooth fade */}
           <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#010916]"></div>
           <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-[#010916]"></div>
         </div>
 
         <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.5 }}
           className="mt-24 flex justify-center"
         >
           <a
             href={resume.logos.cta.href}
             className="group flex items-center gap-4 px-6 py-3 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-all"
           >
             <span className="text-sm font-bold text-white/60 group-hover:text-white transition-colors">{resume.logos.cta.text}</span>
             <span className="flex items-center gap-2 text-sm font-black text-primary uppercase tracking-tighter">
               {resume.logos.cta.linkText}
               <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
             </span>
           </a>
         </motion.div>
       </div>
     </section>
   );
 }
