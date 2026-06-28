import { motion } from 'framer-motion';

const experiences = [
  {
    role: 'AI & Full Stack Developer',
    company: 'Oryol Tech Pvt. Ltd.',
    date: 'Jun 2026 – Present',
    description: 'Working on AI-integrated full-stack web solutions using modern frameworks and cloud technologies. Contributing to end-to-end product development including backend APIs, frontend interfaces, and AI feature integration.',
    color: 'from-violet-500 to-rose-500'
  },
  {
    role: 'AI Developer (Official Project)',
    company: 'Vaagdevi College of Engineering',
    date: 'May 2026',
    description: 'Developed an AI-powered chatbot for institutional queries using Django and OpenAI APIs. Designed backend workflows and REST API integrations for automated response handling.',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    role: 'Creative Tech Lead',
    company: 'Kalaakshi',
    date: 'Apr 2026 – Jun 2026',
    description: 'Contributed to the development and deployment of a live event management platform. Assisted in visual designing and user experience aspects aligned with Kalaakshi\'s vision.',
    color: 'from-emerald-500 to-teal-500'
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 md:px-12 max-w-4xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
          Experience
        </h2>
        <div className="h-1 w-24 bg-gradient-to-r from-violet-500 to-rose-500 rounded-full mx-auto"></div>
      </motion.div>

      {/* Left-aligned vertical timeline for better UX and readability */}
      <div className="relative border-l-2 border-zinc-800/80 ml-4 md:ml-12">
        {experiences.map((exp, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="relative pl-10 md:pl-16 mb-16 last:mb-0"
          >
            {/* Timeline Dot */}
            <div className={`absolute top-1 -left-[9px] w-4 h-4 rounded-full bg-gradient-to-br ${exp.color} ring-[6px] ring-zinc-950 shadow-lg shadow-${exp.color.split(' ')[0].replace('from-', '')}/50`}></div>

            <div className="bg-zinc-900/60 backdrop-blur-md rounded-2xl p-8 border border-zinc-800/50 hover:border-zinc-600 transition-colors duration-300 group shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-violet-400 group-hover:to-rose-400 transition-all duration-300">
                {exp.role}
              </h3>
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <h4 className="text-zinc-300 font-medium text-lg">{exp.company}</h4>
                <p className="text-rose-400 text-sm font-bold uppercase tracking-wider mt-2 md:mt-0">{exp.date}</p>
              </div>
              <p className="text-zinc-400 text-base leading-relaxed">
                {exp.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
