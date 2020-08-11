import Layout from '../../components/layout';
import { MovieRepository } from '../../core/api/movie-repository';
import MovieInfo from '../../components/movie-info/movie-info';
import MovieForm from '../../components/movie-form/movie-form';

const MovieTicketInfo = (props) => {
  const movie = props.movie;
  return (
    <Layout>
      <MovieInfo movie={movie}></MovieInfo>
      <MovieForm movie={movie}></MovieForm>
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
