// likesReducer.js
import {
  INCREMENT_LIKE_BEGIN,
  INCREMENT_LIKE_SUCCESS,
  INCREMENT_LIKE_FAILURE,
} from "../actions/likesActions";

const initialState = {
  likeUpdateLoading: false,
  likeUpdateError: null,
};

const likesReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_LIKE_BEGIN:
      return {
        ...state,
        likeUpdateLoading: true,
        likeUpdateError: null,
      };
    case INCREMENT_LIKE_SUCCESS:
      // Optionally update state with the new like count or other post data
      return {
        ...state,
        likeUpdateLoading: false,
      };
    case INCREMENT_LIKE_FAILURE:
      return {
        ...state,
        likeUpdateLoading: false,
        payload: { error: error.toString() }, // or { message: error.message }
      };
    default:
      return state;
  }
};

export default likesReducer;
