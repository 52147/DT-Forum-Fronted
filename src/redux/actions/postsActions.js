import { getPostList } from '../../services/services'; 

// Action Types
export const GET_POSTS_REQUEST = 'GET_POSTS_REQUEST';
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
export const GET_POSTS_FAILURE = 'GET_POSTS_FAILURE';

// Thunk action creator
export const fetchPosts = () => async (dispatch) => {
  dispatch({ type: GET_POSTS_REQUEST });
  try {
    const posts = await getPostList(); // Make the API call
    dispatch({ type: GET_POSTS_SUCCESS, payload: posts });
  } catch (error) {
    console.error('Fetch posts failed', error);
    dispatch({ type: GET_POSTS_FAILURE, payload: error });
  }
};
