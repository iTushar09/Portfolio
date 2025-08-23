import React from "react";
import { CircuitBoard, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import GradientText from "./GradientText";

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Content */}
      <div className="relative z-10 text-center px-6 md:px-12 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-6 flex justify-center"
        >
          <CircuitBoard className="w-16 h-16 md:w-20 md:h-20 text-purple-400 animate-pulse" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
        >
          <GradientText
            colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
            animationSpeed={3}
            showBorder={false}
            className="custom-gradient-text"
          >
            Tushar Chaudhri
          </GradientText>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-6 max-w-4xl mx-auto leading-relaxed"
        >
          Electronics & Telecommunication Engineering Student | Embedded Systems & AI/ML Enthusiast | Python & C++ Developer
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="text-lg md:text-xl text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed"
        >
          Passionate about bridging hardware and software to create innovative solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.6 }}
          className="flex items-center justify-center gap-2 mb-10 text-sm text-gray-500"
        >
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span>Available for new opportunities</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <button 
            onClick={() => {
              const projectsSection = document.getElementById('projects');
              projectsSection?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group bg-gradient-to-r from-purple-600 to-teal-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:from-purple-700 hover:to-teal-700 hover:shadow-2xl hover:scale-105 transform"
          >
            View My Work
            <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
          </button>
          
          <a
            href="/TusharChaudhariResume.pdf"
            download="TusharChaudhariResume.pdf"
            className="group border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:bg-purple-400 hover:text-white hover:shadow-xl transform hover:scale-105 flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download Resume
          </a>
          
          <button 
            onClick={() => {
              const contactSection = document.getElementById('contact');
              contactSection?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="text-gray-400 hover:text-white px-6 py-4 text-lg font-medium transition-all duration-300 hover:scale-105 transform"
          >
            Get In Touch
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <ChevronDown className="w-8 h-8 text-gray-400 animate-bounce" />
      </motion.div>
    </section>
  );
};

export default Hero;