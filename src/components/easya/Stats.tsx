"use client";

import { motion } from "framer-motion";

export default function Stats() {
  const avatars = [
    "https://api.dicebear.com/7.x/avataaars/svg?seed=1",
    "https://api.dicebear.com/7.x/avataaars/svg?seed=2",
    "https://api.dicebear.com/7.x/avataaars/svg?seed=3",
    "https://api.dicebear.com/7.x/avataaars/svg?seed=4",
  ];

  return (
    <div className="w-full bg-background py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-6"
      >
        <div className="flex -space-x-4">
          {avatars.map((url, i) => (
            <div key={i} className="w-12 h-12 rounded-full border-4 border-background overflow-hidden bg-white/10">
              <img src={url} alt="avatar" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
        <p className="text-xl md:text-2xl font-medium text-white/80">
          Join <span className="text-primary font-bold">1,121,532</span> others building now
        </p>
      </motion.div>
    </div>
  );
}
