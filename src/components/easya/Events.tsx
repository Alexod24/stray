"use client";

import { motion } from "framer-motion";
import { Trophy, MapPin, ArrowRight } from "lucide-react";

const events = [
  {
    title: "E-commerce de Alto Rendimiento",
    location: "RETAIL TECH",
    prizes: "+300% ROI",
    date: "Optimización Core",
    duration: "Full Scale",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1000&auto=format&fit=crop",
    partner: "Growth",
  },
  {
    title: "Arquitectura Cloud & SaaS",
    location: "SOFTWARE ENG",
    prizes: "99.9% Uptime",
    date: "Sistemas Distribuidos",
    duration: "Enterprise",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop",
    partner: "Scale",
  },
  {
    title: "Motores de IA en Marketing",
    location: "DATA SCIENCE",
    prizes: "+50% Leads",
    date: "Machine Learning",
    duration: "Disruptivo",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000&auto=format&fit=crop",
    partner: "Future",
  },
];

export default function Events() {
  return (
    <section className="py-32 bg-black">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <h2 className="text-3xl md:text-4xl font-black text-white tracking-tighter">
                Nuestro Ecosistema
              </h2>
              <a href="#" className="flex items-center gap-2 text-white/40 font-bold hover:text-white transition-colors pt-2">
                Ver servicios <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
          
          {/* Toggle */}
          <div className="bg-[#161b22] p-1 rounded-full flex border border-white/5">
            <button className="px-6 py-2 rounded-full bg-white text-black text-sm font-black transition-all">Ingeniería</button>
            <button className="px-6 py-2 rounded-full text-white/40 text-sm font-black hover:text-white transition-all">Marketing</button>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((event, i) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative group cursor-pointer"
            >
              {/* Partner Badge */}
              <div className="absolute top-[-20px] right-6 z-20 bg-[#0d1117] border border-white/10 rounded-2xl p-4 flex items-center gap-2 shadow-2xl transition-transform group-hover:scale-105">
                <div className="w-6 h-6 bg-primary/20 rounded flex items-center justify-center">
                  <div className="w-3 h-3 bg-primary rounded-full" />
                </div>
                <span className="text-sm font-black text-white">{event.partner}</span>
              </div>

              {/* Main Card */}
              <div className="relative rounded-[2.5rem] bg-[#0d1117] border border-white/5 overflow-hidden flex flex-col h-full transition-all group-hover:border-white/20">
                {/* Image Section */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117] to-transparent" />
                  
                  {/* Avatars Overlay */}
                  <div className="absolute top-6 left-6 flex -space-x-3">
                    {[1, 2, 3].map(j => (
                      <div key={j} className="w-8 h-8 rounded-full border-2 border-[#0d1117] overflow-hidden">
                        <img src={`https://i.pravatar.cc/100?img=${j + 20}`} alt="avatar" />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-center gap-2 text-purple-400 mb-6">
                    <Trophy className="w-5 h-5 fill-purple-400/20" />
                    <span className="text-xl font-black">{event.prizes}</span>
                    <span className="text-sm font-bold text-white/40">de impacto</span>
                  </div>

                  <div className="flex items-center gap-1.5 mb-6">
                    <div className="px-2 py-1 bg-white/5 rounded border border-white/10 flex items-center gap-1.5">
                      <MapPin className="w-3 h-3 text-white/40" />
                      <span className="text-[10px] font-black text-white uppercase tracking-widest">{event.location}</span>
                    </div>
                  </div>

                  <h3 className="text-3xl font-black text-white mb-4 leading-tight">
                    {event.title}
                  </h3>

                  <div className="text-sm font-bold text-white/40 mt-auto">
                    {event.date} | {event.duration}
                  </div>

                  <button className="mt-8 w-full py-4 rounded-xl border border-white/10 text-sm font-black text-white hover:bg-white/5 transition-all">
                    Ver más
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
