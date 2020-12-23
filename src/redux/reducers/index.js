import { combineReducers } from "redux";
import movieList from "./movieListReducer";

const rootReducer = combineReducers({
  movieList
});

export default rootReducer;
