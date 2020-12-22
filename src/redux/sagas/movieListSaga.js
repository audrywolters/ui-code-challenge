import { put, takeLatest } from "redux-saga/effects";
// below is a mock table from a mock DB
import movieList from '../movieListMockDB';

function* fetchMovieList() {
  try {
    yield put({ type: "SET_MOVIE_LIST", payload: movieList });
  } catch (error) {
    console.log("movie list GET request failed", error);
  }
}

function* fetchMovie() {
  // try {
  //   yield put({ type: "SET_MOVIE", payload: movie });
  // } catch (error) {
  //   console.log("movie GET request failed", error);
  // }
}

// currently, all we are doing is changing the queue position
// but let's keep the name open for any future changes
function* updateMovie(action) {

  try {

    //const response = // AUDRY - here replace axios call SQL logic w/ external method
    //yield axios.put( '/api/change', action.payload );   
    
    // AUDRY - we prolly don't need to return a value...
    //yield put({ type: 'UPDATE_OUTFIT', payload: response.data });

    console.log(action);
    // array.filter
    // where id = movie.ID, movie.queuePosition = movie.ID

    // I don't believe we need a put or reducer.
    // we can just edit the "DB" here
    //yield put({ type: "UPDATE_MOVIE", payload: response.data });

  } catch (error) {
    console.log("update movie PUT request failed", error);
  }
}

function* movieListSaga() {
  yield takeLatest("FETCH_MOVIE_LIST", fetchMovieList);
}

export default movieListSaga;
