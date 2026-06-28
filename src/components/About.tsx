import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-32 px-6 md:px-12 max-w-6xl mx-auto relative z-10">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-2">
          Discover <span className="text-violet-400">Who I Am.</span>
        </h2>
        <div className="h-1 w-24 bg-gradient-to-r from-violet-500 to-rose-500 rounded-full"></div>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        
        {/* Main Bio Span */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="md:col-span-2 bg-gradient-to-br from-zinc-900/90 to-violet-950/40 backdrop-blur-md rounded-3xl p-8 md:p-10 border border-zinc-800 hover:border-violet-500/50 transition-all duration-500 shadow-2xl group overflow-hidden relative"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-violet-500/20 rounded-full blur-[100px] -z-10 group-hover:bg-rose-500/20 transition-colors duration-700 pointer-events-none"></div>
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="text-violet-400">✨</span> Background
          </h3>
          <p className="text-zinc-300 text-lg md:text-xl leading-relaxed mb-6 font-light">
            I'm a Computer Science Engineering student obsessed with pushing the boundaries of what's possible with Artificial Intelligence and robust Backend Architecture. 
          </p>
          <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
            From developing AI-powered applications to architecting scalable web platforms, I thrive at the intersection of complex algorithms and beautiful user experiences using Java, Python, Django, and modern React.
          </p>
        </motion.div>

        {/* Stats Grid Area */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-zinc-900/50 backdrop-blur-md rounded-3xl p-8 border border-zinc-800/50 flex flex-col justify-center hover:border-rose-500/30 transition-all group"
        >
          <span className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-white to-zinc-500 mb-2">6+</span>
          <span className="text-rose-400 font-medium">Major Projects</span>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-zinc-900/50 backdrop-blur-md rounded-3xl p-8 border border-zinc-800/50 flex flex-col justify-center hover:border-violet-500/30 transition-all group"
        >
          <span className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-white to-zinc-500 mb-2">7.78</span>
          <span className="text-violet-400 font-medium">CGPA</span>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="md:col-span-2 bg-gradient-to-br from-violet-900/20 to-rose-900/20 backdrop-blur-md rounded-3xl p-8 border border-zinc-800/50 flex items-center justify-between group overflow-hidden relative"
        >
           <div className="absolute inset-0 bg-gradient-to-r from-violet-500/0 via-violet-500/10 to-rose-500/0 -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
           <div>
             <h3 className="text-2xl font-bold text-white mb-1">AI Focused Career</h3>
             <p className="text-zinc-400">Specializing in intelligent automation</p>
           </div>
           <div className="text-5xl text-white opacity-20 group-hover:opacity-100 transition-opacity">
              🚀
           </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
