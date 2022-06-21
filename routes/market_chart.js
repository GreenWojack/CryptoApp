const { default: axios } = require('axios');
const express = require('express');
const router = express.Router();


router.get('/coins/:coin/market_chart', async (req, res) => {
    try {
        const coin = req.params.coin
        const timeframe = req.query.timeframe
        const options = {
            method: 'GET',
            url: `https://coingecko.p.rapidapi.com/coins/${coin}/market_chart`,
            params: {vs_currency: 'usd', days: timeframe},
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
              res.status(500).json({
                message:'Server Error'
              })
          });
    } catch (error) {
        
    }
})

module.exports = router;
