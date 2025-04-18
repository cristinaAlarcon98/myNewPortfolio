import FadeInText from "../gsap/FadeInText";

const SectionFadeInText = () => {
  const firstPharagraph = (
    <>
      I'm Cristina Alarcón, a{" "}
      <span style={{ color: "#FF5733" }}>Software Developer</span> passionate
      about <span style={{ color: "#F1C40F" }}>code</span> and{" "}
      <span style={{ color: "#00BFA6" }}>art</span>.
      <br />
    </>
  );
  const secondPharagraph = (
    <>
      With 4 years of experience in frontend, backend, and even some low-level
      programming, I’m always eager to learn new languages and stay{" "}
      <span style={{ color: "#F1C40F" }}>updated</span> with the latest tech
      trends.
      <br />
    </>
  );

  const thirdPharagraph = (
    <>
      While I enjoy exploring different areas of software development, my heart
      is in <span style={{ color: "#FF5733" }}>frontend</span> — where{" "}
      <span style={{ color: "#00BFA6" }}>creativity</span> and{" "}
      <span style={{ color: "#3498DB" }}>functionality</span> come together. I
      love building modern, interactive features and expressing ideas through{" "}
      <span style={{ color: "#00CFFF" }}>digital art</span>.
      <br />
    </>
  );
  const fourthPharagraph = (
    <>
      This site is my personal space to share the projects I'm working on, as I
      continue learning and exploring the world of{" "}
      <span style={{ color: "#FFC300" }}>frontend</span> and{" "}
      <span style={{ color: "#00BFA6" }}>creative coding</span>.
      <br />
    </>
  );

  return (
    <section className="bg-primary-foreground h-[120vh] w-full flex justify-center flex-direction-col">
      <div className="flex flex-col md:flex-column justify-center w-6/12">
        <FadeInText text={firstPharagraph} />
        <FadeInText text={secondPharagraph} />
        <FadeInText text={thirdPharagraph} />
        <FadeInText text={fourthPharagraph} />
      </div>
    </section>
  );
};

export default SectionFadeInText;
