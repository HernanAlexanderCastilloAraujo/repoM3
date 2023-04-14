const express = require('express');
const router = require("./router/index.js");
const morgan = require('morgan');


const server = express();
server.name = 'dev'
 server.use(express.json());
server.use(router)
module.exports = server;