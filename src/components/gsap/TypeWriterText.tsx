
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "./esm/TextPlugin";

gsap.registerPlugin(TextPlugin);


type Props = {
  words: string[];
};


const TypeWriterText: React.FC<Props> = ({words}) => {
  const animatedTextRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);

  

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
  }, []);
 //    <span ref={cursorRef} id="cursor" style={{ marginLeft: "5px" }}>_</span> 
  return (
    <div style={{ display: "flex", alignItems: "center"}}> 
    <h2 ref={animatedTextRef} className="animated-text" ></h2>
  </div>
  );
};

export default TypeWriterText;
