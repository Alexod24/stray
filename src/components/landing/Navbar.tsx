"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function Navbar() {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-background/50 backdrop-blur-xl border-b border-white/5 md:px-12"
    >
      <div className="flex items-center gap-8">
        <Link href="/" className="text-2xl font-black tracking-tighter text-white">
          EASY'A
        </Link>
        <div className="hidden md:flex items-center gap-6">
          <Link href="#" className="text-sm font-medium text-white/70 hover:text-white transition-colors">
            Meet the team
          </Link>
          <Link href="#" className="text-sm font-medium text-white/70 hover:text-white transition-colors">
            Events
          </Link>
          <Link href="#" className="text-sm font-medium text-white/70 hover:text-white transition-colors">
            Challenges
          </Link>
          <Link href="#" className="text-sm font-medium text-white/70 hover:text-white transition-colors">
            Blog
          </Link>
        </div>
      </div>
      <Button className="bg-white text-black hover:bg-white/90 rounded-full px-6 font-bold">
        Download App
      </Button>
    </motion.nav>
  );
}
