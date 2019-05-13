const express    = require('express')
const bodyParser = require('body-parser')
const app        = express()
const PORT       = 3001

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res) => {
  console.log('Home route accessed')
  res.json({
    info: 'Reached home route'
  })
})

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`)
})