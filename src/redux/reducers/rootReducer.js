import { combineReducers } from 'redux';
import dataSliceReducer from './dataslice';
import postsReducer from './postsReducer';

const rootReducer = combineReducers({
  data: dataSliceReducer,
  posts: postsReducer,
});

export default rootReducer;
