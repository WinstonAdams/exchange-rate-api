const exchangeRateServices = require('../services/exchange-rate-services')

const exchangeRateController = {
  exchangeRate: (req, res, next) => {
    exchangeRateServices.exchangeRate(req, (err, data) => err ? next(err) : res.json(data))
  }
}

module.exports = exchangeRateController
