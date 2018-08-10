import * as ApiUtil from '../util/transaction_api_util';

export const RECEIVE_TRADE = 'RECEIVE_TRADE';
export const RECEIVE_TRADE_ERRORS = 'RECEIVE_TRADE_ERRORS';

export const trade = transaction => dispatch => {
  return ApiUtil.trade(transaction)
  .then(
    transition => dispatch(receiveTrade(transaction.id))
  );
};

export const viewTrade = id => dispatch => {
  return ApiUtil.viewTrade(id)
  .then(
    transition => dispatch(receiveTrade(transaction.id))
  );
};

const receiveTrade = id => ({

})

const receiveTradeErrors = errors => ({
  type: RECEIVE_TRADE_ERRORS,
  errors
});
