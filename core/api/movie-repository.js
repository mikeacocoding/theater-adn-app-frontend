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
    const res = await axios.post(`${urlBackend}${movieTicketsApi}/cost`, {
      date,
      movie,
    });
    return res.data.value;
  },

  buyMovieTicket: async (date, value, movie) => {
    try {
      const res = await axios.post(`${urlBackend}${movieTicketsApi}`, {
        date,
        value,
        movie,
      });
      return res.data;
    } catch (error) {
      if (error.response) {
        console.log(error.response.data);
        throw new Error(error.response.data.message);
      } else if (error.request) {
        console.log(error.request);
      }  
      return new Error('Ha ocurrido un error');
    }
  },
};
