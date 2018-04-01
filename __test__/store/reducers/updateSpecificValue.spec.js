import React from 'react';

import updateSpecificValue from '../../../src/store/reducers/updateSpecificValue';

describe('>>>R E D U C E R --- Test updateSpecificValue', () => {
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

  describe('+++ reducer for ADD_SPECIFIC_VALUE', () => {
    let updatedValues;
    const action = {
      type: "ADD_SPECIFIC_VALUE",
      newValue: 56,
      index: 1171,
      stockMarket: 'NASDAQ'
    };

    describe('when updatedValue is a new one', () => {

      beforeEach(() => {
        updatedValues = [{ "index": 1111, "newValue": 88, "stockMarket": "CAC40" }];
      });

      it('should add an updating value and change a trading value', () => {
        const state = { tradingValues, updatedValues }
        const newState = updateSpecificValue(state, action)
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

    describe('when updatedValue has already been set', () => {
      it('should update updating value and change a trading value', () => {
        updatedValues = [{ "index": 1171, "newValue": 88, "stockMarket": "NASDAQ" }];
        const state = { tradingValues, updatedValues: updatedValues }
        const newState = updateSpecificValue(state, action)
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
                "index": 1171,
                "newValue": 56,
                "stockMarket": "NASDAQ"
              }]
          })
      })
    });
  });
});