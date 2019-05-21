const express = require('express')
const router  = express.Router()

router.get('/', (req, res) => {
  res.send('Reached Books Controller Index Route')
})

module.exports = router