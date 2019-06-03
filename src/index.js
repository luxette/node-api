const express = require('express')
const bodyParser = require('body-parser')
const { saveNewContact } = require('./api')

const app = express()

app.use(bodyParser.json())

app.use(function (req, res, next) {

  res.setHeader('Access-Control-Allow-Origin', '*')

  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')

  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')

  next()
})

app.get('/', function (req, res) {
  res.send('Welcome to Luxete\'s API')
})

app.post('/add-contact', (req, res) => {
  const values = req.body

  saveNewContact(values)
    .then((response) => {
      const fmtData = response.data.replace(/[\?\(\)]/g, '')
      const data = JSON.parse(fmtData)

      if (data.result === 'error') {
        res.status(400).json({
          msg: data.msg
        })
      } else {
        res.status(200).json({
          msg: data.msg
        })
      }
    })
    .catch((err) => {
      console.log('An error has occurred', err)
    })
})

app.listen(3006, function () {
  console.log('Listening on port 3006!')
})
