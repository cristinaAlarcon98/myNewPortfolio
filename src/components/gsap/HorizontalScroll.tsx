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
        //markers: true,
      },
    });
  });

  return (
    <div className="flex md:flex-row flex-wrap">
      {/* Right Section */}
      <div className="square flex-col md:w-12/12 ">
        <div className="slides-container overflow-hidden h-[500px]">
          <div className="slides flex space-x-4">
            {/* Slide Images */}
            {[...Array(4)].map((_, index) => (
              <div
                key={index}
                className="d-flex flex-col items-center justify-center"
              >
                <h1>Project</h1>
                <img
                  src="/images/volley.png"
                  alt="Volleyball Image"
                  className="h-[500px] cursor-pointer"
                  onClick={() =>
                    window.open("https://www.google.com", "_blank")
                  } // Navigate to Google on click
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HorizontalScroll;
