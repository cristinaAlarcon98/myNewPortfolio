import HorizontalScroll from "../gsap/HorizontalScroll";
import BlobAnimation from "../others/BlobCircle";

const SectionHorizontalScroll = () => {
  return (
    <section className="h-[200vh] overflow-x-hidden pt-80 mt-40">
      {/* Increased margin-top (mt-40) to further prevent overlapping */}
      <HorizontalScroll />
    </section>
  );
};

export default SectionHorizontalScroll;
