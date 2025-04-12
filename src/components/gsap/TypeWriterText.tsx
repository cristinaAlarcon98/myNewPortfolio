import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "./esm/TextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(TextPlugin, ScrollTrigger);

type Props = {
  words: string[];
};

const TypeWriterText: React.FC<Props> = ({ words }) => {
  const animatedTextRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const typewriterRef = useRef<HTMLDivElement>(null); // Added ref for scroll-trigger animation

  useEffect(() => {
    // Cursor animation
    /*     console.log()
    gsap.to(cursorRef.current, {
      opacity: 0,
      repeat: -1,
      yoyo: true,
      duration: 0.5,
      ease: "power2.inOut",
    }); */

    // Text animation
    const tlMaster = gsap.timeline({ repeat: -1 });

    words.forEach((word) => {
      const tlText = gsap.timeline({ repeat: 1, yoyo: true, repeatDelay: 1 });
      tlText.to(animatedTextRef.current, { duration: 1, text: word });
      tlMaster.add(tlText);
    });

    // Scroll-triggered opacity animation
    const ctx = gsap.context(() => {
      gsap.to(typewriterRef.current, {
        opacity: 0,
        scrollTrigger: {
          trigger: typewriterRef.current,
          start: "top top+=400",
          end: "top top+=500", // Extend the range for a smoother disappearance
          scrub: 1, // Ensure smooth scrubbing
          markers: true, // Add markers to visualize the start and end points
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div ref={typewriterRef} style={{ display: "flex", alignItems: "center" }}>
      <h2 ref={animatedTextRef} className="animated-text"></h2>
    </div>
  );
};

export default TypeWriterText;
