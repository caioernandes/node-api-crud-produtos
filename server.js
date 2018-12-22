const express = require('express')
const mongoose = require('mongoose')
const requireDir = require('require-dir')

//iniciando o app
const app = express()

//permite envio de dados para a aplicação em forma de json
app.use(express.json())

//iniciando o banco de dados
mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true })

requireDir('./src/models')

//primeira rota
app.use('/api', require('./src/routes'))

app.listen(3001)
