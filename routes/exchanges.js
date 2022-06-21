const { default: axios } = require('axios');
const express = require('express');
const router = express.Router();


router.get('/exchanges', async (req, res) => {
    try {
        const options = {
            method: 'GET',
            url: `https://coingecko.p.rapidapi.com/exchanges`,
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