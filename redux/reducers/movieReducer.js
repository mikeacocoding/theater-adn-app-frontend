import * as types from '../types';

const initialState = {
  movies: [],
  movie: {},
  loading: false,
};

export const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCHING_MOVIES:
      return {
        ...state,
        loading: true,
      };
    case types.FETCH_MOVIES:
      return {
        ...state,
        movies: action.payload,
        loading: false,
      };
    case types.GET_MOVIE_BY_ID:
      return {
        ...state,
        movie: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
