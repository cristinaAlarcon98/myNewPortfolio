"use client";
import MainSection from "./sections/MainSection";
import AboutSection from "./sections/AboutSection";
import ProjectsSection from "./sections/ProjectsSection";
import ContactSection from "./sections/ContactSection";

export default function ScrollSections() {
  return (
    <div className="pt-[100px] bg-[#000303] w-[100vw]">
      <MainSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}
