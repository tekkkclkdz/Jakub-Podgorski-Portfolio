"use client"
import Link from 'next/link';
import React, { useEffect, useState } from "react";
import INT from "./../../../public/RozmowaLeonportfolio2-ezgif.com-optimize.gif";
import Image from 'next/image';

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
    <main className='relative'>
        {showRotateScreen && <RotateScreenMessage />}
        <div className="flex h-screen h-[calc(100svh)] bg-black relative">
      <main className="flex flex-col justify-end pb-10 pl-10 text-white z-10">
        <h1 className="text-1xl font-bold font-light mb-4">ROZMOWA</h1>
        <h1 className="text-1xl font-bold font-light mb-4">Edit & As.Color</h1>
        <h1 className="text-1xl font-bold font-light mb-4">Student Short Film</h1>
        <a href='https://youtu.be/X7zeEItgKfQ' className="hover:underline italic">Link To The Project</a>
      </main>
      <div className="absolute inset-0 h-[calc(100svh)] z-0">
        <Image src={INT} alt="ETE" layout="fill" objectFit="cover" />
      </div>
    </div>
    </main>
    
  );
}