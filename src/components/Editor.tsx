import { useState } from "react";
import TypeWriter from "../components/TypeWriter";
import { useAnimationStore } from "../store/useAnimationStore";
import { backendSkills, frontendSkills } from "../constants";

const EditorScreen = () => {
  const [lines, setLines] = useState([
    {
      id: 1,
      text: `self.skills.backend.append(${Object.entries(backendSkills)
        .map(([name, icon]) => `"${name}"`)
        .join(", ")})`,
      unlocked: true,
      restartKey: 0,
    },
    {
      id: 2,
      text: `self.skills.frontend.append(${Object.entries(frontendSkills)
        .map(([name, icon]) => `"${name}"`)
        .join(", ")})`,
      unlocked: false,
      restartKey: 0,
    },
  ]);

  const { triggerBackend, triggerFrontend } = useAnimationStore();

  const handleComplete = (index: number) => {
    if (index === 0) triggerBackend();
    if (index === 1) triggerFrontend();

    setLines((prev) => {
      const copy = [...prev];

      if (copy[index + 1]) {
        copy[index + 1].unlocked = true;
        copy[index + 1].restartKey += 1;
      }

      return copy;
    });
  };

  return (
    <div className="w-full h-full flex flex-col bg-white/5 border border-white/10 rounded-lg p-2 font-[JetBrains_Mono] font-semibold gap-3 text-sm md:text-lg">
      <div className="w-full flex gap-1.5">
        <div className="bg-red-500/80 w-3 aspect-square rounded-full" />
        <div className="bg-yellow-500/80 w-3 aspect-square rounded-full" />
        <div className="bg-green-500/80 w-3 aspect-square rounded-full" />
      </div>

      {lines.map((line, i) =>
        line.unlocked ? (
          <div
            key={line.id}
            className="w-full flex flex-row gap-2 overflow-x-auto no-scrollbar"
          >
            <span className="self-start min-w-4">{`${line.id}|`}</span>

            <TypeWriter
              fullText={line.text}
              cursor="_"
              typingSpeed={25}
              onComplete={() => handleComplete(i)}
            />
          </div>
        ) : null
      )}
    </div>
  );
};

export default EditorScreen;
