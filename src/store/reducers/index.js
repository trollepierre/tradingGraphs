import { combineReducers } from 'redux';
import updateSpecificValue from './updateSpecificValue';
import updateTradingValues from './updateTradingValues';

const reducers = combineReducers({
  updateSpecificValue,
  updateTradingValues,
});

export default reducers;
