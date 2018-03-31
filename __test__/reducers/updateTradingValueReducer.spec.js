import React from 'react';

import updateTradingValue from '../../src/reducers/updateTradingValueReducer';

describe('>>>R E D U C E R --- Test updateTradingValue', () => {
  const tradingValues = [
    {
      "timestamp": 1522088675779,
      "index": 1171,
      "stocks": { "NASDAQ": 5.4068431512503855e-16, "CAC40": 3.945096443354243e-24 }
    }, {
      "timestamp": 1522088675780,
      "index": 1172,
      "stocks": { "NASDAQ": 1.4068431512503855e-16, "CAC40": 2.945096443354243e-24 }
    }];

  fit('+++ reducer for UPDATE_TRADING_VALUE', () => {
    const state = { tradingValues, updatedValues: [{ "index": 1111, "newValue": 88, "stockMarket": "CAC40" }] }
    const action = {
      type: "UPDATE_TRADING_VALUE",
      newValue: 56,
      index: 1171,
      stockMarket: 'NASDAQ'
    };
    const newState = updateTradingValue(state, action)
    expect(newState).toEqual(
      {
        tradingValues:
          [
            {
              "index": 1171,
              "stocks": { "CAC40": 3.945096443354243e-24, "NASDAQ": 56 },
              "timestamp": 1522088675779
            },
            {
              "index": 1172,
              "stocks": { "CAC40": 2.945096443354243e-24, "NASDAQ": 1.4068431512503855e-16 },
              "timestamp": 1522088675780
            }
          ],
        updatedValues: [
          {
            "index": 1111,
            "newValue": 88,
            "stockMarket": "CAC40"
          },
          {
            "index": 1171,
            "newValue": 56,
            "stockMarket": "NASDAQ"
          }]
      })
  })
});