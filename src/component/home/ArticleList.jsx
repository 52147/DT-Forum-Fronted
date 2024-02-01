import React, { useState } from 'react';
import './index.css';

// Assuming you have an initial list of articles
const initialArticles = [/* ... your initial articles ... */];

export const ArticleList = () => {
  // State for the list of articles
  const [articles, setArticles] = useState(initialArticles);

  // Handler for when "More posts" is clicked
  const loadMoreArticles = () => {
    // Fetch more articles and update the state
    // This is a placeholder for your fetch logic
    const moreArticles = [/* ... more articles ... */];
    setArticles(prevArticles => [...prevArticles, ...moreArticles]);
  };

  return (
    <>
      {articles.map((article, index) => (
        // Render each article
        // Replace this div with the actual article component or JSX structure
        <div key={index} className="article">
          {/* ... article content ... */}
        </div>
      ))}
      <div className="more-posts" onClick={loadMoreArticles}>
      <div className="w-[1020px] shrink-0 bg-[url(../../assets/images/97522f7d-bc18-4447-8223-d671cab53ed4.png)] bg-cover bg-no-repeat relative z-[317]" />
        <div className="flex w-[118px] gap-[5px] items-center shrink-0 flex-nowrap relative z-[318]">
          <div className="w-[24px] h-[24px] shrink-0 relative z-[319]">
            <div className="w-[16px] h-[8.207px] bg-[url(../../assets/images/794e1dab-660f-4c8a-8f85-cbda66fc5387.png)] bg-[length:100%_100%] bg-no-repeat relative z-[320] mt-[7.897px] mr-0 mb-0 ml-[4px]" />
          </div>
          <button className="h-[24px] shrink-0 basis-auto font-['Barlow'] text-[18px] font-normal leading-[24px] text-[#000] tracking-0.27px relative text-left whitespace-nowrap z-[321]">
            More posts
          </button>
        </div>
      </div>
    </>
  );
};

