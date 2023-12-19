const express = require('express')
const router = express.Router()

const exchangeRateController = require('../controllers/exchange-rate-controller')
const { generalErrorHandler } = require('../middleware/error-handler')

router.get('/', exchangeRateController.exchangeRate)

router.use('/', generalErrorHandler)

module.exports = router
