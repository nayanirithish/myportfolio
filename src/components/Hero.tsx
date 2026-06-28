import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiArrowRight } from 'react-icons/fi';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen relative flex items-center pt-20 px-6 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/20 rounded-full blur-[120px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-rose-600/10 rounded-full blur-[150px] -z-10"></div>

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-zinc-900/50 border border-zinc-800 mb-8">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-rose-500"></span>
            </span>
            <span className="text-zinc-300 text-sm font-medium tracking-wide">Available for new opportunities</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4 leading-tight tracking-tight">
            Hi, I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-400 to-rose-400">
              Nayini Rithish
            </span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-medium text-zinc-400 mb-6">
            AI & Full Stack Developer
          </h2>
          
          <p className="text-zinc-400 text-lg max-w-xl mb-10 leading-relaxed">
            I craft intelligent, scalable digital experiences. Specializing in bridging the gap between cutting-edge Artificial Intelligence and robust backend systems.
          </p>
          
          <div className="flex flex-wrap gap-4 items-center">
            <a 
              href="#projects" 
              className="group flex items-center gap-2 bg-white text-zinc-950 px-8 py-4 rounded-full font-bold transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
            >
              View My Work
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="/resume.pdf" 
              target="_blank" 
              className="px-8 py-4 rounded-full font-bold text-white border border-zinc-700 hover:bg-zinc-800 transition-all hover:scale-105"
            >
              Resume
            </a>
          </div>

          <div className="flex gap-6 mt-12 text-zinc-400">
            <a href="https://github.com/nayanirithish" target="_blank" rel="noreferrer" className="hover:text-violet-400 transition-colors">
              <FiGithub size={24} />
            </a>
            <a href="https://linkedin.com/in/rithish-reddy-9089a22a2" target="_blank" rel="noreferrer" className="hover:text-violet-400 transition-colors">
              <FiLinkedin size={24} />
            </a>
          </div>
        </motion.div>

        {/* Right side abstract visual */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="hidden lg:flex justify-center relative"
        >
          <div className="relative w-96 h-96">
            <div className="absolute inset-0 bg-gradient-to-tr from-violet-500/30 to-rose-500/30 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute inset-10 border border-zinc-700/50 rounded-full animate-[spin_10s_linear_infinite]"></div>
            <div className="absolute inset-20 border border-zinc-600/30 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
            <div className="absolute inset-0 flex items-center justify-center">
               <div className="w-32 h-32 bg-gradient-to-br from-violet-500 to-rose-500 rounded-2xl rotate-12 opacity-80 mix-blend-screen shadow-[0_0_50px_rgba(139,92,246,0.5)]"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
