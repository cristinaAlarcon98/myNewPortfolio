import HorizontalScroll from "../gsap/HorizontalScroll";
import BlobAnimation from "../others/BlobCircle";

const SectionHorizontalScroll = () => {
  return (
    <section className="h-[200vh] overflow-x-hidden pt-80">
      {/* Added h-[80vh] to reduce height */}
      <HorizontalScroll />
    </section>
  );
};

export default SectionHorizontalScroll;
