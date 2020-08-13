import styles from "./content-buttons.module.css";
import Link from "next/link";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@material-ui/core";

const ContentButtons = () => (
  <div className={styles.container}>
    <Card>
      <Link href="/movies">
        <CardActionArea>
          <CardMedia component="img" image="./movies-home.png" />
          <CardContent className={styles.content}>
            <Typography variant="h4">
              Movies
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
    <Card>
      <Link href="/movietickets">
        <CardActionArea>
          <CardMedia component="img" image="./tickets-home.png" />
          <CardContent className={styles.content}>
            <Typography variant="h4">
              MovieTickets
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  </div>
);

export default ContentButtons;
