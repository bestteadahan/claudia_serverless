const express = require('express')
const parser = require('body-parser')
const app = express()

app.use(parser.json())
// app.use(parser.urlencoded())

app.get('/', (req, res) => {
    res.send(`Hello, ${req.query.name}. This response comes from GET.`)
})

app.post('/', (req, res) => {
    res.send(`Hello, ${req.body.name}. This response comes from POST.`)
})

module.exports = app