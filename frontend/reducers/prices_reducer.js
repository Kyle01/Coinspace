import { RECEIVE_PRICE,
         RECEIVE_PRICES,
         RECEIVE_PRICE_ERRORS} from '../actions/transaction_actions';
import merge from 'lodash/merge';

const pricesReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_PRICE:
      return merge({}, price: action.price)
    case RECEIVE_PRICES:
      return merge({}, prices: action.prices)
      break;
    default:
      return state;
  }
}

export default pricesReducer
