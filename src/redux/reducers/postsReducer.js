import axios from "axios";
import store from "../store";

const defaultState = [];

axios.get("https://api.myjson.com/bins/95pka").then(response => {
  store.dispatch({ type: "FETCH_POSTS", payload: response.data });
});

function postsReducer(state = defaultState, action) {
  switch (action.type) {
    case "FETCH_POSTS":
      return action.payload;
    default:
      return state;
  }
}

export default postsReducer;
