"use client";

import { motion } from "framer-motion";

const FloatingIcon = ({ className, delay = 0, icon, blur = false, size = "w-12 h-12" }: { className: string; delay?: number; icon: string; blur?: boolean; size?: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, y: 50 }}
      animate={{ 
        opacity: 1, 
        scale: 1,
        y: [0, -30, 0],
        rotate: [0, 5, -5, 0]
      }}
      transition={{ 
        duration: 8, 
        delay, 
        repeat: Infinity, 
        ease: "easeInOut"
      }}
      className={`absolute z-30 group ${className} ${blur ? 'blur-[3px]' : ''}`}
    >
      <div className="relative p-6 bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-[2.5rem] shadow-[0_0_60px_rgba(255,255,255,0.05)] hover:border-white/30 transition-all overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        <img src={icon} alt="Blockchain icon" className={`${size} object-contain opacity-40 group-hover:opacity-100 transition-all`} />
      </div>
    </motion.div>
  );
};

export function Hero() {
  const icons = [
    { icon: "https://cryptologos.cc/logos/tezos-xtz-logo.png", className: "top-[25%] left-[10%] rotate-[-12deg]", delay: 0.5, size: "w-14 h-14" },
    { icon: "https://cryptologos.cc/logos/polkadot-new-dot-logo.png", className: "top-[20%] right-[15%] rotate-[15deg]", delay: 1.2, blur: true },
    { icon: "https://cryptologos.cc/logos/algorand-algo-logo.png", className: "bottom-[35%] left-[15%] rotate-[8deg]", delay: 0.8 },
    { icon: "https://cryptologos.cc/logos/binance-coin-bnb-logo.png", className: "top-[45%] right-[10%] rotate-[-10deg]", delay: 2.1, size: "w-16 h-16" },
    { icon: "https://cryptologos.cc/logos/solana-sol-logo.png", className: "bottom-[45%] right-[25%] rotate-[12deg]", delay: 1.8, blur: true },
    { icon: "https://cryptologos.cc/logos/ethereum-eth-logo.png", className: "top-[15%] left-[30%] rotate-[20deg]", delay: 1.5, blur: true },
    { icon: "https://cryptologos.cc/logos/cardano-ada-logo.png", className: "bottom-[30%] right-[15%] rotate-[-15deg]", delay: 2.5 },
  ];

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#020202] pt-40 pb-32">
      {/* Background Image & Effects */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/hero-bg.png" 
          alt="Hero Background" 
          className="w-full h-full object-cover opacity-40 scale-105 animate-pulse-slow"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#020202] via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(16,185,129,0.1),transparent_60%)]" />
      </div>

      <div className="container relative z-20 mx-auto px-6 text-center">
        {/* Main Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <h1 
            className="text-6xl md:text-[9rem] font-black text-white leading-[0.8] tracking-tight mb-8 drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Discover your<br />path to Web3
          </h1>
          <p className="text-lg md:text-xl text-white/40 font-medium max-w-xl mx-auto mb-10 leading-snug">
            Learn about the world's leading blockchains, right from your phone.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <button className="h-14 px-8 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/10 flex items-center gap-3 hover:border-white/30 hover:bg-white/5 transition-all">
               <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" className="h-8" />
            </button>
            <button className="h-14 px-8 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/10 flex items-center gap-3 hover:border-white/30 hover:bg-white/5 transition-all">
               <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="h-8" />
            </button>
          </div>
        </motion.div>

        {/* The Visual Scene */}
        <div className="relative h-[650px] w-full max-w-6xl mx-auto perspective-1000 mt-20">
          
          {/* Floating Phone Case */}
          <motion.div
            initial={{ rotateX: 60, y: 100, opacity: 0 }}
            animate={{ rotateX: 45, y: 0, opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] bg-gradient-to-b from-white/10 to-transparent rounded-[4rem] border-2 border-white/10 shadow-[0_0_120px_rgba(255,255,255,0.05)] overflow-hidden backdrop-blur-sm"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_70%)]" />
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-emerald-500/10 to-transparent" />
          </motion.div>

          {/* Floating Icons Overlay */}
          <div className="absolute inset-0 z-50">
            {icons.map((icon, i) => (
              <FloatingIcon key={i} {...icon} />
            ))}
          </div>

        </div>
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 2500px;
        }
        @keyframes spin-slow {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1.05); }
          50% { opacity: 0.5; transform: scale(1.1); }
        }
        .animate-spin-slow {
          animation: spin-slow 30s linear infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 10s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}

export default Hero;
