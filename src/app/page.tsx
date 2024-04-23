"use client"
import React, { useState, useEffect } from "react";
import Image from "next/image";
import videoBg from "../../public/introVid-ezgif.com-video-to-gif-converter.gif";

const RotateScreenMessage = () => (
  <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black z-50 transition-opacity duration-300">
    <p className="text-4xl text-white font-light">Rotate your phone</p>
  </div>
);

const Home = () => {
  const [showRotateScreen, setShowRotateScreen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleOrientationChange = () => {
      setIsMobile(window.innerWidth <= 768);
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
      <div className="absolute bottom-0 left-0 right-0 text-center">
        <h1 className="mix-blend-difference  text-6xl lg:text-6xl sm:text-3xl py-4 font-thin text-white ">Jakub Podgórski</h1>
      </div>
      <div className="absolute bottom-0 left-0 text-left">
        <a href="/portfolio" className="">
          <h2 className="mix-blend-difference text-4xl lg:text-4xl sm:text-3xl hover:underline font-thin text-white py-2 px-4 ">Portfolio</h2>
        </a>
        </div>
      <div className="absolute bottom-0 right-0 text-right">
        <a href="/contact" className=''>
          <h3 className="mix-blend-difference text-4xl lg:text-4xl sm:text-3xl hover:underline font-thin text-white py-2 px-4">Contact</h3>
        </a>
      </div>
      <div>
        <Image src={videoBg} alt="intro" className="w-screen h-screen object-cover h-[calc(100svh)]" />
      </div>
    </main>
  );
};

export default Home;