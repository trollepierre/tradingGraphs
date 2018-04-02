import React from 'react';

import updateSpecificValue from '../../../src/store/reducers/updateSpecificValue';

describe('>>>R E D U C E R --- Test updateSpecificValue', () => {
  describe('+++ reducer for ADD_SPECIFIC_VALUE', () => {
    let specificValues;
    const action = {
      type: "ADD_SPECIFIC_VALUE",
      payload: {
        newValue: 56,
        index: 1171,
        stockMarket: 'NASDAQ'
      }
    };

    describe('when updatedValue is a new one', () => {

      beforeEach(() => {
        specificValues = [{ "index": 1111, "newValue": 88, "stockMarket": "CAC40" }];
      });

      it('should add an updating value', () => {
        const state = { tradingValues: [], specificValues };
        const newState = updateSpecificValue(state, action);
        expect(newState).toEqual(
          {
            tradingValues: [],
            specificValues: [
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
      it('should update updating value', () => {
        specificValues = [{ "index": 1171, "newValue": 88, "stockMarket": "NASDAQ" }];
        const state = { tradingValues: [], specificValues: specificValues }
        const newState = updateSpecificValue(state, action)
        expect(newState).toEqual(
          {
            tradingValues:
              [],
            specificValues: [
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