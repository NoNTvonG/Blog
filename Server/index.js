// const express = require('express')
import express, { json } from 'express'
import jwt from 'jsonwebtoken'
import mongoose from 'mongoose'

mongoose
	.connect(
		'mongodb+srv://tvong:R2o3m0a3n@cluster0.4mrqw.mongodb.net/?retryWrites=true&w=majority'
	)
	.then(() => console.log('DB connect'))
	.catch(err => console.log('DB not connect. ' + err))

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
