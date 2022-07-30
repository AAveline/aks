const express = require('express')
const app = express()
const port = 8080
const s = require("./test");

app.get('/', (req, res) => {
  res.send('Hello World joliepetite nigoudouille! ' + s)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})