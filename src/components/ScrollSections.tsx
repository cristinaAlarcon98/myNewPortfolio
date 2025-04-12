"use client";
import SectionCreativity from "./sections/SectionCreativity";
import SectionHorizontalScroll from "./sections/SectionHorizontalScroll";
import SectionPassion from "./sections/SectionPassion";
import MainSection from "./sections/MainSection";
import AboutSection from "./sections/AboutSection";

export default function ScrollSections() {
  return (
    <div className="pt-[100px] bg-[#000303] w-[100vw]">
      <MainSection />
      <AboutSection />
      <SectionCreativity />
      <SectionHorizontalScroll />
      <SectionPassion />
    </div>
  );
}
