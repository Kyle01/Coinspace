import * as ApiUtil from '../util/transaction_api_util';

export const RECEIVE_TRADE = 'RECEIVE_TRADE';
export const RECEIVE_TRADE_ERRORS = 'RECEIVE_TRADE_ERRORS';

export const trade = transaction => dispatch => {
  return ApiUtil.trade(transaction)
  .then(
    transition => dispatch(receiveTrade(transaction.id)),
    errors => dispatch(receiveTradeErrors(errors.responseJSON))
  );
};

export const viewTrade = id => dispatch => {
  return ApiUtil.viewTrade(id)
  .then(
    transition => dispatch(receiveTrade(transaction.id)),
    errors => dispatch(receiveTradeErrors(errors.responseJSON))
  );
};

const receiveTrade = id => ({
  type: RECEIVE_TRADE,
  id
});

const receiveTradeErrors = errors => ({
  type: RECEIVE_TRADE_ERRORS,
  errors
});
