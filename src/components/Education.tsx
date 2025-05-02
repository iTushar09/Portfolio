import React from 'react';

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
    degree: 'B.Tech in Electronics and Telecommunication Engineering',
    institution: 'Shri Guru Gobind Singhji Institute of Engineering and Technology',
    location: 'Nanded',
    period: 'Nov 2022 - May 2026',
    description: 'Studying advanced electronics, signal processing, communication systems, and embedded system design.',
    timePeriod: '4-year Engineering Degree',
    type: 'education'
  },
  {
    degree: 'HSC (Higher Secondary Certificate)',
    institution: 'Shree Shivaji Junior College of Science',
    location: 'Darwha',
    period: 'Feb 2021 - Mar 2022',
    description: 'Focused on Physics, Chemistry, Mathematics and related sciences.',
    timePeriod: 'High School',
    type: 'education'
  },
  {
    degree: 'SSC (Secondary School Certificate)',
    institution: 'Shree Shivaji High School',
    location: 'Darwha',
    period: 'Feb 2019 - Mar 2020',
    description: 'Completed secondary education with a focus on science and mathematics.',
    timePeriod: 'Secondary School',
    type: 'education'
  }
];

const professionalData: EducationItem[] = [
  {
    degree: 'PCB Design Workshop',
    institution: '',
    location: '',
    period: '',
    description: 'Attended a comprehensive workshop on PCB design principles, layout optimization, and manufacturing considerations.',
    timePeriod: '',
    type: 'professional'
  },
  {
    degree: '"Silicon Symphony VLSI" Master Class',
    institution: '',
    location: '',
    period: '',
    description: 'Completed an intensive master class on VLSI design principles, covering chip architecture, verification, and implementation.',
    timePeriod: '',
    type: 'professional'
  }
];

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-gradient-to-b from-black/30 to-black/10">
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
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                  <div className={`bg-black/40 p-6 rounded-lg shadow-lg border border-purple-900/50 ${
                    index % 2 === 0 ? 'ml-auto' : 'mr-auto'
                  }`}>
                    <div className="text-right text-teal-400 text-sm mb-1">{item.period}</div>
                    <h3 className="text-xl font-bold text-white mb-1">{item.degree}</h3>
                    <div className="text-purple-300 mb-3">{item.institution}, {item.location}</div>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                </div>

                {/* Center dot */}
                <div className="absolute top-6 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-4 h-4 rounded-full bg-purple-500 border-2 border-white"></div>
                </div>

                {/* Time period on the other side */}
                <div className={`w-1/2 ${index % 2 === 0 ? 'pl-12' : 'pr-12 text-right'}`}>
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
            Professional <span className="text-purple-400">Development</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {professionalData.map((item, index) => (
              <div key={index} className="bg-black/40 p-6 rounded-lg shadow-lg border border-purple-900/50">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 rounded-full bg-teal-400"></div>
                  <h4 className="text-lg font-bold text-white">{item.degree}</h4>
                </div>
                <p className="text-gray-400 ml-6">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;