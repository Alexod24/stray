"use client";

import Link from "next/link";
import { Instagram, Twitter, Linkedin, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-black pt-12 pb-24 overflow-hidden">
      {/* Curved Tab Shape */}
      <div className="absolute top-0 left-0 flex items-end">
        <div className="h-12 w-48 bg-[#0a0a0a] rounded-t-[2rem]" />
        <div className="h-12 w-12 bg-[#0a0a0a] relative">
          <div className="absolute inset-0 bg-black rounded-bl-[2rem]" />
        </div>
      </div>
      <div className="absolute top-12 left-0 w-full h-[calc(100%-48px)] bg-[#0a0a0a] z-0" />

      <div className="container relative z-10 mx-auto px-6 mt-20">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
          {/* Left Side: Logo and Copyright */}
          <div className="flex flex-col gap-4">
            <div 
              className="text-4xl md:text-5xl font-black tracking-[0.2em] text-white uppercase"
              style={{ fontFamily: "var(--font-orbitron)" }}
            >
              STRAY
            </div>
            <div className="text-sm text-white/30 font-medium">
              © 2025 STRAY. Todos los derechos reservados
            </div>
          </div>

          {/* Right Side: Socials and Links */}
          <div className="flex flex-col items-end gap-8 w-full md:w-auto">
            {/* Social Icons */}
            <div className="flex items-center gap-6">
              <a href="#" className="text-white/40 hover:text-white transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-white/40 hover:text-white transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-white/40 hover:text-white transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-white/40 hover:text-white transition-colors">
                <Youtube className="w-6 h-6" />
              </a>
              <a href="#" className="text-white/40 hover:text-white transition-colors">
                {/* Custom TikTok Icon */}
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.06-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.9-.32-1.98-.23-2.81.33-.85.51-1.44 1.43-1.58 2.44-.14 1.01.23 2.09.94 2.81.73.73 1.74 1.09 2.77 1.03 1.03-.08 1.96-.71 2.48-1.58.33-.53.48-1.14.53-1.75.13-3.36.05-6.72.06-10.08z" />
                </svg>
              </a>
            </div>

            {/* Links */}
            <div className="flex flex-wrap justify-end gap-6 md:gap-8">
              <Link href="#" className="text-sm font-bold text-white/60 hover:text-white transition-colors">
                Términos de Servicio
              </Link>
              <Link href="#" className="text-sm font-bold text-white/60 hover:text-white transition-colors">
                Política de Privacidad
              </Link>
              <a href="mailto:hello@stray.io" className="text-sm font-bold text-white/60 hover:text-white transition-colors">
                hello@stray.io
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
