import { NEW_USER, LOG_IN, NEW_POST, GET_POSTS } from "./types";
import history from "../history";

import {
  fetchNewUser,
  fetchLogIn,
  fetchNewPost,
  fetchPosts,
  fetchUser,
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
        alert("Signup failed, please try again.");
      }
    });
  };
};

export const loggingIn = (dispatch, userData) => {
  return (dispatch) => {
    dispatch({ type: "ASYNC_START" });
    fetchLogIn(userData).then((data) => {
      if (data !== "false") {
        window.localStorage.setItem("userId", JSON.stringify(data.user.id));
        dispatch({ type: LOG_IN, data });
        history.push("/dashboard");
      } else {
        history.push("/");
        alert("Please login again.");
      }
    });
  };
};

export const setCurrentUser = (dispatch) => {
  return (dispatch) => {
    dispatch({ type: "ASYNC_START" });
    fetchUser().then((data) => {
      if (data.logged_in !== false) {
        debugger;
        window.localStorage.setItem("userId", `${data.user.id}`);
        dispatch({ type: LOG_IN, data });
        history.push("/dashboard");
      } else {
        history.push("/");
        alert("Please login again.");
      }
    });
  };
};

//POSTS############################################################################

export const newPost = (dispatch, postData) => {
  return (dispatch) => {
    dispatch({ type: "ASYNC_START" });
    fetchNewPost(postData);
  };
};

export const getAllPosts = (dispatch) => {
  return (dispatch) => {
    dispatch({ type: "ASYNC_START" });
    fetchPosts().then((data) => {
      if (data !== null) {
        dispatch({ type: GET_POSTS, data });
      } else {
        return null;
      }
    });
  };
};
