"use client";

import { motion } from "framer-motion";

export function Testimonials() {
  const testimonials = [
    {
      quote: "Our partnership with EasyA taps into their strong crypto community, helping us bring another informative resource for developers globally to learn and build on the XRPL.",
      author: "Markus Infanger",
      role: "SVP at Ripple",
      logo: "https://cryptologos.cc/logos/ripple-xrp-logo.png?v=029",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=markus"
    },
    {
      quote: "Phil and Dom were there from the very birth of Axal (born out of an EasyA hackathon). After watching how they support devs, they were our guiding light as we grew.",
      author: "Ash",
      role: "Founder of Axal",
      logo: "https://cryptologos.cc/logos/aptos-apt-logo.png?v=029", // placeholder
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=ash"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative rounded-[2.5rem] bg-[#0a1220] border border-white/5 p-12 flex flex-col group"
            >
              <div className="flex items-center gap-4 mb-8">
                <img src={t.logo} alt="logo" className="h-8 grayscale group-hover:grayscale-0 transition-all" />
              </div>
              <p className="text-xl text-white/80 mb-12 font-medium leading-relaxed">
                "{t.quote}"
              </p>
              <div className="mt-auto flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-white/10">
                  <img src={t.image} alt={t.author} className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="font-bold text-white">{t.author}</div>
                  <div className="text-sm text-white/40">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
