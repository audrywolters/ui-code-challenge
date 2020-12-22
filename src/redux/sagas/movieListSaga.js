//import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

let movieList = [
  { id: 1, title: "one", path: "images/1.jpg", queuePosition: 1 },
  { id: 2, title: "two", path: "images/2.jpg", queuePosition: 2 },
  { id: 3, title: "three", path: "images/3.jpg", queuePosition: 3 },
  { id: 4, title: "four", path: "images/4.jpg", queuePosition: 4 },
  { id: 5, title: "five", path: "images/5.jpg", queuePosition: 5 },
  { id: 6, title: "six", path: "images/6.jpg", queuePosition: 6 },
  { id: 7, title: "seven", path: "images/7.jpg", queuePosition: 7 },
];

function* fetchMovieList(action) {
  try {
    //const response = yield axios.get( '/api/closet', action.payload );

    // pretend there is backend and DB :)
    // AUDRY response.DATA?????
    let response = movieList;

    //yield put({ type: 'SET_MOVIE_LIST', payload: response.data });
    yield put({ type: "SET_MOVIE_LIST", payload: response });
  } catch (error) {
    console.log("movie list GET request failed", error);
  }
}

function* updateMovieList(action) {
  try {
    //const response = yield axios.put( '/api/change', action.payload );

    const response = 1;
    // do some ES6 magic. filter?
    // where id = action.ID, movie.queuePosition = action.ID

    yield put({ type: "UPDATE_MOVIE_LIST", payload: response.data });
  } catch (error) {
    console.log("Update Movie PUT request failed", error);
  }
}

function* movieListSaga() {
  yield takeLatest("FETCH_MOVIE_LIST", fetchMovieList);
  yield takeLatest("UPDATE_MOVIE_LIST", updateMovieList);
}

export default movieListSaga;
