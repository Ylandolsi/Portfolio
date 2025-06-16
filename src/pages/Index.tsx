import React from "react";
import Header from "../components/Header";
import About from "../components/About";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Milestones from "@/components/Milestones";

const Index = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <Header />
        <About />
        <Skills />
        <Experience />
        <Milestones />
        <Projects />
        <Contact />
      </div>
    </div>
  );
};

export default Index;
