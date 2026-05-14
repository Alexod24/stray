"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="py-24 bg-background px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-[3rem] overflow-hidden bg-black border border-white/5 p-12 md:p-24 text-center group"
        >
          <div className="absolute inset-0 opacity-30 grayscale group-hover:grayscale-0 transition-all duration-1000">
             <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2070" 
                alt="Community" 
                className="w-full h-full object-cover"
             />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <p className="text-lg md:text-xl text-white/80 mb-8 font-medium">
              If you're a new project looking to supercharge your developer pipeline, we'd love to hear from you!
            </p>
            <button className="h-16 px-12 bg-primary text-black hover:bg-primary/90 rounded-2xl text-lg font-bold">
              Partner with us
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
