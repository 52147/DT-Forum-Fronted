import { combineReducers } from "redux";
import dataSliceReducer from "./dataslice";
import postsReducer from "./postsReducer";
import postContentReducer from "./postContentReducer"; 

const rootReducer = combineReducers({
  data: dataSliceReducer,
  posts: postsReducer,
  postContent: postContentReducer, 
});

export default rootReducer;
