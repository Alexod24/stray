"use client";

import { motion } from "framer-motion";

const partners = [
  { name: "Algorand", logo: "https://cryptologos.cc/logos/algorand-algo-logo.png?v=032" },
  { name: "Immutable", logo: "https://cryptologos.cc/logos/immutable-x-imx-logo.png?v=032" },
  { name: "Polygon", logo: "https://cryptologos.cc/logos/polygon-matic-logo.png?v=032" },
  { name: "BNB Chain", logo: "https://cryptologos.cc/logos/binance-coin-bnb-logo.png?v=032" },
  { name: "Polkadot", logo: "https://cryptologos.cc/logos/polkadot-new-dot-logo.png?v=032" },
  { name: "Solana", logo: "https://cryptologos.cc/logos/solana-sol-logo.png?v=032" },
  { name: "Tezos", logo: "https://cryptologos.cc/logos/tezos-xtz-logo.png?v=032" },
  { name: "Klaytn", logo: "https://cryptologos.cc/logos/klaytn-klay-logo.png?v=032" },
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
            className="text-4xl md:text-6xl font-black text-white mb-6 leading-[1.1] tracking-tighter"
            style={{ fontFamily: "var(--font-orbitron)" }}
          >
            Looking to attract<br />the world's best devs?
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-white/60 mb-10 max-w-2xl leading-relaxed"
          >
            If you're a new project looking to supercharge your developer pipeline, we'd love to hear from you! 
            We have limited availability for new projects, but we'd love to see how we can decentralise the web together!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <button className="h-14 px-10 bg-[#34d399] text-black hover:bg-[#34d399]/90 rounded-xl text-lg font-bold transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(52,211,153,0.3)]">
              Partner with us
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
            Our Partners
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
