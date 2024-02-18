import { GET_MORE_IN_REQUEST, GET_MORE_IN_SUCCESS, GET_MORE_IN_FAILURE } from '../actions/moreInActions';

const initialState = {
  loading: false,
  posts: [],
  error: '',
};

export const moreInReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MORE_IN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_MORE_IN_SUCCESS:
      return {
        loading: false,
        posts: action.payload,
        error: '',
      };
    case GET_MORE_IN_FAILURE:
      return {
        loading: false,
        posts: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
export default moreInReducer;
