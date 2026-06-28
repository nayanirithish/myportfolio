import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiMapPin } from 'react-icons/fi';
import { MdEmail } from 'react-icons/md';

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 md:px-12 max-w-4xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-zinc-900/40 backdrop-blur-xl rounded-[3rem] p-8 md:p-16 flex flex-col items-center text-center shadow-2xl border border-zinc-800/50 relative overflow-hidden"
      >
        {/* Glow effects */}
        <div className="absolute -top-32 -left-32 w-64 h-64 bg-violet-600/30 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-rose-600/20 rounded-full blur-[100px] pointer-events-none"></div>

        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight relative z-10">
          Let's Connect
        </h2>
        
        <p className="text-zinc-400 text-lg mb-10 max-w-2xl leading-relaxed relative z-10">
          I'm actively seeking internship opportunities, AI projects, and full-stack development roles. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>

        <div className="flex flex-col sm:flex-row gap-6 mb-12 relative z-10">
          <div className="flex items-center gap-3 px-6 py-3 bg-zinc-950/50 rounded-full border border-zinc-800">
            <MdEmail className="text-violet-400" size={20} />
            <span className="text-zinc-300 font-medium text-sm">nayanirithish@gmail.com</span>
          </div>
          <div className="flex items-center gap-3 px-6 py-3 bg-zinc-950/50 rounded-full border border-zinc-800">
            <FiMapPin className="text-rose-400" size={20} />
            <span className="text-zinc-300 font-medium text-sm">Warangal, India</span>
          </div>
        </div>

        <div className="flex gap-8 text-white items-center mb-12 relative z-10">
          <a href="mailto:nayanirithish@gmail.com" className="p-4 bg-zinc-800/50 rounded-full hover:bg-violet-500 hover:text-white transition-all duration-300 hover:scale-110">
            <FiMail size={24} />
          </a>
          <a href="https://github.com/nayanirithish" target="_blank" rel="noreferrer" className="p-4 bg-zinc-800/50 rounded-full hover:bg-zinc-700 hover:text-white transition-all duration-300 hover:scale-110">
            <FiGithub size={24} />
          </a>
          <a href="https://linkedin.com/in/rithish-reddy-9089a22a2" target="_blank" rel="noreferrer" className="p-4 bg-zinc-800/50 rounded-full hover:bg-[#0A66C2] hover:text-white transition-all duration-300 hover:scale-110">
            <FiLinkedin size={24} />
          </a>
        </div>

        <motion.a 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="/resume.pdf" 
          target="_blank"
          className="relative inline-flex h-14 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
        >
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-zinc-950 px-8 py-1 text-sm font-bold text-white backdrop-blur-3xl transition-colors hover:bg-zinc-900">
            Download Resume
          </span>
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Contact;
