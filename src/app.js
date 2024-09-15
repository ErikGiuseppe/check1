const express = require('express');
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Habilita o CORS
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-access-token');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});
const mongoose = require('mongoose')
mongoose.connect(`mongodb://192.168.68.52:27017/mydase`)

require('./models/produto')

//registrar os models
//criar rotas
const index = require('./routes/index')
app.use('/', index)
const produtoRota = require('./routes/produto-route.js')
app.use('/produtos', produtoRota)
module.exports = app;
