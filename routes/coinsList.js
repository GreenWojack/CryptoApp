const { default: axios } = require('axios');
const express = require('express');
const router = express.Router();


router.get('/coins/markets', async (req, res) => {
  const options = {
    method: 'GET',
    url: 'https://coingecko.p.rapidapi.com/coins/markets',
    params: {vs_currency: 'usd', page: '2', per_page: '100', order: 'market_cap_desc'},
    headers: {
      'X-RapidAPI-Key': '45f4ddfe1amsh7e403b66135232cp1ebd6djsnb93f3aa55340',
      'X-RapidAPI-Host': 'coingecko.p.rapidapi.com'
    }
  };
  
  axios.request(options).then(function (response) {
    res.set('Access-Control-Allow-Origin', '*');
    res.send(response.data);
  }).catch(function (error) {
    console.error(error);
  });
})

module.exports = router;