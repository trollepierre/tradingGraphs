import { UPDATE_TRADING_VALUE } from '../actions/updateTradingValueAction';
import applyUpdateIntoDataFromApi  from './applyUpdateIntoDataFromApi'

const initialState = {
  tradingValues: [],
  updatedValues: [],
  isFetching: false
}

const updateTradingValueReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_TRADING_VALUE:
      const { index, newValue, stockMarket } = action

      newState.tradingValues
        .filter(tradingValue => tradingValue.index === index)
        .map(tradingValue => tradingValue.stocks[stockMarket] = newValue);


      const newUpdatedValue = { index, newValue, stockMarket };
      return {
        updatedValues: [
        ...state.updatedValues.filter(updatedValue =>
          updatedValue.index === index && updatedValue.stocks[stockMarket] === stockMarket),
        newUpdatedValue
      ],
        tradingValues: applyUpdateIntoDataFromApi([newUpdatedValue], state.tradingValues)
      };
    default:
      return state
  }
}

export default updateTradingValueReducer