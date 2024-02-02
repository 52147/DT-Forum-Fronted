import React from "react";
import "./index.css";
// Sample data structure for articles
const articles = [
  {
    name: "Article Name 1",
    preview:
      "Post preview - Nemo enim ipsam voluptatem quia voluptas sit aspernatur...",
    topics: ["Topic1"],
    author: "Author Name",
    date: "Date",
    keywords: ["keyword1", "keyword2", "keyword3"],
  },
  // ... other articles
];

export const ArticleList = () => {
  return (
    <>
      <div className="w-[1020px] shrink-0 bg-[url(public/images/268305b8-eaf2-4abd-82f3-feef2ebc6ebc.png)] bg-cover bg-no-repeat relative z-[85]" />

      <div className="flex w-[1140px] flex-col gap-[15px] items-start shrink-0 flex-nowrap relative z-[86]">
        {articles.map((article, index) => (
          <div key={index} className="flex w-[1140px] gap-[50px] items-center shrink-0 flex-nowrap relative z-[87]">
            {/* Article Name and Preview */}
            <div className="flex w-[600px] flex-col gap-[5px] items-start shrink-0 flex-nowrap relative z-[88]">
              <span className="h-[30px] self-stretch shrink-0 basis-auto font-['Barlow'] text-[20px] font-medium leading-[30px] text-[#000] relative text-left whitespace-nowrap z-[89]">
                {article.name}
              </span>
              <span className="h-[25px] self-stretch shrink-0 basis-auto font-['Barlow'] text-[16px] font-light leading-[25px] text-[rgba(0,0,0,0.8)] relative text-left whitespace-nowrap z-[90]">
                {article.preview}
              </span>
            </div>

            {/* Topics, Author, and Date */}
            <div className="flex w-[490px] gap-[30px] items-center shrink-0 flex-nowrap relative z-[91]">
              {/* Topics */}
              <div className="flex w-[100px] gap-[2px] items-end shrink-0 flex-nowrap relative z-[92]">
                <div className="w-[24px] h-[24px] shrink-0 relative z-[93]">
                  <div className="w-[14.003px] h-[12.02px] bg-[url(public/images/cad88275-378d-4fe5-b71d-b567d605ae25.png)] bg-[length:100%_100%] bg-no-repeat relative z-[94] mt-[6px] mr-0 mb-0 ml-[5px]" />
                </div>
                <span className="h-[25px] shrink-0 basis-auto font-['Barlow'] text-[16px] font-light leading-[25px] text-[#000] relative text-left whitespace-nowrap z-[95]">
                  {article.topics.join(', ')}
                </span>
              </div>

              {/* Author */}
              <div className="flex w-[100px] gap-[2px] items-end shrink-0 flex-nowrap relative z-[96]">
                <div className="w-[24px] h-[24px] shrink-0 relative z-[97]">
                  <div className="w-[11px] h-[13.951px] bg-[url(public/images/e864e600-8246-4452-915f-48e34c0bb093.png)] bg-[length:100%_100%] bg-no-repeat relative z-[98] mt-[5px] mr-0 mb-0 ml-[6.5px]" />
                </div>
                <span className="h-[25px] shrink-0 basis-auto font-['Barlow'] text-[16px] font-light leading-[25px] text-[#000] relative text-left whitespace-nowrap z-[99]">
                  {article.author}
                </span>
              </div>

              {/* Date */}
              <div className="flex w-[100px] gap-[2px] items-end shrink-0 flex-nowrap relative z-[100]">
                <span className="h-[25px] shrink-0 basis-auto font-['Barlow'] text-[16px] font-light leading-[25px] text-[#000] relative text-left whitespace-nowrap z-[101]">
                  {article.date}
                </span>
              </div>
            </div>

            {/* Keywords */}
            <div className="flex w-[337px] gap-[15px] items-start shrink-0 flex-nowrap relative z-[106]">
              {/* {article.keywords.map((keyword, keyIndex) => (
                <button key={keyIndex} className="flex w-[135px] h-[37px] pt-[8px] pr-[15px] pb-[8px] pl-[15px] gap-[5px] items-center shrink-0 flex-nowrap bg-[rgba(220,228,244,0.5)] rounded-[18px] border-none relative z-[107] pointer">
                  <span className="flex w-[105px] h-[25px] justify-center items-center shrink-0 basis-auto font-['Barlow'] text-[16px] font-light leading-[25px] text-[#2d477a] relative text-center whitespace-nowrap z-[108]">
                    {keyword}
                    12233445
                  </span>
                </button>
              ))} */}
              {article.keywords.map((keyword, keyIndex) => {
   console.log("Keyword:", keyword); // Check if this logs
   return (
      <button key={keyIndex} className="...">
         <span className="...">
            {keyword}
         </span>
      </button>
   );
})}

            </div>
          </div>
        ))}
      </div>
    </>
  );
};