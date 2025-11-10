import React, { useEffect, useRef } from "react";

const RevealOnScroll = ({ children }: { children: React.ReactNode }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tempScrollRef = scrollRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (scrollRef && scrollRef.current) {
            scrollRef.current.classList.add("visible");
          }
        }
      },
      { threshold: 0.3, rootMargin: "0px 0px -50px 0px" }
    );

    if (scrollRef.current) {
      observer.observe(scrollRef.current);
    }

    return () => {
      if (tempScrollRef) {
        observer.unobserve(tempScrollRef);
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
