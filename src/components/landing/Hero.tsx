"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-background pt-32 pb-20">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-[radial-gradient(circle_at_50%_40%,rgba(0,242,147,0.1),transparent_70%)]" />
      <div className="absolute top-[30%] left-1/2 -translate-x-1/2 w-full h-[600px] bg-[radial-gradient(circle_at_50%_50%,rgba(157,80,187,0.05),transparent_70%)]" />

      <div className="container relative z-10 mx-auto px-6 text-center lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-6xl font-bold tracking-tighter text-white sm:text-9xl mb-8 max-w-4xl mx-auto leading-[0.9]"
        >
          Discover your path to Web3
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mx-auto mb-12 max-w-2xl text-xl text-white/60 sm:text-2xl leading-relaxed font-medium"
        >
          Learn about the world's leading blockchains, right from your phone.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex flex-wrap items-center justify-center gap-4 mb-16"
        >
          <button className="h-14 px-8 rounded-xl bg-white/10 border border-white/20 backdrop-blur-md flex items-center gap-3 hover:bg-white/20 transition-all">
            <div className="text-left">
              <div className="text-[10px] uppercase font-bold text-white/60">Download on the</div>
              <div className="text-lg font-bold text-white">App Store</div>
            </div>
          </button>
          <button className="h-14 px-8 rounded-xl bg-white/10 border border-white/20 backdrop-blur-md flex items-center gap-3 hover:bg-white/20 transition-all">
            <div className="text-left">
              <div className="text-[10px] uppercase font-bold text-white/60">Get it on</div>
              <div className="text-lg font-bold text-white">Google Play</div>
            </div>
          </button>
        </motion.div>

        {/* Floating Assets Placeholder */}
        <div className="relative w-full max-w-6xl mx-auto h-[400px] mt-12 pointer-events-none">
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-primary/40 to-purple-500/40 rounded-3xl blur-2xl opacity-50"
          />
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-0 right-0 w-48 h-48 bg-gradient-to-br from-blue-500/40 to-primary/40 rounded-3xl blur-3xl opacity-50"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[800px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(0,242,147,0.15),transparent_70%)]" />
          </div>
        </div>
      </div>
    </section>
  );
}
