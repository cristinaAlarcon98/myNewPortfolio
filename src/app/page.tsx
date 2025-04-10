"use client";
import { ReactLenis } from "lenis/react";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import MenuButton from "../components/MenuButton";
import WhoIam from "../pages/WhoIAm";

export default function Home() {
  const [windowWidth, setWindowWidth] = useState<number | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => setWindowWidth(window.innerWidth);
      setWindowWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  if (windowWidth === null) {
    return null;
  }

  return (
    <ReactLenis root>
      <Header windowWidth={windowWidth} />
      <MenuButton />
      <WhoIam />
    </ReactLenis>
  );
}
