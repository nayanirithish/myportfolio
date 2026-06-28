import { motion } from 'framer-motion';

const certifications = [
  {
    title: 'CS50: Introduction to Computer Science',
    issuer: 'Harvard University',
  },
  {
    title: 'Hackathon 2025 – Complaint Registration System',
    issuer: 'Participant / Winner',
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-24 px-6 md:px-12 max-w-5xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
          Certifications
        </h2>
        <div className="h-1 w-24 bg-gradient-to-r from-violet-500 to-rose-500 rounded-full mx-auto"></div>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-6">
        {certifications.map((cert, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="group relative bg-zinc-900/50 backdrop-blur-sm rounded-3xl p-8 flex flex-col justify-center min-h-[160px] max-w-sm w-full border border-zinc-800/50 hover:border-violet-500/50 transition-all duration-300 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-rose-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <h3 className="text-xl font-bold text-white mb-2 relative z-10 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-violet-400 group-hover:to-rose-400 transition-all">
              {cert.title}
            </h3>
            <p className="text-zinc-400 text-sm font-medium relative z-10">
              {cert.issuer}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
