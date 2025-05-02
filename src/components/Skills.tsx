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
  { name: 'LTspice' },
  { name: 'KiCad' },
  { name: 'Oscilloscope' },
  { name: 'Function Generator' },
  { name: 'Git' },
  { name: 'VS Code' },
  { name: 'Proteus' },
];

const softSkills: string[] = [
  'Problem Solving',
  'Teamwork',
  'Communication',
  'Time Management',
  'Critical Thinking',
  'Adaptability',
];

const SkillBar: React.FC<{ skill: TechnicalSkill }> = ({ skill }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1">
        <span className="text-gray-300">{skill.name}</span>
        <span className="text-teal-400 text-sm">{skill.percentage}%</span>
      </div>
      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-purple-500 to-teal-400 rounded-full"
          style={{ width: `${skill.percentage}%` }}
        ></div>
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
                <h4 className="text-purple-400 mb-4">Programming Languages</h4>
                {programmingLanguages.map((skill, index) => (
                  <SkillBar key={index} skill={skill} />
                ))}
              </div>

              <div>
                <h4 className="text-purple-400 mb-4">Web Development</h4>
                {webDevelopment.map((skill, index) => (
                  <SkillBar key={index} skill={skill} />
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
                      className="px-4 py-2 bg-black/50 rounded-full border border-teal-900/50 text-teal-400 text-sm"
                    >
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-teal-400"></div>
                        {tool.name}
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
                      className="px-4 py-3 bg-purple-900/20 rounded-lg border border-purple-800/30 text-gray-300"
                    >
                      {skill}
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