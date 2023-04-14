const express = require('express');

const server = express();

server.get('/', function (req, res){
    res.status(200).send('Hola mundo');
})

module.exports = server;