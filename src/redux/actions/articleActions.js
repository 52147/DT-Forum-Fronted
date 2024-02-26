import { fetchArticles } from "../../services/ArticleListservices"; // Assuming you have this service
export const FETCH_ARTICLES_START = "FETCH_ARTICLES_START";
export const FETCH_ARTICLES_SUCCESS = "FETCH_ARTICLES_SUCCESS";
export const FETCH_ARTICLES_FAILURE = "FETCH_ARTICLES_FAILURE";
export const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";

export const fetchArticlesStart = () => ({
  type: FETCH_ARTICLES_START,
});

export const fetchArticlesSuccess = (articles) => ({
  type: FETCH_ARTICLES_SUCCESS,
  payload: articles,
});

export const fetchArticlesFailure = (error) => ({
  type: FETCH_ARTICLES_FAILURE,
  payload: error,
});

export const setCurrentPage = (page) => ({
  type: SET_CURRENT_PAGE,
  payload: page,
});

// Thunk action to fetch articles with pagination
export const fetchArticlesWithPagination =
  (page, pageSize) => async (dispatch) => {
    dispatch(fetchArticlesStart());
    try {
      const articles = await fetchArticles(page, pageSize); // Assuming this function correctly fetches data
      dispatch(fetchArticlesSuccess(articles)); // Dispatching the fetched articles
      dispatch(setCurrentPage(page)); // Setting the current page
    } catch (error) {
      dispatch(fetchArticlesFailure(error.message));
    }
  };
