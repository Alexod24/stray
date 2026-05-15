"use client";

import { motion } from "framer-motion";

export default function Partners() {
  const universities = [
    { name: "CLIENTE PREMIUM", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/2/29/Harvard_shield.svg/1200px-Harvard_shield.svg.png" },
    { name: "GLOBAL PARTNER", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f4/University_of_Cambridge_coat_of_arms.svg/1200px-University_of_Cambridge_coat_of_arms.svg.png" },
    { name: "TECH INNOVATION", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c2/Brown_University_coat_of_arms.svg/1200px-Brown_University_coat_of_arms.svg.png" },
    { name: "LUXURY BRAND", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/2/29/Dartmouth_College_shield.svg/1200px-Dartmouth_College_shield.svg.png" },
    { name: "ENTERPRISE SOLUTIONS", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/2/22/Yale_University_Shield.svg/1200px-Yale_University_Shield.svg.png" },
    { name: "CREATIVE STUDIO", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/2/29/Oxford_University_Coat_of_Arms.svg/1200px-Oxford_University_Coat_of_Arms.svg.png" },
    { name: "DIGITAL FUTURE", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/MIT_logo.svg/2560px-MIT_logo.svg.png" },
    { name: "GROWTH SCALE", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/7/71/Princeton_shield.svg/1200px-Princeton_shield.svg.png" },
  ];

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black py-24 flex flex-col justify-end">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="file:///C:/Users/alexl/.gemini/antigravity/brain/00837e23-17e8-48cb-aba1-ae68053354ac/stray_lifestyle_hero_1778645440987.png" 
          alt="Lifestyle" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <div className="max-w-xl mb-32">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-black text-white mb-8 tracking-tighter leading-[0.9]"
          >
            Marcas que desafían<br />lo convencional.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-white/60 leading-relaxed font-bold tracking-tight"
          >
            Nuestros clientes no solo buscan una agencia; buscan una ventaja competitiva desleal. Hemos ayudado a marcas a romper el ruido del mercado y dominar su categoría mediante ingeniería de precisión y marketing disruptivo.
          </motion.p>
        </div>

        <div className="space-y-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white/60 font-bold text-sm tracking-widest uppercase"
          >
            Hemos generado más de $10M en valor para nuestros clientes este año
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {universities.map((uni, i) => (
              <motion.div
                key={uni.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-[#161b22]/40 backdrop-blur-md border border-white/5 rounded-xl p-4 flex flex-col items-center justify-center gap-3 h-32 hover:bg-white/5 transition-colors group"
              >
                <img 
                  src={uni.logo} 
                  alt={uni.name} 
                  className="h-10 w-auto object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                />
                <span className="text-[8px] font-black text-white/40 text-center uppercase tracking-wider">{uni.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
