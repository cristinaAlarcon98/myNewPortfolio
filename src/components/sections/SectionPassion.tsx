import BlobAnimation from "../others/BlobAnimation";

const SectionPassion = () => {
  return (
    <section className="bg-primary-foreground h-[75vh] p-5">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row pl-[10%]">
          <div className="w-full md:w-5/12 relative">
            <div className="absolute bottom-11 left-[-12rem] z-5 w-[50vh] h-[50vh]">
              <BlobAnimation fillColor="#3f72b1" />
            </div>
            <img
              src="/images/volley.png"
              alt="Volleyball Image"
              className="h-[55vh] w-auto relative z-10"
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
  );
};

export default SectionPassion;
