import axios from 'axios';

const urlBackend = 'http://localhost:8080';
const moviesApi = '/movies';
const movieTicketsApi = '/tickets';

export const MovieRepository = {
  fetchMovies: async () => {
    const res = await axios.get(`${urlBackend}${moviesApi}`);
    return res.data;
  },

  fetchMovieTickets: () => {
    return axios.get(`${urlBackend}${movieTicketsApi}`);
  },
};
