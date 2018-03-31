export const UPDATE_TRADING_VALUE = 'UPDATE_TRADING_VALUE';

export function updateTradingValue(newValue, index, stockMarket) {
  return {
    type: 'UPDATE_TRADING_VALUE',
    newValue,
    index,
    stockMarket,
  };
}
