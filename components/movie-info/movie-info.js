import { Container, Paper } from '@material-ui/core';
import styles from './movie-info.module.css';

const MovieInfo = ({ movie }) => {
  return (
    <Container className={styles.container}>
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
