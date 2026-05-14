"use client";

import Link from "next/link";
import { Twitter, Linkedin, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-24 bg-background border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-16">
          <div className="text-4xl font-black tracking-tighter text-white">
            EASY'A
          </div>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-white/40 hover:text-white transition-colors">
              <Twitter className="w-6 h-6" />
            </Link>
            <Link href="#" className="text-white/40 hover:text-white transition-colors">
              <Linkedin className="w-6 h-6" />
            </Link>
            <Link href="#" className="text-white/40 hover:text-white transition-colors">
              <Youtube className="w-6 h-6" />
            </Link>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-8 border-t border-white/5">
          <div className="text-sm text-white/40">
            © 2025 EasyA. All Rights Reserved
          </div>
          <div className="flex items-center gap-8">
            <Link href="#" className="text-sm text-white/40 hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="text-sm text-white/40 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-white/40 hover:text-white transition-colors">
              hello@easya.io
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
