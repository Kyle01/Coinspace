import * as ApiUtil from '../util/transaction_api_util';

export const RECEIVE_TRADE = 'RECEIVE_TRADE';
export const RECEIVE_TRADE_ERRORS = 'RECEIVE_TRADE_ERRORS';
export const RECEIVE_TRADES = 'RECEIVE_TRADES';

export const trade = transaction => dispatch => {
  return ApiUtil.trade(transaction)
  .then(
    trade => dispatch(receiveTrade(transaction)),
    errors => dispatch(receiveTradeErrors(errors.responseJSON))
  );
};

export const viewTrade = id => dispatch => {
  return ApiUtil.viewTrade(id)
  .then(
    trade => dispatch(receiveTrade(transaction.id)),
    errors => dispatch(receiveTradeErrors(errors.responseJSON))
  );
};

export const getUserTransactions = () => dispatch => {
  return ApiUtil.getUserTransactions()
  .then(
    transactions => dispatch(receiveTrades(transactions))
  );
};

const receiveTrade = transaction => ({
  type: RECEIVE_TRADE,
  transaction
});

const receiveTradeErrors = errors => ({
  type: RECEIVE_TRADE_ERRORS,
  errors
});

const receiveTrades = transactions => ({
  type: RECEIVE_TRADES,
  transactions
});
