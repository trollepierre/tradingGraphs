import { combineReducers } from 'redux';
import fetchAllTradingValues from './fetchAllTradingValues';
import updateSpecificValue from './updateSpecificValue';

const reducers = combineReducers({
  updateSpecificValue,
  fetchAllTradingValues,
});

export default reducers;
