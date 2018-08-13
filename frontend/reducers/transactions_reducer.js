import { RECEIVE_TRADE, RECEIVE_TRADES } from '../actions/transaction_actions';
import merge from 'lodash/merge';

const transactionReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_TRADE:
      return merge({}, state, {[action.transaction.id]: action.transaction});
    case RECEIVE_TRADES:
      return merge({}, state, action.transactions);
    default:
      return state;
  }
}

export default transactionReducer
