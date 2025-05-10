import React from "react";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  CircuitBoard,
} from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black/80 border-t border-purple-900/30 py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-6 md:mb-0">
            <CircuitBoard size={24} className="text-purple-400 mr-2" />
            <span className="text-white font-semibold text-lg">
              Tusharfolio
            </span>
          </div>

          <div className="flex space-x-4 mb-6 md:mb-0">
            <a
              href="https://github.com/iTushar09"
              className="w-10 h-10 rounded-full bg-purple-900/30 flex items-center justify-center text-white hover:bg-purple-700 transition-colors"
              aria-label="Github"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/itusharchaudhari"
              className="w-10 h-10 rounded-full bg-purple-900/30 flex items-center justify-center text-white hover:bg-purple-700 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:tusharchaudhari1809@gmail.com"
              className="w-10 h-10 rounded-full bg-purple-900/30 flex items-center justify-center text-white hover:bg-purple-700 transition-colors"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-purple-900/30 flex items-center justify-center text-white hover:bg-purple-700 transition-colors"
              aria-label="Website"
            >
              <ExternalLink size={18} />
            </a>
          </div>

          <div className="text-gray-400 text-sm">
            &copy; {currentYear} Tushar Chaudhari. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
