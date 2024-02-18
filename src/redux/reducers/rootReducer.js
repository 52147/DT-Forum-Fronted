import { combineReducers } from "redux";
import dataSliceReducer from "./dataslice";
import postsReducer from "./postsReducer";
import postContentReducer from "./postContentReducer"; 
import moreInReducer from "./moreInReducer"; 
const rootReducer = combineReducers({
  data: dataSliceReducer,
  posts: postsReducer,
  postContent: postContentReducer, 
  moreIn:moreInReducer,
});

export default rootReducer;
