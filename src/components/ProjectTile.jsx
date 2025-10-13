import React from "react";

const ProjectTile = ({ title, subtitle, skills = [], projectHref }) => {
  return (
    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400 mb-4">{subtitle}</p>
      <div className="flex flex-wrap space-x-4 space-y-2">
        {skills.map((skill, idx) => (
          <span
            key={idx}
            className="h-fit bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full  hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"
          >
            {skill}
          </span>
        ))}
      </div>
      <div className="flex items-center">
        <a
          href={projectHref}
          target="_blank"
          className="text-blue-400 hover:text-blue-300 transition-colors my-5"
        >
          View Project →
        </a>
      </div>
    </div>
  );
};

export default ProjectTile;
