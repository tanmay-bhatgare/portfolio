import { motion } from "framer-motion";
import { backendSkills, frontendSkills } from "../constants";
import { useAnimationStore } from "../store/useAnimationStore";
import { useTypeWriterStore } from "../store/useTypewriterStore";

const fade = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0 },
};

const OutputScreen = () => {
  const { animateFrontend, animateBackend, resetBackend, resetFrontend } =
    useAnimationStore();
  const restartTyping = useTypeWriterStore((s) => s.restart);

  return (
    <div className="w-full h-auto flex flex-col bg-white/5 border border-white/10 rounded-lg p-2 font-semibold text-sm md:text-lg">
      <div className="w-full flex px-2 justify-end">
        <button
          className="px-2 py-1 bg-white/10 rounded-md"
          onClick={() => {
            resetBackend();
            resetFrontend();
            restartTyping();
          }}
        >
          Re-Start
        </button>
      </div>
      <div className="w-full flex flex-col gap-2 mb-3">
        <span className="text-lg">Backend</span>
        <div className="w-full grid grid-flow-col auto-cols-max gap-3 rounded-lg border border-white/10 overflow-x-auto py-4 px-2 no-scrollbar">
          {backendSkills.map((item, i) => (
            <motion.span
              key={i}
              variants={fade}
              initial="hidden"
              animate={animateBackend ? "visible" : "hidden"}
              transition={{ delay: i * 0.05 }}
              className="bg-blue-500/10 text-blue-500 py-1 px-4 rounded-full whitespace-nowrap hover:bg-blue-500/20 transition"
            >
              {item}
            </motion.span>
          ))}
        </div>
      </div>
      <div className="w-full flex flex-col gap-2">
        <span className="text-lg">Frontend</span>
        <div className="w-full grid grid-flow-col auto-cols-max gap-3 rounded-lg border border-white/10 overflow-x-auto py-4 px-2 no-scrollbar">
          {frontendSkills.map((item, i) => (
            <motion.span
              key={i}
              variants={fade}
              initial="hidden"
              animate={animateFrontend ? "visible" : "hidden"}
              transition={{ delay: i * 0.05 }}
              className="bg-blue-500/10 text-blue-500 py-1 px-4 rounded-full whitespace-nowrap hover:bg-blue-500/20 transition"
            >
              {item}
            </motion.span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OutputScreen;
