import { TRADING_VALUES_SUCCESS } from '../actions/updateTradingValuesActions';
import { UPDATE_TRADING_VALUE } from '../actions/updateTradingValueAction';

import applyUpdateIntoDataFromApi from './applyUpdateIntoDataFromApi';

const initialState = { tradingValues: [], updatedValues: [] };

const updateTradingValues = (state = initialState, action) => {

  switch (action.type) {
    case TRADING_VALUES_SUCCESS:
      console.log('REDUCER 2 : old state AVANT TRADING VAL SUCCEES');
      console.log('state');
      console.log(state);
      const tradingValues = applyUpdateIntoDataFromApi(state.updatedValues, action.payload.data);
      return {
        ...state,
        tradingValues,
      };
    case UPDATE_TRADING_VALUE:
      const { index, newValue, stockMarket } = action;
      const newUpdatedValue = { index, newValue, stockMarket };

      const updatedValues = [
        ...state.updatedValues,
        newUpdatedValue
      ];

      const stateWithTradingValues = {
        ...state,
        tradingValues: applyUpdateIntoDataFromApi(updatedValues, state.tradingValues),
      };

      console.log('REDUCER 2 : stateWithTradingValues');
      console.log(stateWithTradingValues);
      return stateWithTradingValues;
    default:
      return state;
  }
};

export default updateTradingValues;

