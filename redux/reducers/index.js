import { combineReducers } from 'redux';
import { movieReducer } from './movieReducer';
import { movieTicketReducer } from './movieTicketReducer';

export default combineReducers({
  movies: movieReducer,
  tickets: movieTicketReducer,
});
