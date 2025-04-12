"use client"; // This line ensures the component is rendered on the client side

// External imports
import { ReactLenis, useLenis } from "lenis/react";
import dynamic from "next/dynamic";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// Internal imports
import TypeWriterText from "../components/gsap/TypeWriterText";
import BlobAnimation from "../components/others/BlobAnimation";
import { Span } from "next/dist/trace";
import FadeInText from "../components/gsap/FadeInText"; // Import the new component

// Dynamically imported components
const HorizontalScroll = dynamic(
  () => import("../components/gsap/HorizontalScroll"),
  { ssr: false }
);

export function WhoIamPage() {
  const typewriterRef = useRef(null); // Define the ref

  // Text content for FadeInText with additional colored words
  const fadeInTextContent = (
    <>
      I'm Cristina Alarcón, a{" "}
      <span style={{ color: "#FF5733" }}>Software Developer</span> passionate
      about <span style={{ color: "#F1C40F" }}>code</span> and{" "}
      <span style={{ color: "#00BFA6" }}>art</span>. With 4 years of experience
      in frontend, backend, and even some low-level programming, I’m always
      eager to learn new languages and stay{" "}
      <span style={{ color: "#F1C40F" }}>updated</span> with the latest tech
      trends. While I enjoy exploring different areas of software development,
      my heart is in <span style={{ color: "#FF5733" }}>frontend</span> — where{" "}
      <span style={{ color: "#00BFA6" }}>creativity</span> and{" "}
      <span style={{ color: "#3498DB" }}>functionality</span> come together. I
      love building modern, interactive features and expressing ideas through
      digital art. This site is my personal space to share the projects I'm
      working on, as I continue learning and exploring the world of{" "}
      <span style={{ color: "#FFC300" }}>frontend</span> and creative coding.
    </>
  );

  return (
    <div className="pt-[100px] bg-[#000303] w-[100vw]">
      {/* Section 1: Typewriter Text */}
      <section className="h-screen w-full flex justify-center items-center">
        <div ref={typewriterRef}>
          <TypeWriterText
            words={[
              "WELCOME TO MY SITE",
              "I CODE. I CREATE. I EXPLORE.",
              "HERE, TECH MEETS ART.",
              "ENJOY THE JOURNEY",
            ]}
            speed={0.8} // Slightly faster typing speed
            limits={{ start: 300, end: 450 }} // Adjusted scroll limits for smoother transitions
          />
        </div>
      </section>

      <section className="bg-primary-foreground h-[90vh] w-full flex justify-center">
        {" "}
        {/* Reduced height for better flow */}
        <div className="flex flex-col md:flex-row justify-center w-9/12">
          <FadeInText text={fadeInTextContent} />
        </div>
      </section>

      {/* Section 2: Creativity */}
      <section className="bg-primary-foreground h-[90vh] w-full">
        {" "}
        {/* Reduced height */}
        <div className="flex flex-col md:flex-row pl-[10%]">
          <div className="md:w-5/12 relative">
            <div className="absolute bottom-11 left-[-12rem] z-5 w-[450px] h-[450px]">
              {" "}
              {/* Reduced blob size */}
              <BlobAnimation fillColor="var(--secondary)" />
            </div>
            <img
              src="/images/volley.png"
              alt="Volleyball Image"
              className="h-[450px] w-auto relative z-10" // Adjusted image size
            />
          </div>
          <div className="w-full md:w-7/12 mt-5 md:mt-0 px-[10%] flex items-end">
            <p className="text-white text-right">
              Creativity encompasses the ability to discover new and{" "}
              <span>original ideas</span>, connections, and solutions to
              problems. My judgments are <span>insightful</span> and my
              perceptions are <span>fresh</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Horizontal Scroll */}
      <section className="bg-primary-foreground p-5 mb-[150px]">
        {" "}
        {/* Reduced bottom margin */}
        <HorizontalScroll />
      </section>

      {/* Section 4: Passion */}
      <section className="bg-primary-foreground h-[75vh] p-5">
        {" "}
        {/* Reduced height */}
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row pl-[10%]">
            <div className="w-full md:w-5/12 relative">
              <div className="absolute bottom-11 left-[-12rem] z-5 w-[50vh] h-[50vh]">
                {" "}
                {/* Reduced blob size */}
                <BlobAnimation fillColor="#3f72b1" />
              </div>
              <img
                src="/images/volley.png"
                alt="Volleyball Image"
                className="h-[55vh] w-auto relative z-10" // Adjusted image size
              />
            </div>
            <div className="w-full md:w-7/12 mt-5 md:mt-0 px-[10%] flex items-end">
              <p className="text-white text-right">
                Picking the berries of life to the fullest is my{" "}
                <span>passion</span>. Also, I'm an amateur beach volleyball
                player, a professional book reader, a daydreaming virtuoso, and{" "}
                <span>100%</span> beach kiddo.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default WhoIamPage;
