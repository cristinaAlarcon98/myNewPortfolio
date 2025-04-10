"use client"; // This line ensures the component is rendered on the client side

// External imports
import { ReactLenis, useLenis } from "lenis/react";
import dynamic from "next/dynamic";

// Internal imports
import TypeWriterText from "../components/gsap/TypeWriterText";
import BlobAnimation from "../components/others/BlobAnimation";

// Dynamically imported components
const HorizontalScroll = dynamic(
  () => import("../components/gsap/HorizontalScroll"),
  { ssr: false }
);

export function WhoIamPage() {
  return (
    <div className="pt-[100px] bg-[#000303] w-[100vw]">
      {/* Section 1: Typewriter Text */}
      <section className="h-screen w-full flex justify-center items-center">
        <TypeWriterText words={["CREATIVITY", "EMOTIONALITY", "PASSION"]} />
      </section>

      {/* Section 2: Creativity */}
      <section className="bg-primary-foreground h-[100vh] w-full">
        <div className="flex flex-col md:flex-row pl-[10%]">
          <div className="md:w-5/12 relative">
            <div className="absolute bottom-11 left-[-12rem] z-5 w-[500px] h-[500px]">
              <BlobAnimation fillColor="var(--secondary)" />
            </div>
            <img
              src="/images/volley.png"
              alt="Volleyball Image"
              className="h-[500px] w-auto relative z-10"
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
      <section className="bg-primary-foreground p-5 mb-[200px]">
        <HorizontalScroll />
      </section>

      {/* Section 4: Passion */}
      <section className="bg-primary-foreground h-[80vh] p-5">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row pl-[10%]">
            <div className="w-full md:w-5/12 relative">
              <div className="absolute bottom-11 left-[-12rem] z-5 w-[55vh] h-[55vh]">
                <BlobAnimation fillColor="#3f72b1" />
              </div>
              <img
                src="/images/volley.png"
                alt="Volleyball Image"
                className="h-[60vh] w-auto relative z-10"
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
