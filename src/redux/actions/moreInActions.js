import { getMoreInData } from '../../services/MoreInService'; 

// Action Types
// Define action types for fetching posts
export const GET_MORE_IN_REQUEST = 'GET_MORE_IN_REQUEST';
export const GET_MORE_IN_SUCCESS = 'GET_MORE_IN_SUCCESS';
export const GET_MORE_IN_FAILURE = 'GET_MORE_IN_FAILURE';


// Thunk action creator
export const fetchMoreInData = (postId) => async (dispatch) => {
    dispatch({ type: GET_MORE_IN_REQUEST });
    try {
      const data = await getMoreInData(postId);
      dispatch({ type: GET_MORE_IN_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: GET_MORE_IN_FAILURE, payload: error.toString() });
    }
  };
