"use client";

import { motion } from "framer-motion";

const partners = [
  { name: "React / Next.js", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" },
  { name: "Node.js / Bun", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" },
  { name: "Python / AI", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" },
  { name: "TypeScript", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" },
  { name: "PostgreSQL", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg" },
  { name: "Docker / K8s", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg" },
  { name: "AWS / Google Cloud", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
  { name: "Meta Ads / Google", logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg" },
];

export default function PartnerCTA() {
  return (
    <section className="relative py-24 px-6 overflow-hidden bg-black">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=2070" 
          alt="Community background" 
          className="w-full h-full object-cover opacity-40 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/60 to-black" />
      </div>

      <div className="container relative z-10 mx-auto">
        <div className="max-w-4xl">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black text-white mb-6 leading-[1.1] tracking-tighter"
          >
            ¿Buscas escalar tu marca<br />al siguiente nivel?
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-white/60 mb-10 max-w-2xl leading-relaxed"
          >
            Estamos seleccionando proyectos con visión de futuro para implementar estrategias de ingeniería y marketing de alto rendimiento. Cupos limitados para asegurar la excelencia en cada ejecución.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <button className="h-14 px-10 bg-[#34d399] text-black hover:bg-[#34d399]/90 rounded-xl text-lg font-bold transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(52,211,153,0.3)]">
              Trabaja con nosotros
            </button>
          </motion.div>
        </div>

        <div className="mt-24">
          <motion.h3 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-xl font-bold text-white mb-8"
          >
            Tecnologías que dominamos
          </motion.h3>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 md:gap-6">
            {partners.map((partner, i) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/[0.03] backdrop-blur-sm border border-white/5 rounded-2xl p-8 flex items-center justify-between group hover:bg-white/[0.08] transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-center gap-4">
                   <img 
                    src={partner.logo} 
                    alt={partner.name} 
                    className="h-8 w-8 object-contain transition-all duration-500"
                  />
                  <span className="text-lg font-bold text-white/80 group-hover:text-white transition-colors">
                    {partner.name}
                  </span>
                </div>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg className="w-5 h-5 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
