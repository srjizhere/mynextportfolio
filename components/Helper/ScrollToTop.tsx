"use client";
import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const autoScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`fixed bottom-6 right-6 transition-all duration-500 
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
      `}
    >
      <button
        type="button"
        aria-label="Scroll to top"
        onClick={autoScrollTop}
        className="flex items-center justify-center 
                   bg-blue-600 text-white rounded-full
                   w-14 h-14 focus:outline-none cursor-pointer
                   hover:bg-blue-700 hover:scale-110
                   shadow-lg shadow-blue-500/50 transition-all duration-300"
      >
        <FaArrowUp className="w-6 h-6" />
      </button>
    </div>
  );
};

export default ScrollToTop;
