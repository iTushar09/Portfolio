
import React from 'react';
import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { href: 'https://github.com/iTushar09', icon: Github, label: 'GitHub' },
    { href: 'https://linkedin.com/in/itusharchaudhari', icon: Linkedin, label: 'LinkedIn' },
    { href: 'mailto:tusharchaudhari1809@gmail.com', icon: Mail, label: 'Email' },
  ];

  return (
    <footer className="relative bg-gradient-to-t from-black via-purple-900/10 to-transparent">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/5 via-transparent to-teal-900/5"></div>
      
      <div className="relative container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Main footer content */}
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
              Tushar Chaudhri
            </h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Electronics & Telecommunication Engineering Student passionate about innovation, 
              PCB design, and embedded systems development.
            </p>
            
            {/* Social links */}
            <div className="flex justify-center gap-6 mb-8">
              {socialLinks.map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3 bg-gradient-to-r from-purple-900/30 to-teal-900/30 rounded-full hover:from-purple-800/40 hover:to-teal-800/40 transition-all duration-300 transform hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon size={20} className="text-gray-400 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-purple-500/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm flex items-center gap-2">
              Made with <Heart size={16} className="text-red-400 animate-pulse" /> by Tushar Chaudhri
            </p>
            
            <div className="flex items-center gap-4">
              <p className="text-gray-500 text-sm">
                © {new Date().getFullYear()} All rights reserved.
              </p>
              
              {/* Scroll to top button */}
              <button
                onClick={scrollToTop}
                className="p-2 bg-gradient-to-r from-purple-600 to-teal-500 rounded-full hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-110"
                aria-label="Scroll to top"
              >
                <ArrowUp size={16} className="text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
