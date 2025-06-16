import React from "react";

const Milestones = () => {
  const milestones = [
    {
      title: "Reached Expert in Codeforces",
      link: "https://codeforces.com/profile/Ylandolsi",
      date: "October 2024",
      description:
        "After +800 algothms problems solved, achieved the Expert rating on Codeforces.\nShowcasing strong problem-solving skills and algorithmic knowledge.",
      icon: "🏆",
    },
    // {
    //   title: "Mastered Advanced React Concepts",
    //  link:"#"
    //   date: "March 2024",
    //   description:
    //     "Deepened understanding and application of React Hooks, Context API, and performance optimization techniques.",
    //   icon: "⚛️", // Example icon
    // },
    // {
    //   title: "Full-Stack Development Achievement",
    //   date: "June 2024",
    //   description:
    //     "Completed the Instagram Clone project, demonstrating proficiency in both front-end (React) and back-end (.NET Core) development.",
    //   icon: "🚀", // Example icon
    // },
  ];

  return (
    <section className="py-16 border-b border-gray-200">
      <div className="animate-fade-in">
        <h3 className="text-2xl font-bold mb-12 text-center">Key Milestones</h3>
        <div className="space-y-8">
          {milestones.map((milestone, index) => (
            <div key={index} className="relative pl-10 hover-scale">
              {/* Timeline line */}
              {index < milestones.length - 1 && (
                <div className="absolute left-5 top-5 w-0.5 h-full bg-gray-300"></div>
              )}
              {/* Milestone Icon/Dot */}
              <div className="absolute left-0 top-0 flex items-center justify-center w-10 h-10">
                <span className="text-2xl">{milestone.icon}</span>
              </div>
              <div className="ml-4 p-4 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <h4 className="text-lg font-semibold text-gray-900 mb-1">
                  <a
                    href={milestone.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {milestone.title}
                  </a>
                </h4>
                <p className="text-sm text-gray-500 mb-2">{milestone.date}</p>
                <p className="text-gray-700 leading-relaxed text-sm whitespace-pre-line">
                  {milestone.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Milestones;
