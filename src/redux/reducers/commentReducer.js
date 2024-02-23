import {
  GET_COMMENT_REQUEST,
  GET_COMMENT_REQUEST_SUCCESS,
  GET_COMMENT_REQUEST_FAILURE,
} from "../actions/commentActions";
// Initial state
const initialState = {
  loading: false,
  comments: [],
  error: null,
};

// Reducer
export const commentReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COMMENT_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_COMMENT_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        comments: action.payload,
      };
    case GET_COMMENT_REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
