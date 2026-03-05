"use client";

import { motion, Variants } from "framer-motion";
import { cn } from "@/lib/utils";

interface LettersPullUpProps {
  text: string;
  className?: string;
  delay?: number;
}

export default function LettersPullUp({
  text,
  className,
  delay = 0,
}: LettersPullUpProps) {
  const letters = text.split("");

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: delay,
      },
    },
  };

  const item: Variants = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className={cn("flex flex-wrap justify-center", className)}
    >
      {letters.map((letter, i) => (
        <motion.span
          key={i}
          variants={item}
          className={cn("inline-block", letter === " " ? "whitespace-pre" : "")}
        >
          {letter}
        </motion.span>
      ))}
    </motion.div>
  );
}
