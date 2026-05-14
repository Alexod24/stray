"use client";
 
 import { Check, ArrowRight } from "lucide-react";
 import { resume } from "@/data/resume";
 import { Button } from "@/components/ui/button";
 import {
   Card,
   CardContent,
   CardDescription,
   CardFooter,
   CardHeader,
   CardTitle,
 } from "@/components/ui/card";
 import { motion } from "framer-motion";
 import { BorderBeam } from "@/components/magicui/border-beam";
 import { ShimmerButton } from "@/components/ui/shimmer-button";
 import { cn } from "@/lib/utils";
 
 export function Pricing() {
   return (
     <section
       id="pricing"
       className="py-24 sm:py-40 bg-[#010916] relative z-10 overflow-hidden"
     >
       {/* Background glow */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
 
       <div className="container mx-auto px-6 lg:px-8">
         <div className="mx-auto max-w-4xl text-center mb-24">
           <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="inline-block px-4 py-1.5 mb-6 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm"
           >
             <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">
               {resume.pricing.title}
             </span>
           </motion.div>
           
           <motion.h2
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-5xl font-black tracking-tighter text-white sm:text-7xl mb-8 leading-[0.9] uppercase"
           >
             {resume.pricing.subtitle}
           </motion.h2>
           <motion.p
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="text-xl text-white/50 max-w-2xl mx-auto font-medium"
           >
             {resume.pricing.description}
           </motion.p>
         </div>
 
         <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 max-w-7xl mx-auto">
           {resume.pricing.tiers.map((tier, index) => (
             <motion.div
               key={tier.id}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: index * 0.1, duration: 0.6 }}
               className="relative group h-full"
             >
               <div className={cn(
                 "relative h-full flex flex-col bg-[#0a1220]/80 border border-white/5 rounded-[40px] p-8 transition-all duration-500 hover:border-primary/50 hover:bg-[#0a1220] backdrop-blur-xl group-hover:shadow-[0_0_50px_rgba(0,0,0,0.5)]",
                 tier.mostPopular ? "lg:-translate-y-4 border-primary/30 bg-[#0a1220]" : ""
               )}>
                 {tier.mostPopular && (
                   <div className="absolute inset-0 rounded-[40px] overflow-hidden pointer-events-none">
                     <BorderBeam size={300} duration={8} delay={0} colorFrom="#00F293" colorTo="#3b82f6" borderWidth={3} />
                   </div>
                 )}
 
                 <div className="mb-8">
                   <h3 className="text-xl font-black text-white uppercase tracking-wider mb-2">
                     {tier.name}
                   </h3>
                   <p className="text-sm text-white/40 font-medium">
                     {tier.description}
                   </p>
                 </div>
 
                 <div className="mb-10 flex items-baseline gap-1">
                   <span className="text-5xl font-black tracking-tighter text-white">
                     {tier.priceMonthly}
                   </span>
                   {tier.priceMonthly !== "A medida" && (
                     <span className="text-white/40 text-sm font-bold uppercase tracking-widest">/base</span>
                   )}
                 </div>
 
                 <div className="flex-1">
                   <ul className="space-y-4 mb-12">
                     {tier.features.map((feature) => (
                       <li
                         key={feature}
                         className="flex items-start gap-4 text-sm font-medium text-white/70"
                       >
                         <div className="mt-0.5 p-0.5 rounded-full bg-primary/20">
                           <Check className="h-3.5 w-3.5 text-primary stroke-[4px]" />
                         </div>
                         <span>{feature}</span>
                       </li>
                     ))}
                   </ul>
                 </div>
 
                 <div className="mt-auto pt-6">
                   {tier.mostPopular ? (
                     <a href={tier.href} className="w-full block group/btn">
                       <ShimmerButton 
                         className="w-full h-16 rounded-2xl shadow-[0_0_20px_rgba(0,242,147,0.2)] group-hover/btn:shadow-[0_0_30px_rgba(0,242,147,0.4)] transition-all"
                         background="#00F293"
                         shimmerColor="#ffffff"
                       >
                         <span className="flex items-center justify-center gap-2 text-base font-black text-[#010916] uppercase tracking-tighter">
                           Empezar Proyecto
                           <ArrowRight className="h-5 w-5 stroke-[3px]" />
                         </span>
                       </ShimmerButton>
                     </a>
                   ) : (
                     <Button
                       asChild
                       variant="outline"
                       className="w-full h-16 rounded-2xl border-white/10 bg-white/5 text-white font-black uppercase tracking-tighter hover:bg-white/10 hover:border-primary/50 hover:text-primary transition-all text-base"
                     >
                       <a href={tier.href} className="flex items-center justify-center gap-2">
                         Elegir Plan
                         <ArrowRight className="h-5 w-5 stroke-[3px]" />
                       </a>
                     </Button>
                   )}
                 </div>
               </div>
             </motion.div>
           ))}
         </div>
       </div>
     </section>
   );
 }
