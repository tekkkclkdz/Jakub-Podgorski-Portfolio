"use client"
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Masonry from "react-masonry-css";
import { useMediaQuery } from "react-responsive";
import { useRef } from 'react';


import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';


import MOF from "./../../../public/mof-ezgif.com-optimize.gif"
import ETE from "./../../../public/etrnlraveportfolio-ezgif.com-optimize.gif"
import TYB from "./../../../public/tybet-ezgif.com-optimize.gif"
import INT from "./../../../public/POLOTPORTFOLIO3-ezgif.com-optimize.gif"
import LEO from "./../../../public/RozmowaLeon_1-ezgif.com-optimize.gif"

const pictures = [
  { src: ETE, link: "/ETE" },
  { src: MOF, link: "/MOF" },
  { src: INT, link: "/INT" },
  { src: TYB, link: "/TYB" },
  { src: LEO, link: "/LEO"}
];

const RotateScreenMessage = () => (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black z-50 transition-opacity duration-300">
      <p className="text-4xl text-white font-light">Rotate your phone</p>
    </div>
);

export default function Home() {
    const [showRotateScreen, setShowRotateScreen] = useState(true);


  useEffect(() => {
    const handleOrientationChange = () => {
      setShowRotateScreen(window.innerWidth <= window.innerHeight && window.innerWidth <= 768);
    };

    handleOrientationChange();

    const resizeListener = () => {
      handleOrientationChange();
    };

    window.addEventListener('resize', resizeListener);

    return () => {
      window.removeEventListener('resize', resizeListener);
    };
  }, []);
  

  return (
    <main className="relative">
        {showRotateScreen && <RotateScreenMessage />}
        <div className="absolute w-full h-full left-0 top-0" suppressHydrationWarning={true}>
      <Masonry className="flex gap-2 bg-black" columnClassName="" breakpointCols={1}>
        {pictures.map((pic, idx) => (
            <div key={idx} className="flex flex-col items-center relative"> {/* Przeniesiono 'key' tutaj */}
              <Image
                src={pic.src}
                alt="placeholder"
                className="static w-full transition duration-150 hover:opacity-70 cursor-pointer my-2"
                unoptimized={true}
                blurDataURL=""
              />
              <a href={pic.link} className="absolute bottom-2 right-2 z-10">
                <h1 className="text-white font-thin mix-blend-difference hover:underline cursor-pointer py-2 px-4 bg-transparent text-2xl text-right">More...</h1>
              </a>
            </div>
        ))}
      </Masonry>
    </div>
    </main>
    
  );
}