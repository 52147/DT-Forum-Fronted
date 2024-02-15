import { getPostContent } from "../../services/PostContentServices";

// Action Types
export const FETCH_POST_CONTENT_BEGIN = "FETCH_POST_CONTENT_BEGIN";
export const FETCH_POST_CONTENT_SUCCESS = "FETCH_POST_CONTENT_SUCCESS";
export const FETCH_POST_CONTENT_FAILURE = "FETCH_POST_CONTENT_FAILURE";

// Action Creators
export const fetchPostContentBegin = () => ({
  type: FETCH_POST_CONTENT_BEGIN,
});

export const fetchPostContentSuccess = (content) => ({
  type: FETCH_POST_CONTENT_SUCCESS,
  payload: { content },
});

export const fetchPostContentFailure = (error) => ({
  type: FETCH_POST_CONTENT_FAILURE,
  payload: { error },
});

export const fetchPostContent = (postId) => async (dispatch) => {
  dispatch(fetchPostContentBegin());
  try {
    const data = await getPostContent(postId);
    dispatch(fetchPostContentSuccess(data));
  } catch (error) {
    dispatch(fetchPostContentFailure(error));
  }
};
