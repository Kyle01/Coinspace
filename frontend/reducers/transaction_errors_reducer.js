import {
  RECEIVE_TRADE,
  RECEIVE_TRADE_ERRORS
} from '../actions/transaction_actions';
import merge from 'lodash/merge';

const transactionErrorsReducer = (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_TRADE:
      return [];
    case RECEIVE_TRADE_ERRORS:
      return action.errors;
    default:
      return state;
  }
};

export default transactionErrorsReducer;
