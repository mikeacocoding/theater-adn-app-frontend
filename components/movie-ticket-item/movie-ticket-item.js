import { Container, Paper } from '@material-ui/core';
import styles from './movie-ticket-item.module.css';
import moment from 'moment';

function MovieTicketItem({ movieTicket }) {
   
  const formatTicketDate = () => {
    return moment(movieTicket.date).format('YYYY/MM/DD hh:mm a');
  }  
    
  return (
    <div>
      <Container>
        <Paper elevation={3}>
          <div className={styles.movieticketitemcontainer}>
            <img src='/ticket.png'></img>
            <div className={styles.textcontainer}>
              <div className={styles.subtextcontainer}>
                <h5>Número de ticket</h5>
                <h1>{movieTicket.ticketId}</h1>
              </div>
              <div className={styles.subtextcontainer}>
                <h5>Fecha</h5>
                <h1>{formatTicketDate()}</h1>
              </div>
              <div className={styles.subtextcontainer}>
                <h5>Precio</h5>
                <h1>{movieTicket.value}</h1>
              </div>
            </div>
          </div>
        </Paper>
      </Container>
    </div>
  );
}

export default MovieTicketItem;
