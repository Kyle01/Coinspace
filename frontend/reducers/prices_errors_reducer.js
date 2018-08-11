import {
  RECEIVE_PRICE,
  RECEIVE_PRICE_ERRORS,
  RECEIVE_PRICES
} from '../actions/price_actions';
import merge from 'lodash/merge';

const pricesErrorsReducer = (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_PRICE:
      return [];
    case RECEIVE_PRICE_ERRORS:
      return []
    case RECEIVE_PRICE_ERRORS:
      return action.errors;
    default:
      return state;
  }
};

export default pricesErrorsReducer;
