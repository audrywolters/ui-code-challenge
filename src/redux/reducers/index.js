import { combineReducers } from "redux";
import movieList from "./movieListReducer";
import movie from "./movieReducer";

const rootReducer = combineReducers({
  movieList,
  movie
});

export default rootReducer;
