var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Hello Express.js')
})

console.log(process.env.PORT)

app.listen(process.env.PORT || 3000)
