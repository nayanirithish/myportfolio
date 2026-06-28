import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="py-8 text-center text-slate-500 font-mono text-sm border-t border-slate-800">
      <div className="flex justify-center gap-6 mb-4 md:hidden">
        <a href="https://github.com/nayanirithish" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors">
          <FiGithub size={20} />
        </a>
        <a href="https://linkedin.com/in/rithish-reddy-9089a22a2" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors">
          <FiLinkedin size={20} />
        </a>
        <a href="mailto:nayanirithish@gmail.com" className="hover:text-cyan-400 transition-colors">
          <FiMail size={20} />
        </a>
      </div>
      <p className="hover:text-cyan-400 transition-colors cursor-pointer">
        Designed & Built by Nayini Rithish
      </p>
    </footer>
  );
};

export default Footer;
