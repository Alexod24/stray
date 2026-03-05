"use client";

import { resume } from "@/data/resume";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import RetroGrid from "@/components/magicui/retro-grid";

export function CTA() {
  return (
    <section id="contact" className="py-24 sm:py-32 overflow-hidden relative">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative isolate overflow-hidden bg-foreground rounded-[2.5rem] px-6 py-24 text-center shadow-2xl sm:px-16 border border-border/10"
        >
          {/* RetroGrid Background */}
          <RetroGrid className="opacity-10 dark:opacity-20 absolute inset-0 z-0" />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,var(--primary)_0%,transparent_100%)] opacity-[0.05]" />

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="relative z-10 text-4xl font-bold tracking-tight text-background sm:text-5xl max-w-2xl mx-auto"
          >
            {resume.cta.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative z-10 mx-auto mt-6 max-w-xl text-lg text-background/80 leading-relaxed font-medium"
          >
            {resume.cta.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-6 relative z-10"
          >
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="h-14 px-8 text-lg font-bold shadow-lg"
            >
              <a href={resume.contact.href} className="flex items-center gap-2">
                {resume.cta.primaryCta}
                <ArrowRight className="h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="lg"
              className="h-14 px-8 text-lg font-bold text-background hover:bg-background/10 hover:text-background border-background/20"
            >
              <a
                href="mailto:hola@stray.lab"
                className="flex items-center gap-2"
              >
                <Mail className="h-5 w-5" />
                Email directo
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
