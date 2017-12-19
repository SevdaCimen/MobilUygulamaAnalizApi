const express = require('express')
var gplay = require('google-play-scraper');

const app = express()

app.get('/', function (req, res) {
  console.log("Search= " + req.query.search)
  gplay.search({
    term: req.query.search,
    num: 20
  }).then((result) =>  {
    console.log(result)
    res.json(result)
  })

})

app.listen(3000)