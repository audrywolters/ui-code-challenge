const initialState = 
   [
    { id: 1, title: "one",   poster: "images/1.jpg", isInQueue: true, queuePosition: 1 },
    { id: 2, title: "two",   poster: "images/2.jpg", isInQueue: true, queuePosition: 2 },
    { id: 3, title: "three", poster: "images/3.jpg", isInQueue: false, queuePosition: 3 },
    { id: 4, title: "four",  poster: "images/4.jpg", isInQueue: false, queuePosition: 4 },
    { id: 5, title: "five",  poster: "images/5.jpg", isInQueue: false, queuePosition: 5 },
    { id: 6, title: "six",   poster: "images/6.jpg", isInQueue: false, queuePosition: 6 },
    { id: 7, title: "seven", poster: "images/7.jpg", isInQueue: false, queuePosition: 7 }
  ]

const movieListReducer = (state = initialState, action) => {
  switch (action.type) {
    // this is no longer needed...
    // case "GET_MOVIE_LIST":
    //   return action.payload;
    case "CHANGE_QUEUE_STATUS":
      // supposed to be doing { ...state, 
      //                        movieList: state.bla.map }
      // but appends another movieList unto state: reduxState.movieList.movieList
       state.map(movie => {
          // This doesn't do anything as state is immutable?

          // AUDRY - why is action nested in another action?!
          if (movie.id !== action.action.id) {
            return movie
          }

          return {
            ...movie,
            isInQueue: !movie.isInQueue
          }
        })
      
      default:
        return state
    }
};

export default movieListReducer;
