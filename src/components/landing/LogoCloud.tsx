"use client";

import { resume } from "@/data/resume";
import Marquee from "@/components/magicui/marquee";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function LogoCloud() {
  const allLogos = [
    ...resume.logos.items,
    {
      name: resume.name,
      src: "/logo/logo-redondo-white.png",
    },
  ];

  // Split logos for two rows or just shuffle/repeat
  const firstRow = allLogos.slice(0, Math.ceil(allLogos.length / 2));
  const secondRow = allLogos.slice(Math.ceil(allLogos.length / 2));

  return (
    <section className="relative z-10 py-24 border-y border-border/50 bg-background overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground mb-16"
        >
          {resume.logos.title}
        </motion.p>

        <div className="relative flex w-full flex-col items-center justify-center gap-8 overflow-hidden">
          <Marquee pauseOnHover className="[--duration:30s]">
            {[...firstRow, ...firstRow].map((logo, idx) => (
              <img
                key={`${logo.name}-${idx}`}
                alt={logo.name}
                src={logo.src}
                className="h-9 w-auto px-12 opacity-70 hover:opacity-100 transition-all duration-300"
              />
            ))}
          </Marquee>

          <Marquee reverse pauseOnHover className="[--duration:30s]">
            {[...secondRow, ...secondRow].map((logo, idx) => (
              <img
                key={`${logo.name}-${idx}`}
                alt={logo.name}
                src={logo.src}
                className="h-9 w-auto px-12 opacity-70 hover:opacity-100 transition-all duration-300"
              />
            ))}
          </Marquee>

          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-20 flex justify-center"
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-border bg-background/50 backdrop-blur-sm px-5 py-2 text-sm text-muted-foreground shadow-sm">
            <span>{resume.logos.cta.text}</span>
            <a
              href={resume.logos.cta.href}
              className="font-bold text-foreground hover:text-primary flex items-center gap-1.5 transition-colors"
            >
              {resume.logos.cta.linkText}
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
