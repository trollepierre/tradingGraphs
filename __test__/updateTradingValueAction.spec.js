import { updateTradingValue } from '../src/actions/updateTradingValueAction';

describe('>>>A C T I O N --- Test updateTradingValueAction', () => {
  it('+++ actionCreator updateTradingValue', () => {
    const newValue = 56;
    const index = 1171;
    const stockMarket = 'CAC40';

    const updateAllTradingValues = updateTradingValue(
      newValue,
      index,
      stockMarket);

    expect(updateAllTradingValues).toEqual(
      {
        type: 'UPDATE_TRADING_VALUE',
        newValue,
        index,
        stockMarket
      })
  });
});