const axios = require('axios');

const instance = axios.create({
  baseURL: 'https://sandbox.iexapis.com/stable/', // this is NOT the production endpoint, need to update
});

module.exports = instance;
