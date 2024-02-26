import {
  FETCH_ARTICLES_START,
  FETCH_ARTICLES_SUCCESS,
  FETCH_ARTICLES_FAILURE,
  SET_CURRENT_PAGE,
} from "../actions/articleActions";

const initialState = {
  posts: [],
  loading: false,
  error: "",
  currentPage: 1,
  pageSize: 10, // Default page size, adjust as needed
};

const articlesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ARTICLES_START:
      return {
        ...state,
        loading: true,
        error: "",
      };
    case FETCH_ARTICLES_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: [...state.posts, ...action.payload], // Append new articles
      };

    case FETCH_ARTICLES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    default:
      return state;
  }
};

export default articlesReducer;
