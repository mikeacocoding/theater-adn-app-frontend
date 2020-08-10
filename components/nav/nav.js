import styles from './nav.module.css';

export default function Nav() {
  return (
    <div className={styles.container}>
      <div className={styles.titlecontainer}>
        <img src='/logo-ceiba.png'></img>
        <h1>Theater Adn Ceiba App</h1>
      </div>
    </div>
  );
}
