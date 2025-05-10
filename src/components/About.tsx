import React from "react";
import { Check, Cpu } from "lucide-react";

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
                I am an aspiring Electronics Engineer currently pursuing a
                B.Tech in Electronics and Telecommunication Engineering at Shri
                Guru Gobind Singhji Institute of Engineering and Technology,
                Nanded.
              </p>
              <p className="text-gray-300 mb-4">
                My expertise includes electronic circuit design, PCB design, and
                microcontroller programming. I have hands-on experience with
                tools such as DMM, Oscilloscope, KiCad, MATLAB, Keil μVision,
                and Proteus.
              </p>
              <p className="text-gray-300 mb-6">
                I'm passionate about developing innovative electronic solutions
                and am eager to contribute to R&D projects while enhancing my
                technical expertise through practical challenges.
              </p>
              <p className="text-gray-300 mb-4">
                Outside of technology, I enjoy dance choreography, listening to
                music, and watching movies. I'm also committed to personal
                growth through reading both technical and non-technical books.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
                <div className="flex items-center gap-2">
                  <Check size={20} className="text-teal-400" />
                  <span className="text-gray-300">
                    Circuit Design & Analysis
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Check size={20} className="text-teal-400" />
                  <span className="text-gray-300">
                    PCB Design & Prototyping
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Check size={20} className="text-teal-400" />
                  <span className="text-gray-300">
                    Microcontroller Programming
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Check size={20} className="text-teal-400" />
                  <span className="text-gray-300">
                    Test & Measurement Equipment
                  </span>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 order-1 md:order-2">
              <div className="rounded-lg overflow-hidden border-4 border-purple-700/30 shadow-lg shadow-purple-500/30 relative">
                <div className="bg-gradient-to-r from-purple-900/60 to-teal-800/60 p-10 aspect-square flex items-center justify-center">
                  <div className="relative w-full h-full max-w-[34rem] max-h-[34rem] flex items-center justify-center">
                    {/* Outer decorative borders */}
                    <div className="absolute inset-0 border-4 border-purple-400/30 rounded-lg"></div>
                    <div className="absolute inset-4 border-4 border-teal-400/30 rounded-lg"></div>
                    <div className="absolute inset-8 border-4 border-purple-400/30 rounded-lg"></div>

                    {/* Content box with image and text */}
                    <div className="absolute inset-12 bg-black/50 backdrop-blur-sm px-4 py-4 rounded-lg flex flex-col items-center justify-center text-center">
                      <img
                        src="/mm.png"
                        className="w-45 h-45 object-cover rounded-full border-2 border-teal-400 shadow-lg mb-3"
                      />
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
