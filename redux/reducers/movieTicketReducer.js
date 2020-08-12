import * as types from '../types';

const initialState = {
  movieTickets: [],
  movieTicket: {},
  loading: false,
};

export const movieTicketReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCHING_MOVIE_TICKETS:
      return {
        ...state,
        loading: true,
      };
    case types.FETCH_MOVIE_TICKETS:
      return {
        ...state,
        movieTickets: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
