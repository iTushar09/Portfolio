import React from "react";

interface Skill {
  name: string;
  percentage: number;
  icon: string;
  color: string;
  proficiency: string;
}

interface Tool {
  name: string;
  icon: string;
}

const programmingLanguages: Skill[] = [
  {
    name: "C",
    percentage: 90,
    icon: "⚡",
    color: "from-blue-500 to-blue-600",
    proficiency: "Advanced",
  },
  {
    name: "C++",
    percentage: 85,
    icon: "🔧",
    color: "from-purple-500 to-purple-600",
    proficiency: "Advanced",
  },
  {
    name: "Python",
    percentage: 80,
    icon: "🐍",
    color: "from-yellow-500 to-green-500",
    proficiency: "Advanced",
  },
  {
    name: "JavaScript",
    percentage: 70,
    icon: "🚀",
    color: "from-yellow-400 to-orange-500",
    proficiency: "Intermediate",
  },
  {
    name: "Assembly",
    percentage: 75,
    icon: "⚙️",
    color: "from-gray-500 to-gray-600",
    proficiency: "Intermediate",
  },
  {
    name: "MATLAB",
    percentage: 78,
    icon: "📊",
    color: "from-orange-500 to-red-500",
    proficiency: "Advanced",
  },
];

const webDevelopment: Skill[] = [
  {
    name: "HTML5",
    percentage: 85,
    icon: "🌐",
    color: "from-orange-500 to-red-500",
    proficiency: "Advanced",
  },
  {
    name: "CSS3",
    percentage: 80,
    icon: "🎨",
    color: "from-blue-500 to-purple-500",
    proficiency: "Advanced",
  },
  {
    name: "TypeScript",
    percentage: 68,
    icon: "📘",
    color: "from-blue-600 to-blue-700",
    proficiency: "Intermediate",
  },
  {
    name: "Bootstrap",
    percentage: 75,
    icon: "🅱️",
    color: "from-purple-600 to-indigo-600",
    proficiency: "Intermediate",
  },
  {
    name: "Tailwind CSS",
    percentage: 82,
    icon: "💨",
    color: "from-teal-400 to-cyan-500",
    proficiency: "Advanced",
  },
];

const tools: Tool[] = [
  { name: "Keil μVision5", icon: "🔬" },
  { name: "LTspice", icon: "⚡" },
  { name: "KiCad", icon: "🔌" },
  { name: "Proteus", icon: "🛠️" },
  { name: "Oscilloscope", icon: "📊" },
  { name: "Function Generator", icon: "🌊" },
  { name: "GitHub", icon: "🔗" },
  { name: "VS Code", icon: "💻" },
  { name: "Arduino IDE", icon: "🤖" },
];

const softSkills: string[] = [
  "Problem Solving",
  "Teamwork",
  "Communication",
  "Time Management",
  "Critical Thinking",
  "Adaptability",
  "Leadership",
  "Project Management",
];

const SkillCard: React.FC<{ skill: Skill; index: number }> = ({
  skill,
  index,
}) => {
  const getProficiencyStars = (percentage: number) => {
    const stars = Math.round(percentage / 20); // Convert percentage to 1-5 stars
    return "★".repeat(stars) + "☆".repeat(5 - stars);
  };

  return (
    <div className="group px-5 py-4 bg-gradient-to-r from-black/60 to-purple-900/20 rounded-xl border border-purple-500/30 text-purple-300 hover:border-purple-400/60 hover:from-black/80 hover:to-purple-900/40 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
      <div className="flex flex-col items-center gap-3">
        <div className="text-4xl group-hover:scale-110 transition-transform">
          {skill.icon}
        </div>
        <div className="text-center">
          <span className="font-medium text-sm block">{skill.name}</span>
          <div className="text-xs text-purple-400 mt-1">
            {getProficiencyStars(skill.percentage)}
          </div>
        </div>
      </div>
    </div>
  );
};

