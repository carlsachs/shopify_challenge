//import axios
import axios from "axios";

export const FETCH_MOVIES_START = "FETCH_MOVIES_START";
export const FETCH_MOVIES_SUCCESS = "FETCH_MOVIES_SUCCESS";
export const FETCH_MOVIES_FAILURE = "FETCH_MOVIES_FAILURE";

// GET an array of movies
export const getMovies = () => {
    return dispatch => {
      dispatch({ type: FETCH_MOVIES_START });
      axios
        .get("http://www.omdbapi.com/?i=tt3896198&apikey=a06127f9")
        .then(res => {
          console.log(res.data);
          dispatch({ type: FETCH_MOVIES_SUCCESS, payload: res.data });
        })
        .catch(err => {
          console.log(err);
          dispatch({ type: FETCH_MOVIES_FAILURE });  // set error to payload laters
        });
    };
  };