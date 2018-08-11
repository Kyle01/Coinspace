import { combineReducers } from 'redux';

import usersReducer from './users_reducer';
import transactionReducer from './transactions_reducer';
import pricesReducer from './prices_reducer'

const entitiesReducer = combineReducers({
  users: usersReducer,
  transactions: transactionReducer,
  prices: pricesReducer
});

export default entitiesReducer;
