import styles from './content-buttons.module.css';
import Link from 'next/link';
import Button from '@material-ui/core/Button';

const ContentButtons = () => (
  <div className={styles.container}>
    <Link href='/movies'>
      <Button size="large" variant='contained' color='primary'>
        Movies
      </Button>
    </Link>
    <Link href='/movietickets'>
      <Button size="large" variant='outlined' color='primary'>
        Movie Tickets
      </Button>
    </Link>
  </div>
);

export default ContentButtons;
