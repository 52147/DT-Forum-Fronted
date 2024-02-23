import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchPostContent } from "../../redux/actions/postContentActions";
import { MoreIn } from "./MoreIn";
import { PostComment } from "./PostComment";
import { Comment } from "./Comment";
import { incrementLikeCount } from "../../redux/actions/likesActions";

export const PostContent = () => {
  const { postId } = useParams();
  const dispatch = useDispatch();
  const { content, loading, error } = useSelector((state) => state.postContent);
  const [likesCount, setLikesCount] = useState(
    content ? content.likes_count : 0
  );

  useEffect(() => {
    if (postId) {
      dispatch(fetchPostContent(postId));
    }
  }, [dispatch, postId]);
  // Update local state when global state changes
  useEffect(() => {
    if (content && content.likes_count !== likesCount) {
      setLikesCount(content.likes_count);
    }
  }, [content]);
  const handleLike = () => {
    dispatch(incrementLikeCount(postId));
    setLikesCount(likesCount + 1);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!content) return <div>No post found.</div>;

  return (
    <div>
      {/* Breadcrumbs and Search Box */}
      <div className="flex justify-between items-center my-4">
        {/* Left Side - Breadcrumbs */}
        <div className="flex items-center space-x-2 font-barlow text-xl font-medium leading-9 text-black">
          <span>Topics</span>
          <span>&gt;</span>
          <span>{content.topic}</span>
          <span>&gt;</span>
          <span>Post</span>
        </div>

        {/* Right Side - Search Box */}
        <div className="relative w-80">
          <input
            className="w-full h-10 pl-14 pr-4 rounded-lg border border-black shadow-sm"
            placeholder="Search all discussions"
          />
          <div className="absolute inset-y-0 left-0 flex items-center pl-2">
            {/* Placeholder for search icon */}
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row mt-8">
        <div className="flex-grow" style={{ maxWidth: "75%" }}>
          <div className="flex flex-col gap-8 items-start">
            <div className="flex gap-8 items-center">
              <div className="w-15 h-15 bg-no-repeat bg-cover relative rounded-full overflow-hidden">
                {/* Placeholder or dynamic author's avatar */}
              </div>
              <div className="flex flex-col">
                <span className="font-barlow text-lg font-medium leading-6 text-black">
                  {content.author} | {content.title}
                </span>
                <span className="text-lg">
                  {content.date} | {content.location}
                </span>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold">{content.name}</h2>
              <p>{content.content}</p>
            </div>
            <div className="flex gap-2 flex-wrap">
              {content.keywordNames.map((keyword, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                >
                  {keyword}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-4">
              <button onClick={handleLike} className="relative z-45">
                {/* Like button icon */}
                <div className="w-[30.002px] h-[28.176px] shrink-0 relative z-45">
                  <div className="w-[20.002px] h-[16.439px] bg-[url(/images/5e057932-af8d-4f54-9d40-92c6f586322b.png)] bg-[length:100%_100%] bg-no-repeat relative z-46 mt-[4.696px] mr-0 mb-0 ml-[3.75px]" />
                </div>
              </button>
              <span className="font-semibold">{likesCount} Likes</span>
              {/* Comments icon placeholder */}
              <div className="w-[30.002px] h-[28.176px] shrink-0 relative z-[49]">
                <div className="w-[17.502px] h-[16.436px] bg-[url(/images/8f628007-dd0a-4334-bedb-235f7d7bb78f.png)] bg-[length:100%_100%] bg-no-repeat relative z-50 mt-[5.87px] mr-0 mb-0 ml-[6.25px]" />
              </div>
              <span>{content.messageCounts} Comments</span>
            </div>
          </div>
          <PostComment />
          <Comment postId={postId} depth={0} />
        </div>
        <div className="mt-36 md:mt-0 md:ml-6 w-full md:w-1/4">
          <MoreIn postId={postId} topic={content.topic} />
        </div>
      </div>
    </div>
  );
};
