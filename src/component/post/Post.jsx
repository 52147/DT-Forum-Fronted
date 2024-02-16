import React from "react";
import { useParams } from "react-router-dom";
import { PostContent } from "./PostContent";

export const Post = () => {
  const { authorName, postId } = useParams();
  console.log(authorName, postId);

  return (
    <div className="container mx-auto px-4">
     

      <div>
        <PostContent />
      </div>
    </div>
  );
};
