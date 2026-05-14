import Image from "next/image";
 import { resume } from "@/data/resume";
 
 export function Footer() {
   return (
     <footer className="relative bg-[#010916] border-t border-white/5 pt-24 pb-12 overflow-hidden">
       {/* Background glow */}
       <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/10 rounded-full blur-[100px] -mb-40" />
 
       <div className="container mx-auto px-6 lg:px-8">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
           <div className="lg:col-span-2 flex flex-col gap-6">
             <div className="flex items-center gap-3 group">
               <Image
                 src="/logo/logo-redondo-white.png"
                 alt={resume.name}
                 width={40}
                 height={40}
                 className="h-10 w-auto group-hover:rotate-[360deg] transition-transform duration-700"
               />
               <span className="text-2xl font-black text-white tracking-tighter uppercase">
                 {resume.shortName}
                 <span className="text-primary">.</span>
               </span>
             </div>
             <p className="text-base text-white/50 max-w-sm font-medium leading-relaxed">
               {resume.footer.description}
             </p>
             <div className="mt-4 flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full w-fit">
               <span className="relative flex h-2 w-2">
                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                 <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
               </span>
               <span className="text-[10px] text-white font-black tracking-[0.2em] uppercase">
                 {resume.footer.status}
               </span>
             </div>
           </div>
 
           {resume.footer.categories.map((category) => (
             <div key={category.title} className="flex flex-col gap-6">
               <h3 className="text-xs font-black text-white uppercase tracking-[0.3em]">
                 {category.title}
               </h3>
               <ul role="list" className="flex flex-col gap-3">
                 {category.links.map((item) => (
                   <li key={item.name}>
                     <a
                       href={item.href}
                       className="text-sm text-white/40 hover:text-primary transition-all font-medium"
                     >
                       {item.name}
                     </a>
                   </li>
                 ))}
               </ul>
             </div>
           ))}
         </div>
 
         <div className="mt-24 pt-12 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-6">
           <p className="text-[10px] text-white/30 uppercase tracking-[0.2em] font-bold">
             {resume.footer.copyright}
           </p>
           <div className="flex items-center gap-8">
             <a href="#" className="text-[10px] text-white/30 hover:text-white uppercase tracking-[0.2em] font-bold transition-colors">Twitter</a>
             <a href="#" className="text-[10px] text-white/30 hover:text-white uppercase tracking-[0.2em] font-bold transition-colors">LinkedIn</a>
             <a href="#" className="text-[10px] text-white/30 hover:text-white uppercase tracking-[0.2em] font-bold transition-colors">Instagram</a>
           </div>
         </div>
       </div>
     </footer>
   );
 }
