import * as types from '../types';
import { MovieRepository } from '../../core/api/movie-repository';

export const fetchMovies = () => async (dispatch) => {
  const movies = await MovieRepository.fetchMovies();
  dispatch({
    type: types.FETCH_MOVIES,
    payload: movies,
  });
};
