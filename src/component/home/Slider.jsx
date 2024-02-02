import React, { useState, useEffect, useRef } from "react";
import "./index.css";

export const Slider = () => {
  const sliderRef = useRef(null);

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += 300; // Adjust the scrolling distance as necessary
    }
  };
  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft -= 300; // Adjust the scrolling distance as necessary
    }
  };
  return (
    <div className="slider-container-wrapper relative">
      <button
        onClick={scrollLeft}
        className="scroll-left-button absolute left-0 top-[50%] transform translate-y-[-50%] z-[30]"
      >
        <svg
          viewBox="0 0 24 24"
          width="24"
          height="24"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>
      <div
        ref={sliderRef}
        className="slider-container flex w-[1280px] gap-[51px] items-start flex-nowrap overflow-hidden relative z-[17] mt-0 mr-0 mb-0 ml-[80px]"
      >
        <button className="w-[514px] h-[332px] shrink-0 text-[0px] relative z-[18]">
          <span className="flex w-[434.305px] h-[70px] justify-center items-center font-['Barlow'] text-[36px] font-bold leading-[44px] text-[#fff] tracking--0.54px relative text-center z-20 mt-0 mr-0 mb-0 ml-[39.848px]">
            Most popular posts and authors in June
          </span>
          <div className="w-[514px] h-[332px] bg-[rgba(251,226,137,0.2)] bg-[url(public/images/92b40de734d27a078108ff77c18f047e8fd43daa.png)] bg-cover bg-no-repeat rounded-[20px] absolute top-0 left-0 z-[19]" />
        </button>
        <button className="w-[332px] h-[332px] shrink-0 text-[0px] relative z-[21]">
          <span className="flex w-[297.475px] h-[85.943px] justify-center items-center font-['Barlow'] text-[36px] font-bold leading-[44px] text-[#fff] tracking--0.54px relative text-center z-[23] mt-0 mr-0 mb-0 ml-[17.262px]">
            Communication without barrier
          </span>
          <div className="w-[332px] h-[332px] bg-[rgba(234,184,223,0.2)] bg-[url(public/images/e941e42f82958bba4eceaa2c4b8efede3da6f9c4.png)] bg-cover bg-no-repeat rounded-[20px] absolute top-0 left-0 z-[22]" />
        </button>
        <button className="w-[332px] h-[332px] shrink-0 text-[0px] relative z-[24]">
          <span className="flex w-[280.695px] h-[85.943px] justify-center items-center font-['Barlow'] text-[36px] font-bold leading-[44px] text-[#000] tracking--0.54px relative text-center z-[26] mt-0 mr-0 mb-0 ml-[25.653px]">
            5 ways of earning NFT
          </span>
          <div className="w-[332px] h-[332px] bg-[rgba(162,219,236,0.2)] bg-[url(public/images/90a021840e3c058cf2f9160b8a56dc926a821139.png)] bg-cover bg-no-repeat rounded-[20px] absolute top-0 left-0 z-[25]" />
        </button>
        <div className="w-[449px] h-[332px] shrink-0 relative z-[27]">
          <button className="w-[436.117px] h-[332px] bg-[rgba(162,219,236,0.2)] bg-[url(public/images/53da7f91712225075c21766ba12a388c3ba733d6.png)] bg-cover bg-no-repeat rounded-[20px] absolute top-0 left-0 z-[28]">
            <span className="flex w-[280.695px] h-[85.943px] justify-center items-center font-['Barlow'] text-[36px] font-bold leading-[44px] text-[#000] tracking--0.54px absolute top-[calc(50%-42.97px)] left-[calc(50%-140.35px)] text-center z-[29]">
              More things that you don’t know...
            </span>
          </button>
        </div>
      </div>
      <button
        onClick={scrollRight}
        className="scroll-right-button absolute right-0 top-[50%] transform translate-y-[-50%] z-[30]"
      >
        <svg
          viewBox="0 0 24 24"
          width="24"
          height="24"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="css-i6dzq1"
        >
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>
    </div>
  );
};
