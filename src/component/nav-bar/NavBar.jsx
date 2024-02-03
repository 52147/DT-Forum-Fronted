import React from "react";
import "./index.css";

export const NavBar = () => {
  return (
    <div>
      <div className="flex justify-center items-center">
        <div className="flex w-[1440px] h-[100px] pt-0 pr-[80px] pb-0 pl-[80px] justify-between items-center flex-nowrap relative z-30 mt-0 mr-0 mb-0 ml-0">
          <div className="flex w-[327.951px] gap-[16px] items-center shrink-0 flex-nowrap relative z-[31]">
            <div className="w-[43.951px] h-[40px] shrink-0 bg-[url(public/images/c4a7d923-87b1-407b-bd44-deb99e0a1c4a.png)] bg-cover bg-no-repeat relative z-[32]" />
            <div className="w-[268px] shrink-0 font-['Comfortaa'] text-[28px] font-normal leading-[37px] relative text-left whitespace-nowrap z-[33]">
              <span className="font-['Futura'] text-[28px] font-medium leading-[33.6px] text-[#000] relative text-left">
                DIAMOND
              </span>
              <span className="font-['Comfortaa'] text-[28px] font-normal leading-[33.6px] text-[#000] relative text-left">
                Tofu
              </span>
            </div>
          </div>
          <div className="flex w-[498px] pt-[10px] pr-0 pb-[10px] pl-0 gap-[40px] items-baseline shrink-0 flex-nowrap relative z-[34]">
            <button className="w-[73px] h-[24px] shrink-0 font-['Barlow'] text-[18px] font-normal leading-[24px] text-[#000] border-none tracking-0.27px relative z-[35] pointer" />
            <button className="w-[76px] h-[24px] shrink-0 font-['Barlow'] text-[18px] font-normal leading-[24px] text-[#000] border-none tracking-0.27px relative z-[36] pointer" />
            <button className="w-[54px] h-[24px] shrink-0 font-['Barlow'] text-[18px] font-normal leading-[24px] text-[#000] border-none tracking-0.27px relative z-[37] pointer" />
            <button className="flex w-[63px] pt-[6px] pr-[10px] pb-[6px] pl-[10px] gap-[10px] items-start shrink-0 flex-nowrap bg-[#fff] rounded-[5px] border-solid border border-[#000] relative z-[38] pointer button-login">
              <span className="flex w-[43px] h-[25px] justify-center items-start shrink-0 basis-auto font-['Barlow'] text-[16px] font-light leading-[25px] text-[#000] relative text-center whitespace-nowrap z-[39]">
                Log in
              </span>
            </button>
            <button className="flex w-[72px] pt-[6px] pr-[10px] pb-[6px] pl-[10px] gap-[10px] items-start shrink-0 flex-nowrap bg-[#000] rounded-[5px] border-none relative z-40 pointer">
              <span className="flex w-[52px] h-[25px] justify-center items-start shrink-0 basis-auto font-['Barlow'] text-[16px] font-light leading-[25px] text-[#fff] relative text-center whitespace-nowrap z-[41]">
                Sign up
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
