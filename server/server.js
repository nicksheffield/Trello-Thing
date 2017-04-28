const express = require('express')
const bodyParser = require('body-parser')
const low = require('lowdb')
const uuid = require('uuid')
const _ = require('lodash')

const app = express()
const db = low(__dirname + '/data/trello.json')

db.defaults({ boards: [] }).write()

app.use(bodyParser.json())

app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*")
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
	next()
})

app.options("/*", function(req, res, next){
	res.header('Access-Control-Allow-Origin', '*')
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
	res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')
	res.sendStatus(200)
})

app.get('/api/board', (req, res) => {
	res.send(db.get('boards').value())
})

app.get('/api/board/:id', (req, res) => {
	res.send(db.get('boards').find({'id': req.params.id}).value())
})

app.post('/api/board', (req, res) => {
	const obj = {id: uuid(), name: 'New board', items: []}

	db.get('boards').push(obj).write()

	res.send(obj)
})

app.put('/api/board/:id', (req, res) => {
	const obj = db.get('boards').find({'id': req.params.id})

	obj.assign(req.body).write()

	res.send(obj.value())
})

app.delete('/api/board/:id', (req, res) => {
	const obj = db.get('boards').find({'id': req.params.id})

	db.get('boards').remove({'id': req.params.id}).write()

	res.send(obj.value())
})


app.listen(8090)

console.log('Server started at http://localhost:8090')
console.log(new Date())