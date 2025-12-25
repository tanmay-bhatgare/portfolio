import React from "react";

const ProjectTile = ({
  title,
  subtitle,
  skills,
  projectHref,
}: {
  title: string;
  subtitle: string;
  skills: string[];
  projectHref: string;
}) => {
  return (
    <div className="p-6 rounded-xl border border-border-muted hover:-translate-y-1 hover:border-highlight transition">
      <h3 className="text-text text-xl font-semibold mb-2">{title}</h3>
      <p className="text-text-muted mb-4">{subtitle}</p>
      <div className="flex flex-wrap space-x-4 space-y-2">
        {skills.map(
          (skill, idx) =>
            skill && (
              <span
                key={idx}
                className="h-fit text-text-muted py-1 px-3 rounded-full border-2 border-border hover:bg-highlight/20 transition"
              >
                {skill}
              </span>
            )
        )}
      </div>
      <div className="flex items-center">
        <a
          href={projectHref}
          target="_blank"
          className="text-text hover:text-text-muted transition-colors my-5"
        >
          View Project →
        </a>
      </div>
    </div>
  );
};

export default ProjectTile;
