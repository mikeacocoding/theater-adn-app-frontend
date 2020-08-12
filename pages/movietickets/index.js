import Layout from '../../components/layout';
import { Container, Button } from '@material-ui/core';
import MovieTicketItem from '../../components/movie-ticket-item/movie-ticket-item';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovieTickets } from '../../redux/actions/movieTicketActions';
import { useEffect } from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import Swal from 'sweetalert2';
import { MovieRepository } from '../../core/api/movie-repository';

const MovieTickets = () => {
  const dispatch = useDispatch();

  const { loading } = useSelector((state) => state.tickets);
  const { movieTickets } = useSelector((state) => state.tickets);

  useEffect(() => {
    fetchData();
  }, [dispatch]);

  const handleRefreshClick = () => {
    fetchData();
  };

  const handleDeleteMovieTicket = async (ticketId) => {
    const res = await MovieRepository.deleteMovieTicket(ticketId);
    Swal.fire('Operación exitosa', 'Se ha eliminado el ticket', 'success');
    fetchData();
  };

  const fetchData = () => {
    dispatch(fetchMovieTickets());
  };

  return (
    <Layout>
      <Container>
        <h1>Movie Tickets</h1>
        <div>Tickets generados: ({movieTickets ? movieTickets.length : '0'})</div>
        <Button size='large' variant='contained' color='primary' onClick={handleRefreshClick}>
          Refresh
        </Button>
        {movieTickets && !loading ? (
          movieTickets.map((movieTicket) => (
            <MovieTicketItem key={movieTicket.id} movieTicket={movieTicket} onDeleteTicket={handleDeleteMovieTicket}></MovieTicketItem>
          ))
        ) : (
          <div>
            <Skeleton height={200} animation='wave' />
            <Skeleton height={200} animation='wave' />
            <Skeleton height={200} animation='wave' />
            <Skeleton height={200} animation='wave' />
            <Skeleton height={200} animation='wave' />
            <Skeleton height={200} animation='wave' />
          </div>
        )}
      </Container>
    </Layout>
  );
};

export default MovieTickets;
