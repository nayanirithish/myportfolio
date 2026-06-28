import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const projects = [
  {
    title: 'HawkEye AI',
    description: 'AI-powered system that detects and tracks missing vehicles through highway and traffic CCTV cameras. Integrated real-time video analysis and vehicle recognition.',
    tech: ['React', 'AI', 'SQLite'],
    github: 'https://github.com/nayanirithish/hawkeye-ai',
    live: '',
  },
  {
    title: 'Captain Bro',
    description: 'React-based intelligent productivity app handling complex user workflows through AI automation. Integrated backend services and AI capabilities.',
    tech: ['React', 'AI'],
    github: 'https://github.com/nayanirithish/captain-bro',
    live: '',
  },
  {
    title: 'College Chatbot Assistant',
    description: 'Developed an AI-powered chatbot for institutional queries using OpenAI APIs. Built backend workflows and REST API integrations for automated responses.',
    tech: ['Python', 'Django', 'OpenAI'],
    github: 'https://github.com/nayanirithish/college-chatbot',
    live: '',
  },
  {
    title: 'Kalaakshi Live Event',
    description: 'Developed and deployed a live event management platform with responsive frontend design. Implemented visual designs for registration and event management.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/nayanirithish/kalaakshi',
    live: 'https://www.kalaakshi.com',
  },
  {
    title: 'School ERP',
    description: 'Developing a comprehensive ERP system to digitize school administrative and academic operations. Building modules for student records and attendance.',
    tech: ['React', 'Full Stack'],
    github: 'https://github.com/nayanirithish/school-management-system',
    live: '',
  },
  {
    title: 'Oryol Technologies',
    description: 'Designed and developed the official company website for Oryol Technologies with a modern, responsive UI. Built complete frontend and backend integrations.',
    tech: ['React', 'Full Stack'],
    github: 'https://github.com/nayanirithish/oryol-technologies-pvt-ltd',
    live: '',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
          Featured Work
        </h2>
        <div className="h-1 w-24 bg-gradient-to-r from-violet-500 to-rose-500 rounded-full mx-auto"></div>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="group relative bg-zinc-900/30 backdrop-blur-xl border border-zinc-800/50 rounded-3xl p-8 flex flex-col h-full overflow-hidden hover:-translate-y-2 transition-transform duration-300"
          >
            {/* Glowing orb effect on hover */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-violet-500/20 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="flex justify-between items-center mb-6 relative z-10">
              <div className="p-3 bg-zinc-800/50 rounded-xl text-violet-400 group-hover:bg-violet-500/10 transition-colors">
                <FiGithub size={24} />
              </div>
              <div className="flex gap-4 text-zinc-500">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                    <FiGithub size={20} />
                  </a>
                )}
                {project.live && (
                  <a href={project.live} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                    <FiExternalLink size={20} />
                  </a>
                )}
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-violet-300 transition-colors relative z-10">
              {project.title}
            </h3>
            
            <p className="text-zinc-400 text-sm leading-relaxed mb-8 flex-grow relative z-10">
              {project.description}
            </p>
            
            <ul className="flex flex-wrap gap-2 mt-auto relative z-10">
              {project.tech.map((tech, i) => (
                <li key={i} className="text-xs font-medium px-3 py-1 bg-zinc-800/50 text-zinc-300 rounded-full">
                  {tech}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
