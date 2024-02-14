import React from "react";
import "./PostContent.css";
import { MoreIn } from "./MoreIn";
import { PostComment } from "./PostComment";
import { Comment } from "./Comment";
export const PostContent = () => {
  return (
    <>
      <div className="flex flex-row mt-8">
        <div className="flex flex-col flex-grow " style={{ maxWidth: "75%" }}>
          <div className="post-content flex-grow">
            <div className="flex flex-col gap-[30px] items-start">
              <div className="flex w-[371px] gap-[30px] items-center shrink-0 flex-nowrap relative z-[19]">
                <div className="flex w-[371px] gap-[30px] items-center shrink-0 flex-nowrap relative z-20">
                  <div className="w-[60px] h-[60px] shrink-0 relative z-[21]">
                    <div className="w-[60px] h-[59.355px] bg-[url(public/images/126d878b-9296-438a-ab86-8d185397a3a1.png)] bg-[length:100%_100%] bg-no-repeat relative z-[23] mt-[0.32px] mr-0 mb-0 ml-0" />
                    <div className="w-full h-full bg-[#c4c4c4] rounded-[10px] absolute top-0 left-0 z-[22]" />
                  </div>
                  <div className="flex w-[281px] flex-col gap-[5px] items-start shrink-0 flex-nowrap relative z-[24]">
                    <span className="h-[30px] shrink-0 basis-auto font-['Barlow'] text-[20px] font-medium leading-[30px] text-[#000] relative text-left whitespace-nowrap z-[25]">
                      Emma｜Level 1 - Extra Soft Tofu
                    </span>
                    <span className="h-[24px] shrink-0 basis-auto font-['Barlow'] text-[18px] font-normal leading-[24px] text-[#000] tracking-[0.27px] relative text-left whitespace-nowrap z-[26]">
                      5 hours ago
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[15px] items-start self-stretch shrink-0 flex-nowrap relative z-[27]">
              <div className="flex pt-[10px] pr-0 pb-[10px] pl-0 justify-between items-baseline self-stretch shrink-0 flex-nowrap relative z-[28]">
                <span className="flex w-[861px] h-[44px] justify-start items-start shrink-0 basis-auto font-['Barlow'] text-[36px] font-bold leading-[44px] text-[#000] tracking-[-0.54px] relative text-left whitespace-nowrap z-[29]">
                  Check my newest tech gears folks!!
                </span>
                <div className="flex w-[93px] gap-[5px] items-end shrink-0 flex-nowrap relative z-30">
                  <span className="h-[25px] shrink-0 basis-auto font-['Barlow'] text-[16px] font-light leading-[25px] text-[#000] relative text-left whitespace-nowrap z-[31]">
                    Translate
                  </span>
                  <div className="w-[24px] h-[24px] shrink-0 bg-[url(public/images/d45621a7-d21c-4891-af5a-7737540b6a0a.png)] bg-cover bg-no-repeat relative overflow-hidden z-[32]" />
                </div>
              </div>
              <div className="h-[658.611px] self-stretch shrink-0 bg-[rgba(217,217,217,0.2)] bg-[url(public/images/4c8911575c26a2c5d152c8065da7c515e44e98ec.png)] bg-cover bg-no-repeat rounded-[5px] relative z-[33]" />
              <div className="flex flex-col gap-[10px] items-start self-stretch shrink-0 flex-nowrap relative z-[34]">
                <span className="flex w-[964px] h-[325px] justify-start items-start self-stretch shrink-0 font-['Barlow'] text-[16px] font-light leading-[25px] text-[#000] relative text-left z-[35]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum at posuere nisl. Sed diam enim, placerat at augue
                  vitae, aliquam volutpat turpis. Vestibulum pharetra semper
                  eros, ut faucibus sem euismod id. Nam vitae nisi placerat,
                  pellentesque leo eget, egestas diam. Sed accumsan dui eget
                  dignissim tincidunt. Nullam ut pharetra leo. Cras imperdiet
                  mattis arcu, ac ullamcorper nibh dignissim nec. Nam viverra
                  scelerisque ipsum, interdum pharetra nulla ultricies vitae.
                  Etiam cursus consequat dapibus. Aliquam sed finibus massa. Sed
                  libero velit, tempus et lectus sit amet, bibendum dapibus sem.
                  <br />
                  <br />
                  Ut auctor urna diam, sed convallis nisi dictum ut. Donec in
                  dictum felis. Aenean nisi eros, ornare nec porta vitae,
                  eleifend sit amet ex. Morbi mattis erat ac cursus aliquet.
                  Vestibulum sed augue vel erat pellentesque congue vitae
                  lacinia neque. Pellentesque sed scelerisque tortor, in
                  dignissim augue. Fusce neque mauris, ultrices nec orci et,
                  dapibus facilisis quam. Vivamus nec nibh vitae augue volutpat
                  malesuada.
                  <br />
                  Fusce ultrices et sem sit amet mollis. Aliquam gravida
                  convallis ex, id placerat nisl sodales non. Nunc quam turpis,
                  suscipit sit amet odio eget, tempor placerat lacus. Nunc
                  efficitur purus sit amet dapibus vestibulum. Donec ut turpis
                  sed lorem iaculis elementum et quis odio. Nunc pharetra varius
                  fringilla. Vivamus iaculis ac nisl eu ullamcorper. Quisque sem
                  augue, ornare at purus id, pulvinar scelerisque dui. In hac
                  habitasse platea dictumst. Etiam feugiat felis magna, ac
                  dictum lectus vulputate a.
                </span>
              </div>
            </div>
            <div className="flex w-[243px] gap-[10px] items-start shrink-0 flex-nowrap relative z-[36]">
              <button className="flex w-[50px] h-[37px] pt-[8px] pr-[15px] pb-[8px] pl-[15px] gap-[5px] items-center shrink-0 flex-nowrap bg-[rgba(220,228,244,0.5)] rounded-[18px] border-none relative z-[37] pointer">
                <span className="flex w-[20px] h-[25px] justify-center items-center shrink-0 basis-auto font-['Barlow'] text-[16px] font-light leading-[25px] text-[#2d477a] relative text-center whitespace-nowrap z-[38]">
                  UX
                </span>
              </button>
              <button className="flex w-[82px] h-[37px] pt-[8px] pr-[15px] pb-[8px] pl-[15px] gap-[5px] items-center shrink-0 flex-nowrap bg-[rgba(220,228,244,0.5)] rounded-[18px] border-none relative z-[39] pointer">
                <span className="flex w-[52px] h-[25px] justify-center items-center shrink-0 basis-auto font-['Barlow'] text-[16px] font-light leading-[25px] text-[#2d477a] relative text-center whitespace-nowrap z-40">
                  Layoffs
                </span>
              </button>
              <button className="flex w-[91px] h-[37px] pt-[8px] pr-[15px] pb-[8px] pl-[15px] gap-[5px] items-center shrink-0 flex-nowrap bg-[rgba(220,228,244,0.5)] rounded-[18px] border-none relative z-[41] pointer">
                <span className="flex w-[61px] h-[25px] justify-center items-center shrink-0 basis-auto font-['Barlow'] text-[16px] font-light leading-[25px] text-[#2d477a] relative text-center whitespace-nowrap z-[42]">
                  ChatGPT
                </span>
              </button>
            </div>
            <div className="flex w-[190.596px] gap-[10px] items-center shrink-0 flex-nowrap relative z-[43]">
              <div className="flex w-[90.298px] gap-[5px] items-center shrink-0 flex-nowrap relative z-[44]">
                <div className="w-[30.002px] h-[28.176px] shrink-0 relative z-[45]">
                  <div className="w-[20.002px] h-[16.439px] bg-[url(public/images/5e057932-af8d-4f54-9d40-92c6f586322b.png)] bg-[length:100%_100%] bg-no-repeat relative z-[46] mt-[4.696px] mr-0 mb-0 ml-[3.75px]" />
                </div>
                <span className="flex w-[55.296px] h-[28.176px] justify-start items-center shrink-0 basis-auto font-['Barlow'] text-[18px] font-normal leading-[28.176px] text-[#000] tracking-[0.27px] relative text-left whitespace-nowrap z-[47]">
                  130
                </span>
              </div>
              <div className="flex w-[90.298px] gap-[5px] items-center shrink-0 flex-nowrap relative z-[48]">
                <div className="w-[30.002px] h-[28.176px] shrink-0 relative z-[49]">
                  <div className="w-[17.502px] h-[16.436px] bg-[url(public/images/8f628007-dd0a-4334-bedb-235f7d7bb78f.png)] bg-[length:100%_100%] bg-no-repeat relative z-50 mt-[5.87px] mr-0 mb-0 ml-[6.25px]" />
                </div>
                <span className="flex w-[55.296px] h-[28.176px] justify-start items-center shrink-0 basis-auto font-['Barlow'] text-[18px] font-normal leading-[28.176px] text-[#000] tracking-[0.27px] relative text-left whitespace-nowrap z-[51]">
                  24
                </span>
              </div>
            </div>
          </div>
          <div>
            <PostComment />
          </div>
          <div>
            <Comment />
          </div>
        </div>
        <div className="ml-12 mt-36">
          <MoreIn />
        </div>
      </div>
    </>
  );
};
