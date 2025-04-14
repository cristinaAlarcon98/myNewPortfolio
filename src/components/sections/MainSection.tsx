import { useRef } from "react";
import TypeWriterText from "../gsap/TypeWriterText";

const SectionTypewriter = () => {
  const typewriterRef = useRef(null);

  return (
    <section className="h-[110vh] w-full flex justify-center items-center pb-80">
      <div ref={typewriterRef}>
        <TypeWriterText
          words={[
            "WELCOME TO MY SITE",
            "I CODE. I CREATE. I EXPLORE.",
            "HERE, TECH MEETS ART.",
            "ENJOY THE JOURNEY",
          ]}
          speed={0.8}
          limits={{ start: 300, end: 450 }}
        />
      </div>
    </section>
  );
};

export default SectionTypewriter;
