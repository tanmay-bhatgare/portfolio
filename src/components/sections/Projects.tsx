import { useEffect, useState } from "react";
import ProjectTile from "../ProjectTile";
import RevealOnScroll from "../RevealOnScroll";

type ProjectType = {
  name: string;
  description: string;
  tech: string[];
  github: string;
};

const Projects = () => {
  const [projects, setProjects] = useState<ProjectType[]>([]);

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}/portfolio.json`)
      .then((res) => res.text())
      .then((data) => setProjects(JSON.parse(data)))
      .catch((err) => {
        console.error("unable to load projects", err);
      });
  }, []);

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-center text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, idx) => (
              <ProjectTile
                key={idx}
                title={project.name}
                subtitle={project.description}
                skills={project.tech}
                projectHref={project.github}
              />
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Projects;

// TODO: had to do the automation work for portfolio json
