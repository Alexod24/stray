"use client";

import { resume } from "@/data/resume";
import Marquee from "@/components/magicui/marquee";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function LogoCloud() {
  return (
    <section className="py-20 border-y border-border/50 bg-muted/20 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground mb-12"
        >
          {resume.logos.title}
        </motion.p>

        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          <Marquee pauseOnHover className="[--duration:20s]">
            {resume.logos.items.map((logo) => (
              <img
                key={logo.name}
                alt={logo.name}
                src={logo.src}
                className="h-10 w-auto px-10 grayscale opacity-40 hover:opacity-100 transition-all duration-300 dark:invert"
              />
            ))}
          </Marquee>

          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background/50"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-background/50"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 flex justify-center"
        >
          <p className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-1.5 text-sm text-muted-foreground shadow-sm">
            <span>{resume.logos.cta.text}</span>
            <a
              href={resume.logos.cta.href}
              className="font-bold text-foreground hover:text-primary flex items-center gap-1 transition-colors"
            >
              {resume.logos.cta.linkText}
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
