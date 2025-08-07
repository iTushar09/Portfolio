import React, { useState, useEffect } from "react";
import {
  ChevronRight,
  Github,
  ExternalLink,
  Eye,
  Star,
  GitFork,
  Code,
  Layers,
} from "lucide-react";

interface Tag {
  name: string;
  color?: string;
}

interface Project {
  title: string;
  description: string;
  image: string;
  category: string;
  tags: Tag[];
  link?: string;
  DemoApp?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: "Customer Churn Prediction",
    description:
      "Advanced machine learning model using ensemble methods to predict customer churn with 94% accuracy. Features interactive dashboard, real-time predictions, and comprehensive data visualization.",
    image:
      "https://miro.medium.com/v2/resize:fit:1358/1*twyCFLpb2mkWOZR4IUoBKA.jpeg",
    category: "Machine Learning",
    tags: [
      { name: "Python", color: "bg-blue-500/20 text-blue-300" },
      { name: "Pandas", color: "bg-green-500/20 text-green-300" },
      { name: "Scikit-learn", color: "bg-orange-500/20 text-orange-300" },
      { name: "XGBoost", color: "bg-red-500/20 text-red-300" },
      { name: "Streamlit", color: "bg-pink-500/20 text-pink-300" },
    ],
    link: "https://github.com/iTushar09/Customer-Churn-Prediction-App.git",
    DemoApp:
      "https://customer-churn-prediction-app-by-tushar-chaudhari.streamlit.app/",
     
  },
  {
    title: "🧰 Easy PDF Handling App",
    description:
      "All-in-one PDF toolkit with 8+ utilities including conversion, splitting, merging, encryption, and metadata editing. Process files securely in your browser.",
    image:
      "https://imgs.search.brave.com/MZTMzWmj-hKU0xS_6sh3ShCJ1LNAnT9CSBUXwwy3y_c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wZGZn/dXJ1LmNvbS9zdGF0/aWMvbG9hZGluZy1j/b252ZXJzaW9uLnN2/Zw",
    category: "Web App",
    tags: [
      { name: "Python", color: "bg-blue-500/20 text-blue-300" },
      { name: "Streamlit", color: "bg-pink-500/20 text-pink-300" },
      { name: "PDF", color: "bg-red-500/20 text-red-300" },
      { name: "PyMuPDF", color: "bg-green-500/20 text-green-300" },
      { name: "PyPDF2", color: "bg-yellow-500/20 text-yellow-300" },
    ],
    link: "https://github.com/iTushar09/Easy-PDF-Handling-Tools.git",
    DemoApp:
      "https://easy-pdf-handling-tools-by-tusharchaudhari.streamlit.app/",
  },
  {
    title: "Arduino-based Digital Ohmmeter",
    description:
      "Precision digital ohmmeter with auto-ranging capabilities, LCD display, and calibration features. Achieved ±0.5% accuracy across 1Ω to 1MΩ range with temperature compensation.",
    image:
      "https://github.com/iTushar09/Arduino-based-Digital-Ohmmeter/raw/main/Circuit%20View.png",
    category: "Electronics & Microcontroller",
    tags: [
      { name: "Arduino", color: "bg-teal-500/20 text-teal-300" },
      { name: "Embedded C", color: "bg-blue-500/20 text-blue-300" },
      { name: "Circuit Design", color: "bg-yellow-500/20 text-yellow-300" },
      { name: "LCD", color: "bg-purple-500/20 text-purple-300" },
    ],
    link: "https://github.com/iTushar09/Arduino-based-Digital-Ohmmeter",
     
  },
  {
    title: " Up/Down Counter using LPC2148",
    description:
      " This project demonstrates an Up/Down counter using the LPC2148 ARM7 microcontroller and 8 LEDs",
    image:
      "https://github.com/iTushar09/UpDown-Counting-using-lpc2148/raw/main/image.png",
    category: "Electronics & Microcontroller",
    tags: [
      { name: "LPC2148", color: "bg-indigo-500/20 text-indigo-300" },
      { name: "Embedded C", color: "bg-blue-500/20 text-blue-300" },
      { name: "Proteus", color: "bg-green-500/20 text-green-300" },
      { name: "GPIO", color: "bg-red-500/20 text-red-300" },
    ],
    link: "https://github.com/iTushar09/UpDown-Counting-using-lpc2148",
  },
  {
    title: "🐦 Twitter Sentiment Analysis App",
    description:
      "Real-time sentiment analysis web application with interactive visualizations, confidence scoring, and trend analysis. Features responsive design and Chart.js integration.",
    image:
      "https://imgs.search.brave.com/6dAdbMFGWBsoATStg51aGajLVQrlfeU3pUs41p1nayY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZGlnaXRhbHZpZHlh/LmNvbS9ibG9nL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE4LzEw/L1RXSVRURVItU0VO/VElNRU5ULUFOQUxZ/U0lTLnBuZw",
    category: "Machine Learning",
    tags: [
      { name: "Sentiment Analysis", color: "bg-purple-500/20 text-purple-300" },
      { name: "HTML5", color: "bg-orange-500/20 text-orange-300" },
      { name: "CSS3", color: "bg-blue-500/20 text-blue-300" },
    ],
    link: "https://github.com/iTushar09/Twitter-Sentiment-Analysis-App.git",
    DemoApp: "https://twitter-sentiment-analysis-app.vercel.app/",
     
  },
  {
    title: "India Air Quality Checker",
    description:
      "Comprehensive air quality monitoring application with real-time AQI data, historical trends, and health recommendations. Supports 50+ Indian cities.",
    image:
      "https://as1.ftcdn.net/v2/jpg/08/73/97/98/1000_F_873979815_dz2X3r4ugnlHzNnlXgORu6IIbesk6I64.jpg",
    category: "Machine Learning",
    tags: [
      { name: "Python", color: "bg-blue-500/20 text-blue-300" },
      { name: "Flask", color: "bg-green-500/20 text-green-300" },
      { name: "HTML5", color: "bg-orange-500/20 text-orange-300" },
      { name: "API", color: "bg-purple-500/20 text-purple-300" },
    ],
    link: "https://github.com/iTushar09/India-Air-Quality-Checker.git",
  },
  {
    title: "IoT-based Bidirectional Visitor Counter",
    description:
      "DIY people counter system using Arduino and IR sensors. Detects entry/exit direction and updates a real-time count on a 16x2 LCD. Ideal for monitoring rooms, halls, or events.",
    image:
      "https://github.com/iTushar09/IoT-based-Bidirectional-Visitor-Counter/blob/main/Circuit%20view.png?raw=true", 
    category: "Electronics & Microcontroller",
    tags: [
      { name: "Arduino", color: "bg-teal-500/20 text-teal-300" },
      { name: "IR Sensor", color: "bg-red-500/20 text-red-300" },
      { name: "LCD", color: "bg-purple-500/20 text-purple-300" },
      { name: "IoT", color: "bg-blue-500/20 text-blue-300" },
    ],
    link: "https://github.com/iTushar09/IoT-based-Bidirectional-Visitor-Counter",  
  },
];

