// const express = require('express')
import express, { json } from 'express'
import jwt from 'jsonwebtoken'

const app = express()
const port = 3000

app.use(express.json())

app.get('/', (req, res) => {
	res.send('Hello111')
})

app.post('/user/login', (req, res) => {
	console.log(req.body)

	res.json({
		status: true,
	})
})

app.listen(port, err => {
	if (err) {
		return console.log(err)
	}
	console.log(`Example app listening on port ${port}`)
})
