import { UPDATE_TRADING_VALUE } from '../actions/updateTradingValueAction';

const initialState = {
  tradingValues: [],
  updatedValues: [],
};

const updateSpecificValue = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_TRADING_VALUE: {
      const { index, newValue, stockMarket } = action;
      const newUpdatedValue = { index, newValue, stockMarket };
      const updatedValues = [
        ...state.updatedValues.filter(updatedValue =>
          !(updatedValue.index === index && updatedValue.stockMarket === stockMarket)),
        newUpdatedValue,
      ];
      const stateWithUpdatedValues = {
        ...state,
        updatedValues,
      };
      console.log('REDUCER 1 : stateWithUpdatedValues');
      console.log(stateWithUpdatedValues);

      return stateWithUpdatedValues;
    }
    default:
      return state;
  }
};

export default updateSpecificValue;
