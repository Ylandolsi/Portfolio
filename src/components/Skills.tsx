import React from "react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["JavaScript", "TypeScript", "C#"],
    },
    {
      title: "Frontend",
      skills: ["React", "HTML", "CSS", "Tailwind CSS"],
    },
    {
      title: "Backend",
      skills: [".NET Core", "SQL"],
    },
  ];

  return (
    <section className="py-16 border-b border-gray-200">
      <div className="animate-fade-in">
        <h3 className="text-2xl font-bold mb-12 text-center">
          Technical Skills
        </h3>
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={category.title} className="hover-scale">
              <h4 className="text-lg font-semibold mb-4 text-gray-800">
                {category.title}
              </h4>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-sm font-medium hover:bg-gray-200 transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
