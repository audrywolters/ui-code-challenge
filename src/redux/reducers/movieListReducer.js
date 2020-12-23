const initialState = [
  // AUDRY - change all to in catalog 
  { id: 1, title: "one",   poster: "images/1.jpg", isInQueue: true,  queuePosition: 1 },
  { id: 2, title: "two",   poster: "images/2.jpg", isInQueue: true,  queuePosition: 2 },
  { id: 3, title: "three", poster: "images/3.jpg", isInQueue: false, queuePosition: 3 },
  { id: 4, title: "four",  poster: "images/4.jpg", isInQueue: false, queuePosition: 4 },
  { id: 5, title: "five",  poster: "images/5.jpg", isInQueue: false, queuePosition: 5 },
  { id: 6, title: "six",   poster: "images/6.jpg", isInQueue: false, queuePosition: 6 },
  { id: 7, title: "seven", poster: "images/7.jpg", isInQueue: false, queuePosition: 7 }
];

const movieListReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_MOVIE_LIST":
      return state;
    case "CHANGE_QUEUE_STATUS":
      return {
        // Again copy the entire state object
        ...state,
        // This time, we need to make a copy of the old movies array
        movieList: state.map((movie) => {
          // If this isn't the movie item we're looking for, leave it alone
          if (movie.id !== action.id) {
            // should we not use continue or something?
            // this is wierd...
            return movie;
          }
          // hey we have the correct movie! cewl
          return {
            ...movie,
            isInQueue: !movie.isInQueue,
          };
        }),
      };
    // AUDRY - COMING SOON TO AN APP NEAR YOU:
    // case "CHANGE_QUEUE_POSITION":
    //   action.data.isInQueue = !action.data.isInQueue;
    //   return state.concat([action.data]);
    // // case "MOVE_TO_CATALOG":
    // //   return state.concat([action.data]);
    default:
      return state;
  }
};

export default movieListReducer;
