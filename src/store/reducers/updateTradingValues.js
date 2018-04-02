import { TRADING_VALUES_SUCCESS } from '../actions/updateTradingValuesActions';
import { ADD_SPECIFIC_VALUE } from '../actions/addSpecificValueAction';

import applyUpdateIntoDataFromApi from './applyUpdateIntoDataFromApi';

const initialState = { tradingValues: [] };

const updateTradingValues = (state = initialState, action) => {
  switch (action.type) {
    case TRADING_VALUES_SUCCESS:
      //TODO: look to redux-thunk or redux-saga instead of axios-middleware in order to avoid l15
      return {
        ...state,
        tradingValues: applyUpdateIntoDataFromApi(
          action.meta.previousAction.otherpayload.specificValues,
          action.payload.data),
      };
    case ADD_SPECIFIC_VALUE: {
      const { index, newValue, stockMarket, specificValues } = action.payload;
      const updatedSpecificValues = [
        specificValues,
        { index, newValue, stockMarket }
      ];
      return {
        ...state,
        tradingValues: applyUpdateIntoDataFromApi(updatedSpecificValues, state.tradingValues),
      };
    }
    default:
      return state;
  }
};

export default updateTradingValues;
