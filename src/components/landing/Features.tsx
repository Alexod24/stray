"use client";

import { resume } from "@/data/resume";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { motion } from "framer-motion";

export function Features() {
  return (
    <section id="services" className="py-24 sm:py-32 relative overflow-hidden">
      <div className="container relative z-10 mx-auto px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16 sm:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-base font-bold uppercase tracking-[0.2em] text-primary mb-4"
          >
            Excelencia en Ingeniería
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl mb-6"
          >
            Todo lo que necesitas para construir el futuro
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground leading-relaxed"
          >
            No solo escribimos código. Diseñamos experiencias y arquitecturas de
            soluciones que desafían los límites de lo posible.
          </motion.p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl lg:max-w-5xl">
          <BentoGrid className="lg:grid-rows-2">
            {resume.features.map((feature, index) => (
              <BentoCard
                key={feature.name}
                name={feature.name}
                className={
                  index === 0 || index === 3 ? "lg:col-span-2" : "lg:col-span-1"
                }
                background={
                  <div className="absolute inset-x-0 inset-y-[-30%] h-[160%] w-full bg-gradient-to-tr from-transparent via-transparent to-primary/5 opacity-50 dark:to-primary/10 transition-all duration-500 group-hover:scale-105" />
                }
                Icon={feature.icon as React.ElementType}
                description={feature.description}
                href="#"
                cta="Conocer más"
              />
            ))}
          </BentoGrid>
        </div>
      </div>
    </section>
  );
}
