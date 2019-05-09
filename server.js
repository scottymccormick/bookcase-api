const express = require('express')
const app     = express()
const PORT    = 3001

app.get('/', (req, res) => {
  console.log('Home route accessed')
  res.send('Reached home route')
})

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`)
})