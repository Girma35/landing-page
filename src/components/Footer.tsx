import { motion } from 'motion/react';
import { Mail, Instagram, Twitter, Compass } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="py-32 px-6 bg-lumina-bg text-lumina-fg overflow-hidden relative">
      <div className="bg-noise absolute inset-0 z-0" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-[12vw] font-serif tracking-tighter leading-none mb-8 italic selection:bg-lumina-brutal"
          >
            SAY HELLO
          </motion.h2>
          <div className="flex justify-center gap-12 items-center">
             <a href="mailto:hello@lumina.lab" className="font-mono text-sm tracking-widest border-b border-lumina-fg/20 hover:border-lumina-accent transition-colors pb-1">
               HELLO@LUMINA.LAB
             </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-24 border-t border-lumina-fg/10">
          <div className="space-y-6">
            <div className="text-2xl font-serif tracking-tight">LUMINA</div>
            <p className="text-xs font-mono opacity-40 leading-relaxed uppercase tracking-widest">
              Digital Artifact Lab — Tokyo / London<br />
              All rights Reserved © 2026
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <span className="font-mono text-[10px] uppercase tracking-widest opacity-30">Social Experiments</span>
            <div className="flex gap-6">
              <Instagram size={18} className="opacity-60 hover:opacity-100 cursor-pointer transition-opacity" />
              <Twitter size={18} className="opacity-60 hover:opacity-100 cursor-pointer transition-opacity" />
              <Mail size={18} className="opacity-60 hover:opacity-100 cursor-pointer transition-opacity" />
              <Compass size={18} className="opacity-60 hover:opacity-100 cursor-pointer transition-opacity" />
            </div>
          </div>

          <div className="flex flex-col items-end">
            <span className="font-mono text-[10px] uppercase tracking-widest opacity-30 mb-4">Transmission</span>
            <div className="relative w-full max-w-xs">
              <input 
                type="text" 
                placeholder="YOUR EMAIL"
                className="w-full bg-transparent border-b border-lumina-fg/20 font-mono text-xs pb-2 outline-none focus:border-lumina-accent transition-colors"
                id="email_input"
              />
              <button className="absolute right-0 top-0 font-mono text-[10px] text-lumina-accent hover:text-lumina-fg transition-colors">
                SEND
              </button>
            </div>
          </div>
        </div>
      </div>

       {/* Massive Watermark */}
       <div className="absolute -bottom-24 -left-12 text-[30vw] font-serif font-black opacity-[0.02] pointer-events-none select-none">
        ARTIFACT
      </div>
    </footer>
  );
}
