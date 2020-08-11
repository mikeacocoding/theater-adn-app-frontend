import styles from './movie-item.module.css';
import { Container, Paper } from '@material-ui/core';

const MovieItem = (props) => (
  <div className={styles.itemcontainer}>
    <Container>
      <Paper elevation={3}>
        <div className={styles.datacontainer}>
          <h2>{props.movie.title}</h2>
          <p>{props.movie.description}</p>
        </div>
      </Paper>
    </Container>
  </div>
);

export default MovieItem;
