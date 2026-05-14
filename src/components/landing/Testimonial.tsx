"use client";
 
 import { resume } from "@/data/resume";
 import { motion } from "framer-motion";
 import { Quote } from "lucide-react";
 import { BorderBeam } from "@/components/magicui/border-beam";
 
 export function Testimonial() {
   return (
     <section className="py-24 sm:py-40 bg-[#010916] overflow-hidden">
       <div className="container mx-auto px-6 lg:px-8">
         <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="relative overflow-hidden rounded-[60px] border border-white/5 bg-[#0a1220]/50 p-12 lg:p-24 shadow-2xl backdrop-blur-xl"
         >
           <BorderBeam size={400} duration={12} delay={9} colorFrom="#00F293" colorTo="#3b82f6" borderWidth={3} />
 
           {/* Background glow */}
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,242,147,0.05),transparent_70%)]" />
 
           <div className="relative mx-auto max-w-4xl text-center">
             <div className="inline-flex items-center justify-center p-4 rounded-3xl bg-primary/10 border border-primary/20 mb-12 shadow-[0_0_30px_rgba(0,242,147,0.2)]">
               <Quote className="h-10 w-10 text-primary stroke-[3px]" />
             </div>
 
             <motion.figure
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 }}
             >
               <blockquote className="text-3xl font-black tracking-tighter text-white sm:text-5xl leading-[1.1] uppercase italic">
                 <p>"{resume.testimonial.content}"</p>
               </blockquote>
 
               <figcaption className="mt-16 flex flex-col items-center gap-6">
                 <div className="h-20 w-20 rounded-3xl border-2 border-primary/30 p-1 bg-background overflow-hidden rotate-3 hover:rotate-0 transition-transform duration-500">
                   <img
                     alt={resume.testimonial.author}
                     src={resume.testimonial.bgImage}
                     className="h-full w-full object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-500"
                   />
                 </div>
                 <div className="text-center">
                   <div className="text-2xl font-black text-white uppercase tracking-tighter">
                     {resume.testimonial.author}
                   </div>
                   <div className="text-xs font-black text-primary uppercase tracking-[0.3em] mt-2">
                     {resume.testimonial.role}
                   </div>
                 </div>
               </figcaption>
             </motion.figure>
           </div>
         </motion.div>
       </div>
     </section>
   );
 }
