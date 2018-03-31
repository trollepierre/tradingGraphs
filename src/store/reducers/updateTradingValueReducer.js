import { UPDATE_TRADING_VALUE } from '../actions/updateTradingValueAction';
import applyUpdateIntoDataFromApi from './applyUpdateIntoDataFromApi';

const initialState = {
  tradingValues: [],
  updatedValues: [],
  isFetching: false,
};

const updateTradingValueReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_TRADING_VALUE: {
      const { index, newValue, stockMarket } = action;
      const newUpdatedValue = { index, newValue, stockMarket };
      const updatedValues = [
        ...state.updatedValues.filter(updatedValue =>
          !(updatedValue.index === index && updatedValue.stockMarket === stockMarket)),
        newUpdatedValue,
      ];
      return {
        updatedValues,
        tradingValues: applyUpdateIntoDataFromApi([newUpdatedValue], state.tradingValues),
      };
    }
    default:
      return state;
  }
};

export default updateTradingValueReducer;