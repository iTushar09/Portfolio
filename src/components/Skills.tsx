import React from 'react';

interface TechnicalSkill {
  name: string;
  percentage: number;
}

interface Tool {
  name: string;
}

const programmingLanguages: TechnicalSkill[] = [
  { name: 'C', percentage: 85 },
  { name: 'C++', percentage: 85 },
  { name: 'Python', percentage: 80 },
  { name: 'Assembly', percentage: 75 },
];

const webDevelopment: TechnicalSkill[] = [
  { name: 'HTML', percentage: 70 },
  { name: 'CSS', percentage: 70 },
  { name: 'Bootstrap', percentage: 65 },
  { name: 'JavaScript', percentage: 60 },
];

const tools: Tool[] = [
  { name: 'MATLAB' },
  { name: 'Keil μVision5' },
  { name: 'Oscilloscope' },
  { name: 'Git' },
  { name: 'Function Generator' },
  
  { name: 'VS Code' },
  { name: 'Proteus' },
  { name: 'LTspice' },
  { name: 'KiCad' },
];

const softSkills: string[] = [
  'Problem Solving',
  'Teamwork',
  'Communication',
  'Time Management',
  'Critical Thinking',
  'Adaptability',
];

const SkillBar: React.FC<{ skill: TechnicalSkill; index: number }> = ({ skill, index }) => {
  return (
    <div className="mb-6 group">
      <div className="flex justify-between items-center mb-2">
        <span className="text-gray-200 font-medium group-hover:text-white transition-colors">{skill.name}</span>
        <span className="text-teal-400 text-sm font-semibold">{skill.percentage}%</span>
      </div>
      <div className="h-3 bg-gray-800/50 rounded-full overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-700 rounded-full"></div>
        <div 
          className="h-full bg-gradient-to-r from-purple-500 via-purple-400 to-teal-400 rounded-full relative overflow-hidden transition-all duration-1000 ease-out"
          style={{ 
            width: `${skill.percentage}%`,
            animationDelay: `${index * 0.1}s`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[20deg] w-6 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-black/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 text-white text-center">
          <span className="text-purple-400">Skills</span>
        </h2>
        <p className="text-gray-400 text-center mb-12">
          My professional skill set and capabilities
        </p>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-xl font-semibold mb-6 text-white">
                Technical Skills
              </h3>

              <div className="mb-8">
                <h4 className="text-purple-400 mb-6 font-semibold">Programming Languages</h4>
                {programmingLanguages.map((skill, index) => (
                  <SkillBar key={index} skill={skill} index={index} />
                ))}
              </div>

              <div>
                <h4 className="text-purple-400 mb-6 font-semibold">Web Development</h4>
                {webDevelopment.map((skill, index) => (
                  <SkillBar key={index} skill={skill} index={index + programmingLanguages.length} />
                ))}
              </div>
            </div>

            <div>
              <div className="mb-10">
                <h3 className="text-xl font-semibold mb-6 text-white">
                  Tools & Technologies
                </h3>
                <div className="flex flex-wrap gap-3">
                  {tools.map((tool, index) => (
                    <div 
                      key={index} 
                      className="group px-5 py-3 bg-gradient-to-r from-black/60 to-teal-900/20 rounded-full border border-teal-500/30 text-teal-300 text-sm hover:border-teal-400/60 hover:from-black/80 hover:to-teal-900/40 transition-all duration-300 transform hover:scale-105"
                    >
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-teal-400 group-hover:animate-pulse"></div>
                        <span className="font-medium">{tool.name}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-6 text-white">
                  Soft Skills
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {softSkills.map((skill, index) => (
                    <div 
                      key={index} 
                      className="group px-5 py-4 bg-gradient-to-br from-purple-900/30 to-purple-800/20 rounded-xl border border-purple-500/20 text-gray-200 hover:border-purple-400/40 hover:from-purple-900/40 hover:to-purple-800/30 hover:text-white transition-all duration-300 transform hover:scale-105"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-purple-400 group-hover:animate-pulse"></div>
                        <span className="font-medium">{skill}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;