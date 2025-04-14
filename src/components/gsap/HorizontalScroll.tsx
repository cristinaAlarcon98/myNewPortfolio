import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "./esm/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import BlobCircle from "../others/BlobCircle";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function HorizontalScroll() {
  const projects = [
    {
      name: "My Digital Art",
      url: "https://www.google.com",
      src: "/images/fractol.png",
    },
    {
      name: "KamyLikamile",
      url: "https://www.google.com",
      src: "/images/kamilikamile.png",
    },
    {
      name: "StorySpark",
      url: "https://www.google.com",
      src: "/images/storyspark.png",
    },
    {
      name: "42London",
      url: "https://www.google.com",
      src: "/images/42london.png",
    },
  ];

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
          <div className="slides flex space-x-12 ml-8">
            {" "}
            {/* Added margin-left to shift images to the right */}
            {/* Slide Images */}
            {projects.map((project, index) => (
              <div
                key={index}
                className="relative w-[900px] h-[350px] cursor-pointer transform transition-transform duration-300 hover:scale-105" // Reduced size
                onClick={() => window.open(project.url, "_blank")}
              >
                <img
                  src={project.src}
                  alt={`${project.name} Image`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-xl font-semibold">
                    {project.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HorizontalScroll;
