
// -1 is my goto check to see if we've a proper id
const movieReducer = (state = -1, action) => {
  switch (action.type) {
    case "EDIT_MOVIE":
      return action.payload;
    case "UPDATE_MOVIE":
      return action.payload;
    default:
      return state;
  }
};

export default movieReducer;
