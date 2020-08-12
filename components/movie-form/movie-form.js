import { Container, Paper, Button } from '@material-ui/core';
import styles from './movie-form.module.css';
import MomentUtils from '@date-io/moment';
import moment from 'moment';
import { MuiPickersUtilsProvider, DatePicker, TimePicker } from '@material-ui/pickers';
import { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { MovieRepository } from '../../core/api/movie-repository';

const MovieForm = ({ movie }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [total, setTotal] = useState(movie.price);
  const [ticketId, setTicketId] = useState(null);
  const [ticketError, setTicketError] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    refreshTotal(date);
  };

  const refreshTotal = async (date) => {
    const newTotal = await MovieRepository.calculateMovieTicketCost(moment(date).format(), movie);
    setTotal(newTotal);
  };

  const handleBuyTicket = async () => {
    let movieTicket = null;
    try {
      movieTicket = await MovieRepository.buyMovieTicket(moment(selectedDate).format(), total, movie);
      setTicketId(movieTicket.ticketId);
      setTicketError(null);
    } catch (error) {
      setTicketError(error.message);
    }
  };

  return (
    <Container className={styles.container}>
      <div className='paper'>
        <div className={styles.infocontainer}>
          <h1>Agenda la pélicula</h1>
        </div>
        <MuiPickersUtilsProvider utils={MomentUtils}>
          <Grid container justify='space-around'>
            <Paper elevation={3} className={styles.inputdatacontainer}>
              <DatePicker
                value={selectedDate}
                onChange={handleDateChange}
                inputVariant='outlined'
                label='Fecha'
                format='yyyy/MM/DD'
                margin='normal'
                disablePast
              />
              <TimePicker
                disablePast
                value={selectedDate}
                onChange={handleDateChange}
                inputVariant='outlined'
                label='Hora'
                margin='normal'
              />
              <div className={`paper ${styles.pricecontainer}`}>
                <h5 className={styles.priceinfo}>Total:</h5>
                <h1 className={styles.priceinfo}>{total ? total : movie.price}</h1>
              </div>
            </Paper>
          </Grid>
        </MuiPickersUtilsProvider>
        <div className={styles.buttoncontainer}>
          <Button onClick={handleBuyTicket} size='large' variant='contained' color='primary'>
            Comprar Ticket
          </Button>
        </div>
        {ticketId && (
          <div className={styles.ticketcontainer}>
            <h1>Tu número de ticket es : {ticketId}</h1>
            <p>Guarda este número ya que te será solicitado al ingresar a la sala, puedes comprar más tickets si lo deseas.</p>
          </div>
        )}
        {ticketError && <div className={styles.errorcontainer}>Ha ocurrido un error: {ticketError}</div>}
      </div>
    </Container>
  );
};

export default MovieForm;
