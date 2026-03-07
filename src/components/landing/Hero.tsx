"use client";

import { resume } from "@/data/resume";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
import LettersPullUp from "@/components/magicui/letters-pull-up";
import { BorderBeam } from "@/components/magicui/border-beam";
import { Particles } from "@/components/ui/particles";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { Safari } from "@/components/ui/safari";

export function Hero() {
  return (
    <section className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-background pt-32 pb-20 md:pt-40 md:pb-24">
      <Particles
        className="absolute inset-0 z-0"
        quantity={200}
        ease={80}
        color="#ffffff"
        refresh
      />

      <div className="container relative z-10 mx-auto px-6 text-center lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex justify-center"
        >
          <AnimatedGradientText>
            <span className="flex items-center gap-1.5 px-4 py-1.5 text-sm font-medium">
              ✨ {resume.hero.badge}
              <ChevronRight className="h-3.5 w-3.5 text-muted-foreground transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
            </span>
          </AnimatedGradientText>
        </motion.div>

        <LettersPullUp
          text={resume.hero.title}
          className="text-4xl font-extrabold tracking-tight text-foreground sm:text-7xl mb-8 max-w-4xl mx-auto"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground sm:text-xl leading-relaxed"
        >
          {resume.hero.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="flex flex-wrap items-center justify-center gap-6 mb-20"
        >
          <a href="#contact" className="block">
            <ShimmerButton className="shadow-2xl h-12 px-8">
              <span className="flex items-center gap-2 whitespace-pre-wrap text-center text-sm font-bold leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-base">
                {resume.hero.primaryCta}
                <ArrowRight className="h-4 w-4" />
              </span>
            </ShimmerButton>
          </a>
          <Button
            variant="ghost"
            size="lg"
            className="h-12 px-8 text-base font-bold border-border hover:bg-muted/50 transition-colors"
          >
            <a href="#services">{resume.hero.secondaryCta}</a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.2 }}
          className="relative mx-auto mt-12 max-w-5xl px-2"
        >
          <div className="relative rounded-xl border border-border/50 bg-background/50 p-2 backdrop-blur-xl shadow-2xl overflow-hidden">
            <Safari
              url="stray.digital"
              className="h-full w-full"
              imageSrc="https://images.unsplash.com/photo-1551288049-bbbda536ad41?auto=format&fit=crop&q=80&w=2070"
            />
            <BorderBeam size={250} duration={12} delay={9} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
