import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "./esm/TextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(TextPlugin, ScrollTrigger);

type Props = {
  words: string[];
  speed: number;
  limits: { start: number; end: number }; // Refactored limits to an object
};

const TypeWriterText: React.FC<Props> = ({ words, speed, limits }) => {
  const animatedTextRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const typewriterRef = useRef<HTMLDivElement>(null); // Added ref for scroll-trigger animation

  useEffect(() => {
    // Cursor animation
    gsap.to(cursorRef.current, {
      opacity: 0,
      repeat: -1,
      yoyo: true,
      duration: 0.4, // Faster cursor blink
      ease: "power2.inOut",
    });

    // Text animation
    const tlMaster = gsap.timeline({ repeat: -1, repeatDelay: 0.5 }); // Added delay between repeats

    words.forEach((word) => {
      const tlText = gsap.timeline({ repeat: 1, yoyo: true, repeatDelay: 0.8 }); // Adjusted delay for smoother transitions
      tlText.to(animatedTextRef.current, { duration: speed, text: word });
      tlMaster.add(tlText);
    });

    // Scroll-triggered opacity animation
    const ctx = gsap.context(() => {
      gsap.to(typewriterRef.current, {
        opacity: 0,
        scrollTrigger: {
          trigger: typewriterRef.current,
          start: `top top+=${limits.start}`, // Adjusted start point
          end: `top top+=${limits.end}`, // Adjusted end point
          scrub: 0.8, // Smoother scrubbing
          markers: false, // Removed markers for cleaner UI
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={typewriterRef}
      style={{ display: "flex", alignItems: "flex-start" }}
    >
      <h2 ref={animatedTextRef} className="animated-text"></h2>
    </div>
  );
};

export default TypeWriterText;
