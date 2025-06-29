import React from "react";
import { motion } from "framer-motion";
import { Check, Cpu } from "lucide-react";

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-black/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-10">
            {/* Text Content */}
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="w-full md:w-1/2 order-2 md:order-1"
            >
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
                tools such as DMM, Oscilloscope, KiCad, MATLAB, Keil µVision,
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
            </motion.article>

            {/* Image Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="w-full md:w-1/2 order-1 md:order-2"
            >
              <div className="relative">
                {/* Floating elements */}
                <div className="absolute -top-4 -left-4 w-20 h-20 bg-purple-500/20 rounded-full blur-xl animate-pulse"></div>
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-teal-500/20 rounded-full blur-lg animate-pulse delay-1000"></div>
                
                <div className="rounded-2xl overflow-hidden border border-purple-500/20 shadow-2xl shadow-purple-500/10 relative backdrop-blur-sm bg-gradient-to-br from-purple-900/20 to-teal-900/20">
                  <div className="p-8 md:p-12">
                    <div className="relative">
                      {/* Profile image with enhanced styling */}
                      <div className="relative w-64 h-64 mx-auto mb-6">
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-teal-500 rounded-2xl blur-sm opacity-60 animate-pulse"></div>
                        <img
                          src="https://pbs.twimg.com/profile_images/1921307943510675457/pyAsvuFZ_400x400.jpg"
                          alt="Tushar Chaudhri"
                          className="relative w-full h-full object-cover rounded-2xl border-2 border-purple-400/50 shadow-xl z-10"
                        />
                        <div className="absolute -inset-2 bg-gradient-to-r from-purple-600/20 to-teal-600/20 rounded-2xl blur-md"></div>
                      </div>
                      
                      {/* Decorative elements */}
                      <div className="absolute top-4 right-4 w-3 h-3 bg-teal-400 rounded-full animate-ping"></div>
                      <div className="absolute bottom-4 left-4 w-2 h-2 bg-purple-400 rounded-full animate-ping delay-500"></div>
                      
                      {/* Tech stack icons */}
                      <div className="flex justify-center gap-4 mt-6">
                        <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center">
                          <span className="text-xs text-purple-300 font-bold">C</span>
                        </div>
                        <div className="w-8 h-8 bg-teal-500/20 rounded-lg flex items-center justify-center">
                          <span className="text-xs text-teal-300 font-bold">Py</span>
                        </div>
                        <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center">
                          <span className="text-xs text-purple-300 font-bold">PCB</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
