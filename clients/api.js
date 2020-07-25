const axios = require('axios');

const instance = axios.create({
  baseURL: 'https://sandbox.iexapis.com/stable/',
});

module.exports = instance;
