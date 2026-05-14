"use client";

import { motion } from "framer-motion";

export function Partners() {
  const partners = [
    { name: "Ripple", logo: "https://cryptologos.cc/logos/ripple-xrp-logo.png?v=029" },
    { name: "Stellar", logo: "https://cryptologos.cc/logos/stellar-xlm-logo.png?v=029" },
    { name: "Aptos", logo: "https://cryptologos.cc/logos/aptos-apt-logo.png?v=029" },
    { name: "Stacks", logo: "https://cryptologos.cc/logos/stacks-stx-logo.png?v=029" },
    { name: "Polkadot", logo: "https://cryptologos.cc/logos/polkadot-new-dot-logo.png?v=029" },
    { name: "Sui", logo: "https://cryptologos.cc/logos/sui-sui-logo.png?v=029" },
    { name: "Solana", logo: "https://cryptologos.cc/logos/solana-sol-logo.png?v=029" },
    { name: "Polygon", logo: "https://cryptologos.cc/logos/polygon-matic-logo.png?v=029" },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-16">Our Partners</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {partners.map((partner, i) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.05, borderColor: "rgba(0,242,147,0.3)" }}
              className="relative aspect-video rounded-3xl bg-[#0a1220] border border-white/5 flex items-center justify-center p-8 group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <img
                src={partner.logo}
                alt={partner.name}
                className="w-full h-full object-contain grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
              />
              <div className="absolute bottom-4 left-0 right-0 text-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-xs font-bold text-white/40 uppercase tracking-widest">{partner.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
