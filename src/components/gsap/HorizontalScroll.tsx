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
        <div className="slides-container w-[2000px]">
          {" "}
          {/* Removed overflow-hidden */}
          <div className="slides flex space-x-4">
            {/* Slide Images */}
            {[...Array(4)].map((_, index) => (
              <img
                src="/images/fractol.png"
                alt="Volleyball Image"
                className="w-[1000px] h-[400px] cursor-pointer transform transition-transform duration-300 hover:scale-105" // Increased width
                onClick={() => window.open("https://www.google.com", "_blank")}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HorizontalScroll;
