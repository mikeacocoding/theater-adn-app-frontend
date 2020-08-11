import axios from 'axios';

const urlBackend = 'http://localhost:8080';
const moviesApi = '/movies';
const movieTicketsApi = '/tickets';

export const MovieRepository = {
  getMovieById: async (movieId) => {
    const res = await axios.get(`${urlBackend}${moviesApi}/${movieId}`);
    return res.data;
  },

  fetchMovies: async () => {
    const res = await axios.get(`${urlBackend}${moviesApi}`);
    return res.data;
  },

  fetchMovieTickets: async () => {
    const res = await axios.get(`${urlBackend}${movieTicketsApi}`);
    return res.data;
  },

  calculateMovieTicketCost: async (date, movie) => {
    const res = await axios.post(`${urlBackend}${movieTicketsApi}/cost`,{
      date,
      movie
    });
    return res.data.value;
  },

  buyMovieTicket: (date, movie) => {
    return Math.floor(Math.random() * (Math.pow(10,9)));
  }
};
