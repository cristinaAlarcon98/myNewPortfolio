import React, { useEffect, useRef, ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Props = {
  text: ReactNode; // Allow JSX content for colored words
};

const FadeInText: React.FC<Props> = ({ text }) => {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 80%",
            end: "top 50%",
            scrub: 1,
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={textRef}
      className="text-white text-center md:text-left text-xl md:text-3xl leading-relaxed md:leading-loose space-y-6"
    >
      <h1
        style={{
          fontWeight: 500,
          marginBottom: "6rem",
          fontSize: "2rem",
          lineHeight: "3.5rem",
        }}
        className="text-white text-center text-3xl"
      >
        {text}
      </h1>
    </div>
  );
};

export default FadeInText;
