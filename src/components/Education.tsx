
import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Award, Briefcase, Calendar, MapPin, ExternalLink } from "lucide-react";

interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  description: string;
  timePeriod: string;
  type: string;
  grade?: string;
  skills?: string[];
}

const educationData: EducationItem[] = [
  {
    degree: "B.Tech in Electronics and Telecommunication Engineering",
    institution: "Shri Guru Gobind Singhji Institute of Engineering and Technology",
    location: "Nanded",
    period: "Nov 2022 - May 2026",
    description: "Studying advanced electronics, signal processing, communication systems, and embedded system design with focus on practical applications and industry-relevant projects.",
    timePeriod: "4-year Engineering Degree",
    type: "education",
    grade: "Current CGPA: 7.0/10",
    skills: ["Circuit Design", "Signal Processing", "Embedded Systems", "Communication Networks"]
  },
  {
    degree: "HSC (Higher Secondary Certificate)",
    institution: "Shree Shivaji Junior College of Science",
    location: "Darwha",
    period: "Feb 2021 - Mar 2022",
    description: "Focused on Physics, Chemistry, Mathematics and related sciences with emphasis on analytical thinking and problem-solving.",
    timePeriod: "High School",
    type: "education",
    grade: "Percentage: 69.0%",
    skills: ["Physics", "Chemistry", "Mathematics", "Critical Thinking"]
  },
  {
    degree: "SSC (Secondary School Certificate)",
    institution: "Shree Shivaji High School",
    location: "Darwha",
    period: "Feb 2019 - Mar 2020",
    description: "Completed secondary education with a focus on science and mathematics, building strong foundational knowledge.",
    timePeriod: "Secondary School",
    type: "education",
    grade: "Percentage: 81.0%",
    skills: ["Science", "Mathematics", "English", "Foundation Studies"]
  },
];

const internshipData: EducationItem[] = [
 {
  degree: "Embedded System Internship",
  institution: "Acmegrade Pvt. Ltd.",
  location: "Remote",
  period: "May 2025 – Jul 2025",
  description: "Engineered and developed embedded system prototypes using C, C++, and RTOS for real-time industrial applications. Collaborated on hardware-software integration and documented system architecture, logic, and performance outcomes.",
  timePeriod: "2-month Internship",
  type: "professional",
  skills: ["Embedded Systems", "C", "C++", "RTOS", "Hardware-Software Integration", "Documentation"]
},

  {
    degree: "Artificial Intelligence Internship",
    institution: "Codec Technologies Pvt. Ltd.",
    location: "Remote",
    period: "May 2025 – Jun 2025",
    description: "Developed and tested ML models on telecom datasets using Python. Focused on supervised learning, preprocessing, evaluation, and accuracy improvements.",
    timePeriod: "1-month Internship",
    type: "professional",
    skills: ["Machine Learning", "Python", "Data Preprocessing", "Model Evaluation"]
  },
];

