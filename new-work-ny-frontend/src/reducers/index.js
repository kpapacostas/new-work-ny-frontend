import { combineReducers } from "redux";
import { LOG_IN, NEW_USER, NEW_POST, GET_POSTS } from "../actions/types";

const userReducer = (state = null, action) => {
  switch (action.type) {
    case NEW_USER:
      return action.data.user;
    case LOG_IN:
      return action.data.user;
    default:
      return state;
  }
};

const postsReducer = (state = [], action) => {
  switch (action.type) {
    case NEW_POST:
      return [...state.posts, action.data.post];
    case GET_POSTS:
      return action.data.posts;
    default:
      return state;
  }
};

export default combineReducers({
  user: userReducer,
  posts: postsReducer,
});
