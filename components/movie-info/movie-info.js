import { Container, Paper } from '@material-ui/core';
import styles from './movie-info.module.css';
import BackButton from '../back-button';

const MovieInfo = ({ movie }) => {
  return (
    <Container className={styles.container}>
      <BackButton url='/movies' text='Volver a péliculas' ></BackButton>
      <div className="paper">
        <div className={styles.infocontainer}>
          <img src={movie.imageUrl}></img>
          <h1>{movie.title}</h1>
          <p>{movie.description}</p>
        </div>
      </div>
    </Container>
  );
};

export default MovieInfo;
