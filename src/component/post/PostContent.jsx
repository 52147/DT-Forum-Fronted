import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MoreIn } from "./MoreIn";
import { PostComment } from "./PostComment";
import { Comment } from "./Comment";
import { useSelector, useDispatch } from "react-redux";
import { fetchPostContent } from "../../redux/actions/postContentActions.js";

const articles = [
  {
    authorName: "Decoded Author Name",
    title: "Level 1 - Extra Soft Tofu",
    name: "This is the article name",
    content: "This is the dynamic content of the post.",
    like: 100,
    keywords: ["keyword1", "keyword2", "keyword3"],
    date: "2024-01-01",
    messageCounts: "240",
  },
];

export const PostContent = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const { content, loading, error } = useSelector((state) => state.postContent);

  const dispatch = useDispatch();

  useEffect(() => {
    if (postId) {
      dispatch(fetchPostContent(postId));
    }
  }, [dispatch, postId]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="flex flex-row mt-8">
        <div className="flex flex-col flex-grow" style={{ maxWidth: "75%" }}>
          <div className="post-content flex-grow">
            {/* Example of incorporating fetched data into the existing structure */}
            <div className="flex flex-col gap-[30px] items-start">
              {/* Static elements (e.g., images) and dynamic content (e.g., author name, title) */}
              <div className="flex w-[371px] gap-[30px] items-center shrink-0 flex-nowrap relative z-20">
                {/* Placeholder for author's avatar */}
                <div className="w-[60px] h-[60px] shrink-0 relative z-[21]">
                  <div className="w-[60px] h-[59.355px] bg-[url(/images/126d878b-9296-438a-ab86-8d185397a3a1.png)] bg-[length:100%_100%] bg-no-repeat relative z-[23] mt-[0.32px] mr-0 mb-0 ml-0" />
                  <div className="w-full h-full bg-[#c4c4c4] rounded-[10px] absolute top-0 left-0 z-[22]" />
                </div>{" "}
                <div className="flex flex-col">
                  <span className="h-[30px] shrink-0 basis-auto font-['Barlow'] text-[20px] font-medium leading-[30px] text-[#000] relative text-left whitespace-nowrap z-[25]">
                    {post.authorName} | {post.title}
                  </span>
                  <span className="text-[18px]">
                    {new Date(post.date).toLocaleDateString()}
                  </span>
                </div>
              </div>
            </div>
            <div className="my-4">
              <h2 className="text-3xl font-bold">{post.name}</h2>
              <p>{post.content}</p>
            </div>
            <div className="flex gap-2">
              {/* Dynamic rendering of keywords */}
              {post.keywords.map((keyword, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                >
                  {keyword}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-4 mt-4">
              <div className="w-[30.002px] h-[28.176px] shrink-0 relative z-45">
                <div className="w-[20.002px] h-[16.439px] bg-[url(/images/5e057932-af8d-4f54-9d40-92c6f586322b.png)] bg-[length:100%_100%] bg-no-repeat relative z-46 mt-[4.696px] mr-0 mb-0 ml-[3.75px]" />
              </div>
              <span className="font-semibold">{post.like} Likes</span>·{" "}
              <div className="w-[30.002px] h-[28.176px] shrink-0 relative z-[49]">
                <div className="w-[17.502px] h-[16.436px] bg-[url(/images/8f628007-dd0a-4334-bedb-235f7d7bb78f.png)] bg-[length:100%_100%] bg-no-repeat relative z-50 mt-[5.87px] mr-0 mb-0 ml-[6.25px]" />
              </div>
              <span>{post.messageCounts} Comments</span>
              {/* Render more dynamic content as needed */}
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
