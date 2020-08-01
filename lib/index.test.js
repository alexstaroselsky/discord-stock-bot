const { getFormattedCurrency } = require('./index');

describe('lib', () => {
  describe('getFormattedCurrency', () => {
    test('should format a number as currency', () => {
      expect(getFormattedCurrency(1.6)).toEqual('$1.60');
      expect(getFormattedCurrency(0.6)).toEqual('$0.60');
      expect(getFormattedCurrency(0)).toEqual('$0.00');
      expect(getFormattedCurrency(-1)).toEqual('-$1.00');
    });

    test('should format a string as currency', () => {
      expect(getFormattedCurrency('1.6')).toEqual('$1.60');
      expect(getFormattedCurrency('0.6')).toEqual('$0.60');
      expect(getFormattedCurrency('0')).toEqual('$0.00');
      expect(getFormattedCurrency('-1')).toEqual('-$1.00');
    });
  });
});
