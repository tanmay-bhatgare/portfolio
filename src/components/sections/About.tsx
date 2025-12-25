import EditorScreen from "../Editor";
import OutputScreen from "../Output";
import RevealOnScroll from "../RevealOnScroll";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-center text-3xl font-bold mb-8 text-text">
            About Me
          </h2>
          <div className="rounded-xl p-8 border border-border hover:-translate-y-1 transition-all">
            <p className="text-text mb-6">
              Passionate developer with expertise in building scalable web
              applications and creating innovative solutions.
            </p>

            <div className="grid grid-cols-1 gap-6">
              <OutputScreen />
              <EditorScreen />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="text-text p-6 rounded-xl border-border border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4 text-center">
                🎓Education
              </h3>
              <ul className="list-disc list-inside text-text space-y-2">
                <li className="">
                  <strong>B.Tech In Computer Science</strong> - G.H Raisoni
                  College of Engineering, Nagpur (2025-2029)
                </li>
                <li className="">
                  Relevant Coursework: Backend development and Web Development
                </li>
              </ul>
            </div>
            <div className="text-text p-6 rounded-xl border-border border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4 text-center">
                🏢Work Experience
              </h3>
              <div className="space-y-4 text-text ">
                <div>
                  <h4 className="font-semibold">
                    FastAPI Developer (2019-present)
                  </h4>
                  <p>
                    - Developed and maintained, Databases and APIs to
                    communicate with frontend
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default About;
