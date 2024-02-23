// Import the service function you created earlier
import { incrementLikeCountService } from "../../services/PostContentServices";
// likesActions.js
export const INCREMENT_LIKE_BEGIN = 'INCREMENT_LIKE_BEGIN';
export const INCREMENT_LIKE_SUCCESS = 'INCREMENT_LIKE_SUCCESS';
export const INCREMENT_LIKE_FAILURE = 'INCREMENT_LIKE_FAILURE';

// likesActions.js
export const incrementLikeCount = (postId) => {
  return async (dispatch) => {
    dispatch({ type: INCREMENT_LIKE_BEGIN });
    try {
      const updatedPost = await incrementLikeCountService(postId);
      dispatch({
        type: INCREMENT_LIKE_SUCCESS,
        payload: { content: updatedPost },
      });
    } catch (error) {
      dispatch({
        type: INCREMENT_LIKE_FAILURE,
        payload: { error },
      });
    }
  };
};
