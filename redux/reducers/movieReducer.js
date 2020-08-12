import * as types from '../types';

const initialState = {
  movies: [],
  movie: {},
  loading: false,
};

export const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_MOVIES:
      return {
        ...state,
        post: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
