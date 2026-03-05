"use client";

import { Check, ArrowRight } from "lucide-react";
import { resume } from "@/data/resume";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { BorderBeam } from "@/components/magicui/border-beam";
import { ShimmerButton } from "@/components/ui/shimmer-button";

export function Pricing() {
  return (
    <section
      id="pricing"
      className="py-24 sm:py-32 bg-background relative z-10"
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center mb-16 sm:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-base font-bold uppercase tracking-[0.2em] text-primary mb-4"
          >
            {resume.pricing.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl mb-6"
          >
            {resume.pricing.subtitle}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            {resume.pricing.description}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {resume.pricing.tiers.map((tier, index) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative h-full"
            >
              <Card
                className={`h-full border border-border/50 flex flex-col relative overflow-hidden notion-card ${
                  tier.mostPopular
                    ? "shadow-2xl scale-105 z-10 bg-background"
                    : "bg-card/50"
                }`}
              >
                {tier.mostPopular && (
                  <>
                    <BorderBeam size={150} duration={12} delay={9} />
                    <div className="absolute top-0 right-0">
                      <Badge className="rounded-tr-none rounded-bl-xl px-4 py-1">
                        Más Popular
                      </Badge>
                    </div>
                  </>
                )}

                <CardHeader>
                  <CardTitle className="text-2xl font-bold">
                    {tier.name}
                  </CardTitle>
                  <CardDescription className="text-sm mt-2">
                    {tier.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="flex-1">
                  <div className="mb-8">
                    <span className="text-4xl font-bold tracking-tight text-foreground">
                      {tier.priceMonthly}
                    </span>
                    {tier.priceMonthly !== "A medida" && (
                      <span className="text-muted-foreground ml-2">/base</span>
                    )}
                  </div>

                  <ul className="space-y-4">
                    {tier.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-sm"
                      >
                        <Check className="h-5 w-5 text-primary shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter className="pt-8">
                  {tier.mostPopular ? (
                    <a href={tier.href} className="w-full block">
                      <ShimmerButton className="w-full h-12 rounded-lg">
                        <span className="flex items-center justify-center gap-2 whitespace-pre-wrap text-center text-sm font-bold leading-none tracking-tight text-white lg:text-base">
                          Empezar ahora
                          <ArrowRight className="h-4 w-4" />
                        </span>
                      </ShimmerButton>
                    </a>
                  ) : (
                    <Button
                      asChild
                      className="w-full h-12 text-base font-bold"
                      variant="outline"
                    >
                      <a
                        href={tier.href}
                        className="flex items-center justify-center gap-2"
                      >
                        Empezar ahora
                        <ArrowRight className="h-4 w-4" />
                      </a>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
