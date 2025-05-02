import React, { useState } from "react";
import { ChevronRight } from "lucide-react";

interface Tag {
  name: string;
}

interface Project {
  title: string;
  description: string;
  image: string;
  category: string;
  tags: Tag[];
}

const projects: Project[] = [
  {
    title: "Customer Churn Prediction",
    description:
      "Developed a predictive model using Python, Pandas, Scikit-learn, and XGBoost to forecast customer churn in a telecom dataset.",
    image:
      "https://miro.medium.com/v2/resize:fit:1358/1*twyCFLpb2mkWOZR4IUoBKA.jpeg",
    category: "Machine Learning",
    tags: [
      { name: "Python" },
      { name: "Pandas" },
      { name: "Scikit-learn" },
      { name: "XGBoost" },
      { name: "Streamlit" },
    ],
  },
  {
    title: "Arduino-based Digital Ohmmeter",
    description:
      "Created a digital ohmmeter using Arduino, LCD, potentiometer, and breadboard to measure resistance with improved design accuracy.",
    image:
      "https://www.homemade-circuits.com/wp-content/uploads/2016/11/LCD_bb-2.png",
    category: "Electronics",
    tags: [
      { name: "Arduino" },
      { name: "Embedded C" },
      { name: "Circuit Design" },
      { name: "LCD" },
    ],
  },
  {
    title: "7-Segment Display with LPC2148",
    description:
      "Designed and programmed a 7-segment display system to show even numbers using the LPC2148 microcontroller and Embedded C.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUUOAKgaApqBFtDJf0yD7WN1gRF_o2YPx8rA&s",
    category: "Microcontroller",
    tags: [
      { name: "LPC2148" },
      { name: "Embedded C" },
      { name: "Proteus" },
      { name: "GPIO" },
    ],
  },
];

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    "all",
    ...new Set(projects.map((project) => project.category)),
  ];

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-b from-black/10 to-black/40"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 text-white text-center">
          <span className="text-purple-400">Projects</span>
        </h2>
        <p className="text-gray-400 text-center mb-8">
          Explore my recent work and technical projects
        </p>

        <div className="flex justify-center mb-10">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm ${
                  activeCategory === category
                    ? "bg-purple-600 text-white"
                    : "bg-black/30 text-gray-300 hover:bg-black/50"
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="bg-black/50 rounded-xl overflow-hidden shadow-lg border border-purple-900/30 hover:border-purple-600/50 transition-colors group"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="mb-3">
                  <span className="text-xs text-teal-400 bg-teal-900/20 px-2 py-1 rounded">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs bg-purple-900/30 text-purple-300 px-2 py-1 rounded"
                    >
                      {tag.name}
                    </span>
                  ))}
                </div>

                <a
                  href="#"
                  className="inline-flex items-center text-teal-400 hover:text-teal-300 transition-colors"
                >
                  View details <ChevronRight size={16} className="ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
