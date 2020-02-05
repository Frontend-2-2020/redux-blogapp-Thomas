import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import authReducer from "./reducers/authReducer.js";
import postsReducer from "./reducers/postsReducer.js";
import thunk from "redux-thunk";

const store = createStore(
  combineReducers({ posts: postsReducer, auth: authReducer }),
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
