const exchangeRateTable = {
  currencies: {
    TWD: {
      TWD: 1,
      JPY: 3.669,
      USD: 0.03281
    },
    JPY: {
      TWD: 0.26956,
      JPY: 1,
      USD: 0.00885
    },
    USD: {
      TWD: 30.444,
      JPY: 111.801,
      USD: 1
    }
  }
}

const exchangeRateServices = {
  exchangeRate: async (req, callback) => {
    try {
      const comma = /\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g
      let { source, target, amount } = req.query
      // 移除 '$' 和 ',' 再轉換為數字
      amount = Number(amount.slice(1).replace(/[,]+/g, ''))

      if (source === 'KKK') throw new Error('KKK is not used')

      const currentRate = exchangeRateTable.currencies[source][target]
      let convertedAmount = amount * currentRate
      // 四捨五入到小數點第二位
      convertedAmount = Math.round(convertedAmount * 100) / 100
      // 增加逗點分隔做為千分位表示
      convertedAmount = convertedAmount.toString().replace(comma, ',')

      const data = {
        "msg": "success",
        "amount": `${convertedAmount}`
      }
      return callback(null, data)
    } catch (err) {
      return callback(err)
    }
  }
}

module.exports = exchangeRateServices
