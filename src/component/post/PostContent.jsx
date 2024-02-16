import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchPostContent } from "../../redux/actions/postContentActions";
import { MoreIn } from "./MoreIn";
import { PostComment } from "./PostComment";
import { Comment } from "./Comment";

export const PostContent = () => {
  const { postId } = useParams();
  const dispatch = useDispatch();
  const { content, loading, error } = useSelector((state) => state.postContent);

  useEffect(() => {
    if (postId) {
      dispatch(fetchPostContent(postId));
    }
  }, [dispatch, postId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!content) return <div>No post found.</div>;

  return (
    <>
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
            {content.topic}
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
      <div className="flex flex-row mt-8">
        <div className="flex flex-col flex-grow" style={{ maxWidth: "75%" }}>
          <div className="post-content flex-grow">
            <div className="flex flex-col gap-[30px] items-start">
              <div className="flex w-[371px] gap-[30px] items-center shrink-0 flex-nowrap relative z-20">
                <div className="w-[60px] h-[60px] shrink-0 relative z-[21]">
                  <div className="w-[60px] h-[59.355px] bg-[url(/images/126d878b-9296-438a-ab86-8d185397a3a1.png)] bg-[length:100%_100%] bg-no-repeat relative z-[23] mt-[0.32px] mr-0 mb-0 ml-0" />
                  <div className="w-full h-full bg-[#c4c4c4] rounded-[10px] absolute top-0 left-0 z-[22]" />
                </div>{" "}
                {/* Placeholder or dynamic author's avatar */}
                <div className="flex flex-col">
                  <span className="h-[30px] shrink-0 basis-auto font-['Barlow'] text-[20px] font-medium leading-[30px] text-[#000] relative text-left whitespace-nowrap z-[25]">
                    {content.author} | {content.title}
                  </span>
                  <span className="text-[18px]">
                    {new Date(content.date).toLocaleDateString()}
                  </span>
                </div>
              </div>
            </div>
            <div className="my-4">
              <h2 className="text-3xl font-bold">{content.name}</h2>
              <p>{content.content}</p>
            </div>
            <div className="flex gap-2">
              {content.keywordNames.map((keyword, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                >
                  {keyword}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-4 mt-4">
              {/* Icons or images for likes and comments */}
              <div className="w-[30.002px] h-[28.176px] shrink-0 relative z-45">
                <div className="w-[20.002px] h-[16.439px] bg-[url(/images/5e057932-af8d-4f54-9d40-92c6f586322b.png)] bg-[length:100%_100%] bg-no-repeat relative z-46 mt-[4.696px] mr-0 mb-0 ml-[3.75px]" />
              </div>
              <span className="font-semibold">{content.likes_count} Likes</span>
              <div className="w-[30.002px] h-[28.176px] shrink-0 relative z-[49]">
                <div className="w-[17.502px] h-[16.436px] bg-[url(/images/8f628007-dd0a-4334-bedb-235f7d7bb78f.png)] bg-[length:100%_100%] bg-no-repeat relative z-50 mt-[5.87px] mr-0 mb-0 ml-[6.25px]" />
              </div>
              <span>{content.messageCounts} Comments</span>
            </div>
          </div>
          <PostComment />
          <Comment />
        </div>
        <div className="ml-12 mt-36">
          <MoreIn />
        </div>
      </div>
    </>
  );
};
