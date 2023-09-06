"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Hero() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <section className="text-gray-600 body-font">
      <div className="container flex flex-col items-center px-5 py-24 mx-auto md:flex-row">
        <div className="flex flex-col items-center mb-16 text-center lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left md:mb-0">
          <h1
            className="mb-4 text-4xl font-bold uppercase title-font sm:text-4xl"
            style={{ lineHeight: "125%" }}
          >
            <span className="text-[#7bcfcd]">Before</span> they sold out
            <br className="hidden lg:inline-block" />
            readymade
            <span className="text-[#7bcfcd]"> gluten</span>
          </h1>
          <p className="mb-8 leading-relaxed">
            Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
            plant cold-pressed tacos poke beard tote bag. Heirloom echo park
            mlkshk tote bag selvage hot chicken authentic tumeric truffaut
            hexagon try-hard chambray.
          </p>
          <div className="flex justify-center">
            <button className="inline-flex px-6 py-2 text-lg text-white bg-[#7bcfcd] rounded focus:outline-none hover:bg-[#7bcfcd] opacity-90 hover:opacity-100 items-center justify-center">
              Search For Tour
            </button>
            <button className="inline-flex px-6 py-2 ml-4 text-lg text-gray-700 bg-gray-100 rounded focus:outline-none hover:bg-gray-200 border-2 border-[#7bcfcd] items-center justify-center ">
              Get Started
            </button>
          </div>
        </div>
        <div className="w-5/6 lg:w-1/2 md:w-1/2">
          <Image
            style={{ width: "100%", height: "700px" }}
            className="object-cover object-center rounded-lg"
            src="/img/hero.png"
            alt="Picture of the nature"
            width={1000} // Adjust the width value according to your needs
            height={20} // Adjust the height value according to your needs
          />
        </div>
      </div>
    </section>
  );
}
