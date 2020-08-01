const apiClient = require('../clients/api');
const { getFormattedCurrency } = require('../lib');

/**
 * Get latest price for a security
 * @param {String} symbol Stock symbol
 * @returns {Promise<String>} Latest price formatted as en-US USD currency
 */
async function getLatestPrice(symbol) {
  const params = {
    token: process.env.API_KEY,
  };

  const { data } = await apiClient.get(`/stock/${symbol}/quote/latestPrice`, {
    params,
  });

  const latestPrice = getFormattedCurrency(data);

  return latestPrice;
}

module.exports = {
  getLatestPrice,
};
