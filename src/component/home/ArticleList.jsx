import React, { useEffect } from "react";
import "./index.css";
import { useSelector, useDispatch } from "react-redux";

import { fetchPosts } from '../../redux/actions/postsActions.js';

const articles = [
  {
    id: "1",
    name: "Article Name 1",
    preview:
      "Post preview - Nemo enim ipsam voluptatem quia voluptas sit aspernatur...",
    topics: ["Topic1"],
    author: "Author Name",
    date: "06-30-2023",
    messageCounts: "240",
    keywords: ["keyword1", "keyword2", "keyword5"],
  },
];

export const ArticleList = () => {
  // In the ArticleList component
const { posts, loading, error } = useSelector((state) => state.posts);

  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchPosts());
  // }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  return (
    <div className="flex flex-col gap-15px items-start shrink-0 relative z-86 w-[1140px]">
      {posts.map((article) => (
        <div
          key={article.id}
          className="flex flex-col shrink-0 relative z-87 mb-4"
        >
          {/* Article Name */}
          <h2 className="h-[30px] self-stretch shrink-0 basis-auto font-['Barlow'] text-[20px] font-medium leading-[30px] text-[#000] relative text-left whitespace-nowrap z-[89]">
            {article.name}
          </h2>

          {/* Post preview, Topics, Author, and Date */}
          <div className="flex items-center mb-2">
            <p className="text-base font-light text-rgba(0,0,0,0.8) flex-grow">
              {article.preview}
            </p>
            <div className="flex items-center ml-4">
              <div className="w-[14.003px] h-[12.02px] bg-[url(public/images/cad88275-378d-4fe5-b71d-b567d605ae25.png)] bg-[length:100%_100%] bg-no-repeat relative z-[94] mr-0 mb-0 ml-[120px]" />
              <span className="ml-2">{article.topics.join(", ")}</span>
            </div>
            <div className="flex items-center ml-4">
              <div className="w-[11px] h-[13.951px] bg-[url(public/images/e864e600-8246-4452-915f-48e34c0bb093.png)] bg-[length:100%_100%] bg-no-repeat relative z-[98] mr-0 mb-0 ml-[6.5px]" />

              <span className="ml-2">{article.author}</span>
            </div>
            <div className="flex items-center ml-4">
              {/* Date Icon */}
              <span className="ml-2">{article.date}</span>
            </div>{" "}
            <div className="flex items-center ml-4">
              <div className="w-[14px] h-[14px] bg-[url(public/images/0ab4f889-1444-419a-91e3-0c9002e0a5e6.png)] bg-[length:100%_100%] bg-no-repeat relative z-[104] mr-0 mb-0 ml-[5px]" />

              <span className="ml-2">{article.messageCounts}</span>
            </div>
          </div>

          {/* Keywords */}
          <div className="flex flex-wrap gap-2">
            {article.keywords && article.keywords.length > 0 ? (
              article.keywords.map((keyword, keyIndex) => (
                <span
                  key={keyIndex}
                  className="bg-blue-100 text-blue-800 text-sm px-4 py-1 rounded-full"
                >
                  {keyword}
                </span>
              ))
            ) : (
              <span className="text-gray-500 text-sm">No keywords</span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

