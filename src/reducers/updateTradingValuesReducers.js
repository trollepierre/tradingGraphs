import {
  TRADING_VALUES_FAILURE,
  TRADING_VALUES_SUCCESS,
  TRADING_VALUES_REQUEST } from '../actions/updateTradingValuesActions';

const initialState = { tradingValues: [], updatedValues: [], isFetching: false }

const updateTradingValuesReducers = (state = initialState, action) => {
  function applyUpdateIntoDataFromApi(updatedValue, tradingValues) {
    console.log('welcome in apply update');
    console.log(updatedValue);
    console.log(tradingValues);

    const { index, stockMarket, newValue } = updatedValue;
    tradingValues
      .filter(tradingValue => tradingValue.index === index)
      .map(tradingValue => tradingValue.stocks[stockMarket] = newValue);
    return tradingValues;
  }

  console.log('action', action);
  switch (action.type) {
    case TRADING_VALUES_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
      });

    case TRADING_VALUES_SUCCESS:
      let tradingValuesToUpdate = action.payload.data;
      console.log('state.updatedValues');
      console.log(state.updatedValues);
      console.log(tradingValuesToUpdate);

      state.updatedValues.forEach(updatedValue =>
        tradingValuesToUpdate = applyUpdateIntoDataFromApi(updatedValue, tradingValuesToUpdate))

      console.log(tradingValuesToUpdate);
      console.log('ici');

      return Object.assign({}, state, {
        isFetching: false,
        tradingValues: tradingValuesToUpdate,
      });

    case TRADING_VALUES_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
      });
    default:
      return state
  }
}

export default updateTradingValuesReducers