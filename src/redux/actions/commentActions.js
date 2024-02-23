import { getCommentData } from "../../services/CommentService";

// Action Types
// Define action types for fetching comment
export const GET_COMMENT_REQUEST = "GET_COMMENT_REQUEST";
export const GET_COMMENT_REQUEST_SUCCESS = "GET_COMMENT_REQUEST_SUCCESS";
export const GET_COMMENT_REQUEST_FAILURE = "GET_COMMENT_REQUEST_FAILURE";

// A helper function to flatten replies beyond the third level
const flattenReplies = (replies, depth = 0) => {
  if (!replies) return [];

  if (depth >= 2) {
    // If we're at the third level, flatten all further replies
    return replies.reduce((acc, reply) => {
      acc.push(reply);
      const nestedReplies = flattenReplies(reply.replies, depth + 1);
      acc.push(...nestedReplies); // Spread and push all nested replies at the current level
      reply.replies = []; // Clear out original nested replies
      return acc;
    }, []);
  } else {
    // If we're not yet at the third level, process each set of replies normally
    replies.forEach((reply) => {
      reply.replies = flattenReplies(reply.replies, depth + 1);
    });
    return replies;
  }
};

// Thunk action creator
export const fetchComment = (postId) => async (dispatch) => {
  dispatch({ type: GET_COMMENT_REQUEST });
  try {
    let data = await getCommentData(postId);
    data = flattenReplies(data, 0); // Flatten the replies
    console.log(data);

    dispatch({ type: GET_COMMENT_REQUEST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_COMMENT_REQUEST_FAILURE, payload: error.toString() });
  }
};
