import { combineReducers } from 'redux';

import usersReducer from './users_reducer';
import transactionReducer from './transactions_reducer'

const entitiesReducer = combineReducers({
  users: usersReducer,
  transactions: transactionReducer
});

export default entitiesReducer;
