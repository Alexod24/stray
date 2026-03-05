"use client";

import { resume } from "@/data/resume";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { BorderBeam } from "@/components/magicui/border-beam";

export function Testimonial() {
  return (
    <section className="py-24 sm:py-32">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl border border-border/50 bg-card p-12 lg:p-20 shadow-xl"
        >
          <BorderBeam size={200} duration={12} delay={9} />

          {/* Subtle Background pattern or gradient */}
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_45%_at_50%_50%,var(--primary)_0%,transparent_100%)] opacity-5" />

          <div className="relative mx-auto max-w-3xl text-center">
            <Quote className="mx-auto h-12 w-12 text-primary/20 mb-8" />

            <motion.figure
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <blockquote className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl leading-relaxed italic">
                <p>{resume.testimonial.content}</p>
              </blockquote>

              <figcaption className="mt-10 flex flex-col items-center gap-4">
                <div className="h-14 w-14 rounded-full border border-border bg-muted overflow-hidden">
                  <img
                    alt={resume.testimonial.author}
                    src={resume.testimonial.bgImage}
                    className="h-full w-full object-cover grayscale"
                  />
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-foreground">
                    {resume.testimonial.author}
                  </div>
                  <div className="text-sm font-medium text-muted-foreground uppercase tracking-widest mt-1">
                    {resume.testimonial.role}
                  </div>
                </div>
              </figcaption>
            </motion.figure>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
