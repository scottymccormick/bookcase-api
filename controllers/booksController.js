const express = require('express')
const got     = require('got')
const router  = express.Router()

router.get('/', (req, res) => {
  res.send('Reached Books Controller Index Route')
})

router.get('/search', async (req, res) => {
  try {
    const query = new URLSearchParams([
      ['q', req.query.t], 
      ['key', process.env.GOOGLE_API_KEY]
    ])
    const urlString = process.env.GOOGLE_API_URL + 'volumes'

    const response = await got(urlString, {query})
    if (response.statusCode !== 200) {
      throw Error(response.statusMessage)
    }

    const parsedResponse = JSON.parse(response.body)
    res.send(parsedResponse)

  } catch (error) {
    res.send(error)
  }
})

module.exports = router