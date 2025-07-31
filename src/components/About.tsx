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
              <p className="text-gray-300 mb-4 text-justify">
                I am an aspiring Electronics Engineer currently pursuing a
                B.Tech in Electronics and Telecommunication Engineering at Shri
                Guru Gobind Singhji Institute of Engineering and Technology,
                Nanded.
              </p>
              <p className="text-gray-300 mb-4 text-justify">
                My expertise includes electronic circuit design, PCB design, and
                microcontroller programming. I have hands-on experience using
                tools such as KiCad, MATLAB, Keil uVision, Proteus, LTspice,
                oscilloscopes, digital multimeters (DMM) and function
                generators. I’m proficient in C, C++, and Python, and have
                developed several embedded and machine learning projects—ranging
                from an Arduino-based digital ohmmeter to a telecom customer
                churn prediction model.
              </p>
              <p className="text-gray-300 mb-6 text-justify">
                My passion is in bridging hardware and software to develop
                practical, innovative solutions. I’ve contributed to projects
                ranging from Arduino-based instruments to telecom-focused ML
                models, and I’m particularly eager to contribute to R&D
                environments that challenge me to grow as an engineer.
              </p>
              <p className="text-gray-300 mb-4 text-justify">
                Outside of my technical pursuits, I enjoy dance choreography,
                music, movies, and continually expanding my perspective through
                both technical and general reading.
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
                  <span className="text-gray-300 text-justify">
                    Embedded Systems Development (ARM, AVR)
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Check size={20} className="text-teal-400" />
                  <span className="text-gray-300">
                    Machine Learning with Python
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
                  <span className="text-gray-300 text-justify">
                    Technical Documentation & Git Version Control
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Check size={20} className="text-teal-400" />
                  <span className="text-gray-300">
                    Test & Measurement Equipment
                  </span>
                </div>
              </div>
            </motion.article>

            {/* Image Section */}
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="w-full md:w-1/2 order-1 md:order-2 flex items-center justify-center"
            >
              <div className="relative w-full h-full max-w-[500px] max-h-[800px]">
                {/* Floating elements */}
                <div className="absolute -top-4 -left-4 w-20 h-20 bg-purple-500/20 rounded-full blur-xl animate-pulse"></div>
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-teal-500/20 rounded-full blur-lg animate-pulse delay-1000"></div>

                <div className="rounded-2xl overflow-hidden border border-purple-500/20 shadow-2xl shadow-purple-500/10 relative backdrop-blur-sm bg-gradient-to-br from-purple-900/20 to-teal-900/20 h-full">
                  <div className="p-8 md:p-12 h-full flex items-center justify-center">
                    <div className="relative w-72 h-72 md:w-80 md:h-80">
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-teal-500 rounded-2xl blur-sm opacity-60 animate-pulse"></div>
                      <img
                        src="https://scontent.fnag1-1.fna.fbcdn.net/v/t39.30808-6/516705418_1180901060476397_2355744708003375092_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=RvaOQIy07VEQ7kNvwE8D5Qo&_nc_oc=Adk7f3OmbpKPAHfvkkxqAFjLV882X-AJ29pVJqU0JP6FHmK-1RMBe1UT2izqznhEeyg&_nc_zt=23&_nc_ht=scontent.fnag1-1.fna&_nc_gid=n1xdrUOBzShMvRXDPXjh4g&oh=00_AfRhiRpUxpyv-gHvFTE1WzwUSnmIMPsqbpa-5wA6CVv2Xw&oe=68916821"
                        alt="Tushar Chaudhri"
                        className="relative w-full h-full object-cover rounded-2xl border-2 border-purple-400/50 shadow-xl z-10"
                      />
                      <div className="absolute -inset-2 bg-gradient-to-r from-purple-600/20 to-teal-600/20 rounded-2xl blur-md"></div>
                    </div>

                    {/* Decorative elements */}
                    <div className="absolute top-4 right-4 w-3 h-3 bg-teal-400 rounded-full animate-ping"></div>
                    <div className="absolute bottom-4 left-4 w-2 h-2 bg-purple-400 rounded-full animate-ping delay-500"></div>
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
