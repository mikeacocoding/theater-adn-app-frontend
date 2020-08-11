import Layout from '../../components/layout';
import { MovieRepository } from '../../core/api/movie-repository';

const MovieTicketInfo = (props) => {
  const movie = props.movie;
  return (
    <Layout>
      <h1>Mostrando movie: {movie.title}</h1>
      <p>{movie.description}</p>
    </Layout>
  );
};

export async function getServerSideProps({ params }) {
  const movie = await MovieRepository.getMovieById(params.movieId);
  return {
    props: {
      movie,
    },
  };
}

export default MovieTicketInfo;
