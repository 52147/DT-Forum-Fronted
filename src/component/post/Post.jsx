import React from "react";
import { useParams } from "react-router-dom";
import { PostContent } from "./PostContent";

export const Post = () => {
  const { authorName, postId } = useParams();
  console.log(authorName, postId);

  return (
    <div className="container mx-auto px-4">
      {/* Breadcrumbs and Search Box */}
      <div className="flex justify-between items-center my-4">
        {/* Left Side - Breadcrumbs */}
        <div className="breadcrumbs space-x-2">
          <span className="font-['Barlow'] text-[24px] font-medium leading-[36px] text-[#000]">
            Topics
          </span>
          <span className="font-['Barlow'] text-[24px] font-medium leading-[36px] text-[#000]">
            &gt;
          </span>
          <span className="font-['Barlow'] text-[24px] font-medium leading-[36px] text-[#000]">
            Tech
          </span>
          <span className="font-['Barlow'] text-[24px] font-medium leading-[36px] text-[#000]">
            &gt;
          </span>
          <span className="font-['Barlow'] text-[24px] font-medium leading-[36px] text-[#000]">
            Post
          </span>
        </div>

        {/* Right Side - Search Box */}
        <div className="relative w-[316px]">
          <input
            className="w-full h-[42px] pl-10 pr-4 rounded-lg border-solid border border-[#000] shadow-sm"
            placeholder="Search all discussions"
            style={{ paddingLeft: "60px" }} 
          />
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 pl-2">
            <div className="ml-4 w-[14px] h-[14.001px] bg-[url('/public/images/c1981ae0-b71a-49c6-a9e3-661ec3de8b53.png')] bg-contain bg-no-repeat" />
          </div>
        </div>
      </div>

      {/* Post Content - Positioned Below Breadcrumbs */}
      <div>
        {" "}
        {/* Adjust max-width as necessary to match the design */}
        <PostContent />
      </div>
    </div>
  );
};
