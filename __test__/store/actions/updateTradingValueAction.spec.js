import { updateTradingValue } from '../../../src/store/actions/updateTradingValueAction';

describe('>>>A C T I O N --- Test updateTradingValueAction', () => {
  it('+++ actionCreator addSpecificValue', () => {
    const newValue = 56;
    const index = 1171;
    const stockMarket = 'CAC40';

    const updateAllTradingValues = updateTradingValue(
      newValue,
      index,
      stockMarket);

    expect(updateAllTradingValues).toEqual(
      {
        type: 'ADD_SPECIFIC_VALUE',
        newValue,
        index,
        stockMarket
      })
  });
});