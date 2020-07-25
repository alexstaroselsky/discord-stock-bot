/**
 * Convert number to formatted currency
 *
 * @param {Number} value
 * @param {String} [locale='en-US']
 * @param {Object} [options]
 * @param {String} [options.style='currency']
 * @param {String} [options.currency='USD']
 * @returns {String}
 */
function getFormattedCurrency(
  value,
  locale = 'en-US',
  options = { style: 'currency', currency: 'USD' },
) {
  return new Intl.NumberFormat(locale, options).format(value);
}

module.exports = {
  getFormattedCurrency,
};
