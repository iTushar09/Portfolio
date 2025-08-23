import React from "react";
import { motion } from "framer-motion";
import ProfileCard from "./ProfileCard";
import { Check } from "lucide-react";

const skills = [
  { label: "Circuit Design & Analysis", justify: false },
  { label: "Embedded Systems Development (ARM, AVR)", justify: true },
  { label: "Machine Learning with Python", justify: false },
  { label: "Microcontroller Programming", justify: false },
  { label: "Technical Documentation & Git Version Control", justify: true },
  { label: "Test & Measurement Equipment", justify: false },
];

const SkillItem: React.FC<{ label: string; justify?: boolean }> = ({
  label,
  justify = false,
}) => (
  <div className={`flex items-center gap-2 ${justify ? "text-justify" : ""}`}>
    <Check size={20} className="text-teal-400" />
    <span className="text-gray-300">{label}</span>
  </div>
);

const About: React.FC = () => {
  const fadeUpProps = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
    viewport: { once: true },
  };

  return (
    <section id="about" className="py-20 bg-black/30">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Text Content */}
          <motion.article
            {...fadeUpProps}
            className="w-full md:w-1/2 order-2 md:order-1"
          >
            <h2 className="text-3xl font-bold mb-6 text-white">
              About <span className="text-purple-400">Me</span>
            </h2>

            <p className="text-gray-300 mb-4 text-justify">
              I am Tushar Chaudhari, an Electronics and Telecommunication Engineering student pursuing my B.Tech at Shri Guru Gobind Singhji Institute of Engineering and Technology, Nanded, with a current CGPA of 7.1/10.
            </p>
            <p className="text-gray-300 mb-4 text-justify">
              My skills span embedded systems, AI, and machine learning with hands-on experience in C, C++, Python, circuit design, and microcontroller programming. I have completed internships in embedded systems and artificial intelligence, contributing to real-time industrial applications and telecom user behavior predictive models.
            </p>
            <p className="text-gray-300 mb-6 text-justify">
              Some noteworthy projects I worked on include a <strong>Smart Home Automation System</strong> with ESP32 and sensor integration, an <strong>IoT-Based Bidirectional Visitor Counter</strong> using Arduino and IR sensors, and a <strong>Telecom Customer Churn Prediction model</strong> built with machine learning techniques. I am passionate about bridging hardware and software for innovative and practical solutions.
            </p>
            <p className="text-gray-300 mb-4 text-justify">
              Beyond technology, I engage in dance choreography, music, and reading to keep my creativity and perspective broad.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
              {skills.map((skill, i) => (
                <SkillItem
                  key={i}
                  label={skill.label}
                  justify={skill.justify}
                />
              ))}
            </div>
          </motion.article>

          {/* 3D Profile Card Section */}
          <motion.div
            {...{
              initial: { opacity: 0, x: -80 },
              whileInView: { opacity: 1, x: 0 },
              transition: { duration: 0.8, ease: "easeOut" },
              viewport: { once: true },
            }}
            className="w-full md:w-1/2 order-1 md:order-2 flex items-center justify-center"
          >
            <div className="relative w-full h-full max-w-[500px] max-h-[800px] flex items-center justify-center">
              {/* Floating decorative circles */}
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-purple-500/20 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-teal-500/20 rounded-full blur-lg animate-pulse delay-1000"></div>

              <ProfileCard
                name="Tushar Chaudhari"
                title="Electronics Engineer"
                handle="Tusharchaudhari"
                status="Available for work"
                contactText="Contact Me"
                avatarUrl="/image.png"
                showUserInfo={true}
                enableTilt={true}
                enableMobileTilt={false}
                onContactClick={() => {
                  const contactSection = document.getElementById("contact");
                  contactSection?.scrollIntoView({ behavior: "smooth" });
                }}
              />

              {/* Decorative pings */}
              <div className="absolute top-4 right-4 w-3 h-3 bg-teal-400 rounded-full animate-ping"></div>
              <div className="absolute bottom-4 left-4 w-2 h-2 bg-purple-400 rounded-full animate-ping delay-500"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
