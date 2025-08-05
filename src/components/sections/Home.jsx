import RevealOnScroll from "../RevealOnScroll";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative py-20"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold pb-2 mb-6 bg-gradient-to-r from-[#4E65FF] to-[#92EFFD] bg-clip-text text-transparent leading-right">
            Hi, I am Tanmay Bhatgare
          </h1>
          <p className="text-gray-400 text-xl mb-8 max-w-lg mx-auto">
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
              className="bg-blue-500 text-white py-3 px-6 rounded font-semibold transition relative overflow-hidden hover:-translate-y-0.5 
              hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-semibold transition-all duration-200 hover:-translate-y-0.5 
              hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10"
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
