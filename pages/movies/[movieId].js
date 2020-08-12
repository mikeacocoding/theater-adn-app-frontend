import Layout from '../../components/layout';
import MovieInfo from '../../components/movie-info/movie-info';
import MovieForm from '../../components/movie-form/movie-form';
import { getMovieById } from '../../redux/actions/movieActions';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

const MovieTicketInfo = ({ movieId }) => {
  const dispatch = useDispatch();
  const { movie } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(getMovieById(movieId));
  }, [dispatch]);

  return (
    <Layout>
      {movie && (
        <>
          <MovieInfo movie={movie}></MovieInfo>
          <MovieForm movie={movie}></MovieForm>
        </>
      )}
    </Layout>
  );
};

export async function getServerSideProps({ params }) {
  return {
    props: {
      movieId: params.movieId,
    },
  };
}

export default MovieTicketInfo;
