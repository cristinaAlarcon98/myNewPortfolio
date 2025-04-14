"use client";
import MainSection from "./sections/MainSection";
import AboutSection from "./sections/AboutSection";
import ProjectsSection from "./sections/ProjectsSection";

export default function ScrollSections() {
  return (
    <div className="pt-[100px] bg-[#000303] w-[100vw]">
      <div className="mb-[100px]">
        <MainSection />
      </div>
      <div className="mb-[100px]">
        <AboutSection />
      </div>
      <div>
        <ProjectsSection />
      </div>
    </div>
  );
}