const Skills: React.FC = () => {
  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-b from-black/30 to-black/10 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Technical{" "}
            <span className="bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            My professional skill set and technological expertise
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Programming Languages with Star Rating */}
          <div className="mt-12 bg-gradient-to-br from-black/40 to-black/20 p-8 rounded-2xl border border-purple-900/30 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-8 justify-center">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-teal-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">💻</span>
              </div>
              <h3 className="text-2xl font-bold text-white">
                Programming Languages
              </h3>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {programmingLanguages.map((skill, index) => (
                <SkillCard key={index} skill={skill} index={index} />
              ))}
            </div>
          </div>

          {/* Web Development with Star Rating */}
          <div className="mt-12 bg-gradient-to-br from-black/40 to-black/20 p-8 rounded-2xl border border-teal-900/30 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-8 justify-center">
              <div className="w-10 h-10 bg-gradient-to-r from-teal-500 to-purple-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">🌐</span>
              </div>
              <h3 className="text-2xl font-bold text-white">Web Development</h3>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {webDevelopment.map((skill, index) => (
                <div
                  key={index}
                  className="group px-5 py-4 bg-gradient-to-r from-black/60 to-teal-900/20 rounded-xl border border-teal-500/30 text-teal-300 hover:border-teal-400/60 hover:from-black/80 hover:to-teal-900/40 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                >
                  <div className="flex flex-col items-center gap-3">
                    <div className="text-4xl group-hover:scale-110 transition-transform">
                      {skill.icon}
                    </div>
                    <div className="text-center">
                      <span className="font-medium text-sm block">
                        {skill.name}
                      </span>
                      <div className="text-xs text-teal-400 mt-1">
                        {"★".repeat(Math.round(skill.percentage / 20)) +
                          "☆".repeat(5 - Math.round(skill.percentage / 20))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Technologies */}
          <div className="mt-12 bg-gradient-to-br from-black/40 to-black/20 p-8 rounded-2xl border border-purple-900/30 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-8 justify-center">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-teal-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">🛠️</span>
              </div>
              <h3 className="text-2xl font-bold text-white">
                Tools & Technologies
              </h3>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {tools.map((tool, index) => (
                <div
                  key={index}
                  className="group px-5 py-4 bg-gradient-to-r from-black/60 to-cyan-900/20 rounded-xl border border-cyan-500/30 text-cyan-300 hover:border-cyan-400/60 hover:from-black/80 hover:to-cyan-900/40 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                >
                  <div className="flex items-center gap-3">
                    <div className="text-2xl group-hover:scale-110 transition-transform">
                      {tool.icon}
                    </div>
                    <span className="font-medium text-sm">{tool.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="mt-12 bg-gradient-to-br from-black/40 to-black/20 p-8 rounded-2xl border border-purple-900/30 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-8 justify-center">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">🧠</span>
              </div>
              <h3 className="text-2xl font-bold text-white">Soft Skills</h3>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {softSkills.map((skill, index) => (
                <div
                  key={index}
                  className="group px-5 py-4 bg-gradient-to-br from-purple-900/30 to-purple-800/20 rounded-xl border border-purple-500/20 text-gray-200 hover:border-purple-400/40 hover:from-purple-900/40 hover:to-purple-800/30 hover:text-white transition-all duration-300 transform hover:scale-105"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-purple-400 group-hover:animate-pulse"></div>
                    <span className="font-medium text-sm">{skill}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Summary */}
          <div className="mt-12 text-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 p-6 rounded-xl border border-purple-500/20">
                <div className="text-3xl font-bold text-purple-400 mb-2">
                  {programmingLanguages.length}
                </div>
                <div className="text-sm text-gray-400">
                  Programming Languages
                </div>
              </div>
              <div className="bg-gradient-to-br from-teal-900/30 to-teal-800/20 p-6 rounded-xl border border-teal-500/20">
                <div className="text-3xl font-bold text-teal-400 mb-2">
                  {webDevelopment.length}
                </div>
                <div className="text-sm text-gray-400">Web Technologies</div>
              </div>
              <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/20 p-6 rounded-xl border border-blue-500/20">
                <div className="text-3xl font-bold text-blue-400 mb-2">
                  {tools.length}
                </div>
                <div className="text-sm text-gray-400">Tools & Software</div>
              </div>
              <div className="bg-gradient-to-br from-pink-900/30 to-pink-800/20 p-6 rounded-xl border border-pink-500/20">
                <div className="text-3xl font-bold text-pink-400 mb-2">
                  {softSkills.length}
                </div>
                <div className="text-sm text-gray-400">Soft Skills</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
