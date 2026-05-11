import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = ['Approach', 'Artifacts', 'Laboratory', 'Journal', 'Contact'];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-8 flex justify-between items-center mix-blend-difference">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-2xl font-serif tracking-tighter"
      >
        LUMINA<span className="text-xs font-mono ml-2 opacity-50">// 001</span>
      </motion.div>

      <div className="hidden md:flex gap-12 font-mono text-[10px] uppercase tracking-[0.3em]">
        {menuItems.map((item, i) => (
          <motion.a 
            key={item}
            href={`#${item.toLowerCase()}`}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="hover:text-lumina-accent transition-colors relative group"
          >
            {item}
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-lumina-accent transition-all group-hover:w-full" />
          </motion.a>
        ))}
      </div>

      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-lumina-fg"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: '100vh' }}
          className="fixed inset-0 bg-lumina-bg z-40 flex flex-col items-center justify-center gap-8"
        >
          {menuItems.map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="text-4xl font-serif hover:italic"
            >
              {item}
            </a>
          ))}
        </motion.div>
      )}
    </nav>
  );
}
