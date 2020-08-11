import styles from './movie-item.module.css';
import { Container, Paper, CardActionArea } from '@material-ui/core';
import Link from 'next/link';

const MovieItem = ({ movie }) => {
  return (
    <div className={styles.itemcontainer}>
      <Container>
        <Paper elevation={3}>
          <CardActionArea>
            <Link href='/movies/[movieId].js' as={`/movies/${movie.id}`}>
              <a>
                <div className={styles.datacontainer}>
                  <img src={movie.imageUrl}></img>
                  <div className={styles.infocontainer}>
                    <h2>{movie.title}</h2>
                    <p>{movie.description}</p>
                  </div>
                </div>
              </a>
            </Link>
          </CardActionArea>
        </Paper>
      </Container>
    </div>
  );
};

export default MovieItem;
