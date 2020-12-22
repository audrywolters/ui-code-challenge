import { put, takeLatest } from "redux-saga/effects";
import movieList from '../movieListMockDB';

function* fetchMovie(action) {
    
    
    console.log(action);

//   try {
//     yield put({ type: "SET_MOVIE", payload: movie });
//   } catch (error) {
//     console.log("movie GET request failed", error);
//   }
}

// currently, all we are doing is changing the queue position
// but let's keep the name open for any future changes
function* updateMovie(action) {


  try {

    //const response = // AUDRY - here replace axios call w/ external method
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

function* movieSaga() {
  yield takeLatest("FETCH_MOVIE", fetchMovie);
  yield takeLatest("EDIT_MOVIE", updateMovie);
}

export default movieSaga;
