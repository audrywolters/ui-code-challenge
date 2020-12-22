import { all } from "redux-saga/effects";
import movieListSaga from "./movieListSaga";
import movieSaga from "./movieSaga";

export default function* rootSaga() {
  yield all([
    movieListSaga(),
    movieSaga()
  ]);
}
