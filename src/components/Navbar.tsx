import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 flex justify-center pt-6 px-4`}
    >
      <div 
        className={`flex justify-between items-center px-8 py-3 rounded-full transition-all duration-500 ${
          scrolled 
            ? 'bg-zinc-900/80 backdrop-blur-md border border-zinc-800/50 shadow-xl shadow-black/50 w-full max-w-4xl' 
            : 'bg-transparent border border-transparent w-full max-w-7xl'
        }`}
      >
        <a href="#" className="text-xl font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-rose-400">
          NR.
        </a>
        
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-zinc-400 hover:text-white transition-colors text-sm font-medium tracking-wide relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-violet-400 to-rose-400 transition-all group-hover:w-full"></span>
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
