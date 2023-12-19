const express = require('express')
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const routes = require('./routes')

const app = express()
const PORT = process.env.PORT

app.use(routes)

app.listen(PORT, () => {
  console.log(`App is listening on http://localhost:${PORT}`)
})
