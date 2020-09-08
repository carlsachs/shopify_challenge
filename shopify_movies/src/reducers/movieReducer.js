//import actions
import { FETCH_MOVIES_START, FETCH_MOVIES_SUCCESS, FETCH_MOVIES_FAILURE } from "../actions/actions";

// Initial state setup
const initialState = {
    movies: [],
    error: '',
    isFetching: false
};

export function movieReducer(state=initialState, action) {
    switch (action.type) {
      case FETCH_MOVIES_START:
        return {
          ...state,
          error: '',
          isFetching: true
        };
      case FETCH_MOVIES_SUCCESS:
        console.log(state);
        return {
          ...state,
          error: '',
          isFetching: false,
          strains: action.payload
        };
      case FETCH_MOVIES_FAILURE:
        return {
          ...state,
          error: action.payload,
          isFetching: false
        };
      default:
        return state;
    };
  };