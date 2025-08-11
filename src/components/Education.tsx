import React from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Award,
  Briefcase,
  Calendar,
  MapPin,
  ExternalLink,
} from "lucide-react";

// ---------------------------
// Types
// ---------------------------
interface EducationItem {
  degree: string;
  institution: string;
  location?: string;
  period: string;
  description: string;
  timePeriod: string;
  type: "education" | "professional";
  grade?: string;
  skills?: string[];
  link?: string;
}

// ---------------------------
// Data Arrays
// ---------------------------
const educationData: EducationItem[] = [
  {
    degree: "B.Tech in Electronics and Telecommunication Engineering",
    institution:
      "Shri Guru Gobind Singhji Institute of Engineering and Technology",
    location: "Nanded",
    period: "Nov 2022 - May 2026",
    description:
      "Studying advanced electronics, signal processing, communication systems, and embedded system design with focus on practical applications and industry-relevant projects.",
    timePeriod: "4-year Engineering Degree",
    type: "education",
    grade: "Current CGPA: 7.0/10",
    skills: [
      "Circuit Design",
      "Signal Processing",
      "Embedded Systems",
      "Communication Networks",
    ],
  },
  {
    degree: "HSC (Higher Secondary Certificate)",
    institution: "Shree Shivaji Junior College of Science",
    location: "Darwha",
    period: "Feb 2021 - Mar 2022",
    description:
      "Focused on Physics, Chemistry, Mathematics and related sciences with emphasis on analytical thinking and problem-solving.",
    timePeriod: "High School",
    type: "education",
    grade: "Percentage: 69.0%",
    skills: ["Physics", "Chemistry", "Mathematics", "Critical Thinking"],
  },
  {
    degree: "SSC (Secondary School Certificate)",
    institution: "Shree Shivaji High School",
    location: "Darwha",
    period: "Feb 2019 - Mar 2020",
    description:
      "Completed secondary education with a focus on science and mathematics, building strong foundational knowledge.",
    timePeriod: "Secondary School",
    type: "education",
    grade: "Percentage: 81.0%",
    skills: ["Science", "Mathematics", "English", "Foundation Studies"],
  },
];

const internshipData: EducationItem[] = [
  {
    degree: "Embedded System Internship",
    institution: "Acmegrade Pvt. Ltd.",
    location: "Remote",
    period: "May 2025 – Jul 2025",
    description:
      "Engineered and developed embedded system prototypes using C, C++, and RTOS for real-time industrial applications. Collaborated on hardware-software integration and documented system architecture, logic, and performance outcomes.",
    timePeriod: "2-month Internship",
    type: "professional",
    skills: [
      "Embedded Systems",
      "C",
      "C++",
      "RTOS",
      "Hardware-Software Integration",
      "Documentation",
    ],
  },
  {
    degree: "Artificial Intelligence Internship",
    institution: "Codec Technologies Pvt. Ltd.",
    location: "Remote",
    period: "May 2025 – Jun 2025",
    description:
      "Developed and tested ML models on telecom datasets using Python. Focused on supervised learning, preprocessing, evaluation, and accuracy improvements.",
    timePeriod: "1-month Internship",
    type: "professional",
    skills: [
      "Machine Learning",
      "Python",
      "Data Preprocessing",
      "Model Evaluation",
    ],
  },
];

const professionalData: EducationItem[] = [
  {
    degree: "Supervised Machine Learning – Regression & Classification",
    institution: "Coursera (Stanford Online)",
    period: "Apr 6, 2025",
    description:
      "Mastered foundational ML techniques including regression, classification, and model evaluation.",
    timePeriod: "Certification",
    type: "professional",
    skills: ["Regression Analysis", "Classification", "Model Evaluation", "Python"],
  },
  {
    degree: "Hands-On Python ML with Real Projects",
    institution: "Udemy",
    period: "May 31, 2025",
    description:
      "Practical projects covering supervised and unsupervised learning, including real-world datasets and deployment.",
    timePeriod: "Certification",
    type: "professional",
    skills: ["Python", "Real Projects", "Model Deployment", "Data Analysis"],
  },
  // ... (rest removed for brevity)
];

// ---------------------------
// Animation Variants
// ---------------------------
const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// ---------------------------
// Reusable Components
// ---------------------------
const TimelineItem: React.FC<{ item: EducationItem; index: number }> = ({
  item,
  index,
}) => {
  const isEven = index % 2 === 0;
  return (
    <motion.div
      variants={fadeUpVariants}
      className={`relative mb-16 flex ${isEven ? "flex-row" : "flex-row-reverse"}`}
    >
      {/* Left card */}
      <div className={`w-1/2 ${isEven ? "pr-12 text-right" : "pl-12"}`}>
        <div className="bg-gradient-to-br from-black/60 to-black/40 p-8 rounded-2xl shadow-2xl border border-purple-900/50 backdrop-blur-sm hover:border-purple-700/70 transition-all duration-300 group">
          <div className="flex items-center gap-2 mb-4 justify-end">
            <GraduationCap className="text-purple-400" size={20} />
            <span className="text-teal-400 text-sm font-medium">{item.period}</span>
          </div>

          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300">
            {item.degree}
          </h3>

          {item.location && (
            <div className="flex items-center gap-2 text-purple-300 mb-2 justify-end">
              <MapPin size={16} />
              <span>{item.institution}, {item.location}</span>
            </div>
          )}

          {item.grade && (
            <div className="text-teal-400 font-semibold mb-3">{item.grade}</div>
          )}

          <p className="text-gray-400 mb-4">{item.description}</p>

          {item.skills && (
            <div className="flex flex-wrap gap-2 justify-end">
              {item.skills.map((skill, i) => (
                <span
                  key={i}
                  className="text-xs px-3 py-1 bg-purple-900/30 text-purple-300 rounded-full border border-purple-700/50"
                >
                  {skill}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Center Dot */}
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-teal-500 border-4 border-black shadow-lg animate-pulse"></div>
      </div>

      {/* Time period */}
      <div className={`w-1/2 ${isEven ? "pl-12" : "pr-12 text-right"}`}>
        <div className="mt-8">
          <span className="inline-block py-2 px-4 bg-gradient-to-r from-teal-900/40 to-purple-900/40 text-teal-300 rounded-full text-sm border border-teal-700/50 backdrop-blur-sm">
            {item.timePeriod}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

// ---------------------------
// Main Component
// ---------------------------
const Education: React.FC = () => {
  return (
    <section
      id="education"
      className="py-20 bg-gradient-to-b from-black/30 to-black/10 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/5 via-transparent to-teal-900/5"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10 max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Education &{" "}
            <span className="bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
              Development
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            My academic journey and professional development in electronics engineering and emerging technologies.
          </p>
        </motion.div>

        {/* Education Timeline */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
          className="relative mb-20"
        >
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-400 via-purple-500 to-teal-400 rounded-full"></div>
          {educationData.map((item, i) => (
            <TimelineItem key={i} item={item} index={i} />
          ))}
        </motion.div>

        {/* Internship Section */}
        {/* Can extract to reusable grid component */}
        {/* Professional Section */}
      </div>
    </section>
  );
};

export default Education;
