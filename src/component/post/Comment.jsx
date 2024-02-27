import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchComment } from "../../redux/actions/commentActions";

export const Comment = ({ postId }) => {
  const dispatch = useDispatch();
  const { loading, comments, error } = useSelector((state) => state.comments);
  const [expandedComments, setExpandedComments] = useState({});
  // Initial visibility based on storage
  const [isVisible, setIsVisible] = useState(
    localStorage.getItem("isModalVisible") === "true"
  );
  useEffect(() => {
    if (postId) {
      dispatch(fetchComment(postId));
    }
  }, [postId, dispatch]);

  const toggleCommentsVisibility = (commentId) => {
    setExpandedComments((prev) => ({
      ...prev,
      [commentId]: !prev[commentId],
    }));
  };
  const storedVisibility = localStorage.getItem("isModalVisible");
  const isModalVisible = storedVisibility === "true";

  const renderComments = (comments, depth = 0, parentId = null) => {
    return comments.map((comment) => (
      <div
        key={comment.id}
        className={`flex flex-col gap-2 p-4 rounded-lg ${
          depth > 0 ? "ml-" + depth * 5 : "ml-0"
        } bg-white`}
        style={{
          borderLeft: depth > 0 ? `${depth * 2}px solid #cbd5e1` : "none",
        }}
      >
        <div
          className="flex justify-between items-start w-full "
          // style={{ zIndex: isModalVisible ? -1 : 'auto',}}
        >
          <div className="flex-1">
            {/* Assuming avatar URL or style logic is applied here */}
            <div className="flex items-center gap-4">
              <div className="w-[40px] h-[40px] shrink-0 relative z-[55]">
                {/* Assuming avatar URL or style logic is applied here */}
                <div className="w-[40px] h-[39.57px] bg-[url(public/images/d6d06903-56cf-48ac-9153-8c0cdb56fbf7.png)] bg-cover bg-no-repeat relative z-[57]" />
                <div className="w-full h-full bg-[#c4c4c4] rounded-[10px] absolute top-0 left-0 z-[56]"></div>
              </div>{" "}
              <div>
                <strong className="mr-2">{comment.author}</strong>
                <span className="text-gray-500"> |</span>
                <span className="text-gray-500 ml-4">
                  {comment.timestamp.split("T")[0]}
                </span>
              </div>
            </div>
            <div className="mt-2 ml-8 flex w-[916px] pt-[10px] pr-[10px] pb-[10px] pl-[10px] gap-[10px] items-start shrink-0 flex-nowrap bg-[rgba(220,228,244,0.5)] rounded-[10px] relative z-[62] ">
              <p className="text-gray-800">{comment.content}</p>
            </div>
          </div>
          {/* Placeholder for icons and actions */}
        </div>
        <div
          className="flex ml-auto gap-[20px] items-center"
          //  style={{ zIndex: isModalVisible ? -1 : 'auto',}}
        >
          <div className="flex gap-[5px] items-start">
            {/* Other action icons */}
            {/* Icons here */}
            {/* Placeholder for icons and actions */}
            <div className="flex w-[225px] gap-[20px] items-center shrink-0 flex-nowrap relative z-[64]">
              <div className="flex w-[94px] gap-[2px] items-center shrink-0 flex-nowrap relative z-[65] ">
                <div className="w-[24px] h-[24px] shrink-0 relative z-[66]">
                  <div className="w-[14px] h-[14px] bg-[url(public/images/84a56358-fb4b-4669-9aca-da5a00ad9142.png)] bg-[length:100%_100%] bg-no-repeat relative z-[67] mt-[5px] mr-0 mb-0 ml-[5px]" />
                </div>
                <button className="h-[25px] shrink-0 basis-auto font-['Barlow'] text-[16px] font-light leading-[25px] text-[#000] relative text-left whitespace-nowrap z-[68]">
                  Comment
                </button>
              </div>
              <div className="flex w-[111px] gap-[5px] items-start shrink-0 flex-nowrap relative z-[69]">
                <div className="w-[24px] h-[24px] shrink-0 relative z-[70]">
                  <div className="w-[16px] h-[14.003px] bg-[url(public/images/3c263cdf-feb7-453b-98e6-969e0c14770c.png)] bg-[length:100%_100%] bg-no-repeat relative z-[71] mt-[4px] mr-0 mb-0 ml-[3px]" />
                </div>
                <div className="w-[24px] h-[24px] shrink-0 relative z-[72]">
                  <div className="w-[16px] h-[14.003px] bg-[url(public/images/5d612e74-5c9e-4fb8-aa2c-a13dce5f2c50.png)] bg-[length:100%_100%] bg-no-repeat relative z-[73] mt-[5px] mr-0 mb-0 ml-[4px]" />
                </div>
                <div className="w-[24px] h-[24px] shrink-0 relative z-[74]">
                  <div className="w-[12.014px] h-[16.972px] bg-[url(public/images/bd3a11d0-23a6-4c55-b8e5-78c7d445b7f7.png)] bg-[length:100%_100%] bg-no-repeat relative z-[75] mt-[4px] mr-0 mb-0 ml-[6px]" />
                </div>
                <div className="w-[24px] h-[24px] shrink-0 relative z-[76]">
                  <div className="w-[14px] h-[14px] bg-[url(public/images/4704fba9-6196-4c25-8b15-65688fa94ef4.png)] bg-[length:100%_100%] bg-no-repeat relative z-[77] mt-[5.5px] mr-0 mb-0 ml-[5px]" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {comment.replies && comment.replies.length > 0 && depth < 2 && (
          <button
            onClick={() => toggleCommentsVisibility(comment.id)}
            className="text-blue-500 hover:text-blue-700 underline mt-2"
          >
            {expandedComments[comment.id] ? "Hide Replies" : "Show Replies"}
          </button>
        )}
        {comment.replies && expandedComments[comment.id] && (
          <div className="mt-2">
            {renderComments(comment.replies, depth + 1, comment.id)}
          </div>
        )}
      </div>
    ));
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {comments && comments.length > 0 ? (
        renderComments(comments)
      ) : (
        <div>No comments available</div>
      )}
    </div>
  );
};
