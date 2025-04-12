import BlobAnimation from "../others/BlobAnimation";

const SectionCreativity = () => {
  return (
    <section className="bg-primary-foreground h-[90vh] w-full">
      <div className="flex flex-col md:flex-row pl-[10%]">
        <div className="md:w-5/12 relative">
          <div className="absolute bottom-11 left-[-12rem] z-5 w-[450px] h-[450px]">
            <BlobAnimation fillColor="var(--secondary)" />
          </div>
          <img
            src="/images/volley.png"
            alt="Volleyball Image"
            className="h-[450px] w-auto relative z-10"
          />
        </div>
        <div className="w-full md:w-7/12 mt-5 md:mt-0 px-[10%] flex items-end">
          <p className="text-white text-right">
            Creativity encompasses the ability to discover new and{" "}
            <span>original ideas</span>, connections, and solutions to problems.
            My judgments are <span>insightful</span> and my perceptions are{" "}
            <span>fresh</span>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SectionCreativity;
