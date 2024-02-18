import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMoreInData } from "../../redux/actions/moreInActions";

export const MoreIn = ({ postId, topic }) => {
  const dispatch = useDispatch();
  const { loading, posts, error } = useSelector((state) => state.moreIn);
  useEffect(() => {
    if (postId) {
      dispatch(fetchMoreInData(postId));
    }
  }, [dispatch, postId]);
  const renderTopicHeading = () => {
    return (
      <h2 className="text-2xl font-medium mb-6">More in {topic} &gt;&gt;</h2>
    );
  };
  return (
    <div className="ml-4 more-in max-w-md">
      {renderTopicHeading()}
      {posts.length > 0 ? (
        posts.map((post, index) => (
          <div className="flex w-[250px] h-[250px] pt-[20px] pr-[20px] pb-[20px] pl-[20px] flex-col gap-[10px] justify-center items-center shrink-0 flex-nowrap bg-[#d9d9d9] rounded-[10px] relative z-[160] mb-4">
            <div
              key={index}
              className="flex w-[210px] h-[210px] flex-col gap-[15px] justify-center items-start shrink-0 flex-nowrap relative z-[161]"
            >
              <div className="flex w-[170px] gap-[12px] items-center shrink-0 flex-nowrap relative z-[162]">
                <div className="w-[40px] h-[40px] shrink-0 relative z-[163]">
                  <div className="w-[40px] h-[39.57px] bg-[url(public/images/77e79def-45d9-4a01-82b5-2d96b0e6fc72.png)] bg-[length:100%_100%] bg-no-repeat relative z-[165] mt-[0.22px] mr-0 mb-0 ml-0" />
                  <div className="w-full h-full bg-[#c4c4c4] rounded-[10px] absolute top-0 left-0 z-[164]" />
                </div>
                <div className="flex w-[118px] items-center shrink-0 flex-nowrap relative z-[166]">
                  <span className="h-[25px] shrink-0 basis-auto font-['Barlow'] text-[16px] font-light leading-[25px] text-[#000] relative text-left whitespace-nowrap z-[167]">
                    {post.author} | {post.date}
                  </span>
                </div>
              </div>
              <div className="flex gap-[10px] items-start self-stretch shrink-0 flex-nowrap relative z-[169]">
                <span className="flex w-[220px] h-[72px] justify-start items-center shrink-0 font-['Barlow'] text-[18px] font-normal leading-[24px] text-[#000] tracking-[0.27px] relative text-left z-[170]">
                  {post.preview}
                </span>
              </div>
              <div className="flex w-[210px] h-[28px] items-center shrink-0 flex-nowrap relative z-[171]">
                <div className="flex w-[70px] gap-[2px] items-end shrink-0 flex-nowrap relative z-[172]">
                  <div className="w-[24px] h-[24px] shrink-0 relative z-[173]">
                    <div className="w-[16px] h-[14.003px] bg-[url(public/images/92e1b827-13a2-48ef-8dec-42550ece96b4.png)] bg-[length:100%_100%] bg-no-repeat relative z-[174] mt-[4px] mr-0 mb-0 ml-[3px]" />
                  </div>
                  <span className="h-[25px] shrink-0 basis-auto font-['Barlow'] text-[16px] font-light leading-[25px] text-[#000] relative text-left whitespace-nowrap z-[175]">
                    {post.likes_count}
                  </span>
                </div>
                <div className="flex w-[70px] gap-[2px] items-end shrink-0 flex-nowrap relative z-[176]">
                  <div className="w-[24px] h-[24px] shrink-0 relative z-[177]">
                    <div className="w-[14px] h-[14px] bg-[url(public/images/0fcffbe1-fe47-4cba-9123-efdaace7be2e.png)] bg-[length:100%_100%] bg-no-repeat relative z-[178] mt-[5px] mr-0 mb-0 ml-[5px]" />
                  </div>
                  <span className="h-[25px] shrink-0 basis-auto font-['Barlow'] text-[16px] font-light leading-[25px] text-[#000] relative text-left whitespace-nowrap z-[179]">
                    {post.messageCounts}
                  </span>
                </div>
                <div className="flex w-[70px] gap-[2px] items-end shrink-0 flex-nowrap relative z-[180]">
                  <div className="w-[24px] h-[24px] shrink-0 relative z-[181]">
                    <div className="w-[12.014px] h-[16.972px] bg-[url(public/images/5959de4e-e1f2-48de-a7b9-7a812223a575.png)] bg-[length:100%_100%] bg-no-repeat relative z-[182] mt-[4px] mr-0 mb-0 ml-[6px]" />
                  </div>
                  <span className="h-[25px] shrink-0 basis-auto font-['Barlow'] text-[16px] font-light leading-[25px] text-[#000] relative text-left whitespace-nowrap z-[183]">
                    {post.saveCounts}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>No related articles found.</p>
      )}
    </div>
  );
};
