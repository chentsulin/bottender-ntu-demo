const axios = require('axios');

const client = axios.create({
  baseURL: 'https://api.coinmarketcap.com/v1/',
});

module.exports = {
  queryTicker(id) {
    return client.get(`/ticker/${id}?convert=TWD`).then(res => res.data[0]);
  },
};
