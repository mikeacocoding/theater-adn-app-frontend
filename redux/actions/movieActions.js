import * as types from '../types';
import { MovieRepository } from '../../core/api/movie-repository';

export const fetchingMovies = () => (dispatch) => {
  dispatch({
    type: types.FETCHING_MOVIES,
  });
};

export const fetchMovies = () => async (dispatch) => {
  dispatch(fetchingMovies());
  const movies = await MovieRepository.fetchMovies();
  dispatch({
    type: types.FETCH_MOVIES,
    payload: movies,
  });
};

export const getMovieById = (movieId) => async (dispatch) => {
  dispatch(fetchingMovies());
  const movie = await MovieRepository.getMovieById(movieId);
  dispatch({
    type: types.GET_MOVIE_BY_ID,
    payload: movie,
  });
};
