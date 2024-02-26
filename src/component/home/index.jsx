import React, { useState, useEffect } from "react";
import "./index.css";
import { Slider } from "./Slider";
import { Topic } from "./Topic";
import { ArticleList } from "./ArticleList";
import ExampleImage from "./1.png";

export const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const toggleDropdown = () => {
    // Log the current state before toggling
    console.log("Dropdown button was clicked, current state:", isOpen);
    setIsOpen(!isOpen); // Toggle the state
  };
  const toggleDropdown2 = () => {
    // Log the current state before toggling
    console.log("Dropdown button was clicked, current state:", isOpen2);
    setIsOpen2(!isOpen2); // Toggle the state
  };

  console.log("Dropdown content should be:", isOpen ? "visible" : "hidden");

  return (
    <div className="main-container w-[1440px] h-[2867px] bg-[#fff] relative mx-auto my-0">
      <Slider />

      <img
        src="public/images/565aa5cd-7256-430a-95ea-542860a82caf.png"
        alt="HTML5 Icon"
      />

      <Topic />

      {/* <button className="flex w-[179px] h-[36px] pt-[6px] pr-[15px] pb-[6px] pl-[15px] gap-[5px] items-center flex-nowrap bg-[#000] rounded-[22px] border-none absolute top-[557px] left-[1161px] z-[341] pointer button-start-post">
        <div className="w-[24px] h-[24px] shrink-0 relative overflow-hidden z-[342]">
          <div className="cross-icon w-[16px] h-[16px] bg-[url(public/images/fe136d28-a7c4-4605-b5a1-5eacf3d2ee37.png)] bg-[length:100%_100%] bg-no-repeat relative z-[343] mt-[4px] mr-0 mb-0 ml-[4px]" />
        </div>
        <span className="flex w-[120px] h-[24px] justify-center items-start shrink-0 basis-auto font-['Barlow'] text-[18px] font-normal leading-[24px] text-[#fff] tracking-0.27px relative text-center whitespace-nowrap z-[344]">
          Start your post
        </span>
      </button>

      <div className="flex w-[829px] h-[37px] gap-[15px] items-start flex-nowrap absolute top-[560px] left-[260px] z-[322]">
        <div className="flex w-[72px] pt-[6px] pr-[10px] pb-[6px] pl-[10px] gap-[10px] items-start shrink-0 flex-nowrap bg-[#fff] rounded-[5px] border-solid border border-[#000] relative z-[323]">
          <span className="flex w-[52px] h-[25px] justify-center items-start shrink-0 basis-auto font-['Barlow'] text-[16px] font-light leading-[25px] text-[#000] relative text-center whitespace-nowrap z-[324]">
            Newest
          </span>
        </div>
        <div className="flex w-[81px] pt-[6px] pr-[10px] pb-[6px] pl-[10px] gap-[10px] items-start shrink-0 flex-nowrap bg-[#fff] rounded-[5px] border-solid border border-[#000] relative z-[325]">
          <span className="flex w-[61px] h-[25px] justify-center items-start shrink-0 basis-auto font-['Barlow'] text-[16px] font-light leading-[25px] text-[#000] relative text-center whitespace-nowrap z-[326]">
            Trending
          </span>
        </div>
        <div className="flex w-[90px] pt-[6px] pr-[10px] pb-[6px] pl-[10px] gap-[10px] items-start shrink-0 flex-nowrap bg-[#fff] rounded-[5px] border-solid border border-[#000] relative z-[327]">
          <span className="flex w-[70px] h-[25px] justify-center items-start shrink-0 basis-auto font-['Barlow'] text-[16px] font-light leading-[25px] text-[#000] relative text-center whitespace-nowrap z-[328]">
            Most liked
          </span>
        </div>

        <div className="dropdown-container">
          <button className="dropdown-button" onClick={toggleDropdown}>
            Location
            <div className="w-[24px] h-[24px] shrink-0 relative z-[335]">
              <div className="w-[16px] h-[8.207px] bg-[url(public/images/dbf7bf16-39ee-4763-8472-16e9fc870493.png)] bg-[length:100%_100%] bg-no-repeat relative z-[336] mt-[7.897px] mr-0 mb-0 ml-[4px]" />
            </div>{" "}
          </button>
          {isOpen && (
            <div className="dropdown-content" key="dropdownContent">
              <div className="dropdown-item">Option 1</div>
              <div className="dropdown-item">Option 2</div>
              <div className="dropdown-item">Option 3</div>
            </div>
          )}
        </div>

        <div className="dropdown-container">
          <button className="dropdown-button" onClick={toggleDropdown2}>
            More
            <div className="w-[24px] h-[24px] shrink-0 relative z-[335]">
              <div className="w-[16px] h-[8.207px] bg-[url(public/images/dbf7bf16-39ee-4763-8472-16e9fc870493.png)] bg-[length:100%_100%] bg-no-repeat relative z-[336] mt-[7.897px] mr-0 mb-0 ml-[4px]" />
            </div>{" "}
          </button>
          {isOpen2 && (
            <div className="dropdown-content" key="dropdownContent">
              <div className="dropdown-item">Option 1</div>
              <div className="dropdown-item">Option 2</div>
              <div className="dropdown-item">Option 3</div>
            </div>
          )}
        </div>

        <div className="flex w-[316px] pt-[6px] pr-[13px] pb-[6px] pl-[13px] gap-[10px] items-center shrink-0 flex-nowrap rounded-[5px] border-solid border border-[#000] relative z-[337]">
          <div className="w-[24px] h-[24px] shrink-0 relative z-[338]">
            <div className="w-[14px] h-[14.001px] bg-[url(public/images/92fe01d7-045c-4214-a8f6-c4734d5a6025.png)] bg-[length:100%_100%] bg-no-repeat relative z-[339] mt-[5px] mr-0 mb-0 ml-[5px]" />
          </div>
          <span className="h-[25px] shrink-0 basis-auto font-['Barlow'] text-[16px] font-light leading-[25px] text-[#c4c4c4] relative text-left whitespace-nowrap z-[340]">
            Search all discussions
          </span>
        </div>
      </div> */}
      <div className="flex w-[1100px] h-[1877.845px] flex-col gap-[10px] items-start flex-nowrap absolute top-[500px] left-[260px] z-[48]">
        <ArticleList />
        {/* Back to Top button placed after the ArticleList */}

        <div className="w-[1020px] shrink-0 bg-[url(public/images/97522f7d-bc18-4447-8223-d671cab53ed4.png)] bg-cover bg-no-repeat relative z-[317]" />
      </div>
    </div>
  );
};
