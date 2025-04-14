import BlobAnimation from "../others/BlobAnimation";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const ContactSection = () => {
  const sectionRef = useRef(null);
  const emailRef = useRef(null);
  const linkedinRef = useRef(null);
  const githubRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { duration: 1, ease: "power3.out" } });
    tl.fromTo(sectionRef.current, { opacity: 0 }, { opacity: 1, delay: 0.2 })
      .fromTo(
        emailRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1 },
        "-=0.5"
      )
      .fromTo(
        linkedinRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1 },
        "-=0.4"
      )
      .fromTo(
        githubRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1 },
        "-=0.4"
      );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative z-40 bg-primary-foreground h-[100vh] w-full flex flex-col items-center justify-center text-center text-white pt-40"
    >
      <h2 className="text-4xl font-bold mb-6">Contact Me</h2>
      <div className="space-y-4">
        <p ref={emailRef} className="text-lg">
          <a
            href="mailto:cristinaalarconjimenez@gmail.com"
            className="hover:underline"
          >
            cristinaalarconjimenez@gmail.com
          </a>
        </p>
        <p ref={linkedinRef} className="text-lg">
          <a
            href="https://www.linkedin.com/in/cristina-alarcon/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            LinkedIn
          </a>
        </p>
        <p ref={githubRef} className="text-lg">
          <a
            href="https://github.com/cristinaAlarcon98"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            GitHub
          </a>
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
