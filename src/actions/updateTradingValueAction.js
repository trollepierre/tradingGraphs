export const UPDATE_TRADING_VALUE = 'UPDATE_TRADING_VALUE';

export function updateTradingValue(newValue, index, stockMarket) {
  console.log('action exist');

  return {
    type: 'UPDATE_TRADING_VALUE',
    newValue,
    index,
    stockMarket
  }
}
