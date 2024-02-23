import { combineReducers } from "redux";
import dataSliceReducer from "./dataslice";
import postsReducer from "./postsReducer";
import postContentReducer from "./postContentReducer"; 
import moreInReducer from "./moreInReducer"; 
import likesReducer from "./likesReducer";
import {commentReducer} from "./commentReducer";

const rootReducer = combineReducers({
  data: dataSliceReducer,
  posts: postsReducer,
  postContent: postContentReducer, 
  moreIn:moreInReducer,
  likes: likesReducer,
  comments: commentReducer,
});

export default rootReducer;
