"use client";
 
 import {
   Accordion,
   AccordionContent,
   AccordionItem,
   AccordionTrigger,
 } from "@/components/ui/accordion";
 import { resume } from "@/data/resume";
 import { motion } from "framer-motion";
 
 export function FAQ() {
   return (
     <section id="faq" className="py-24 sm:py-40 bg-[#010916] overflow-hidden">
       <div className="container mx-auto px-6 lg:px-8">
         <div className="mx-auto max-w-4xl">
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-center mb-24"
           >
             <span className="text-[10px] font-black uppercase tracking-[0.5em] text-primary mb-6 block">Support Center</span>
             <h2 className="text-5xl font-black tracking-tighter text-white sm:text-7xl uppercase leading-[0.9]">
               {resume.faqs.title}
             </h2>
           </motion.div>
 
           <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
           >
             <Accordion type="single" collapsible className="w-full space-y-6">
               {resume.faqs.items.map((faq) => (
                 <AccordionItem
                   key={faq.id}
                   value={`item-${faq.id}`}
                   className="border border-white/5 rounded-[32px] px-8 bg-[#0a1220]/50 backdrop-blur-xl hover:border-primary/30 transition-all duration-500 overflow-hidden group"
                 >
                   <AccordionTrigger className="text-left font-black text-xl text-white/90 hover:no-underline hover:text-primary transition-all py-8 uppercase tracking-tight">
                     {faq.question}
                   </AccordionTrigger>
                   <AccordionContent className="text-white/50 text-lg leading-relaxed pb-8 font-medium">
                     {faq.answer}
                   </AccordionContent>
                 </AccordionItem>
               ))}
             </Accordion>
           </motion.div>
         </div>
       </div>
     </section>
   );
 }
