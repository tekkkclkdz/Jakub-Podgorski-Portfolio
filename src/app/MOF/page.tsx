"use client"
import Link from 'next/link';
import React, { useEffect, useState } from "react";
import MOV from "./../../../public/movportfo2-ezgif.com-optimize.gif";
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
        <div className="flex h-screen h-[calc(100svh)] bg-black relative ">
      <main className="flex flex-col justify-end pb-10 pl-10 text-white  z-10">
        <h1 className="text-1xl font-bold font-light mb-4">4THE20S</h1>
        <h1 className="text-1xl font-bold font-light mb-4">Camera & Edit of BTS</h1>
        <h1 className="text-1xl font-bold font-light mb-4">I had the pleasure of dealing with the presentation of the newspaper from behind the scenes.
Most of the videos that appeared promoting and summarizing this project came out of my hand. 
I encourage you to check out our beautiful collective and support this movement, because this is the place for every person in the creative industry who is starting out or knows what, but doesnt know how!</h1>

        <a href='https://www.instagram.com/for4the20s/' className="hover:underline italic">Link To The Project</a>
      </main>
      <div className="absolute inset-0 h-[calc(100svh)] z-0">
        <Image src={MOV} alt="ETE" layout="fill" objectFit="cover" />
      </div>
    </div>
    </main>
    
  );
}