import React, { useEffect, useRef, useState } from "react";
import { useTypeWriterStore } from "../store/useTypewriterStore";

const TypeWriter = ({
  fullText,
  onComplete,
  cursor = "",
  typingSpeed,
}: {
  fullText: string;
  onComplete: () => void;
  cursor: string | null;
  typingSpeed: number;
}) => {
  const { restartCount } = useTypeWriterStore();

  const [text, setText] = useState("");
  const cursorRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (cursorRef.current) {
      cursorRef.current.style.display = "inline-block";
    }

    setText("");

    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(interval);
        setTimeout(() => {
          onComplete();
          if (cursorRef.current) {
            cursorRef.current.style.display = "none";
          }
        }, 400);
      }
    }, typingSpeed);

    return () => clearInterval(interval);
  }, [restartCount, fullText, typingSpeed]);

  return (
    <div>
      {text}
      {/* <span ref={cursorRef} className="animate-blink w-full">
        {cursor || "_"}
      </span> */}
    </div>
  );
};

export default TypeWriter;
