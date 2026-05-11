import { motion } from 'motion/react';

export default function TechLab() {
  const stats = [
    { label: 'Compute Power', value: '1.2 PB/s' },
    { label: 'Visual Fidelity', value: '16K RT' },
    { label: 'Neural Nodes', value: '4,092' },
    { label: 'Uptime Ratio', value: '99.98%' },
  ];

  return (
    <section id="laboratory" className="py-32 px-6 border-y border-lumina-fg/10 bg-zinc-900/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <div className="relative rounded-2xl p-1 bg-gradient-to-tr from-lumina-accent/20 to-transparent">
          <div className="bg-lumina-bg rounded-xl overflow-hidden aspect-video border border-lumina-fg/5 relative group">
            <div className="absolute inset-0 bg-noise pointer-events-none" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-1/2 h-[1px] bg-lumina-accent/20 animate-pulse absolute rotate-45" />
              <div className="w-1/2 h-[1px] bg-lumina-accent/20 animate-pulse absolute -rotate-45" />
              <img 
                src="https://picsum.photos/seed/lab_ui/800/450?grayscale" 
                alt="Laboratory Display"
                className="w-full h-full object-cover opacity-30 mix-blend-screen"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 font-mono text-[9px] opacity-40 uppercase tracking-widest leading-loose">
                System_Diagnostics.exe<br />
                Kernel: Ready<br />
                NeuralLink: Secured
              </div>
            </div>
          </div>
        </div>

        <div>
          <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-lumina-brutal block mb-4">Infrastructure</span>
          <h2 className="text-6xl font-serif tracking-tighter mb-8 italic">WHERE ART MEETS <br />THE MACHINE.</h2>
          <p className="text-lg opacity-60 leading-relaxed mb-12">
            Our laboratory is equipped with proprietary neural rendering engines and custom-built optical hardware. 
            We don't just use tools; we forge the environment for digital transcendence.
          </p>

          <div className="grid grid-cols-2 gap-8">
            {stats.map((stat, i) => (
              <motion.div 
                key={stat.label}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="border-l border-lumina-accent pl-6 py-2"
              >
                <div className="text-2xl font-mono tracking-tighter">{stat.value}</div>
                <div className="font-mono text-[9px] uppercase tracking-widest opacity-40 mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
