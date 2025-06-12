import React from "react";

interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  description: string;
  timePeriod: string;
  type: string;
}

const educationData: EducationItem[] = [
  {
    degree: "B.Tech in Electronics and Telecommunication Engineering",
    institution:
      "Shri Guru Gobind Singhji Institute of Engineering and Technology",
    location: "Nanded",
    period: "Nov 2022 - May 2026",
    description:
      "Studying advanced electronics, signal processing, communication systems, and embedded system design.",
    timePeriod: "4-year Engineering Degree",
    type: "education",
  },
  {
    degree: "HSC (Higher Secondary Certificate)",
    institution: "Shree Shivaji Junior College of Science",
    location: "Darwha",
    period: "Feb 2021 - Mar 2022",
    description:
      "Focused on Physics, Chemistry, Mathematics and related sciences.",
    timePeriod: "High School",
    type: "education",
  },
  {
    degree: "SSC (Secondary School Certificate)",
    institution: "Shree Shivaji High School",
    location: "Darwha",
    period: "Feb 2019 - Mar 2020",
    description:
      "Completed secondary education with a focus on science and mathematics.",
    timePeriod: "Secondary School",
    type: "education",
  },
];
const internshipData: EducationItem[] = [
  {
    degree: "Digital Electronics & VLSI Internship",
    institution: "Codec Technologies Pvt. Ltd.",
    location: "Remote",
    period: "May 2025 – Jun 2025",
    description:
      "Simulated and verified digital logic circuits using VLSI design techniques. Gained hands-on experience with design optimization and verification tools.",
    timePeriod: "1-month Internship",
    type: "professional",
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
  },
];
const professionalData: EducationItem[] = [
  {
    degree: "Supervised Machine Learning – Regression & Classification",
    institution: "Coursera (Stanford Online)",
    location: "",
    period: "Apr 6, 2025",
    description:
      "Mastered foundational ML techniques including regression, classification, and model evaluation through Stanford’s ML course.",
    timePeriod: "Certification",
    type: "professional",
  },
  {
    degree: "Hands-On Python ML with Real Projects",
    institution: "Udemy",
    location: "",
    period: "May 31, 2025",
    description:
      "Completed practical projects covering supervised and unsupervised learning, including real-world datasets and model deployment.",
    timePeriod: "Certification",
    type: "professional",
  },

  {
    degree: "Embedded for Beginners",
    institution: "NIELIT",
    location: "",
    period: "Jan 28, 2025",
    description:
      "Gained essential knowledge in embedded systems programming, microcontroller basics, and hardware interaction.",
    timePeriod: "Certification",
    type: "professional",
  },
  {
    degree: "Silicon Symphony VLSI Masterclass",
    institution: "HIEE Empowering Engineers pvt. Ltd.",
    location: "",
    period: "Dec 29, 2024",
    description:
      "Completed a five-day masterclass on chip architecture, RTL design, verification, and fundamentals of VLSI system implementation.",
    timePeriod: "Workshop",
    type: "professional",
  },
];

const Education: React.FC = () => {
  return (
    <section
      id="education"
      className="py-20 bg-gradient-to-b from-black/30 to-black/10"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-white text-center">
            Education & <span className="text-purple-400">Development</span>
          </h2>
          <p className="text-gray-400 text-center mb-12">
            My academic journey and professional development
          </p>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-purple-400 to-teal-400"></div>

            {/* Education items */}
            {educationData.map((item, index) => (
              <div
                key={index}
                className={`relative mb-16 flex ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                <div
                  className={`w-1/2 ${
                    index % 2 === 0 ? "pr-12 text-right" : "pl-12"
                  }`}
                >
                  <div
                    className={`bg-black/40 p-6 rounded-lg shadow-lg border border-purple-900/50 ${
                      index % 2 === 0 ? "ml-auto" : "mr-auto"
                    }`}
                  >
                    <div className="text-right text-teal-400 text-sm mb-1">
                      {item.period}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-1">
                      {item.degree}
                    </h3>
                    <div className="text-purple-300 mb-3">
                      {item.institution}, {item.location}
                    </div>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                </div>

                {/* Center dot */}
                <div className="absolute top-6 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-4 h-4 rounded-full bg-purple-500 border-2 border-white"></div>
                </div>

                {/* Time period on the other side */}
                <div
                  className={`w-1/2 ${
                    index % 2 === 0 ? "pl-12" : "pr-12 text-right"
                  }`}
                >
                  <div className="mt-6">
                    <span className="text-teal-300 inline-block py-1 px-3 bg-teal-900/20 rounded-full text-sm">
                      {item.timePeriod}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <h3 className="text-2xl font-bold mb-8 mt-16 text-white text-center">
            Internships <span className="text-purple-400">Experience</span>
          </h3>

          <div className="space-y-6">
            {internshipData.map((item, index) => (
              <div
                key={index}
                className="bg-black/30 border border-purple-900/40 rounded-lg p-6 shadow-lg"
              >
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-white text-lg font-semibold">
                    {item.degree}
                  </h4>
                  <span className="text-teal-300 text-sm">{item.period}</span>
                </div>
                <p className="text-purple-300 text-sm mb-1">
                  {item.institution}
                  {item.location && `, ${item.location}`}
                </p>
                <p className="text-gray-400 text-sm mb-2">{item.description}</p>
                <span className="inline-block text-xs text-gray-300 bg-teal-900/20 px-2 py-1 rounded">
                  {item.timePeriod}
                </span>
              </div>
            ))}
          </div>

          <h3 className="text-2xl font-bold mb-8 mt-16 text-white text-center">
            Professional <span className="text-purple-400">Development</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {professionalData.map((item, index) => (
              <div
                key={index}
                className="bg-black/40 p-6 rounded-lg shadow-lg border border-purple-900/50"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-3 h-3 rounded-full bg-teal-400 mt-1"></div>
                  <div>
                    <h4 className="text-lg font-bold text-white">
                      {item.degree}
                    </h4>
                    <p className="text-sm text-teal-300">{item.period}</p>
                    <p className="text-sm text-purple-300">
                      {item.institution}
                      {item.location && `, ${item.location}`}
                    </p>
                    <p className="text-xs text-gray-400 italic mt-1">
                      {item.timePeriod}
                    </p>
                  </div>
                </div>
                <p className="text-gray-400 pl-6">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
