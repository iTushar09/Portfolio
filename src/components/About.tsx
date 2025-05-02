import React from 'react';
import { Check, Cpu } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-black/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="w-full md:w-1/2 order-2 md:order-1">
              <h2 className="text-3xl font-bold mb-6 text-white">
                About <span className="text-purple-400">Me</span>
              </h2>
              <p className="text-gray-300 mb-4">
                I am an aspiring Electronics Engineer currently pursuing a B.Tech in Electronics and Telecommunication Engineering at Shri Guru Gobind Singhji Institute of Engineering and Technology, Nanded.
              </p>
              <p className="text-gray-300 mb-4">
                My expertise includes electronic circuit design, PCB design, and microcontroller programming. I have hands-on experience with tools such as DMM, Oscilloscope, KiCad, MATLAB, Keil μVision, and Proteus.
              </p>
              <p className="text-gray-300 mb-6">
                I'm passionate about developing innovative electronic solutions and am eager to contribute to R&D projects while enhancing my technical expertise through practical challenges.
              </p>
              <p className="text-gray-300 mb-4">
                Outside of technology, I enjoy dance choreography, listening to music, and watching movies. I'm also committed to personal growth through reading both technical and non-technical books.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
                <div className="flex items-center gap-2">
                  <Check size={20} className="text-teal-400" />
                  <span className="text-gray-300">Circuit Design & Analysis</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check size={20} className="text-teal-400" />
                  <span className="text-gray-300">PCB Design & Prototyping</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check size={20} className="text-teal-400" />
                  <span className="text-gray-300">Microcontroller Programming</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check size={20} className="text-teal-400" />
                  <span className="text-gray-300">Test & Measurement Equipment</span>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 order-1 md:order-2">
              <div className="rounded-lg overflow-hidden border-4 border-purple-700/30 shadow-lg shadow-purple-500/20 relative">
                <div className="bg-gradient-to-r from-purple-900/60 to-teal-800/60 p-10 aspect-square flex items-center justify-center">
                  <div className="relative">
                    <div className="w-64 h-64 border-4 border-purple-400/30 rounded-lg"></div>
                    <div className="w-48 h-48 border-4 border-teal-400/30 rounded-lg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="w-32 h-32 border-4 border-purple-400/30 rounded-lg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/50 backdrop-blur-sm px-6 py-3 rounded-md text-center">
                      <p className="text-teal-400 text-xs uppercase tracking-wider">Electronics</p>
                      <Cpu size={36} className="text-purple-400 mx-auto my-2" />
                      <p className="text-white font-medium">Electronics Engineering</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;