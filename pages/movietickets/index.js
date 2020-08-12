import Layout from '../../components/layout';
import { MovieRepository } from '../../core/api/movie-repository';
import { Container } from '@material-ui/core';
import MovieTicketItem from '../../components/movie-ticket-item/movie-ticket-item';

const MovieTickets = ({ movieTickets }) => {
  console.log(movieTickets);
  return (
    <Layout>
      <Container>
        <h1>Movie Tickets</h1>
        <div>Tickets generados: ({movieTickets ? movieTickets.length : '0'})</div>
        {movieTickets && movieTickets.map((movieTicket) => <MovieTicketItem movieTicket={movieTicket}></MovieTicketItem>)}
      </Container>
    </Layout>
  );
};

export async function getServerSideProps() {
  const movieTickets = await MovieRepository.fetchMovieTickets();
  return {
    props: {
      movieTickets,
    },
  };
}

export default MovieTickets;
