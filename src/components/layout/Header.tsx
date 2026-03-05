"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { resume } from "@/data/resume";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { motion, useScroll, useTransform } from "framer-motion";

export function Header() {
  const [activeItem, setActiveItem] = useState("");
  const { scrollY } = useScroll();

  const headerBg = useTransform(
    scrollY,
    [0, 50],
    ["rgba(255, 255, 255, 0)", "var(--background)"],
  );

  const headerBorder = useTransform(
    scrollY,
    [0, 50],
    ["rgba(0, 0, 0, 0)", "var(--border)"],
  );

  return (
    <motion.header
      style={{
        backgroundColor: headerBg,
        borderBottom: `1px solid ${headerBorder}`,
      }}
      className="fixed inset-x-0 top-0 z-50 transition-colors duration-300 backdrop-blur-sm"
    >
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5 flex items-center gap-2">
            <span className="text-xl font-bold tracking-tighter uppercase text-foreground">
              {resume.shortName}
              <span className="text-primary">.</span>
            </span>
          </a>
        </div>

        <div className="hidden lg:flex lg:gap-x-8">
          {resume.navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.name}
            </a>
          ))}
        </div>

        <div className="flex flex-1 justify-end items-center gap-4">
          <ModeToggle />
          <div className="hidden lg:block">
            <Button asChild variant="default" size="sm">
              <a href={resume.contact.href}>{resume.contact.cta}</a>
            </Button>
          </div>

          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <SheetTitle className="text-left mb-8">Menú</SheetTitle>
                <div className="flex flex-col gap-6 mt-8">
                  {resume.navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                    >
                      {item.name}
                    </a>
                  ))}
                  <hr className="border-border" />
                  <Button asChild className="w-full">
                    <a href={resume.contact.href}>{resume.contact.cta}</a>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </motion.header>
  );
}
