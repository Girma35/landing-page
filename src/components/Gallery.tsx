import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

const ARTIFACTS = [
  {
    id: '01',
    title: 'VOID DYNAMICS',
    category: 'OPTICAL RESEARCH',
    img: 'https://picsum.photos/seed/void1/800/1200',
    span: 'col-span-1 row-span-2'
  },
  {
    id: '02',
    title: 'KINETIC ECHO',
    category: 'MOTION DESIGN',
    img: 'https://picsum.photos/seed/echo2/1200/800',
    span: 'col-span-1 row-span-1 md:mt-24'
  },
  {
    id: '03',
    title: 'NEURAL TEXTURE',
    category: 'MACHINE LEARNING',
    img: 'https://picsum.photos/seed/neural3/800/800',
    span: 'col-span-1 row-span-1'
  },
  {
    id: '04',
    title: 'SYNTHETIC SOUL',
    category: 'AV EXPERIENCE',
    img: 'https://picsum.photos/seed/soul4/1200/1200',
    span: 'col-span-2 md:col-span-1 row-span-1'
  }
];

export default function Gallery() {
  return (
    <section id="artifacts" className="py-32 px-6">
      <div className="flex justify-between items-end mb-24">
        <div>
          <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-lumina-accent block mb-4">Archives</span>
          <h2 className="text-6xl md:text-8xl font-serif tracking-tighter">THE ARTIFACTS</h2>
        </div>
        <p className="max-w-xs font-mono text-[10px] uppercase tracking-widest opacity-40 hidden md:block">
          Recent explorations into the nature of digital matter and light perception.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {ARTIFACTS.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.8 }}
            className={`group relative overflow-hidden bg-zinc-900 ${item.span}`}
          >
            <div className="absolute inset-0 bg-lumina-bg/40 opacity-0 group-hover:opacity-100 transition-all duration-500 z-10 flex flex-col justify-between p-8">
              <div className="flex justify-between items-start">
                 <span className="font-mono text-xs opacity-60 underline decoration-lumina-accent underline-offset-4">{item.category}</span>
                 <ArrowUpRight className="text-lumina-fg opacity-60" />
              </div>
              <div>
                <span className="font-mono text-[10px] opacity-40 mb-2 block">{item.id}</span>
                <h3 className="text-3xl font-serif italic tracking-tighter">{item.title}</h3>
              </div>
            </div>
            
            <motion.img 
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 1.5, ease: "circOut" }}
              src={item.img} 
              alt={item.title}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
