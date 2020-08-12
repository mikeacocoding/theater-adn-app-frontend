import Layout from '../../components/layout';
import MovieItem from '../../components/movie-item';
import { Container, Button } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchMovies } from '../../redux/actions/movieActions';
import Skeleton from '@material-ui/lab/Skeleton';

function Movies() {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.movies);
  const { movies } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  const handleRefreshClick = () => {
    dispatch(fetchMovies());
  };
  return (
    <Layout>
      <Container>
        <h1>Movies</h1>
        <Button size='large' variant='contained' color='primary' onClick={handleRefreshClick}>
          Refresh
        </Button>
        {movies && !loading ? (
          movies.map((movie) => {
            return <MovieItem key={movie.id} movie={movie}></MovieItem>;
          })
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
}

export default Movies;
