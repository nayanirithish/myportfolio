import { motion, type Variants } from 'framer-motion';
import { FaJava, FaPython, FaGithub, FaReact } from 'react-icons/fa';
import { SiDjango, SiMysql, SiOpenai } from 'react-icons/si';
import { IoLogoJavascript } from 'react-icons/io5';

const techSkills = [
  { name: 'Python', icon: <FaPython size={40} />, color: 'hover:text-blue-400 hover:border-blue-500/50' },
  { name: 'Java', icon: <FaJava size={40} />, color: 'hover:text-red-400 hover:border-red-500/50' },
  { name: 'React', icon: <FaReact size={40} />, color: 'hover:text-cyan-400 hover:border-cyan-500/50' },
  { name: 'Django', icon: <SiDjango size={40} />, color: 'hover:text-green-500 hover:border-green-500/50' },
  { name: 'JavaScript', icon: <IoLogoJavascript size={40} />, color: 'hover:text-yellow-400 hover:border-yellow-500/50' },
  { name: 'MySQL', icon: <SiMysql size={40} />, color: 'hover:text-blue-300 hover:border-blue-400/50' },
  { name: 'OpenAI API', icon: <SiOpenai size={40} />, color: 'hover:text-emerald-400 hover:border-emerald-500/50' },
  { name: 'Git & GitHub', icon: <FaGithub size={40} />, color: 'hover:text-white hover:border-white/50' },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
};

const TechStack = () => {
  return (
    <section id="skills" className="py-24 px-6 md:px-12 max-w-6xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
          Tech Stack
        </h2>
        <p className="text-zinc-400 max-w-2xl mx-auto">
          The tools and technologies I use to build scalable, intelligent, and modern web applications.
        </p>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
      >
        {techSkills.map((skill, index) => (
          <motion.div 
            key={index}
            variants={itemVariants}
            className={`bg-zinc-900/40 backdrop-blur-sm rounded-2xl p-8 flex flex-col items-center justify-center border border-zinc-800/50 transition-all duration-300 group ${skill.color}`}
          >
            <div className="text-zinc-500 mb-4 transition-colors duration-300 group-hover:text-inherit">
              {skill.icon}
            </div>
            <h4 className="text-zinc-300 font-medium text-sm md:text-base group-hover:text-white transition-colors">{skill.name}</h4>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default TechStack;
