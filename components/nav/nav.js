import styles from './nav.module.css';
import Link from 'next/link';

export default function Nav() {
  return (
    <div className={styles.container}>
      <div className={styles.titlecontainer}>
        <Link href='/'>
          <a>
            <img height='60px' src='/ceiba.png'></img>
          </a>
        </Link>
        <Link href='/'>
          <div>
            <h3 className={styles.text} >Theater Adn Ceiba App</h3>
            <h4 className={`${styles.text} ${styles.subtitle}`} >Project for educative purposes</h4>
          </div>
        </Link>
      </div>
    </div>
  );
}
