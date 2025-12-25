import RevealOnScroll from "../RevealOnScroll";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative py-20"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold pb-2 mb-6 text-text">
            Hi, I am Tanmay Bhatgare
          </h1>
          <p className="text-text-muted text-xl mb-8 max-w-lg mx-auto">
            I'm a 19-year-old full-stack developer passionate about building
            efficient, modern web and mobile apps. With a Python-first mindset,
            I love crafting APIs using FastAPI and bringing UIs to life with
            React. I enjoy diving deep into automation, and state-of-the-art
            tech stacks. Always learning, always building — code is my
            playground. 🚀
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="bg-highlight text-text py-3 px-6 rounded font-semibold transition relative overflow-hidden hover:-translate-y-0.5 
              hover:shadow-[0_0_15px_var(--highlight)]"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="border border-border text-text py-3 px-6 rounded font-semibold transition-all duration-200 hover:-translate-y-0.5 
              hover:shadow-[0_0_15px_var(--highlight)] hover:bg-highlight/10"
            >
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Home;
