import React from "react";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "CV Builder",
      KeyFeatures: [
        "– Organized User-friendly interface for building professional CVs.",
        "– Responsive design.",
        "– Real-time preview.",
        "– Export to PDF functionality.",
      ],
      tech: ["React", "Tailwind CSS", "Shadcn UI"],
      github: "https://github.com/Ylandolsi?tab=repositories",
      live: "https://cv-builder-eight-beta.vercel.app/",
    },
    {
      title: "Instagram Clone",
      KeyFeatures: [
        "Developed a full-stack Instagram clone application replicating core social media functionalities.",
        "– User Authentication: Secure registration, login (including Google Login), JWT with refresh tokens.",
        "– Content Interaction: Post creation (multi-image upload, cropping, captions), likes, comments (with replies and likes).",
        "– Social Features: Infinite scrolling feed, user profiles, follow/unfollow system, user search.",
        "– Real-time Updates: Notifications for likes, comments, and follows via SignalR.",
        "– Cloud Integration: Image storage and management using Cloudinary.",
      ],
      tech: [
        "React",
        "Tailwind CSS",
        "Shadcn UI",
        ".Net Core",
        "C#",
        "ASP.NET Core",
        "EF Core",
      ],
      github: "https://github.com/Ylandolsi/Instagram_Front",
      live: "#",
    },
  ];

  return (
    <section className="py-16 border-b border-gray-200">
      <div className="animate-fade-in">
        <h3 className="text-2xl font-bold mb-12 text-center">
          Featured Projects
        </h3>
        <div className="grid md:grid-cols-2 gap-8 ">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col border border-gray-200 rounded-lg p-6 hover-scale hover:shadow-lg transition-shadow duration-300"
            >
              <h4 className="text-lg font-semibold mb-3 text-gray-900">
                {project.title}
              </h4>
              <ul className="list-disc list-inside text-gray-700 mb-4 leading-relaxed text-sm space-y-1">
                {project.KeyFeatures.map((point, i) => (
                  <li key={i} className={"font-semibold mt-1 ml-4"}>
                    {point.replace("–", "").trimStart()}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 mt-auto">
                <a
                  href={project.github}
                  className="flex items-center gap-1 text-gray-600 hover:text-gray-900 transition-colors text-sm"
                >
                  <Github size={16} />
                  Code
                </a>
                <a
                  href={project.live}
                  className="flex items-center gap-1 text-gray-600 hover:text-gray-900 transition-colors text-sm"
                >
                  <ExternalLink size={16} />
                  Live Demo
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
