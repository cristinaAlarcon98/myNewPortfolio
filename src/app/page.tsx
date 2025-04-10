"use client"
import Image from "next/image";
import { ReactLenis, useLenis } from 'lenis/react';
import WhoIam from "../pages/WhoIAm";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import IconButton from '@mui/material/IconButton';
import { useEffect, useState } from "react";

export default function Home() {
  const [windowWidth, setWindowWidth] = useState<number | null>(null); // Start with null

  useEffect(() => {
    // Check if window is available (for SSR compatibility)
    if (typeof window !== 'undefined') {
      const handleResize = () => setWindowWidth(window.innerWidth);

      // Set initial window width when component mounts
      setWindowWidth(window.innerWidth);

      window.addEventListener('resize', handleResize); // Listen for resize events

      // Cleanup event listener on unmount
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []); // Empty dependency array to run only once when mounted

  // Early return if windowWidth is null (still loading)
  if (windowWidth === null) {
    return null; // Or you can return a loading spinner, e.g., <div>Loading...</div>
  }


  return (
    <ReactLenis root>
      <div  style={{
      position: 'fixed',
      top: '10px',
      left: '20px',
      zIndex: 1000,
      color: '#fff',
      padding: '10px',
      cursor: 'pointer',
      
    }}>
    <h1>{windowWidth < 768 ? "KML" : "KAMYLIKAMILE"}</h1>
    </div>
    <div  style={{
      position: 'fixed',
      top: '10px',
      right: '20px',
      zIndex: 1000,
      color: '#fff',
      padding: '10px',
      cursor: 'pointer'
    }}>
     <IconButton >
      <MenuRoundedIcon  style={{color:'#c1b956', }}  />
     </IconButton>
    </div>
    <WhoIam/>
    </ReactLenis>
    
  );
}

