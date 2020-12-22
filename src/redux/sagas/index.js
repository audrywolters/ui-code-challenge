import { all } from "redux-saga/effects";
import movieListSaga from "./movieListSaga";

export default function* rootSaga() {
  yield all([
    movieListSaga()
  ]);
}
