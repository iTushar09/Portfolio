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
  link?: string;
  DemoApp?: string;
}

const projects: Project[] = [
  {
    title: "Customer Churn Prediction",
    description:
      "Developed a predictive model using Python, Pandas, Scikit-learn, and XGBoost to forecast customer churn in a telecom dataset.",
    image: "https://miro.medium.com/v2/resize:fit:1358/1*twyCFLpb2mkWOZR4IUoBKA.jpeg",
    category: "Machine Learning",
    tags: [
      { name: "Python" },
      { name: "Pandas" },
      { name: "Scikit-learn" },
      { name: "XGBoost" },
      { name: "Streamlit" },
    ],
    link: "https://github.com/iTushar09/Customer-Churn-Prediction-App.git",
    DemoApp: "https://itushar09-customer-churn-prediction-app-app1-ly6bml.streamlit.app/",
  },
  {
    title: "Arduino-based Digital Ohmmeter",
    description:
      "Created a digital ohmmeter using Arduino, LCD, potentiometer, and breadboard to measure resistance with improved design accuracy.",
    image: "https://github.com/iTushar09/Arduino-based-Digital-Ohmmeter/raw/main/Circuit%20View.png",
    category: "Electronics & Microcontroller",
    tags: [
      { name: "Arduino" },
      { name: "Embedded C" },
      { name: "Circuit Design" },
      { name: "LCD" },
    ],
    link: "https://github.com/iTushar09/Arduino-based-Digital-Ohmmeter",
  },
  {
    title: "7-Segment Display with LPC2148",
    description:
      "Designed and programmed a 7-segment display system to show even numbers using the LPC2148 microcontroller and Embedded C.",
    image: "https://as1.ftcdn.net/v2/jpg/05/23/78/66/1000_F_523786670_YN08MJKNnVcCInIWAu633CZPO1baErAK.jpg",
    category: "Electronics & Microcontroller",
    tags: [
      { name: "LPC2148" },
      { name: "Embedded C" },
      { name: "Proteus" },
      { name: "GPIO" },
    ],
  },
  {
    title: "🐦 Twitter Sentiment Analysis App",
    description:
      "Analyze the emotional tone of tweets with a lightweight web app. Features real-time sentiment detection, confidence scores, interactive charts, and mobile-friendly design using HTML, CSS, JavaScript, and Chart.js.",
    image: "https://imgs.search.brave.com/6dAdbMFGWBsoATStg51aGajLVQrlfeU3pUs41p1nayY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZGlnaXRhbHZpZHlh/LmNvbS9ibG9nL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE4LzEw/L1RXSVRURVItU0VO/VElNRU5ULUFOQUxZ/U0lTLnBuZw",
    category: "Web App",
    tags: [
      { name: "JavaScript" },
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "Chart.js" },
      { name: "Sentiment Analysis" },
    ],
    link: "https://github.com/iTushar09/Twitter-Sentiment-Analysis-App.git",
    DemoApp: "https://twitter-sentiment-analysis-app.vercel.app/",
  },
  {
    title: "India Air Quality Checker",
    description:
      "Lightweight Flask app to check real-time Air Quality Index (AQI) across India using OpenWeatherMap API.",
    image: "https://as1.ftcdn.net/v2/jpg/08/73/97/98/1000_F_873979815_dz2X3r4ugnlHzNnlXgORu6IIbesk6I64.jpg",
    category: "Web App",
    tags: [
      { name: "Python" },
      { name: "Flask" },
      { name: "HTML5" },
      { name: "API" },
    ],
    link: "https://github.com/iTushar09/India-Air-Quality-Checker.git",
  },
  {
    title: "🧰 Easy PDF Handling App",
    description:
      "Streamlit app for PDF tasks: convert, split, merge, extract, encrypt, decrypt, and edit metadata — all in browser.",
    image: "https://imgs.search.brave.com/MZTMzWmj-hKU0xS_6sh3ShCJ1LNAnT9CSBUXwwy3y_c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wZGZn/dXJ1LmNvbS9zdGF0/aWMvbG9hZGluZy1j/b252ZXJzaW9uLnN2/Zw",
    category: "Web App",
    tags: [
      { name: "Python" },
      { name: "Streamlit" },
      { name: "PDF" },
      { name: "PyMuPDF" },
      { name: "PyPDF2" },
    ],
    link: "https://github.com/iTushar09/Easy-PDF-Handling-Tools.git",
    DemoApp: "https://easy-pdf-handling-tools-by-tusharchaudhari.streamlit.app/",
  },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    "all",
    ...Array.from(new Set(projects.map((project) => project.category))),
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

        {/* Category Filter */}
        <div className="flex justify-center mb-10">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(category)}
                aria-pressed={activeCategory === category}
                className={`px-4 py-2 rounded-full text-sm font-medium capitalize transition-colors duration-300 ${
                  activeCategory === category
                    ? "bg-purple-600 text-white"
                    : "bg-black/30 text-gray-300 hover:bg-purple-500/40"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards */}
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="bg-black/50 rounded-xl overflow-hidden shadow-lg border border-purple-900/30 hover:border-purple-600/50 transition-colors group transform hover:scale-[1.02] duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  onError={(e) => {
                    e.currentTarget.src = "/fallback.jpg"; // fallback image
                  }}
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
                <p className="text-gray-400 mb-4 text-sm">{project.description}</p>

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

                <div className="flex flex-wrap gap-4">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-teal-400 hover:text-teal-300 transition-colors"
                    >
                      View Code <ChevronRight size={16} className="ml-1" />
                    </a>
                  )}
                  {project.DemoApp && (
                    <a
                      href={project.DemoApp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-gray-400 hover:text-gray-200 transition-colors"
                    >
                      Live Demo <ChevronRight size={16} className="ml-1" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
