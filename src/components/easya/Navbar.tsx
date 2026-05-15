"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-10 md:px-20 bg-transparent"
    >
      {/* Logo EASY·A with Orbitron Font */}
      <Link href="/" className="flex items-center group">
        <span
          className="text-[20px] font-black text-white uppercase tracking-[0.5em] leading-none"
        >
          Stray
        </span>
      </Link>

      {/* Nav Links & CTA */}
      <div className="flex items-center gap-12">
        <div className="hidden lg:flex items-center gap-10">
          <Link
            href="#"
            className="text-[13px] font-medium text-white/90 hover:text-white transition-colors tracking-wide"
          >
            Servicios
          </Link>
          <Link
            href="#"
            className="text-[13px] font-medium text-white/90 hover:text-white transition-colors tracking-wide"
          >
            Proyectos
          </Link>
          <Link
            href="#"
            className="text-[13px] font-medium text-white/90 hover:text-white transition-colors tracking-wide"
          >
            Manifesto
          </Link>
          <Link
            href="#"
            className="text-[13px] font-medium text-white/90 hover:text-white transition-colors tracking-wide"
          >
            Contacto
          </Link>
        </div>

        <button className="bg-white text-black hover:bg-white/90 px-6 py-2.5 rounded-[6px] text-[13px] font-bold transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)]">
          Inicia la Disrupción
        </button>
      </div>
    </motion.nav>
  );
}
