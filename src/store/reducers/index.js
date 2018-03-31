import { combineReducers } from 'redux';
import updateTradingValueReducer from './updateTradingValueReducer';
import updateTradingValuesReducers from './updateTradingValuesReducers';

const reducers = combineReducers({
  updateTradingValueReducer,
  updateTradingValuesReducers,
});

export default reducers;
