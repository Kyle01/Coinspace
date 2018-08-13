import { RECEIVE_PRICE,
         RECEIVE_PRICES,
         RECEIVE_PRICE_ERRORS} from '../actions/price_actions';
import merge from 'lodash/merge';

const pricesReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_PRICE:
      return merge({}, state, {price: action.price});
    case RECEIVE_PRICES:
      return merge({}, state, {prices: action.prices});
    default:
      return state;
  }
}

export default pricesReducer;
