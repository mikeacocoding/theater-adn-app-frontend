import styles from './content-buttons.module.css';
import { Button } from 'react-bootstrap';
import Link from 'next/link';

const ContentButtons = () => <div className={styles.container}>
  <Link href="/movies" ><Button variant="outline-primary" size="lg">Movies</Button></Link>
  <Link href="/movietickets" ><Button variant="outline-primary" size="lg">Movie Tickets</Button></Link>
</div>;

export default ContentButtons;
