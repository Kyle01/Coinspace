import * as ApiUtil from '../util/price_api_util';

export const RECEIVE_PRICE = 'RECEIVE_PRICE';
export const RECEIVE_PRICES = 'RECEIVE_PRICES'
export const RECEIVE_PRICE_ERRORS = 'RECEIVE_PRICE_ERRORS';

export const getCurrentPrice = () => dispatch => {
  return ApiUtil.getLastPrice().then(
    price => dispatch(receiveCurrentPrice(price.id)),
    errors => dispatch(receivePriceErrors(errors.responseJSON))
  )
};

export const getPrices = duration => dispatch => {
  return ApiUtil.getPrices(duration).then(
    prices => dispatch(receivePrices(prices.id)),
    errors => dispatch(receivePriceErrors(errors.responseJSON))
 )
};

const receiveCurrentPrice = (price) => ({
  type: RECEIVE_PRICE,
  price
});

const receivePrices = prices => ({
  type: RECEIVE_PRICES,
  prices
});

const receivePriceErrors = (error) => ({
  type: RECEIVE_PRICE_ERRORS,
  error
});
