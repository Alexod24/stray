"use client";

import { motion } from "framer-motion";

const FloatingCard = ({ className, delay = 0, icon, blur = false, size = "w-10 h-10", rotate = 0, z = 0 }: { className: string; delay?: number; icon: string; blur?: boolean; size?: string; rotate?: number; z?: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ 
        opacity: 1, 
        scale: 1,
        y: [0, -20, 0],
        rotate: [rotate, rotate + 2, rotate - 2, rotate]
      }}
      transition={{ 
        duration: 6 + Math.random() * 4, 
        delay, 
        repeat: Infinity, 
        ease: "easeInOut"
      }}
      style={{ zIndex: z }}
      className={`absolute ${className} ${blur ? 'blur-[8px]' : ''}`}
    >
      <div className="relative p-6 bg-[#1a1a1a]/80 backdrop-blur-3xl border border-white/10 rounded-[2rem] shadow-2xl transition-all overflow-hidden group hover:border-white/30">
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50" />
        <img src={icon} alt="Tech icon" className={`${size} object-contain transition-all group-hover:scale-110`} />
      </div>
    </motion.div>
  );
};

export function Hero() {
  const cards = [
    // Background / Small cards
    { icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg", className: "top-[20%] left-[15%]", rotate: -15, delay: 0.5, size: "w-8 h-8", z: 10 },
    { icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg", className: "top-[25%] right-[20%]", rotate: 10, delay: 1.2, size: "w-8 h-8", z: 10 },
    
    // Midground / Clear cards
    { icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg", className: "bottom-[40%] left-[20%]", rotate: 12, delay: 0.8, size: "w-12 h-12", z: 30 },
    { icon: "https://cdn.worldvectorlogo.com/logos/next-js.svg", className: "bottom-[35%] right-[25%]", rotate: -8, delay: 2.1, size: "w-14 h-14", z: 30 },
    { icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg", className: "top-[45%] left-[25%]", rotate: -5, delay: 1.5, size: "w-10 h-10", z: 30 },
    
    // Foreground / Blurred / Large cards
    { icon: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg", className: "top-[10%] left-[-5%]", rotate: 25, delay: 0, blur: true, size: "w-20 h-20", z: 50 },
    { icon: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg", className: "bottom-[10%] right-[-5%]", rotate: -20, delay: 1, blur: true, size: "w-24 h-24", z: 50 },
  ];

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black pt-40 pb-32">
      {/* Volumetric Beams / Glows */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Central Beams */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[800px] bg-[conic-gradient(from_180deg_at_50%_100%,transparent_0deg,rgba(16,185,129,0.05)_20deg,rgba(139,92,246,0.05)_40deg,transparent_60deg)] blur-[60px]" />
        
        {/* Glow Spots */}
        <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/3 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="container relative z-20 mx-auto px-6 text-center">
        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-16"
        >
          <h1 className="text-4xl md:text-7xl font-black text-white mb-8 tracking-tight leading-[1.05]">
            STRAY: EL GLITCH<br />EN EL SISTEMA
          </h1>
          <p className="text-lg md:text-xl text-white/50 font-medium max-w-2xl mx-auto mb-12 leading-relaxed">
            No somos una agencia. Somos un laboratorio de ingeniería y marketing diseñado para marcas que no se conforman con el promedio.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <button className="h-14 px-10 rounded-2xl bg-white text-black font-black uppercase tracking-widest hover:scale-105 transition-all">
               Ver Proyectos
            </button>
            <button className="h-14 px-10 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 text-white font-black uppercase tracking-widest hover:bg-white/10 transition-all">
               Agendar Llamada
            </button>
          </div>
        </motion.div>

        {/* Visual Scene */}
        <div className="relative h-[600px] w-full max-w-6xl mx-auto mt-20">
          
          {/* Main Stage / Screen */}
          <motion.div
            initial={{ opacity: 0, y: 50, rotateX: 20 }}
            animate={{ opacity: 1, y: 0, rotateX: 10 }}
            transition={{ duration: 1.5, delay: 0.2 }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] md:w-[500px] h-[350px] md:h-[500px] bg-white/[0.02] backdrop-blur-3xl border border-white/10 rounded-[4rem] shadow-[0_0_100px_rgba(255,255,255,0.05)] flex items-center justify-center p-12 overflow-hidden"
          >
             <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
             <div className="relative z-10 w-full h-full flex flex-col items-center justify-center gap-8">
                <div className="w-24 h-24 bg-white/5 rounded-3xl border border-white/20 flex items-center justify-center">
                   <div className="w-12 h-12 bg-white rounded-xl shadow-[0_0_30px_rgba(255,255,255,0.5)]" />
                </div>
                <div className="w-32 h-2 bg-white/10 rounded-full" />
             </div>
          </motion.div>

          {/* Floating Cards */}
          <div className="absolute inset-0">
            {cards.map((card, i) => (
              <FloatingCard key={i} {...card} />
            ))}
          </div>

          {/* People Silhouettes */}
          <div className="absolute bottom-[-50px] left-1/2 -translate-x-1/2 w-full flex justify-center gap-12 z-40 opacity-40">
             <div className="w-16 h-32 bg-black rounded-t-full relative">
                <div className="absolute top-[-10px] left-1/2 -translate-x-1/2 w-10 h-10 bg-black rounded-full" />
             </div>
             <div className="w-16 h-32 bg-black rounded-t-full relative scale-95 translate-y-2">
                <div className="absolute top-[-10px] left-1/2 -translate-x-1/2 w-10 h-10 bg-black rounded-full" />
             </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        section {
          perspective: 1200px;
        }
      `}</style>
    </section>
  );
}

export default Hero;
