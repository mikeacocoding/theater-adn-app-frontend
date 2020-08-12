import Layout from '../../components/layout';
import { MovieRepository } from '../../core/api/movie-repository';
import MovieItem from '../../components/movie-item';
import { Container } from '@material-ui/core';

function Movies({ movies }) {
  return (
    <Layout>
      <Container>
        <h1>Movies</h1>
        {movies ? (
          movies.map((movie) => {
            return <MovieItem key={movie.id} movie={movie}></MovieItem>;
          })
          ) : (
          <Skeleton variant='rect' width={210} height={118} />
        )}
      </Container>
    </Layout>
  );
}

export async function getServerSideProps() {
  const movies = await MovieRepository.fetchMovies();
  return {
    props: {
      movies,
    },
  };
}

export default Movies;
