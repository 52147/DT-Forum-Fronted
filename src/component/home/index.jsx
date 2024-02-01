import React from "react";
import "./index.css";
import { Slider } from "./Slider";
import { Topic } from "./Topic";

export const Home = () => {
  return (
    <div className="main-container w-[1440px] h-[2867px] bg-[#fff] relative mx-auto my-0">
      <Slider />
      <button className="flex w-[120px] gap-[5px] items-center flex-nowrap border-none relative z-[42] pointer mt-[2138px] mr-0 mb-0 ml-[660px]">
        <div className="w-[24px] h-[24px] shrink-0 relative z-[43]">
          <div className="w-[16px] h-[8.207px] bg-[url(../../assets/images/9796a494-1d06-4722-988c-dd51a5795ed5.png)] bg-[length:100%_100%] bg-no-repeat relative z-[44] mt-[7.897px] mr-0 mb-0 ml-[4px]" />
        </div>
        <span className="h-[24px] shrink-0 basis-auto font-['Barlow'] text-[18px] font-normal leading-[24px] text-[#000] tracking-0.27px relative text-left whitespace-nowrap z-[45]">
          Back to top
        </span>
      </button>
      <div className="w-[1441px] h-[216px] bg-[#4c4c4d] relative mt-[57px] mr-0 mb-0 ml-0">
        <div className="flex w-[228px] flex-col gap-[10px] items-start flex-nowrap relative z-[4] mt-[60.5px] mr-0 mb-0 ml-[80px]">
          <div className="flex w-[125px] gap-[5px] items-center shrink-0 flex-nowrap relative z-[5]">
            <div className="w-[24px] h-[24px] shrink-0 relative z-[6]">
              <div className="w-[13.984px] h-[14.007px] bg-[url(../../assets/images/77fc8fa8-470d-4c6a-9894-c35cbcee8369.png)] bg-[length:100%_100%] bg-no-repeat relative z-[7] mt-[5px] mr-0 mb-0 ml-[5px]" />
            </div>
            <span className="h-[25px] shrink-0 basis-auto font-['Barlow'] text-[16px] font-light leading-[25px] text-[#fff] relative text-left whitespace-nowrap z-[8]">
              1-714-889-225
            </span>
          </div>
          <div className="flex w-[202px] gap-[5px] items-center shrink-0 flex-nowrap relative z-[9]">
            <div className="w-[24px] h-[24px] shrink-0 relative z-10">
              <div className="w-[15px] h-[14.005px] bg-[url(../../assets/images/c77479c0-b54a-4b9c-938d-cb5f455db04e.png)] bg-[length:100%_100%] bg-no-repeat relative z-[11] mt-[5px] mr-0 mb-0 ml-[5px]" />
            </div>
            <span className="h-[25px] shrink-0 basis-auto font-['Barlow'] text-[16px] font-light leading-[25px] text-[#fff] relative text-left whitespace-nowrap z-[12]">
              diamondtofu@gmail.com
            </span>
          </div>
          <div className="flex w-[228px] gap-[5px] items-center shrink-0 flex-nowrap relative z-[13]">
            <div className="w-[24px] h-[24px] shrink-0 relative z-[14]">
              <div className="w-[11.999px] h-[13.999px] bg-[url(../../assets/images/d1c5f039-3de3-480b-8919-392279cbcd77.png)] bg-[length:100%_100%] bg-no-repeat relative z-[15] mt-[5px] mr-0 mb-0 ml-[6px]" />
            </div>
            <span className="h-[25px] shrink-0 basis-auto font-['Barlow'] text-[16px] font-light leading-[25px] text-[#fff] relative text-left whitespace-nowrap z-[16]">
              1 Leighton St, Cambridge, MA
            </span>
          </div>
        </div>
        <div className="flex w-[314.963px] gap-[14px] items-center flex-nowrap relative z-[1] mt-[4.5px] mr-0 mb-0 ml-[1126.037px]">
          <div className="w-[32.963px] h-[30px] shrink-0 bg-[url(../../assets/images/a850eb20-8c5a-4d68-96f3-f63c61781e40.png)] bg-cover bg-no-repeat relative z-[2]" />
          <div className="w-[268px] shrink-0 font-['Comfortaa'] text-[22px] font-normal leading-[29px] relative text-left whitespace-nowrap z-[3]">
            <span className="font-['Futura'] text-[22px] font-medium leading-[26.4px] text-[#fff] relative text-left">
              DIAMOND
            </span>
            <span className="font-['Comfortaa'] text-[22px] font-normal leading-[26.4px] text-[#fff] relative text-left">
              Tofu
            </span>
          </div>
        </div>
      </div>
      <Topic />
      <span className="flex h-[36px] justify-start items-start font-['Barlow'] text-[24px] font-medium leading-[36px] text-[#000] tracking--0.36px absolute top-[503px] left-[260px] text-left whitespace-nowrap z-[47]">
        Discussions
      </span>
      <button className="flex w-[179px] h-[36px] pt-[6px] pr-[15px] pb-[6px] pl-[15px] gap-[5px] items-center flex-nowrap bg-[#000] rounded-[22px] border-none absolute top-[557px] left-[1161px] z-[341] pointer">
        <div className="w-[24px] h-[24px] shrink-0 relative overflow-hidden z-[342]">
          <div className="w-[16px] h-[16px] bg-[url(../../assets/images/fe136d28-a7c4-4605-b5a1-5eacf3d2ee37.png)] bg-[length:100%_100%] bg-no-repeat relative z-[343] mt-[4px] mr-0 mb-0 ml-[4px]" />
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
        <button className="flex w-[111px] pt-[6px] pr-[10px] pb-[6px] pl-[10px] gap-[5px] items-center shrink-0 flex-nowrap bg-[#fff] rounded-[5px] border-solid border border-[#000] relative z-[329] pointer">
          <span className="flex w-[62px] h-[25px] justify-center items-start shrink-0 basis-auto font-['Barlow'] text-[16px] font-light leading-[25px] text-[#000] relative text-center whitespace-nowrap z-[330]">
            Location
          </span>
          <div className="w-[24px] h-[24px] shrink-0 relative z-[331]">
            <div className="w-[16px] h-[8.207px] bg-[url(../../assets/images/7f918e6c-e15a-4200-9a13-32619d518c04.png)] bg-[length:100%_100%] bg-no-repeat relative z-[332] mt-[7.897px] mr-0 mb-0 ml-[4px]" />
          </div>
        </button>
        <div className="flex w-[84px] pt-[6px] pr-[10px] pb-[6px] pl-[10px] gap-[5px] items-center shrink-0 flex-nowrap bg-[#fff] rounded-[5px] border-solid border border-[#000] relative z-[333]">
          <span className="flex w-[35px] h-[25px] justify-center items-start shrink-0 basis-auto font-['Barlow'] text-[16px] font-light leading-[25px] text-[#000] relative text-center whitespace-nowrap z-[334]">
            More
          </span>
          <div className="w-[24px] h-[24px] shrink-0 relative z-[335]">
            <div className="w-[16px] h-[8.207px] bg-[url(../../assets/images/dbf7bf16-39ee-4763-8472-16e9fc870493.png)] bg-[length:100%_100%] bg-no-repeat relative z-[336] mt-[7.897px] mr-0 mb-0 ml-[4px]" />
          </div>
        </div>
        <div className="flex w-[316px] pt-[6px] pr-[13px] pb-[6px] pl-[13px] gap-[10px] items-center shrink-0 flex-nowrap rounded-[5px] border-solid border border-[#000] relative z-[337]">
          <div className="w-[24px] h-[24px] shrink-0 relative z-[338]">
            <div className="w-[14px] h-[14.001px] bg-[url(../../assets/images/92fe01d7-045c-4214-a8f6-c4734d5a6025.png)] bg-[length:100%_100%] bg-no-repeat relative z-[339] mt-[5px] mr-0 mb-0 ml-[5px]" />
          </div>
          <span className="h-[25px] shrink-0 basis-auto font-['Barlow'] text-[16px] font-light leading-[25px] text-[#c4c4c4] relative text-left whitespace-nowrap z-[340]">
            Search all discussions
          </span>
        </div>
      </div>

      <div className="flex w-[1100px] h-[1877.845px] flex-col gap-[10px] items-start flex-nowrap absolute top-[620px] left-[260px] z-[48]">
        <div className="w-[1020px] shrink-0 bg-[url(../../assets/images/565aa5cd-7256-430a-95ea-542860a82caf.png)] bg-cover bg-no-repeat relative z-[49]" />
        <div className="flex w-[1140px] flex-col gap-[15px] items-start shrink-0 flex-nowrap relative z-50">
          <div className="flex w-[1140px] gap-[50px] items-center shrink-0 flex-nowrap relative z-[51]">
            <div className="flex w-[600px] flex-col gap-[5px] items-start shrink-0 flex-nowrap relative z-[52]">
              <span className="h-[30px] self-stretch shrink-0 basis-auto font-['Barlow'] text-[20px] font-medium leading-[30px] text-[#000] relative text-left whitespace-nowrap z-[53]">
                What’s your experience of wedding planning post-covid?
              </span>
              <span className="h-[25px] self-stretch shrink-0 basis-auto font-['Barlow'] text-[16px] font-light leading-[25px] text-[rgba(0,0,0,0.8)] relative text-left whitespace-nowrap z-[54]">
                Hey yall, I’m getting married this July. Any suggestions on
                hotel choosing, wedding...
              </span>
            </div>
            <div className="flex w-[490px] gap-[30px] items-center shrink-0 flex-nowrap relative z-[55]">
              <div className="flex w-[100px] gap-[2px] items-end shrink-0 flex-nowrap relative z-[56]">
                <div className="w-[24px] h-[24px] shrink-0 relative z-[57]">
                  <div className="w-[14.003px] h-[12.02px] bg-[url(../../assets/images/c250c33b-478a-4d67-b365-67e4d09429f8.png)] bg-[length:100%_100%] bg-no-repeat relative z-[58] mt-[6px] mr-0 mb-0 ml-[5px]" />
                </div>
                <span className="h-[25px] shrink-0 basis-auto font-['Barlow'] text-[16px] font-light leading-[25px] text-[#000] relative text-left whitespace-nowrap z-[59]">
                  Learning
                </span>
              </div>
              <div className="flex w-[100px] gap-[2px] items-end shrink-0 flex-nowrap relative z-[60]">
                <div className="w-[24px] h-[24px] shrink-0 relative z-[61]">
                  <div className="w-[11px] h-[13.951px] bg-[url(../../assets/images/d9ceef27-896a-44fc-b308-6ecaf2192ded.png)] bg-[length:100%_100%] bg-no-repeat relative z-[62] mt-[5px] mr-0 mb-0 ml-[6.5px]" />
                </div>
                <span className="h-[25px] shrink-0 basis-auto font-['Barlow'] text-[16px] font-light leading-[25px] text-[#000] relative text-left whitespace-nowrap z-[63]">
                  Author
                </span>
              </div>
              <button className="flex w-[100px] gap-[2px] items-end shrink-0 flex-nowrap border-none relative z-[64] pointer">
                <span className="h-[25px] shrink-0 basis-auto font-['Barlow'] text-[16px] font-light leading-[25px] text-[#000] relative text-left whitespace-nowrap z-[65]">
                  06-30-2023
                </span>
              </button>
              <div className="flex w-[100px] gap-[2px] items-end shrink-0 flex-nowrap relative z-[66]">
                <div className="w-[24px] h-[24px] shrink-0 relative z-[67]">
                  <div className="w-[14px] h-[14px] bg-[url(../../assets/images/9855b621-d438-494c-8ac3-293e4cb554a9.png)] bg-[length:100%_100%] bg-no-repeat relative z-[68] mt-[5px] mr-0 mb-0 ml-[5px]" />
                </div>
                <span className="h-[25px] shrink-0 basis-auto font-['Barlow'] text-[16px] font-light leading-[25px] text-[#000] relative text-left whitespace-nowrap z-[69]">
                  240
                </span>
              </div>
            </div>
          </div>
          <div className="flex w-[337px] gap-[15px] items-start shrink-0 flex-nowrap relative z-[70]">
            <button className="flex w-[135px] h-[37px] pt-[8px] pr-[15px] pb-[8px] pl-[15px] gap-[5px] items-center shrink-0 flex-nowrap bg-[rgba(220,228,244,0.5)] rounded-[18px] border-none relative z-[71] pointer">
              <span className="flex w-[105px] h-[25px] justify-center items-center shrink-0 basis-auto font-['Barlow'] text-[16px] font-light leading-[25px] text-[#2d477a] relative text-center whitespace-nowrap z-[72]">
                Travel Wedding
              </span>
            </button>
            <button className="flex w-[89px] h-[37px] pt-[8px] pr-[15px] pb-[8px] pl-[15px] gap-[5px] items-center shrink-0 flex-nowrap bg-[rgba(220,228,244,0.5)] rounded-[18px] border-none relative z-[73] pointer">
              <span className="flex w-[59px] h-[25px] justify-center items-center shrink-0 basis-auto font-['Barlow'] text-[16px] font-light leading-[25px] text-[#2d477a] relative text-center whitespace-nowrap z-[74]">
                Lifestyle
              </span>
            </button>
            <button className="flex w-[83px] h-[37px] pt-[8px] pr-[15px] pb-[8px] pl-[15px] gap-[5px] items-center shrink-0 flex-nowrap bg-[rgba(220,228,244,0.5)] rounded-[18px] border-none relative z-[75] pointer">
              <span className="flex w-[53px] h-[25px] justify-center items-center shrink-0 basis-auto font-['Barlow'] text-[16px] font-light leading-[25px] text-[#2d477a] relative text-center whitespace-nowrap z-[76]">
                Clothes
              </span>
            </button>
          </div>
          <div className="flex w-[114px] gap-[5px] items-center shrink-0 flex-nowrap relative z-[77]">
            <div className="w-[24px] h-[24px] shrink-0 relative z-[78]">
              <div className="w-[16px] h-[8.207px] bg-[url(../../assets/images/95712e52-0ac2-4039-9a4e-b2e54edbbaca.png)] bg-[length:100%_100%] bg-no-repeat relative z-[79] mt-[7.897px] mr-0 mb-0 ml-[4px]" />
            </div>
            <span className="h-[25px] shrink-0 basis-auto font-['Barlow'] text-[16px] font-light leading-[25px] text-[#000] relative text-left whitespace-nowrap z-[80]">
              Hide images
            </span>
          </div>
          <div className="flex w-[1100px] gap-[15px] items-start shrink-0 flex-nowrap relative z-[81]">
            <div className="w-[272.922px] h-[272.922px] shrink-0 bg-[rgba(196,196,196,0.2)] bg-[url(../../assets/images/c8658b2d2b6167006f75b9b0819a2cd337d2c068.png)] bg-cover bg-no-repeat rounded-[5px] relative z-[82]" />
            <div className="w-[272.922px] h-[272.922px] shrink-0 bg-[rgba(196,196,196,0.2)] bg-[url(../../assets/images/400d95010a9b3469b64e5fb10a05a6a3e0e4bac9.png)] bg-cover bg-no-repeat rounded-[5px] relative z-[83]" />
            <div className="w-[272.922px] h-[272.922px] shrink-0 bg-[rgba(255,255,255,0.2)] bg-[url(../../assets/images/7e514397b6281205dce094a1936b0e543b6d4e4f.png)] bg-cover bg-no-repeat rounded-[5px] relative z-[84]" />
          </div>
        </div>
        <div className="w-[1020px] shrink-0 bg-[url(../../assets/images/268305b8-eaf2-4abd-82f3-feef2ebc6ebc.png)] bg-cover bg-no-repeat relative z-[85]" />
        <div className="flex w-[1140px] flex-col gap-[15px] items-start shrink-0 flex-nowrap relative z-[86]">
          <div className="flex w-[1140px] gap-[50px] items-center shrink-0 flex-nowrap relative z-[87]">
            <div className="flex w-[600px] flex-col gap-[5px] items-start shrink-0 flex-nowrap relative z-[88]">
              <span className="h-[30px] self-stretch shrink-0 basis-auto font-['Barlow'] text-[20px] font-medium leading-[30px] text-[#000] relative text-left whitespace-nowrap z-[89]">
                Lorem ipsum dfsoj sdfi
              </span>
              <span className="h-[25px] self-stretch shrink-0 basis-auto font-['Barlow'] text-[16px] font-light leading-[25px] text-[rgba(0,0,0,0.8)] relative text-left whitespace-nowrap z-[90]">
                Post preview - Nemo enim ipsam voluptatem quia voluptas sit sdfj
              </span>
            </div>
            <div className="flex w-[490px] gap-[30px] items-center shrink-0 flex-nowrap relative z-[91]">
              <div className="flex w-[100px] gap-[2px] items-end shrink-0 flex-nowrap relative z-[92]">
                <div className="w-[24px] h-[24px] shrink-0 relative z-[93]">
                  <div className="w-[14.003px] h-[12.02px] bg-[url(../../assets/images/cad88275-378d-4fe5-b71d-b567d605ae25.png)] bg-[length:100%_100%] bg-no-repeat relative z-[94] mt-[6px] mr-0 mb-0 ml-[5px]" />
                </div>
                <span className="h-[25px] shrink-0 basis-auto font-['Barlow'] text-[16px] font-light leading-[25px] text-[#000] relative text-left whitespace-nowrap z-[95]">
                  Learning
                </span>
              </div>
              <div className="flex w-[100px] gap-[2px] items-end shrink-0 flex-nowrap relative z-[96]">
                <div className="w-[24px] h-[24px] shrink-0 relative z-[97]">
                  <div className="w-[11px] h-[13.951px] bg-[url(../../assets/images/e864e600-8246-4452-915f-48e34c0bb093.png)] bg-[length:100%_100%] bg-no-repeat relative z-[98] mt-[5px] mr-0 mb-0 ml-[6.5px]" />
                </div>
                <button className="w-[47px] h-[25px] shrink-0 font-['Barlow'] text-[16px] font-light leading-[25px] text-[#000] border-none relative z-[99] pointer" />
              </div>
              <button className="flex w-[100px] gap-[2px] items-end shrink-0 flex-nowrap border-none relative z-[100] pointer">
                <span className="h-[25px] shrink-0 basis-auto font-['Barlow'] text-[16px] font-light leading-[25px] text-[#000] relative text-left whitespace-nowrap z-[101]">
                  06-30-2023
                </span>
              </button>
              <div className="flex w-[100px] gap-[2px] items-end shrink-0 flex-nowrap relative z-[102]">
                <div className="w-[24px] h-[24px] shrink-0 relative z-[103]">
                  <div className="w-[14px] h-[14px] bg-[url(../../assets/images/0ab4f889-1444-419a-91e3-0c9002e0a5e6.png)] bg-[length:100%_100%] bg-no-repeat relative z-[104] mt-[5px] mr-0 mb-0 ml-[5px]" />
                </div>
                <button className="w-[27px] h-[25px] shrink-0 font-['Barlow'] text-[16px] font-light leading-[25px] text-[#000] border-none relative z-[105] pointer" />
              </div>
            </div>
          </div>
          <div className="flex w-[337px] gap-[15px] items-start shrink-0 flex-nowrap relative z-[106]">
            <button className="flex w-[135px] h-[37px] pt-[8px] pr-[15px] pb-[8px] pl-[15px] gap-[5px] items-center shrink-0 flex-nowrap bg-[rgba(220,228,244,0.5)] rounded-[18px] border-none relative z-[107] pointer">
              <span className="flex w-[105px] h-[25px] justify-center items-center shrink-0 basis-auto font-['Barlow'] text-[16px] font-light leading-[25px] text-[#2d477a] relative text-center whitespace-nowrap z-[108]">
                Travel Wedding
              </span>
            </button>
            <button className="flex w-[89px] h-[37px] pt-[8px] pr-[15px] pb-[8px] pl-[15px] gap-[5px] items-center shrink-0 flex-nowrap bg-[rgba(220,228,244,0.5)] rounded-[18px] border-none relative z-[109] pointer">
              <span className="flex w-[59px] h-[25px] justify-center items-center shrink-0 basis-auto font-['Barlow'] text-[16px] font-light leading-[25px] text-[#2d477a] relative text-center whitespace-nowrap z-[110]">
                Lifestyle
              </span>
            </button>
            <button className="flex w-[83px] h-[37px] pt-[8px] pr-[15px] pb-[8px] pl-[15px] gap-[5px] items-center shrink-0 flex-nowrap bg-[rgba(220,228,244,0.5)] rounded-[18px] border-none relative z-[111] pointer">
              <span className="flex w-[53px] h-[25px] justify-center items-center shrink-0 basis-auto font-['Barlow'] text-[16px] font-light leading-[25px] text-[#2d477a] relative text-center whitespace-nowrap z-[112]">
                Clothes
              </span>
            </button>
          </div>
        </div>
        <div className="w-[1020px] shrink-0 bg-[url(../../assets/images/43d8108a-e496-4483-930e-21dc708ce84c.png)] bg-cover bg-no-repeat relative z-[113]" />
        <div className="flex w-[1140px] flex-col gap-[15px] items-start shrink-0 flex-nowrap relative z-[114]">
          <div className="flex w-[1140px] gap-[50px] items-center shrink-0 flex-nowrap relative z-[115]">
            <div className="flex w-[600px] flex-col gap-[5px] items-start shrink-0 flex-nowrap relative z-[116]">
              <span className="h-[30px] self-stretch shrink-0 basis-auto font-['Barlow'] text-[20px] font-medium leading-[30px] text-[#000] relative text-left whitespace-nowrap z-[117]">
                Lorem ipsum dfsoj sdfi
              </span>
              <span className="h-[25px] self-stretch shrink-0 basis-auto font-['Barlow'] text-[16px] font-light leading-[25px] text-[rgba(0,0,0,0.8)] relative text-left whitespace-nowrap z-[118]">
                Post preview - Nemo enim ipsam voluptatem quia voluptas sit sdfj
              </span>
            </div>
            <div className="flex w-[490px] gap-[30px] items-center shrink-0 flex-nowrap relative z-[119]">
              <button className="flex w-[100px] gap-[2px] items-end shrink-0 flex-nowrap border-none relative z-[120] pointer">
                <div className="w-[24px] h-[24px] shrink-0 relative z-[121]">
                  <div className="w-[14.003px] h-[12.02px] bg-[url(../../assets/images/30320697-bfac-477c-8753-99d140b2830c.png)] bg-[length:100%_100%] bg-no-repeat relative z-[122] mt-[6px] mr-0 mb-0 ml-[5px]" />
                </div>
                <span className="h-[25px] shrink-0 basis-auto font-['Barlow'] text-[16px] font-light leading-[25px] text-[#000] relative text-left whitespace-nowrap z-[123]">
                  Learning
                </span>
              </button>
              <div className="flex w-[100px] gap-[2px] items-end shrink-0 flex-nowrap relative z-[124]">
                <div className="w-[24px] h-[24px] shrink-0 relative z-[125]">
                  <div className="w-[11px] h-[13.951px] bg-[url(../../assets/images/96a3e084-39e1-4ddb-a29d-beb361d68b15.png)] bg-[length:100%_100%] bg-no-repeat relative z-[126] mt-[5px] mr-0 mb-0 ml-[6.5px]" />
                </div>
                <button className="w-[47px] h-[25px] shrink-0 font-['Barlow'] text-[16px] font-light leading-[25px] text-[#000] border-none relative z-[127] pointer" />
              </div>
              <button className="flex w-[100px] gap-[2px] items-end shrink-0 flex-nowrap border-none relative z-[128] pointer">
                <span className="h-[25px] shrink-0 basis-auto font-['Barlow'] text-[16px] font-light leading-[25px] text-[#000] relative text-left whitespace-nowrap z-[129]">
                  06-30-2023
                </span>
              </button>
              <div className="flex w-[100px] gap-[2px] items-end shrink-0 flex-nowrap relative z-[130]">
                <div className="w-[24px] h-[24px] shrink-0 relative z-[131]">
                  <div className="w-[14px] h-[14px] bg-[url(../../assets/images/91361b57-17c5-480a-80d6-e85899e86621.png)] bg-[length:100%_100%] bg-no-repeat relative z-[132] mt-[5px] mr-0 mb-0 ml-[5px]" />
                </div>
                <button className="w-[27px] h-[25px] shrink-0 font-['Barlow'] text-[16px] font-light leading-[25px] text-[#000] border-none relative z-[133] pointer" />
              </div>
            </div>
          </div>
          <div className="flex w-[337px] gap-[15px] items-start shrink-0 flex-nowrap relative z-[134]">
            <button className="flex w-[135px] h-[37px] pt-[8px] pr-[15px] pb-[8px] pl-[15px] gap-[5px] items-center shrink-0 flex-nowrap bg-[rgba(220,228,244,0.5)] rounded-[18px] border-none relative z-[135] pointer">
              <span className="flex w-[105px] h-[25px] justify-center items-center shrink-0 basis-auto font-['Barlow'] text-[16px] font-light leading-[25px] text-[#2d477a] relative text-center whitespace-nowrap z-[136]">
                Travel Wedding
              </span>
            </button>
            <button className="flex w-[89px] h-[37px] pt-[8px] pr-[15px] pb-[8px] pl-[15px] gap-[5px] items-center shrink-0 flex-nowrap bg-[rgba(220,228,244,0.5)] rounded-[18px] border-none relative z-[137] pointer">
              <span className="flex w-[59px] h-[25px] justify-center items-center shrink-0 basis-auto font-['Barlow'] text-[16px] font-light leading-[25px] text-[#2d477a] relative text-center whitespace-nowrap z-[138]">
                Lifestyle
              </span>
            </button>
            <button className="flex w-[83px] h-[37px] pt-[8px] pr-[15px] pb-[8px] pl-[15px] gap-[5px] items-center shrink-0 flex-nowrap bg-[rgba(220,228,244,0.5)] rounded-[18px] border-none relative z-[139] pointer">
              <span className="flex w-[53px] h-[25px] justify-center items-center shrink-0 basis-auto font-['Barlow'] text-[16px] font-light leading-[25px] text-[#2d477a] relative text-center whitespace-nowrap z-[140]">
                Clothes
              </span>
            </button>
          </div>
        </div>
        <div className="w-[1020px] shrink-0 bg-[url(../../assets/images/5cd48758-45c9-4a79-beda-30bbf9b8ab41.png)] bg-cover bg-no-repeat relative z-[141]" />
        <div className="flex w-[1140px] flex-col gap-[15px] items-start shrink-0 flex-nowrap relative z-[142]">
          <div className="flex w-[1140px] gap-[50px] items-center shrink-0 flex-nowrap relative z-[143]">
            <div className="flex w-[600px] flex-col gap-[5px] items-start shrink-0 flex-nowrap relative z-[144]">
              <span className="h-[30px] self-stretch shrink-0 basis-auto font-['Barlow'] text-[20px] font-medium leading-[30px] text-[#000] relative text-left whitespace-nowrap z-[145]">
                Lorem ipsum dfsoj sdfi
              </span>
              <span className="h-[25px] self-stretch shrink-0 basis-auto font-['Barlow'] text-[16px] font-light leading-[25px] text-[rgba(0,0,0,0.8)] relative text-left whitespace-nowrap z-[146]">
                Post preview - Nemo enim ipsam voluptatem quia voluptas sit sdfj
              </span>
            </div>
            <div className="flex w-[490px] gap-[30px] items-center shrink-0 flex-nowrap relative z-[147]">
              <div className="flex w-[100px] gap-[2px] items-end shrink-0 flex-nowrap relative z-[148]">
                <div className="w-[24px] h-[24px] shrink-0 relative z-[149]">
                  <div className="w-[14.003px] h-[12.02px] bg-[url(../../assets/images/29790d02-789b-4ce5-8376-29d89931143b.png)] bg-[length:100%_100%] bg-no-repeat relative z-[150] mt-[6px] mr-0 mb-0 ml-[5px]" />
                </div>
                <span className="h-[25px] shrink-0 basis-auto font-['Barlow'] text-[16px] font-light leading-[25px] text-[#000] relative text-left whitespace-nowrap z-[151]">
                  Learning
                </span>
              </div>
              <div className="flex w-[100px] gap-[2px] items-end shrink-0 flex-nowrap relative z-[152]">
                <div className="w-[24px] h-[24px] shrink-0 relative z-[153]">
                  <div className="w-[11px] h-[13.951px] bg-[url(../../assets/images/361ebe41-7bf3-4cc0-982e-d9a978ab1712.png)] bg-[length:100%_100%] bg-no-repeat relative z-[154] mt-[5px] mr-0 mb-0 ml-[6.5px]" />
                </div>
                <button className="w-[47px] h-[25px] shrink-0 font-['Barlow'] text-[16px] font-light leading-[25px] text-[#000] border-none relative z-[155] pointer" />
              </div>
              <button className="flex w-[100px] gap-[2px] items-end shrink-0 flex-nowrap border-none relative z-[156] pointer">
                <span className="h-[25px] shrink-0 basis-auto font-['Barlow'] text-[16px] font-light leading-[25px] text-[#000] relative text-left whitespace-nowrap z-[157]">
                  06-30-2023
                </span>
              </button>
              <div className="flex w-[100px] gap-[2px] items-end shrink-0 flex-nowrap relative z-[158]">
                <div className="w-[24px] h-[24px] shrink-0 relative z-[159]">
                  <div className="w-[14px] h-[14px] bg-[url(../../assets/images/86d5a367-8d84-4255-aa28-0b21c69a9485.png)] bg-[length:100%_100%] bg-no-repeat relative z-[160] mt-[5px] mr-0 mb-0 ml-[5px]" />
                </div>
                <button className="w-[27px] h-[25px] shrink-0 font-['Barlow'] text-[16px] font-light leading-[25px] text-[#000] border-none relative z-[161] pointer" />
              </div>
            </div>
          </div>
          <div className="flex w-[337px] gap-[15px] items-start shrink-0 flex-nowrap relative z-[162]">
            <button className="flex w-[135px] h-[37px] pt-[8px] pr-[15px] pb-[8px] pl-[15px] gap-[5px] items-center shrink-0 flex-nowrap bg-[rgba(220,228,244,0.5)] rounded-[18px] border-none relative z-[163] pointer">
              <span className="flex w-[105px] h-[25px] justify-center items-center shrink-0 basis-auto font-['Barlow'] text-[16px] font-light leading-[25px] text-[#2d477a] relative text-center whitespace-nowrap z-[164]">
                Travel Wedding
              </span>
            </button>
            <button className="flex w-[89px] h-[37px] pt-[8px] pr-[15px] pb-[8px] pl-[15px] gap-[5px] items-center shrink-0 flex-nowrap bg-[rgba(220,228,244,0.5)] rounded-[18px] border-none relative z-[165] pointer">
              <span className="flex w-[59px] h-[25px] justify-center items-center shrink-0 basis-auto font-['Barlow'] text-[16px] font-light leading-[25px] text-[#2d477a] relative text-center whitespace-nowrap z-[166]">
                Lifestyle
              </span>
            </button>
            <button className="flex w-[83px] h-[37px] pt-[8px] pr-[15px] pb-[8px] pl-[15px] gap-[5px] items-center shrink-0 flex-nowrap bg-[rgba(220,228,244,0.5)] rounded-[18px] border-none relative z-[167] pointer">
              <span className="flex w-[53px] h-[25px] justify-center items-center shrink-0 basis-auto font-['Barlow'] text-[16px] font-light leading-[25px] text-[#2d477a] relative text-center whitespace-nowrap z-[168]">
                Clothes
              </span>
            </button>
          </div>
        </div>
        <div className="w-[1020px] shrink-0 bg-[url(../../assets/images/8c787cb5-e7a7-433f-b674-9e12078a7b02.png)] bg-cover bg-no-repeat relative z-[169]" />
        <div className="flex w-[1140px] flex-col gap-[15px] items-start shrink-0 flex-nowrap relative z-[170]">
          <div className="flex w-[1140px] gap-[50px] items-center shrink-0 flex-nowrap relative z-[171]">
            <div className="flex w-[600px] flex-col gap-[5px] items-start shrink-0 flex-nowrap relative z-[172]">
              <span className="h-[30px] self-stretch shrink-0 basis-auto font-['Barlow'] text-[20px] font-medium leading-[30px] text-[#000] relative text-left whitespace-nowrap z-[173]">
                Check out my newest tech gears folks!!
              </span>
              <span className="h-[25px] self-stretch shrink-0 basis-auto font-['Barlow'] text-[16px] font-light leading-[25px] text-[rgba(0,0,0,0.8)] relative text-left whitespace-nowrap z-[174]">
                Macbook magic mouse + Marshall retro speaker
              </span>
            </div>
            <div className="flex w-[490px] gap-[30px] items-center shrink-0 flex-nowrap relative z-[175]">
              <button className="flex w-[100px] gap-[2px] items-end shrink-0 flex-nowrap border-none relative z-[176] pointer">
                <div className="w-[24px] h-[24px] shrink-0 relative z-[177]">
                  <div className="w-[14.003px] h-[12.02px] bg-[url(../../assets/images/adb86608-355b-4186-bd82-f75563dae9c6.png)] bg-[length:100%_100%] bg-no-repeat relative z-[178] mt-[6px] mr-0 mb-0 ml-[5px]" />
                </div>
                <span className="h-[25px] shrink-0 basis-auto font-['Barlow'] text-[16px] font-light leading-[25px] text-[#000] relative text-left whitespace-nowrap z-[179]">
                  Learning
                </span>
              </button>
              <div className="flex w-[100px] gap-[2px] items-end shrink-0 flex-nowrap relative z-[180]">
                <div className="w-[24px] h-[24px] shrink-0 relative z-[181]">
                  <div className="w-[11px] h-[13.951px] bg-[url(../../assets/images/05d5f7ee-6073-4f90-ae7f-473737e5cff1.png)] bg-[length:100%_100%] bg-no-repeat relative z-[182] mt-[5px] mr-0 mb-0 ml-[6.5px]" />
                </div>
                <button className="w-[47px] h-[25px] shrink-0 font-['Barlow'] text-[16px] font-light leading-[25px] text-[#000] border-none relative z-[183] pointer" />
              </div>
              <button className="flex w-[100px] gap-[2px] items-end shrink-0 flex-nowrap border-none relative z-[184] pointer">
                <span className="h-[25px] shrink-0 basis-auto font-['Barlow'] text-[16px] font-light leading-[25px] text-[#000] relative text-left whitespace-nowrap z-[185]">
                  06-30-2023
                </span>
              </button>
              <div className="flex w-[100px] gap-[2px] items-end shrink-0 flex-nowrap relative z-[186]">
                <div className="w-[24px] h-[24px] shrink-0 relative z-[187]">
                  <div className="w-[14px] h-[14px] bg-[url(../../assets/images/c6636105-dc96-474c-a36f-e783f56cf7ec.png)] bg-[length:100%_100%] bg-no-repeat relative z-[188] mt-[5px] mr-0 mb-0 ml-[5px]" />
                </div>
                <button className="w-[27px] h-[25px] shrink-0 font-['Barlow'] text-[16px] font-light leading-[25px] text-[#000] border-none relative z-[189] pointer" />
              </div>
            </div>
          </div>
          <div className="flex w-[337px] gap-[15px] items-start shrink-0 flex-nowrap relative z-[190]">
            <button className="flex w-[135px] h-[37px] pt-[8px] pr-[15px] pb-[8px] pl-[15px] gap-[5px] items-center shrink-0 flex-nowrap bg-[rgba(220,228,244,0.5)] rounded-[18px] border-none relative z-[191] pointer">
              <span className="flex w-[105px] h-[25px] justify-center items-center shrink-0 basis-auto font-['Barlow'] text-[16px] font-light leading-[25px] text-[#2d477a] relative text-center whitespace-nowrap z-[192]">
                Travel Wedding
              </span>
            </button>
            <button className="flex w-[89px] h-[37px] pt-[8px] pr-[15px] pb-[8px] pl-[15px] gap-[5px] items-center shrink-0 flex-nowrap bg-[rgba(220,228,244,0.5)] rounded-[18px] border-none relative z-[193] pointer">
              <span className="flex w-[59px] h-[25px] justify-center items-center shrink-0 basis-auto font-['Barlow'] text-[16px] font-light leading-[25px] text-[#2d477a] relative text-center whitespace-nowrap z-[194]">
                Lifestyle
              </span>
            </button>
            <button className="flex w-[83px] h-[37px] pt-[8px] pr-[15px] pb-[8px] pl-[15px] gap-[5px] items-center shrink-0 flex-nowrap bg-[rgba(220,228,244,0.5)] rounded-[18px] border-none relative z-[195] pointer">
              <span className="flex w-[53px] h-[25px] justify-center items-center shrink-0 basis-auto font-['Barlow'] text-[16px] font-light leading-[25px] text-[#2d477a] relative text-center whitespace-nowrap z-[196]">
                Clothes
              </span>
            </button>
          </div>
          <div className="flex w-[114px] gap-[5px] items-center shrink-0 flex-nowrap relative z-[197]">
            <div className="w-[24px] h-[24px] shrink-0 relative z-[198]">
              <div className="w-[16px] h-[8.207px] bg-[url(../../assets/images/7ad7647c-7a20-4bf6-8dbe-cd3261941ef3.png)] bg-[length:100%_100%] bg-no-repeat relative z-[199] mt-[7.897px] mr-0 mb-0 ml-[4px]" />
            </div>
            <span className="h-[25px] shrink-0 basis-auto font-['Barlow'] text-[16px] font-light leading-[25px] text-[#000] relative text-left whitespace-nowrap z-[200]">
              Hide images
            </span>
          </div>
          <div className="flex w-[1100px] gap-[15px] items-start shrink-0 flex-nowrap relative z-[201]">
            <div className="w-[272.922px] h-[272.922px] shrink-0 bg-[rgba(196,196,196,0.2)] bg-[url(../../assets/images/7ff140a1afb1bf5079a8adb64b4062cacd0d6079.png)] bg-cover bg-no-repeat rounded-[5px] relative z-[202]" />
            <div className="w-[272.922px] h-[272.922px] shrink-0 bg-[rgba(196,196,196,0.2)] bg-[url(../../assets/images/877fe59da88eaf75d9959a01ef7869111a4574cd.png)] bg-cover bg-no-repeat rounded-[5px] relative z-[203]" />
            <div className="w-[272.922px] h-[272.922px] shrink-0 bg-[#fff] rounded-[5px] relative z-[204]" />
          </div>
        </div>
        <div className="w-[1020px] shrink-0 bg-[url(../../assets/images/f0e8687f-d4b1-4f1f-8a7e-5b8b72054fea.png)] bg-cover bg-no-repeat relative z-[205]" />
        <div className="flex w-[1140px] flex-col gap-[15px] items-start shrink-0 flex-nowrap relative z-[206]">
          <div className="flex w-[1140px] gap-[50px] items-center shrink-0 flex-nowrap relative z-[207]">
            <div className="flex w-[600px] flex-col gap-[5px] items-start shrink-0 flex-nowrap relative z-[208]">
              <span className="h-[30px] self-stretch shrink-0 basis-auto font-['Barlow'] text-[20px] font-medium leading-[30px] text-[#000] relative text-left whitespace-nowrap z-[209]">
                Lorem ipsum dfsoj sdfi
              </span>
              <span className="h-[25px] self-stretch shrink-0 basis-auto font-['Barlow'] text-[16px] font-light leading-[25px] text-[rgba(0,0,0,0.8)] relative text-left whitespace-nowrap z-[210]">
                Post preview - Nemo enim ipsam voluptatem quia voluptas sit sdfj
              </span>
            </div>
            <div className="flex w-[490px] gap-[30px] items-center shrink-0 flex-nowrap relative z-[211]">
              <button className="flex w-[100px] gap-[2px] items-end shrink-0 flex-nowrap border-none relative z-[212] pointer">
                <div className="w-[24px] h-[24px] shrink-0 relative z-[213]">
                  <div className="w-[14.003px] h-[12.02px] bg-[url(../../assets/images/aff26e7f-3ad9-4cc3-a153-194ef58d843c.png)] bg-[length:100%_100%] bg-no-repeat relative z-[214] mt-[6px] mr-0 mb-0 ml-[5px]" />
                </div>
                <span className="h-[25px] shrink-0 basis-auto font-['Barlow'] text-[16px] font-light leading-[25px] text-[#000] relative text-left whitespace-nowrap z-[215]">
                  Learning
                </span>
              </button>
              <div className="flex w-[100px] gap-[2px] items-end shrink-0 flex-nowrap relative z-[216]">
                <div className="w-[24px] h-[24px] shrink-0 relative z-[217]">
                  <div className="w-[11px] h-[13.951px] bg-[url(../../assets/images/4c05ec93-6d13-417c-829e-daf5a5f53c09.png)] bg-[length:100%_100%] bg-no-repeat relative z-[218] mt-[5px] mr-0 mb-0 ml-[6.5px]" />
                </div>
                <button className="w-[47px] h-[25px] shrink-0 font-['Barlow'] text-[16px] font-light leading-[25px] text-[#000] border-none relative z-[219] pointer" />
              </div>
              <button className="flex w-[100px] gap-[2px] items-end shrink-0 flex-nowrap border-none relative z-[220] pointer">
                <span className="h-[25px] shrink-0 basis-auto font-['Barlow'] text-[16px] font-light leading-[25px] text-[#000] relative text-left whitespace-nowrap z-[221]">
                  06-30-2023
                </span>
              </button>
              <div className="flex w-[100px] gap-[2px] items-end shrink-0 flex-nowrap relative z-[222]">
                <div className="w-[24px] h-[24px] shrink-0 relative z-[223]">
                  <div className="w-[14px] h-[14px] bg-[url(../../assets/images/bfb9ae78-5770-487a-8e26-70288f78d24d.png)] bg-[length:100%_100%] bg-no-repeat relative z-[224] mt-[5px] mr-0 mb-0 ml-[5px]" />
                </div>
                <button className="w-[27px] h-[25px] shrink-0 font-['Barlow'] text-[16px] font-light leading-[25px] text-[#000] border-none relative z-[225] pointer" />
              </div>
            </div>
          </div>
          <div className="flex w-[337px] gap-[15px] items-start shrink-0 flex-nowrap relative z-[226]">
            <div className="flex w-[135px] h-[37px] pt-[8px] pr-[15px] pb-[8px] pl-[15px] gap-[5px] items-center shrink-0 flex-nowrap bg-[rgba(220,228,244,0.5)] rounded-[18px] relative z-[227]">
              <button className="w-[105px] h-[25px] shrink-0 font-['Barlow'] text-[16px] font-light leading-[25px] text-[#2d477a] border-none relative z-[228] pointer" />
            </div>
            <button className="flex w-[89px] h-[37px] pt-[8px] pr-[15px] pb-[8px] pl-[15px] gap-[5px] items-center shrink-0 flex-nowrap bg-[rgba(220,228,244,0.5)] rounded-[18px] border-none relative z-[229] pointer">
              <span className="flex w-[59px] h-[25px] justify-center items-center shrink-0 basis-auto font-['Barlow'] text-[16px] font-light leading-[25px] text-[#2d477a] relative text-center whitespace-nowrap z-[230]">
                Lifestyle
              </span>
            </button>
            <button className="flex w-[83px] h-[37px] pt-[8px] pr-[15px] pb-[8px] pl-[15px] gap-[5px] items-center shrink-0 flex-nowrap bg-[rgba(220,228,244,0.5)] rounded-[18px] border-none relative z-[231] pointer">
              <span className="flex w-[53px] h-[25px] justify-center items-center shrink-0 basis-auto font-['Barlow'] text-[16px] font-light leading-[25px] text-[#2d477a] relative text-center whitespace-nowrap z-[232]">
                Clothes
              </span>
            </button>
          </div>
        </div>
        <div className="w-[1020px] shrink-0 bg-[url(../../assets/images/17b17de9-f0c5-4610-9150-0edecf0292b6.png)] bg-cover bg-no-repeat relative z-[233]" />
        <div className="flex w-[1140px] flex-col gap-[15px] items-start shrink-0 flex-nowrap relative z-[234]">
          <div className="flex w-[1140px] gap-[50px] items-center shrink-0 flex-nowrap relative z-[235]">
            <div className="flex w-[600px] flex-col gap-[5px] items-start shrink-0 flex-nowrap relative z-[236]">
              <span className="h-[30px] self-stretch shrink-0 basis-auto font-['Barlow'] text-[20px] font-medium leading-[30px] text-[#000] relative text-left whitespace-nowrap z-[237]">
                Lorem ipsum dfsoj sdfi
              </span>
              <span className="h-[25px] self-stretch shrink-0 basis-auto font-['Barlow'] text-[16px] font-light leading-[25px] text-[rgba(0,0,0,0.8)] relative text-left whitespace-nowrap z-[238]">
                Post preview - Nemo enim ipsam voluptatem quia voluptas sit sdfj
              </span>
            </div>
            <div className="flex w-[490px] gap-[30px] items-center shrink-0 flex-nowrap relative z-[239]">
              <button className="flex w-[100px] gap-[2px] items-end shrink-0 flex-nowrap border-none relative z-[240] pointer">
                <div className="w-[24px] h-[24px] shrink-0 relative z-[241]">
                  <div className="w-[14.003px] h-[12.02px] bg-[url(../../assets/images/24301dec-9756-4120-933c-f17af8b99f50.png)] bg-[length:100%_100%] bg-no-repeat relative z-[242] mt-[6px] mr-0 mb-0 ml-[5px]" />
                </div>
                <span className="h-[25px] shrink-0 basis-auto font-['Barlow'] text-[16px] font-light leading-[25px] text-[#000] relative text-left whitespace-nowrap z-[243]">
                  Learning
                </span>
              </button>
              <div className="flex w-[100px] gap-[2px] items-end shrink-0 flex-nowrap relative z-[244]">
                <div className="w-[24px] h-[24px] shrink-0 relative z-[245]">
                  <div className="w-[11px] h-[13.951px] bg-[url(../../assets/images/09d35832-c2c7-4bc8-95a2-3b50e3f51f74.png)] bg-[length:100%_100%] bg-no-repeat relative z-[246] mt-[5px] mr-0 mb-0 ml-[6.5px]" />
                </div>
                <button className="w-[47px] h-[25px] shrink-0 font-['Barlow'] text-[16px] font-light leading-[25px] text-[#000] border-none relative z-[247] pointer" />
              </div>
              <button className="flex w-[100px] gap-[2px] items-end shrink-0 flex-nowrap border-none relative z-[248] pointer">
                <span className="h-[25px] shrink-0 basis-auto font-['Barlow'] text-[16px] font-light leading-[25px] text-[#000] relative text-left whitespace-nowrap z-[249]">
                  06-30-2023
                </span>
              </button>
              <div className="flex w-[100px] gap-[2px] items-end shrink-0 flex-nowrap relative z-[250]">
                <div className="w-[24px] h-[24px] shrink-0 relative z-[251]">
                  <div className="w-[14px] h-[14px] bg-[url(../../assets/images/738a9147-a267-4ead-af3e-1353724c7441.png)] bg-[length:100%_100%] bg-no-repeat relative z-[252] mt-[5px] mr-0 mb-0 ml-[5px]" />
                </div>
                <button className="w-[27px] h-[25px] shrink-0 font-['Barlow'] text-[16px] font-light leading-[25px] text-[#000] border-none relative z-[253] pointer" />
              </div>
            </div>
          </div>
          <div className="flex w-[337px] gap-[15px] items-start shrink-0 flex-nowrap relative z-[254]">
            <button className="flex w-[135px] h-[37px] pt-[8px] pr-[15px] pb-[8px] pl-[15px] gap-[5px] items-center shrink-0 flex-nowrap bg-[rgba(220,228,244,0.5)] rounded-[18px] border-none relative z-[255] pointer">
              <span className="flex w-[105px] h-[25px] justify-center items-center shrink-0 basis-auto font-['Barlow'] text-[16px] font-light leading-[25px] text-[#2d477a] relative text-center whitespace-nowrap z-[256]">
                Travel Wedding
              </span>
            </button>
            <button className="flex w-[89px] h-[37px] pt-[8px] pr-[15px] pb-[8px] pl-[15px] gap-[5px] items-center shrink-0 flex-nowrap bg-[rgba(220,228,244,0.5)] rounded-[18px] border-none relative z-[257] pointer">
              <span className="flex w-[59px] h-[25px] justify-center items-center shrink-0 basis-auto font-['Barlow'] text-[16px] font-light leading-[25px] text-[#2d477a] relative text-center whitespace-nowrap z-[258]">
                Lifestyle
              </span>
            </button>
            <button className="flex w-[83px] h-[37px] pt-[8px] pr-[15px] pb-[8px] pl-[15px] gap-[5px] items-center shrink-0 flex-nowrap bg-[rgba(220,228,244,0.5)] rounded-[18px] border-none relative z-[259] pointer">
              <span className="flex w-[53px] h-[25px] justify-center items-center shrink-0 basis-auto font-['Barlow'] text-[16px] font-light leading-[25px] text-[#2d477a] relative text-center whitespace-nowrap z-[260]">
                Clothes
              </span>
            </button>
          </div>
        </div>
        <div className="w-[1020px] shrink-0 bg-[url(../../assets/images/bc0d086b-b65d-4a7c-ae15-d328fea57567.png)] bg-cover bg-no-repeat relative z-[261]" />
        <div className="flex w-[1140px] flex-col gap-[15px] items-start shrink-0 flex-nowrap relative z-[262]">
          <div className="flex w-[1140px] gap-[50px] items-center shrink-0 flex-nowrap relative z-[263]">
            <div className="flex w-[600px] flex-col gap-[5px] items-start shrink-0 flex-nowrap relative z-[264]">
              <span className="h-[30px] self-stretch shrink-0 basis-auto font-['Barlow'] text-[20px] font-medium leading-[30px] text-[#000] relative text-left whitespace-nowrap z-[265]">
                Lorem ipsum dfsoj sdfi
              </span>
              <span className="h-[25px] self-stretch shrink-0 basis-auto font-['Barlow'] text-[16px] font-light leading-[25px] text-[rgba(0,0,0,0.8)] relative text-left whitespace-nowrap z-[266]">
                Post preview - Nemo enim ipsam voluptatem quia voluptas sit sdfj
              </span>
            </div>
            <div className="flex w-[490px] gap-[30px] items-center shrink-0 flex-nowrap relative z-[267]">
              <button className="flex w-[100px] gap-[2px] items-end shrink-0 flex-nowrap border-none relative z-[268] pointer">
                <div className="w-[24px] h-[24px] shrink-0 relative z-[269]">
                  <div className="w-[14.003px] h-[12.02px] bg-[url(../../assets/images/30f89759-8716-4bdb-9784-99a3390ce322.png)] bg-[length:100%_100%] bg-no-repeat relative z-[270] mt-[6px] mr-0 mb-0 ml-[5px]" />
                </div>
                <span className="h-[25px] shrink-0 basis-auto font-['Barlow'] text-[16px] font-light leading-[25px] text-[#000] relative text-left whitespace-nowrap z-[271]">
                  Learning
                </span>
              </button>
              <div className="flex w-[100px] gap-[2px] items-end shrink-0 flex-nowrap relative z-[272]">
                <div className="w-[24px] h-[24px] shrink-0 relative z-[273]">
                  <div className="w-[11px] h-[13.951px] bg-[url(../../assets/images/82cde9f0-8afc-4ad6-975f-101fb7814c94.png)] bg-[length:100%_100%] bg-no-repeat relative z-[274] mt-[5px] mr-0 mb-0 ml-[6.5px]" />
                </div>
                <button className="w-[47px] h-[25px] shrink-0 font-['Barlow'] text-[16px] font-light leading-[25px] text-[#000] border-none relative z-[275] pointer" />
              </div>
              <button className="flex w-[100px] gap-[2px] items-end shrink-0 flex-nowrap border-none relative z-[276] pointer">
                <span className="h-[25px] shrink-0 basis-auto font-['Barlow'] text-[16px] font-light leading-[25px] text-[#000] relative text-left whitespace-nowrap z-[277]">
                  06-30-2023
                </span>
              </button>
              <div className="flex w-[100px] gap-[2px] items-end shrink-0 flex-nowrap relative z-[278]">
                <div className="w-[24px] h-[24px] shrink-0 relative z-[279]">
                  <div className="w-[14px] h-[14px] bg-[url(../../assets/images/f6f4b7f1-46bc-4ec0-b445-ddec4450073e.png)] bg-[length:100%_100%] bg-no-repeat relative z-[280] mt-[5px] mr-0 mb-0 ml-[5px]" />
                </div>
                <button className="w-[27px] h-[25px] shrink-0 font-['Barlow'] text-[16px] font-light leading-[25px] text-[#000] border-none relative z-[281] pointer" />
              </div>
            </div>
          </div>
          <div className="flex w-[337px] gap-[15px] items-start shrink-0 flex-nowrap relative z-[282]">
            <button className="flex w-[135px] h-[37px] pt-[8px] pr-[15px] pb-[8px] pl-[15px] gap-[5px] items-center shrink-0 flex-nowrap bg-[rgba(220,228,244,0.5)] rounded-[18px] border-none relative z-[283] pointer">
              <span className="flex w-[105px] h-[25px] justify-center items-center shrink-0 basis-auto font-['Barlow'] text-[16px] font-light leading-[25px] text-[#2d477a] relative text-center whitespace-nowrap z-[284]">
                Travel Wedding
              </span>
            </button>
            <button className="flex w-[89px] h-[37px] pt-[8px] pr-[15px] pb-[8px] pl-[15px] gap-[5px] items-center shrink-0 flex-nowrap bg-[rgba(220,228,244,0.5)] rounded-[18px] border-none relative z-[285] pointer">
              <span className="flex w-[59px] h-[25px] justify-center items-center shrink-0 basis-auto font-['Barlow'] text-[16px] font-light leading-[25px] text-[#2d477a] relative text-center whitespace-nowrap z-[286]">
                Lifestyle
              </span>
            </button>
            <button className="flex w-[83px] h-[37px] pt-[8px] pr-[15px] pb-[8px] pl-[15px] gap-[5px] items-center shrink-0 flex-nowrap bg-[rgba(220,228,244,0.5)] rounded-[18px] border-none relative z-[287] pointer">
              <span className="flex w-[53px] h-[25px] justify-center items-center shrink-0 basis-auto font-['Barlow'] text-[16px] font-light leading-[25px] text-[#2d477a] relative text-center whitespace-nowrap z-[288]">
                Clothes
              </span>
            </button>
          </div>
        </div>
        <div className="w-[1020px] shrink-0 bg-[url(../../assets/images/b21f1be5-0b6f-4473-814a-7f7d9ad818ce.png)] bg-cover bg-no-repeat relative z-[289]" />
        <div className="flex w-[1140px] flex-col gap-[15px] items-start shrink-0 flex-nowrap relative z-[290]">
          <div className="flex w-[1140px] gap-[50px] items-center shrink-0 flex-nowrap relative z-[291]">
            <div className="flex w-[600px] flex-col gap-[5px] items-start shrink-0 flex-nowrap relative z-[292]">
              <span className="h-[30px] self-stretch shrink-0 basis-auto font-['Barlow'] text-[20px] font-medium leading-[30px] text-[#000] relative text-left whitespace-nowrap z-[293]">
                Lorem ipsum dfsoj sdfi
              </span>
              <span className="h-[25px] self-stretch shrink-0 basis-auto font-['Barlow'] text-[16px] font-light leading-[25px] text-[rgba(0,0,0,0.8)] relative text-left whitespace-nowrap z-[294]">
                Post preview - Nemo enim ipsam voluptatem quia voluptas sit sdfj
              </span>
            </div>
            <div className="flex w-[490px] gap-[30px] items-center shrink-0 flex-nowrap relative z-[295]">
              <button className="flex w-[100px] gap-[2px] items-end shrink-0 flex-nowrap border-none relative z-[296] pointer">
                <div className="w-[24px] h-[24px] shrink-0 relative z-[297]">
                  <div className="w-[14.003px] h-[12.02px] bg-[url(../../assets/images/56353745-13da-41f5-8e32-26740f3a66b3.png)] bg-[length:100%_100%] bg-no-repeat relative z-[298] mt-[6px] mr-0 mb-0 ml-[5px]" />
                </div>
                <span className="h-[25px] shrink-0 basis-auto font-['Barlow'] text-[16px] font-light leading-[25px] text-[#000] relative text-left whitespace-nowrap z-[299]">
                  Learning
                </span>
              </button>
              <div className="flex w-[100px] gap-[2px] items-end shrink-0 flex-nowrap relative z-[300]">
                <div className="w-[24px] h-[24px] shrink-0 relative z-[301]">
                  <div className="w-[11px] h-[13.951px] bg-[url(../../assets/images/5bc8393f-8210-4c5a-96f4-48207d235a41.png)] bg-[length:100%_100%] bg-no-repeat relative z-[302] mt-[5px] mr-0 mb-0 ml-[6.5px]" />
                </div>
                <button className="w-[47px] h-[25px] shrink-0 font-['Barlow'] text-[16px] font-light leading-[25px] text-[#000] border-none relative z-[303] pointer" />
              </div>
              <button className="flex w-[100px] gap-[2px] items-end shrink-0 flex-nowrap border-none relative z-[304] pointer">
                <span className="h-[25px] shrink-0 basis-auto font-['Barlow'] text-[16px] font-light leading-[25px] text-[#000] relative text-left whitespace-nowrap z-[305]">
                  06-30-2023
                </span>
              </button>
              <div className="flex w-[100px] gap-[2px] items-end shrink-0 flex-nowrap relative z-[306]">
                <div className="w-[24px] h-[24px] shrink-0 relative z-[307]">
                  <div className="w-[14px] h-[14px] bg-[url(../../assets/images/12c7d218-828a-4d29-8cc4-3520715bfad8.png)] bg-[length:100%_100%] bg-no-repeat relative z-[308] mt-[5px] mr-0 mb-0 ml-[5px]" />
                </div>
                <button className="w-[27px] h-[25px] shrink-0 font-['Barlow'] text-[16px] font-light leading-[25px] text-[#000] border-none relative z-[309] pointer" />
              </div>
            </div>
          </div>
          <div className="flex w-[337px] gap-[15px] items-start shrink-0 flex-nowrap relative z-[310]">
            <button className="flex w-[135px] h-[37px] pt-[8px] pr-[15px] pb-[8px] pl-[15px] gap-[5px] items-center shrink-0 flex-nowrap bg-[rgba(220,228,244,0.5)] rounded-[18px] border-none relative z-[311] pointer">
              <span className="flex w-[105px] h-[25px] justify-center items-center shrink-0 basis-auto font-['Barlow'] text-[16px] font-light leading-[25px] text-[#2d477a] relative text-center whitespace-nowrap z-[312]">
                Travel Wedding
              </span>
            </button>
            <button className="flex w-[89px] h-[37px] pt-[8px] pr-[15px] pb-[8px] pl-[15px] gap-[5px] items-center shrink-0 flex-nowrap bg-[rgba(220,228,244,0.5)] rounded-[18px] border-none relative z-[313] pointer">
              <span className="flex w-[59px] h-[25px] justify-center items-center shrink-0 basis-auto font-['Barlow'] text-[16px] font-light leading-[25px] text-[#2d477a] relative text-center whitespace-nowrap z-[314]">
                Lifestyle
              </span>
            </button>
            <button className="flex w-[83px] h-[37px] pt-[8px] pr-[15px] pb-[8px] pl-[15px] gap-[5px] items-center shrink-0 flex-nowrap bg-[rgba(220,228,244,0.5)] rounded-[18px] border-none relative z-[315] pointer">
              <span className="flex w-[53px] h-[25px] justify-center items-center shrink-0 basis-auto font-['Barlow'] text-[16px] font-light leading-[25px] text-[#2d477a] relative text-center whitespace-nowrap z-[316]">
                Clothes
              </span>
            </button>
          </div>
        </div>
        <div className="w-[1020px] shrink-0 bg-[url(../../assets/images/97522f7d-bc18-4447-8223-d671cab53ed4.png)] bg-cover bg-no-repeat relative z-[317]" />
        <div className="flex w-[118px] gap-[5px] items-center shrink-0 flex-nowrap relative z-[318]">
          <div className="w-[24px] h-[24px] shrink-0 relative z-[319]">
            <div className="w-[16px] h-[8.207px] bg-[url(../../assets/images/794e1dab-660f-4c8a-8f85-cbda66fc5387.png)] bg-[length:100%_100%] bg-no-repeat relative z-[320] mt-[7.897px] mr-0 mb-0 ml-[4px]" />
          </div>
          <span className="h-[24px] shrink-0 basis-auto font-['Barlow'] text-[18px] font-normal leading-[24px] text-[#000] tracking-0.27px relative text-left whitespace-nowrap z-[321]">
            More posts
          </span>
        </div>
      </div>
    </div>
  );
};
