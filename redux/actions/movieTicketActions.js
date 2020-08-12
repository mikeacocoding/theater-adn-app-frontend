import * as types from '../types';
import { MovieRepository } from '../../core/api/movie-repository';

export const fetchingMovieTickets = () => (dispatch) => {
  dispatch({
    type: types.FETCHING_MOVIE_TICKETS,
  });
};

export const fetchMovieTickets = () => async (dispatch) => {
  dispatch(fetchingMovieTickets());
  const movieTickets = await MovieRepository.fetchMovieTickets();
  dispatch({
    type: types.FETCH_MOVIE_TICKETS,
    payload: movieTickets,
  });
};
