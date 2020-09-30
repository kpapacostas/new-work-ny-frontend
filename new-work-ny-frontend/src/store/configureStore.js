import { createStore, applyMiddleware, compose } from "redux";
import reduxThunk from "redux-thunk";
import rootReducer from "../reducers/index";

const configureStore = () => {
  let store = createStore(rootReducer, compose(applyMiddleware(reduxThunk)));
  return store;
};

export default configureStore;
