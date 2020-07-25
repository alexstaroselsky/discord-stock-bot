jest.mock('../clients/api');
const apiClient = require('../clients/api');
const { getLatestPrice } = require('./api');

describe('apiService', () => {
  describe('getLatestPrice', () => {
    test('it should return formatted latest price', async () => {
      apiClient.get.mockResolvedValue({ data: 1.6 });
      const expected = '$1.60';
      const actual = await getLatestPrice('FOO');
      expect(actual).toEqual(expected);
    });
  });
});
