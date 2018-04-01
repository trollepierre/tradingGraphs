export const ADD_SPECIFIC_VALUE = 'ADD_SPECIFIC_VALUE';

export function addSpecificValueAction(newValue, index, stockMarket, specificValues) {
  return {
    type: 'ADD_SPECIFIC_VALUE',
    payload: {
      newValue,
      index,
      stockMarket,
      specificValues
    }
  };
}