const ProjectCard: React.FC<{
  project: Project;
  index: number;
  isVisible: boolean;
}> = ({ project, index, isVisible }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`group relative transition-all duration-700 transform ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      } ${project.featured ? "md:col-span-2 lg:col-span-1" : ""}`}
      style={{ transitionDelay: `${index * 100}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Featured project glow */}
      {project.featured && (
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/30 via-pink-600/30 to-teal-600/30 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
      )}

      <div
        className={`relative bg-gradient-to-br from-black/80 via-black/70 to-purple-900/30 rounded-2xl overflow-hidden shadow-2xl border transition-all duration-500 transform hover:scale-[1.02] ${
          project.featured
            ? "border-purple-500/40 hover:border-purple-400/80 shadow-purple-500/20"
            : "border-purple-500/20 hover:border-purple-400/60"
        }`}
      >
        {/* Image section */}
        <div className="relative h-56 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-20"></div>

          {!imageLoaded && (
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 to-black/50 animate-pulse flex items-center justify-center">
              <Layers className="w-12 h-12 text-purple-400/50" />
            </div>
          )}

          <img
            src={project.image}
            alt={project.title}
            onLoad={() => setImageLoaded(true)}
            onError={(e) => {
              e.currentTarget.src =
                "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='200' viewBox='0 0 400 200'%3E%3Crect width='400' height='200' fill='%23111827'/%3E%3Ctext x='200' y='100' text-anchor='middle' fill='%236B7280' font-family='Arial' font-size='16'%3EProject Image%3C/text%3E%3C/svg%3E";
            }}
            className={`w-full h-full object-cover transition-all duration-700 ${
              imageLoaded ? "opacity-100" : "opacity-0"
            } ${isHovered ? "scale-110" : "scale-100"}`}
          />

          {/* Category overlay */}
          <div className="absolute bottom-4 left-4 z-20">
            <div className="flex items-center gap-2 px-3 py-1 bg-black/60 backdrop-blur-md rounded-full border border-purple-500/30">
              <Code size={14} className="text-purple-400" />
              <span className="text-sm text-white font-medium">
                {project.category}
              </span>
            </div>
          </div>
        </div>

        {/* Content section */}
        <div className="relative p-6">
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300 line-clamp-2">
              {project.title}
            </h3>
          </div>

          <p className="text-gray-400 mb-6 text-sm leading-relaxed line-clamp-3">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag, tagIndex) => (
              <span
                key={tagIndex}
                className={`text-xs px-3 py-1 rounded-full border transition-all duration-300 hover:scale-105 ${
                  tag.color ||
                  "bg-purple-900/30 text-purple-200 border-purple-700/40"
                }`}
              >
                {tag.name}
              </span>
            ))}
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap gap-3">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600 rounded-lg text-gray-200 hover:text-white transition-all duration-300 transform hover:scale-105 border border-gray-600/50 hover:border-gray-500"
              >
                <Github size={16} />
                <span className="text-sm font-medium">Code</span>
                <ChevronRight
                  size={14}
                  className="group-hover/btn:translate-x-1 transition-transform"
                />
              </a>
            )}

            {project.DemoApp && (
              <a
                href={project.DemoApp}
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-teal-600 hover:from-purple-500 hover:to-teal-500 rounded-lg text-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
              >
                <ExternalLink size={16} />
                <span className="text-sm font-medium">Live Demo</span>
                <ChevronRight
                  size={14}
                  className="group-hover/btn:translate-x-1 transition-transform"
                />
              </a>
            )}
          </div>

          {/* Hover effect accent */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 via-pink-500 to-teal-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-2xl"></div>
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [visibleProjects, setVisibleProjects] = useState<boolean[]>([]);

  const categories = [
    "all",
    ...Array.from(new Set(projects.map((project) => project.category))),
  ];

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleProjects(new Array(filteredProjects.length).fill(true));
    }, 100);
    return () => clearTimeout(timer);
  }, [filteredProjects]);

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-b from-black/20 via-purple-900/5 to-black/30 relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/5 via-transparent to-teal-900/5"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <Layers className="text-purple-400" size={32} />
            <h2 className="text-4xl font-bold text-white">
              My{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-teal-400">
                Projects
              </span>
            </h2>
          </div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore my latest work showcasing innovation in electronics, web
            development, and machine learning
          </p>

          
          
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-2 justify-center p-2 bg-black/30 rounded-2xl border border-purple-500/20 backdrop-blur-sm">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-xl text-sm font-medium capitalize transition-all duration-300 transform hover:scale-105 ${
                  activeCategory === category
                    ? "bg-gradient-to-r from-purple-600 to-teal-600 text-white shadow-lg shadow-purple-500/25 scale-105"
                    : "text-gray-300 hover:text-white hover:bg-white/5"
                }`}
              >
                {category === "all" ? (
                  <span className="flex items-center gap-2">
                    <Layers size={16} />
                    All Projects
                  </span>
                ) : (
                  category
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={`${project.title}-${activeCategory}`}
              project={project}
              index={index}
              isVisible={visibleProjects[index] || false}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
