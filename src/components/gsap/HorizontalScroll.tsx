import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "./esm/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import BlobCircle from "../others/BlobCircle";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function HorizontalScroll() {
  useGSAP(() => {
    // Animation for slides
    gsap.to(".slides", {
      x: window.innerWidth < 768 ? "-70vw" : "-60vw",
      scrollTrigger: {
        trigger: ".slides-container",
        start: "center center",
        end: "+=1500",
        scrub: 1,
        pin: true,
      },
    });

    // Animation for text element
    gsap.to(".text-element", {
      scrollTrigger: {
        trigger: window.innerWidth < 768 ? ".pharagraph" : ".text-element",
        start:
          window.innerWidth < 768 ? "bottom+=260px center" : "center center",
        end: "+=1500",
        scrub: 1,
        pin: true,
        markers: true,
      },
    });
  });

  return (
    <div className="flex md:flex-row flex-wrap">
      {/* Left Section */}
      <div className="flex-col md:w-5/12 mt-5 md:mt-0 pr-[10%]">
        <div className="text-element flex items-end h-[500px] relative">
          <div className="absolute bottom-[-6rem] left-[-13rem] z-5 w-[500px] h-[500px]">
            <BlobCircle fillColor="var(--secondary)" />
          </div>
          <p className="pharagraph text-white text-right relative z-10">
            The emotionality of the <span>artistic</span> temperament. My field
            is <span>sports</span>, but my thinking is <span>artistic</span>.
            These two niches combined into one can reveal{" "}
            <span>undiscovered layers</span>.
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="square flex-col md:w-7/12 pl-[5%]">
        <div className="slides-container overflow-hidden h-[500px]">
          <div className="slides flex space-x-4">
            {/* Slide Images */}
            {[...Array(4)].map((_, index) => (
              <img
                key={index}
                src="/images/volley.png"
                alt="Volleyball Image"
                className="h-[500px]"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HorizontalScroll;
