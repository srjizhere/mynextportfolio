"use client";
import Image from "next/image";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import TypeWriter from "typewriter-effect";
import ParticlesHero from "./ParticleBackground";

const Hero = () => {
  return (
    <div
      className="relative h-screen 
  flex items-center justify-center 
  text-white overflow-hidden flex-col"
    >
      <ParticlesHero />
      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Profile Image */}
<div className="relative w-[280px] h-[300px]">
  <Image
    src="/surajprofileport.png"
    alt="Suraj Patil"
    fill
    className="rounded-full object-cover border-4 border-cyan-300 shadow-lg shadow-cyan-900"
    data-aos="fade-up"
  />
  {/* Glow Ring */}
  <div className="absolute inset-0 rounded-full border-2 border-cyan-500 blur-md opacity-40 animate-pulse"></div>
</div>

        {/* Heading */}
        <h1
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl mt-6 font-bold tracking-wide"
        >
          Creating web products,
          <br /> systems{" "}
          <span className="text-cyan-200">and experiences.</span>
        </h1>

        {/* Subheading */}
        <h2
          data-aos="fade-up"
          data-aos-delay="400"
          className="mt-5 text-base sm:text-xl md:text-2xl text-gray-200"
        >
          Hi! I'm Suraj – A Passionate{" "}
          <span className="text-cyan-200 font-bold">
            <TypeWriter
              options={{
                strings: [
                  "Full Stack Developer",
                  "Flutter Enthusiast",
                  "Software Engineer",
                ],
                autoStart: true,
                loop: true,
                delay: 70,
                deleteSpeed: 50,
                wrapperClassName: "pl-2",
              }}
            />
          </span>
        </h2>

        {/* CTA Button */}
        <button
          data-aos="fade-up"
          data-aos-delay="600"
          className="mt-8 px-8 py-3 bg-gradient-to-r from-cyan-600 to-blue-800 
          hover:from-cyan-700 hover:to-blue-900 transition-all duration-300 
          rounded-full text-lg font-semibold flex items-center gap-2 shadow-md shadow-cyan-900"
        >
          <span>See My Work</span>
          <BsArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
