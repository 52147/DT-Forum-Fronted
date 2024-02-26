import React, { useState, useEffect } from "react";
import "./index.css";
import { useSelector, useDispatch } from "react-redux";
import { parseISO, differenceInCalendarDays } from "date-fns";
import { useNavigate } from "react-router-dom";
import Select from "react-select";

import { fetchPosts } from "../../redux/actions/postsActions.js";
const cities = [
  { value: "New York", label: "New York" },
  { value: "Los Angeles", label: "Los Angeles" },
  { value: "Chicago", label: "Chicago" },
  { value: "Houston", label: "Houston" },
  { value: "Phoenix", label: "Phoenix" },
  { value: "Philadelphia", label: "Philadelphia" },
  { value: "Boston", label: "Boston" },
  { value: "San Jose", label: "San Jose" },
  { value: "Austin", label: "Austin" },
  { value: "Dallas", label: "Dallas" },
  { value: "Phoenix", label: "Phoenix" },
];

const articles = [
  {
    id: "1",
    name: "Article Name 1",
    preview:
      "Post preview - Nemo enim ipsam voluptatem quia voluptas sit aspernatur...",
    topic: "Topic1",
    author: "Author Name",
    date: "06-30-2023",
    messageCounts: "240",
    keywords: ["keyword1", "keyword2", "keyword5"],
  },
];
const selectStyles = {
  menu: (base) => ({
    ...base,
    zIndex: 100, // Ensure dropdown is above other content
  }),
};
export const ArticleList = () => {
  // const [selectedCity, setSelectedCity] = useState(""); // To store the selected city
  const [activeFilter, setActiveFilter] = useState("Newest"); // Default filter
  const [searchQuery, setSearchQuery] = useState("");
  const { posts, loading, error } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [selectedCity, setSelectedCity] = useState(null);
  const postsPerPage = 10; // Display 10 posts per page initially
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  // State to keep track of all displayed posts
  const [displayedPosts, setDisplayedPosts] = useState([]);
  // State to keep track of the number of posts to display
  const [numDisplayedPosts, setNumDisplayedPosts] = useState(postsPerPage);

  // Function to load more posts
  const loadMorePosts = () => {
    // Increase the number of displayed posts by the posts per page
    setNumDisplayedPosts((prevNum) => prevNum + postsPerPage);
  };

  const handleCityChange = (selectedOption) => {
    setSelectedCity(selectedOption);
  };
  useEffect(() => {
    dispatch(fetchPosts()); // Fetch 10 posts per page
  }, [dispatch]);

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };
  // Effect that runs when selectedCity changes
  useEffect(() => {
    if (selectedCity) {
      // Perform an action when selectedCity changes, such as fetching data
      console.log(`Selected city: ${selectedCity.label}`);
      const allFilteredAndSortedPosts = filteredAndSortedPosts();
      // Update the displayed posts based on the number of posts to display
      setDisplayedPosts(allFilteredAndSortedPosts.slice(0, numDisplayedPosts)); // Example: fetchDataForCity(selectedCity.value);
    }
  }, [selectedCity]); // Dependency array includes selectedCity to run effect on its change

  const filteredAndSortedPosts = () => {
    // First, filter the posts based on the search query
    let filteredPosts = posts.filter(
      (post) =>
        (post.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          post.preview.toLowerCase().includes(searchQuery.toLowerCase())) &&
        (!selectedCity || post.location === selectedCity.value) // Assuming each post has a 'city' property
    );
    console.log(filteredPosts);

    // Then, sort the filtered posts based on the active filter
    switch (activeFilter) {
      case "Trending":
        const currentDate = new Date();
        filteredPosts.sort((a, b) => {
          const daysA = differenceInCalendarDays(currentDate, parseISO(a.date));
          const scoreA = daysA / parseInt(a.messageCounts, 10);

          const daysB = differenceInCalendarDays(currentDate, parseISO(b.date));
          const scoreB = daysB / parseInt(b.messageCounts, 10);

          // For trending, you might want to sort from lowest score to highest,
          // assuming a lower score means more trending. Adjust as needed.
          return scoreA - scoreB;
        });
        break;

      case "Most liked":
        // Assuming you have a sorting logic for "Most liked"
        // For example, if posts had a 'likes' property you could sort like this:
        filteredPosts.sort((a, b) => b.likes_count - a.likes_count);
        break;

      // Add more cases as needed
      case "Newest":
        // Assuming you have a sorting logic for "Most liked"
        // For example, if posts had a 'likes' property you could sort like this:
        filteredPosts.sort((a, b) => parseISO(b.date) - parseISO(a.date));
        break;
      default:
        // Assuming the default is "Newest", you might sort by date
        // For example:
        break;
    }

    return filteredPosts;
  };
  // Effect or a function to update displayed posts when needed
  useEffect(() => {
    const allFilteredAndSortedPosts = filteredAndSortedPosts();
    // Update the displayed posts based on the number of posts to display
    setDisplayedPosts(allFilteredAndSortedPosts.slice(0, numDisplayedPosts));
  }, [posts, searchQuery, activeFilter, numDisplayedPosts]); // Make sure to include all dependencies that can affect the posts

  const navigateToPost = (authorName, name, postId) => {
    navigate(`/post/${authorName}/${name}/${postId}`);
  };
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="flex flex-col items-start shrink-0 relative z-86 w-full">
      {/* Discussions Title */}
      <h2 className="text-2xl  mt-0 mb-4 font-['Barlow'] text-[24px] font-medium leading-[36px] text-[#000] tracking--0.36px">
        Discussions
      </h2>
      {/* Search Bar and Filters */}
      <div className="flex gap-4 mb-4">
        {/* Filter Buttons */}
        <button
          onClick={() => handleFilterChange("Newest")}
          className={`px-4 py-2 rounded-md transition-colors duration-200 ${
            activeFilter === "Newest"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          Newest
        </button>

        <button
          onClick={() => handleFilterChange("Trending")}
          className={`px-4 py-2 rounded-md transition-colors duration-200 ${
            activeFilter === "Trending"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          Trending
        </button>
        <button
          onClick={() => handleFilterChange("Most liked")}
          className={`px-4 py-2 rounded-md transition-colors duration-200 ${
            activeFilter === "Most liked"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          Most liked
        </button>

        <Select
          value={selectedCity}
          onChange={handleCityChange}
          options={cities}
          styles={selectStyles}
        />

        <div className="flex w-[316px] pt-1.5 pr-3.25 pb-1.5 pl-3.25 gap-2.5 items-center rounded-md border border-black relative">
          <div className="w-6 h-6 relative flex-shrink-0 pl-4 pr-8">
            <div className=" w-3.5 h-3.5 bg-[url('/public/images/92fe01d7-045c-4214-a8f6-c4734d5a6025.png')] bg-cover bg-no-repeat relative mt-1.25 ml-1.25"></div>
          </div>
          <input
            type="text"
            placeholder="Search all discussions"
            className="bg-transparent border-none placeholder-gray-400 text-base font-light leading-6 text-gray-400 w-full focus:outline-none"
            aria-label="Search"
          />
        </div>
      </div>

      <div className="flex flex-col gap-15px items-start shrink-0 relative z-86 w-[1140px]">
        {displayedPosts.map((article) => (
          <div
            key={article.id}
            className="flex flex-col shrink-0 relative z-87 mb-4"
            onClick={() =>
              navigateToPost(
                article.author.replace(/\s+/g, "-").toLowerCase(),
                article.name,
                article.id
              )
            } // Add onClick handler here
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                border: "1px rgba(220, 228, 244, 0.50) solid",
              }}
              className="mb-3"
            ></div>
            {/* Article Name */}
            <h2 className="h-[30px] self-stretch shrink-0 basis-auto font-['Barlow'] text-[20px] font-medium leading-[30px] text-[#000] relative text-left whitespace-nowrap z-[89]">
              {article.name}
            </h2>
            <div className="flex justify-end items-center mb-2">
              {/* Post preview, Topics, Author, and Date */}
              <p
                className="text-base font-light text-rgba(0,0,0,0.8) text-overflow-ellipsis"
                style={{ width: "550px" }}
              >
                {article.preview}
              </p>
              <div className="flex items-center">
                <div className="flex items-center ml-4">
                  <div className="w-[14.003px] h-[12.02px] bg-[url(public/images/cad88275-378d-4fe5-b71d-b567d605ae25.png)] bg-[length:100%_100%] bg-no-repeat relative z-[94] mr-0 mb-0 ml-[120px]" />
                  <span className="ml-2">{article.topic}</span>
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
            </div>
            {/* Keywords */}
            <div className="flex flex-wrap gap-2">
              {article.keywordNames && article.keywordNames.length > 0 ? (
                article.keywordNames.map((keyword, keyIndex) => (
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

      {/* Load More button */}
      <div className="flex w-[118px] gap-[5px] items-center shrink-0 flex-nowrap relative z-[318]">
        <div className="w-[24px] h-[24px] shrink-0 relative z-[319]">
          <div className="w-[16px] h-[8.207px] bg-[url(public/images/794e1dab-660f-4c8a-8f85-cbda66fc5387.png)] bg-[length:100%_100%] bg-no-repeat relative z-[320] mt-[7.897px] mr-0 mb-0 ml-[4px]" />
        </div>
        <button
          onClick={loadMorePosts}
          className="h-[24px] shrink-0 basis-auto font-['Barlow'] text-[18px] font-normal leading-[24px] text-[#000] tracking-0.27px relative text-left whitespace-nowrap z-[321]"
        >
          More posts
        </button>
      </div>
      <button
        onClick={scrollToTop}
        className=" flex w-[120px] gap-[5px] items-center flex-nowrap border-none relative z-[42] pointer mt-4 mx-auto"
      >
        {/* Icon container */}
        <div className="w-[24px] h-[24px] shrink-0 relative z-[43]">
          {/* Icon */}
          <div className="w-[16px] h-[8.207px] bg-[url(public/images/9796a494-1d06-4722-988c-dd51a5795ed5.png)] bg-[length:100%_100%] bg-no-repeat relative z-[44] mt-[7.897px] mr-0 mb-0 ml-[4px]" />
        </div>
        {/* Text */}
        <span className="h-[24px] shrink-0 basis-auto font-['Barlow'] text-[18px] font-normal leading-[24px] text-[#000] tracking-0.27px relative text-left whitespace-nowrap z-[45]">
          Back to top
        </span>
      </button>
    </div>
  );
};
