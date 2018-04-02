import { addSpecificValueAction } from '../../../src/store/actions/addSpecificValueAction';

describe('>>>A C T I O N --- Test updateTradingValueAction', () => {
  it('+++ actionCreator addSpecificValue', () => {
    const newValue = 56;
    const index = 1171;
    const stockMarket = 'CAC40';
    const specificValues = [];

    const updateAllTradingValues = addSpecificValueAction(
      newValue,
      index,
      stockMarket,
      specificValues
    );

    expect(updateAllTradingValues).toEqual(
      {
        type: 'ADD_SPECIFIC_VALUE',
        payload: {
          newValue,
          index,
          stockMarket,
          specificValues
        },
      })
  });
});