import { NEW_USER, LOG_IN, NEW_POST, GET_POSTS } from "./types";
import history from "../history";

import {
  fetchNewUser,
  fetchLogIn,
  fetchNewPost,
  fetchPosts,
} from "../adapters";

//USERS############################################################################

export const register = (dispatch, userData) => {
  return (dispatch) => {
    dispatch({ type: "ASYNC_START" });
    fetchNewUser(userData).then((data) => {
      if (data.user) {
        dispatch({ type: NEW_USER, data });
        history.push("/");
        alert("Please Login!");
      } else {
        history.push("/");
        alert("Login failed, please try again.");
      }
    });
  };
};

export const loggingIn = (dispatch, userData) => {
  return (dispatch) => {
    dispatch({ type: "ASYNC_START" });
    fetchLogIn(userData).then((data) => {
      if (data.user) {
        dispatch({ type: LOG_IN, data });
        history.push("/dashboard");
      } else {
        history.push("/");
        alert("Login failed, please try again.");
      }
    });
  };
};

//POSTS############################################################################

export const newPost = (dispatch, postData) => {
  return (dispatch) => {
    dispatch({ type: "ASYNC_START" });
    fetchNewPost(postData).then((data) => {
      dispatch({ type: NEW_POST, data });
    });
  };
};

export const getAllPosts = (dispatch) => {
  return (dispatch) => {
    dispatch({ type: "ASYNC_START" });
    fetchPosts().then((data) => {
      dispatch({ type: GET_POSTS, data });
    });
  };
};
