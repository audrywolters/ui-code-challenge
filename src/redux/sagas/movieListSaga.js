import { put, takeLatest } from "redux-saga/effects";

// wow! how could a DB be here in a saga? :P
// let's just pretend this has returned from a backend
let movieList = [
  { id: 1, title: "one",   poster: "images/1.jpg", isInQueue: false, queuePosition: 1 },
  { id: 2, title: "two",   poster: "images/2.jpg", isInQueue: false, queuePosition: 2 },
  { id: 3, title: "three", poster: "images/3.jpg", isInQueue: true,  queuePosition: 3 },
  { id: 4, title: "four",  poster: "images/4.jpg", isInQueue: true,  queuePosition: 4 },
  { id: 5, title: "five",  poster: "images/5.jpg", isInQueue: false, queuePosition: 5 },
  { id: 6, title: "six",   poster: "images/6.jpg", isInQueue: false, queuePosition: 6 },
  { id: 7, title: "seven", poster: "images/7.jpg", isInQueue: true,  queuePosition: 7 }
];

function* fetchMovieList() {
  try {
    yield put({ type: "SET_MOVIE_LIST", payload: movieList });
  } catch (error) {
    console.log("movie list GET request failed", error);
  }
}

// currently, all we are doing is changing the queue position
// but let's keep the name open for any future changes
function* updateMovieList(action) {
  try {
    // array.filter
    // where id = movie.ID, movie.queuePosition = movie.ID

    // I don't believe we need a put or reducer.
    // we can just edit the "DB" here
    //yield put({ type: "UPDATE_MOVIE_LIST", payload: response.data });


  } catch (error) {
    console.log("Update Movie PUT request failed", error);
  }
}

function* movieListSaga() {
  yield takeLatest("FETCH_MOVIE_LIST", fetchMovieList);
  yield takeLatest("UPDATE_MOVIE_LIST", updateMovieList);
}

export default movieListSaga;
