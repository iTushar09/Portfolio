
import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Particles from "./components/Particles";

const App: React.FC = () => {
  return (
    <div
      className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-x-hidden"
      role="main"
      aria-label="Portfolio Application"
    >
      {/* OGL Particles Background */}
      <div className="fixed inset-0 z-0">
        <Particles
          particleColors={['#8B5CF6', '#06B6D4', '#10B981', '#F59E0B']}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      {/* Site header */}
      <Header />

      {/* Main content with high z-index for layering above background */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Education />
        <Projects />
        <Contact />
      </main>

      {/* Persistent footer */}
      <Footer />
    </div>
  );
};

export default App;
