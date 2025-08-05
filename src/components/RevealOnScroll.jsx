import React, { useEffect, useRef } from "react";

const RevealOnScroll = ({ children }) => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          scrollRef.current.classList.add("visible");
        }
      },
      { threshold: 0.3, rootMargin: "0px 0px -50px 0px" }
    );

    if (scrollRef.current) {
      observer.observe(scrollRef.current);
    }

    return () => {
      if (scrollRef.current) {
        observer.unobserve(scrollRef.current);
      }
    };
  }, []);
  return (
    <div ref={scrollRef} className="reveal">
      {children}
    </div>
  );
};

export default RevealOnScroll;
