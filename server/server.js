const express = require('express')
const bodyParser = require('body-parser')
const low = require('lowdb')
const uuid = require('uuid')

const app = express()
const db = low(__dirname + '/data/trello.json')

db.defaults({ boards: [] }).write()

app.get('/api/board', (req, res) => {
	res.header('Access-Control-Allow-Origin', '*')
	res.send(db.get('boards').value())
})


app.listen(8090)

console.log('Server started at http://localhost:8090')
console.log(new Date())