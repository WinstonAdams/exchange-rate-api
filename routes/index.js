const express = require('express')
const router = express.Router()

const exchangeRateController = require('../controllers/exchange-rate-controller')

router.get('/', exchangeRateController.exchangeRate)

module.exports = router
