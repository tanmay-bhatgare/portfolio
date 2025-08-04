import React from "react";
import ProjectTile from "../ProjectTile";
import RevealOnScroll from "../RevealOnScroll";

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-center text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to bg-cyan-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ProjectTile
              title="Task Manager Backend"
              subtitle="Scalable APIs integration with real-time updates and automated
                scaling."
              skills={[
                "FastAPI",
                "PostgreSQL",
                "SQLAlchemy",
                "Redis",
                "Oauth2",
              ]}
              projectHref="https://github.com/tanmay-bhatgare/task-manager-api"
            />
            <ProjectTile
              title="Fullstack Pizza App"
              subtitle="CRUD Operational APIs, user authentication and authorization, rate limiting and CORS middleware and many more with FastAPI for Backend. React, Zustand and TanstackQuery for frontend with perfect state management and caching."
              skills={[
                "FastAPI",
                "PostgreSQL",
                "SQLAlchemy",
                "Redis",
                "Oauth2",
                "React",
                "Zustand",
                "Tanstack",
                "TailwindCSS",
              ]}
              projectHref="https://github.com/tanmay-bhatgare/pizza-app-backend"
            />
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Projects;
