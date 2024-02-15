import {
  FETCH_POST_CONTENT_BEGIN,
  FETCH_POST_CONTENT_SUCCESS,
  FETCH_POST_CONTENT_FAILURE,
} from "../actions/postContentActions";

const initialState = {
  content: null,
  loading: false,
  error: null,
};

const postContentReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POST_CONTENT_BEGIN:
      // Mark the state as "loading" so we can show a spinner or something
      // Also, reset any errors information.
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_POST_CONTENT_SUCCESS:
      // All done: set loading "false".
      // Also, replace the content with the ones from the server
      return {
        ...state,
        loading: false,
        content: action.payload.content,
      };
    case FETCH_POST_CONTENT_FAILURE:
      // The request failed, but it did stop, so set loading to "false".
      // Save the error, so we can display it somewhere.
      // Since it failed, we don't have content to display anymore, so set it to null.
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        content: null,
      };
    default:
      // ALWAYS have a default case in a reducer
      return state;
  }
};

export default postContentReducer;