const professionalData: EducationItem[] = [
  {
    degree: "Supervised Machine Learning – Regression & Classification",
    institution: "Coursera (Stanford Online)",
    location: "",
    period: "Apr 6, 2025",
    description: "Mastered foundational ML techniques including regression, classification, and model evaluation through Stanford's comprehensive ML course.",
    timePeriod: "Certification",
    type: "professional",
    skills: ["Regression Analysis", "Classification", "Model Evaluation", "Python"]
  },
  {
    degree: "Hands-On Python ML with Real Projects",
    institution: "Udemy",
    location: "",
    period: "May 31, 2025",
    description: "Completed practical projects covering supervised and unsupervised learning, including real-world datasets and model deployment.",
    timePeriod: "Certification",
    type: "professional",
    skills: ["Python", "Real Projects", "Model Deployment", "Data Analysis"]
  },
  {
  degree: "Python for Beginners",
  institution: "Udemy",
  location: "",
  period: "2025",
  description: "Acquired foundational Python programming skills, including syntax, functions, data structures, and control flow.",
  timePeriod: "Certification",
  type: "professional",
  skills: ["Python", "Programming Fundamentals", "Problem Solving"]
},
  {
  degree: "Embedded Systems",
  institution: "Mindluster",
  location: "",
  period: "2025",
  description: "Learned microcontroller concepts, embedded C programming, debugging techniques, and firmware development for real-time applications.",
  timePeriod: "Certification",
  type: "professional",
  skills: ["Embedded Systems", "C Programming", "Firmware Development", "Hardware-Software Integration"]
},
  {
    degree: "Embedded for Beginners",
    institution: "NIELIT",
    location: "",
    period: "Jan 28, 2025",
    description: "Gained essential knowledge in embedded systems programming, microcontroller basics, and hardware interaction.",
    timePeriod: "Certification",
    type: "professional",
    skills: ["Embedded Programming", "Microcontrollers", "Hardware Interface", "C Programming"]
  },
  {
    degree: "Silicon Symphony VLSI Masterclass",
    institution: "HIEE Empowering Engineers pvt. Ltd.",
    location: "",
    period: "Dec 29, 2024",
    description: "Completed a five-day masterclass on chip architecture, RTL design, verification, and fundamentals of VLSI system implementation.",
    timePeriod: "Workshop",
    type: "professional",
    skills: ["Chip Architecture", "RTL Design", "VLSI Systems", "Design Verification"]
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-gradient-to-b from-black/30 to-black/10 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/5 via-transparent to-teal-900/5"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Education & <span className="bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">Development</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              My academic journey and professional development pathway, building expertise in electronics engineering and emerging technologies
            </p>
          </motion.div>

          {/* Academic Education Timeline */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative mb-20"
          >
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-400 via-purple-500 to-teal-400 rounded-full"></div>

            {educationData.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative mb-16 flex ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? "pr-12 text-right" : "pl-12"}`}>
                  <div className={`bg-gradient-to-br from-black/60 to-black/40 p-8 rounded-2xl shadow-2xl border border-purple-900/50 backdrop-blur-sm hover:border-purple-700/70 transition-all duration-300 group ${index % 2 === 0 ? "ml-auto" : "mr-auto"}`}>
                    <div className="flex items-center gap-2 mb-4 justify-end">
                      <GraduationCap className="text-purple-400" size={20} />
                      <span className="text-teal-400 text-sm font-medium">{item.period}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                      {item.degree}
                    </h3>
                    
                    <div className="flex items-center gap-2 text-purple-300 mb-2">
                      <MapPin size={16} />
                      <span>{item.institution}, {item.location}</span>
                    </div>
                    
                    {item.grade && (
                      <div className="text-teal-400 font-semibold mb-3">{item.grade}</div>
                    )}
                    
                    <p className="text-gray-400 mb-4">{item.description}</p>
                    
                    {item.skills && (
                      <div className="flex flex-wrap gap-2 justify-end">
                        {item.skills.map((skill, skillIndex) => (
                          <span key={skillIndex} className="text-xs px-3 py-1 bg-purple-900/30 text-purple-300 rounded-full border border-purple-700/50">
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-teal-500 border-4 border-black shadow-lg animate-pulse-glow"></div>
                </div>

                {/* Time period badge */}
                <div className={`w-1/2 ${index % 2 === 0 ? "pl-12" : "pr-12 text-right"}`}>
                  <div className="mt-8">
                    <span className="inline-block py-2 px-4 bg-gradient-to-r from-teal-900/40 to-purple-900/40 text-teal-300 rounded-full text-sm border border-teal-700/50 backdrop-blur-sm">
                      {item.timePeriod}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Internships Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="flex items-center justify-center gap-3 mb-12">
              <Briefcase className="text-purple-400" size={28} />
              <h3 className="text-3xl font-bold text-white">
                Internship <span className="text-purple-400">Experience</span>
              </h3>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {internshipData.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-gradient-to-br from-black/40 to-black/20 border border-purple-900/40 rounded-2xl p-8 shadow-xl hover:shadow-2xl hover:border-purple-700/60 transition-all duration-300 group backdrop-blur-sm"
                >
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-white text-xl font-bold group-hover:text-purple-300 transition-colors">
                      {item.degree}
                    </h4>
                    <div className="flex items-center gap-2 text-teal-400 text-sm">
                      <Calendar size={16} />
                      <span>{item.period}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 text-purple-300 text-sm mb-3">
                    <MapPin size={16} />
                    <span>{item.institution}, {item.location}</span>
                  </div>
                  
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">{item.description}</p>
                  
                  <div className="flex justify-between items-center">
                    <span className="inline-block text-xs text-gray-300 bg-teal-900/20 px-3 py-1 rounded-full border border-teal-700/50">
                      {item.timePeriod}
                    </span>
                    <ExternalLink className="text-gray-500 group-hover:text-purple-400 transition-colors" size={16} />
                  </div>
                  
                  {item.skills && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {item.skills.map((skill, skillIndex) => (
                        <span key={skillIndex} className="text-xs px-2 py-1 bg-purple-900/20 text-purple-300 rounded border border-purple-700/30">
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Professional Development Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center gap-3 mb-12">
              <Award className="text-purple-400" size={28} />
              <h3 className="text-3xl font-bold text-white">
                Professional <span className="text-purple-400">Development</span>
              </h3>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6"
            >
              {professionalData.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-gradient-to-br from-black/50 to-black/30 p-6 rounded-xl shadow-lg border border-purple-900/50 hover:border-purple-700/70 transition-all duration-300 group backdrop-blur-sm"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-4 h-4 rounded-full bg-gradient-to-r from-teal-400 to-purple-400 mt-1 flex-shrink-0 animate-pulse"></div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors mb-2">
                        {item.degree}
                      </h4>
                      <div className="flex items-center gap-2 text-sm text-teal-300 mb-1">
                        <Calendar size={14} />
                        <span>{item.period}</span>
                      </div>
                      <p className="text-sm text-purple-300 mb-2">
                        {item.institution}
                        {item.location && `, ${item.location}`}
                      </p>
                      <span className="text-xs text-gray-400 italic bg-black/30 px-2 py-1 rounded">
                        {item.timePeriod}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm pl-8 leading-relaxed">{item.description}</p>
                  
                  {item.skills && (
                    <div className="flex flex-wrap gap-1 mt-3 pl-8">
                      {item.skills.map((skill, skillIndex) => (
                        <span key={skillIndex} className="text-xs px-2 py-1 bg-purple-900/20 text-purple-300 rounded border border-purple-700/30">
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
