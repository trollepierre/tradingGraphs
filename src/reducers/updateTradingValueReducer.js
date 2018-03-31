import { UPDATE_TRADING_VALUE } from '../actions/updateTradingValueAction';

const initialState = {
  tradingValues: [],
  updatedValues: [],
  isFetching: false
}

const updateTradingValueReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_TRADING_VALUE:
      console.log('UPDATE TRADING VALUE called');
      const { index, newValue, stockMarket } = action

      state.updatedValues.push({
        index,
        newValue,
        stockMarket
      });
      console.log('state.updatedValues in reducer simple');
      console.log(state.updatedValues);


      state.tradingValues
        .filter(tradingValue => tradingValue.index === index)
        .map(tradingValue => tradingValue.stocks[stockMarket] = newValue);

      return state;
    default:
      return state
  }
}

export default updateTradingValueReducer