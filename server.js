require('dotenv').config()
const express    = require('express')
const bodyParser = require('body-parser')
const app        = express()
const PORT       = 3001

const db = require('./queries')

const booksController = require('./controllers/booksController')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use('/books', booksController)

app.get('/', (req, res) => {
  console.log('Home route accessed')
  res.json({
    info: 'Reached home route'
  })
})

app.get('/users', db.getUsers)
app.get('/users/:id', db.getUserById)
app.post('/users', db.createUser)

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`)
})