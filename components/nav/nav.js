import styles from './nav.module.css';
import Link from 'next/link';

export default function Nav() {
  return (
    <div className={styles.container}>
      <div className={styles.titlecontainer}>
        <Link href='/'>
          <a>
            <img src='/logo-ceiba.png'></img>
          </a>
        </Link>
        <Link href='/'>
            <h1>Theater Adn Ceiba App</h1>
        </Link>
      </div>
    </div>
  );
}
