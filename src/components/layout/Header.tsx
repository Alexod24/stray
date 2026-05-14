"use client";
 
 import { useState, useEffect } from "react";
 import Image from "next/image";
 import { Menu, X } from "lucide-react";
 import { resume } from "@/data/resume";
 import { Button } from "@/components/ui/button";
 import {
   Sheet,
   SheetContent,
   SheetTrigger,
   SheetTitle,
 } from "@/components/ui/sheet";
 import { motion, useScroll, useTransform } from "framer-motion";
 
 export function Header() {
   const { scrollY } = useScroll();
 
   const headerBg = useTransform(
     scrollY,
     [0, 50],
     ["rgba(1, 9, 22, 0)", "rgba(1, 9, 22, 0.8)"],
   );
 
   const headerBorder = useTransform(
     scrollY,
     [0, 50],
     ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.1)"],
   );
 
   return (
     <motion.header
       style={{
         backgroundColor: headerBg,
         borderBottom: `1px solid ${headerBorder}`,
       }}
       className="fixed inset-x-0 top-0 z-50 transition-all duration-300 backdrop-blur-md"
     >
       <nav
         aria-label="Global"
         className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8"
       >
         <div className="flex lg:flex-1">
           <a href="/" className="-m-1.5 p-1.5 flex items-center gap-3 group">
             <div className="relative">
               <div className="absolute inset-0 bg-primary/20 rounded-full blur-md group-hover:bg-primary/40 transition-all" />
               <Image
                 src="/logo/logo-redondo-white.png"
                 alt={resume.name}
                 width={44}
                 height={44}
                 className="relative h-11 w-auto brightness-110"
               />
             </div>
             <span className="text-2xl font-black tracking-tighter uppercase text-white group-hover:text-primary transition-colors">
               {resume.shortName}
             </span>
           </a>
         </div>
 
         <div className="hidden lg:flex lg:gap-x-10">
           {resume.navigation.map((item) => (
             <a
               key={item.name}
               href={item.href}
               className="text-sm font-bold tracking-widest uppercase text-white/60 hover:text-primary transition-all relative group"
             >
               {item.name}
               <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
             </a>
           ))}
         </div>
 
         <div className="flex flex-1 justify-end items-center gap-6">
           <div className="hidden lg:block">
             <Button asChild variant="outline" className="border-primary/50 text-primary hover:bg-primary hover:text-background font-black rounded-full px-8 transition-all uppercase tracking-tighter">
               <a href={resume.contact.href}>{resume.contact.cta}</a>
             </Button>
           </div>
 
           <div className="lg:hidden">
             <Sheet>
               <SheetTrigger asChild>
                 <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                   <Menu className="h-7 w-7" />
                 </Button>
               </SheetTrigger>
               <SheetContent side="right" className="w-full sm:w-[400px] bg-background border-white/10 p-8">
                 <SheetTitle className="text-left mb-12 text-2xl font-black text-white uppercase tracking-widest">Menú</SheetTitle>
                 <div className="flex flex-col gap-8 mt-4">
                   {resume.navigation.map((item) => (
                     <a
                       key={item.name}
                       href={item.href}
                       className="text-3xl font-black text-white hover:text-primary transition-colors uppercase tracking-tighter"
                     >
                       {item.name}
                     </a>
                   ))}
                   <div className="h-px bg-white/10 my-4" />
                   <Button asChild className="w-full h-16 text-lg font-black bg-primary text-background hover:bg-primary/90 rounded-2xl">
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
