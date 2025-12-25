import { useState } from "react";
import RevealOnScroll from "../RevealOnScroll";
import instagram from "../../assets/instagram.svg";
import linkedin from "../../assets/linkedin.svg";
import github from "../../assets/github.svg";
import fiverr from "../../assets/fiverr.svg";

const cards = [
  {
    id: 1,
    title: "Instagram",
    image: instagram,
    content:
      "Follow me on Instagram for my social updates and enjoy my fun content.",
    href: "https://www.instagram.com/tanmaybhatgare",
  },
  {
    id: 2,
    title: "Linkedin",
    image: linkedin,
    content:
      "Get in touch with me on Linkedin for my work related updates and posts!",
    href: "https://www.linkedin.com/in/tanmaybhatgare",
  },
  {
    id: 3,
    title: "Github",
    image: github,
    content:
      "Follow me on Github for my project and open source contribution updates!",
    href: "https://www.github.com/tanmay-bhatgare",
  },
  {
    id: 4,
    title: "Fiverr",
    image: fiverr,
    content:
      "Have a project in mind? Follow me on Fiverr and let me handle it for you.",
    href: "https://www.fiverr.com/tanmaybhatgare",
  },
];

const Socials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSlide = (dir: "next" | "prev") => {
    setCurrentIndex((prev) => {
      if (dir === "next") return prev === cards.length - 1 ? 0 : prev + 1;
      return prev === 0 ? cards.length - 1 : prev - 1;
    });
  };

  return (
    <section
      id="socials"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-center text-3xl font-bold mb-8 text-text">
            Socials
          </h2>

          <div className="relative w-full flex items-center justify-center py-3 rounded-xl overflow-hidden">
            {/* Prev Button */}
            <button
              onClick={() => handleSlide("prev")}
              className="absolute w-10 h-10 cursor-pointer flex flex-col items-center justify-center text-4xl left-0 z-100 p-3 text-text rounded-full border-2 border-border"
            >
              ‹
            </button>

            {/* Card Container */}
            <div className="w-[320px] h-[420px] flex items-center justify-center relative overflow-hidden">
              {cards.map((card, index) => {
                const isActive = index === currentIndex;
                const offset = index - currentIndex;

                return (
                  <div
                    key={card.id}
                    className={`absolute h-full transition-all duration-500 ease-in-out transform flex flex-col items-center justify-center
                      ${
                        isActive
                          ? "scale-100 opacity-100 z-10"
                          : "scale-90 opacity-0 z-0"
                      }
                    `}
                    style={{
                      transform: `translateX(${offset * 100}%) scale(${
                        isActive ? 1 : 0.9
                      })`,
                    }}
                  >
                    {/* Glassy Card */}
                    <div className="w-[300px] h-full md:h-[80%] p-6 rounded-xl border-2 text-text border-border-muted shadow-xl flex flex-col items-center overflow-y-auto no-scrollbar">
                      <h3 className="text-4xl font-bold mb-2 text-text drop-shadow">
                        {card.title}
                      </h3>
                      <img
                        src={card.image}
                        alt={card.title}
                        className="w-40 aspect-square"
                      />
                      <p className="text-center">- {card.content}</p>

                      <a href={card.href} target="_blank" className="py-14">
                        <span className="underline text-sm font-semibold">
                          Let's Connect
                        </span>
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Next Button */}
            <button
              onClick={() => handleSlide("next")}
              className="absolute w-10 h-10 cursor-pointer flex flex-col items-center justify-center text-4xl right-0 z-100 p-3 text-text rounded-full border-2 border-border"
            >
              ›
            </button>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Socials;
