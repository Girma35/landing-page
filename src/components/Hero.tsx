import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative h-screen flex flex-col justify-center px-6 overflow-hidden">
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div 
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.4 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="w-full h-full grayscale hover:grayscale-0 transition-all duration-700 brightness-50"
        >
          <img 
            src="https://picsum.photos/seed/lumina_hero/1920/1080?grayscale&blur=2" 
            alt="Abstract Hero"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-lumina-bg/20 via-transparent to-lumina-bg" />
      </div>

      <div className="relative z-10 max-w-6xl w-full">
        <motion.div
           initial={{ opacity: 0, y: 100 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-lumina-accent mb-4 block">
            Digital Exhibition — Summer 2026
          </span>
          <h1 className="text-[14vw] md:text-[10vw] leading-[0.85] font-serif tracking-tighter mb-8 italic">
            DEFINING THE <br />
            <span className="not-italic opacity-30">— </span> 
            NEW SPECTRUM
          </h1>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-12 mt-12 items-start">
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="max-w-md text-sm md:text-base leading-relaxed opacity-60 font-sans"
          >
            We are a creative laboratory at the intersection of technical precision and artistic intuition. 
            Designing experiences that transcend the digital divide.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, type: "spring" }}
            className="group cursor-pointer relative"
          >
            <div className="w-32 h-32 rounded-full border border-lumina-fg/20 flex items-center justify-center transition-all group-hover:border-lumina-accent group-hover:scale-110">
              <span className="font-mono text-[10px] uppercase tracking-widest text-center px-4 leading-tight group-hover:text-lumina-accent">
                Explore <br /> Lab
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-12 left-6 font-mono text-[10px] opacity-30 uppercase tracking-[0.3em]"
      >
        Scroll to discover ↓
      </motion.div>
    </section>
  );
}
