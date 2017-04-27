const express = require('express')
const bodyParser = require('body-parser')
const low = require('lowdb')

const app = express()
const db = low('./data/trello.json')

console.log(db)

app.get('/api/board', (req, res) => {

})


app.listen(8090)