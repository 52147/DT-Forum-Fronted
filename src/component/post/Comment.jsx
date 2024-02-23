import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchComment } from "../../redux/actions/commentActions";

export const Comment = ({ postId }) => {
  const dispatch = useDispatch();
  const { loading, comments, error } = useSelector((state) => state.comments);

  useEffect(() => {
    if (postId) {
      dispatch(fetchComment(postId));
    }
  }, [postId, dispatch]);

  const renderComments = (comments, depth = 0) => {
    // Flatten any depth beyond the second level (third level comments) to the second level.
    const currentDepth = Math.min(depth, 2);
    let nestedWidth;
    if (currentDepth == 1) {
      nestedWidth = "950px";
    } else if (currentDepth == 2) {
      nestedWidth = "900px";
    } else {
      nestedWidth = "1000px";
    }
    let nestedWidth2;
    if (currentDepth == 1) {
      nestedWidth2 = "850px";
    } else if (currentDepth == 2) {
      nestedWidth2 = "800px";
    } else {
      nestedWidth2 = "900px";
    }
    let nestedMarginRight;
    if (currentDepth == 1) {
      nestedMarginRight = "50px";
    } else if (currentDepth == 2) {
      nestedMarginRight = "80px";
    } else {
      nestedMarginRight = "0px";
    }

    return comments.map((comment) => (
      <div
        key={comment.id}
        className={`flex w-[960px] flex-col gap-[10px] items-start flex-nowrap relative z-[52] ml-${
          currentDepth * 20
        } mt-2 p-4 rounded-lg `}
        style={{ width: nestedWidth }}
      >
        <div className="w-[960px] h-[197px] shrink-0 relative z-[53]">
          <div className="flex w-[223px] gap-[12px] items-center flex-nowrap relative z-[54]">
            <div className="w-[40px] h-[40px] shrink-0 relative z-[55]">
              {/* Assuming avatar URL or style logic is applied here */}
              <div className="w-[40px] h-[39.57px] bg-[url(public/images/d6d06903-56cf-48ac-9153-8c0cdb56fbf7.png)] bg-cover bg-no-repeat relative z-[57]" />
              <div className="w-full h-full bg-[#c4c4c4] rounded-[10px] absolute top-0 left-0 z-[56]"></div>
            </div>
            <div className="flex w-[171px] items-center shrink-0 flex-nowrap relative z-[58]">
              <span className="h-[30px] shrink-0 basis-auto font-['Barlow'] text-[20px] font-medium leading-[30px] text-[#000] relative text-left whitespace-nowrap z-[59]">
                {comment.author}
              </span>
              <span
                className="text-gray-500 ml-4"
                style={{ minWidth: "200px", maxWidth: "300px" }}
              >
                {comment.timestamp}
              </span>
            </div>
          </div>
          <div className="flex w-[916px] flex-col gap-[6px] items-end flex-nowrap relative z-[61] mt-[6px]">
            <div
              className="flex w-[916px] pt-[10px] pr-[10px] pb-[10px] pl-[10px] gap-[10px] items-start shrink-0 flex-nowrap bg-[rgba(220,228,244,0.5)] rounded-[10px] relative z-[62] "
              style={{ width: nestedWidth2, marginRight: nestedMarginRight }}
            >
              <span className="flex w-[898px] h-[100px] justify-start items-center shrink-0 font-['Barlow'] text-[16px] font-light leading-[25px] text-[#000] relative text-left z-[63]">
                {comment.content}
              </span>
            </div>
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

        {/* Render replies if they exist, capping the depth at the third level */}
        {comment.replies && (
          <div className="mt-4 ">
            {renderComments(
              comment.replies,
              currentDepth + (currentDepth < 2 ? 1 : 0)
            )}
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
