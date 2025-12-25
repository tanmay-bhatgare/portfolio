import { useEffect } from "react";
import { useTheme } from "../store/useTheme";

export const Navbar = ({
  menuOpen,
  setMenuOpen,
}: {
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { theme, toggleTheme } = useTheme();
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-40 bg-background/40 backdrop-blur-lg border-b border-border/20 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="font-mono text-xl font-bold text-text">
            t<span className="text-blue-500">.AB</span>
          </a>

          <div
            className="w-7 h-5 relative  cursor-pointer z-40 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-text hover:text-text-muted transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-text hover:text-text-muted transition-colors"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-text hover:text-text-muted transition-colors"
            >
              Projects
            </a>
            <a
              href="#socials"
              className="text-text hover:text-text-muted transition-colors"
            >
              Socials
            </a>
            <button
              onClick={toggleTheme}
              className="px-3 py-2 rounded border border-border text-text cursor-pointer"
            >
              {theme === "dark" ? "🌙" : "☀️"}
            </button>
            {/* <a
              href="#contact"
              className="text-text hover:text-text-muted transition-colors"
            >
              Contact
            </a> */}
          </div>
        </div>
      </div>
    </nav>
  );
};
