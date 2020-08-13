import styles from './welcome-info.module.css';
import { Typography } from "@material-ui/core";

const WelcomeInfo = ({ trmValue }) => {
  return (
    <div className={styles.container}>
      <Typography variant="h5">!Bienvenido a Theater App!</Typography>
      <Typography variant="h6">la TRM del día es: {trmValue}</Typography>
    </div>
  );
};

export default WelcomeInfo;
