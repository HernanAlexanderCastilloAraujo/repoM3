const express = require('express');
const morgan = require('morgan');
const mainRouter = require('./routes/routes');

const server = express(); // a partir de a qui se crea el servidor
 
// Middleware
server.use((req, res, next) => {
console.log("estamos resiviendo una peticion");
console.log("estamos pasando por el middleware");
next(); // next es para que continue 
}
)
server.use(morgan("dev"))

server.use(express.json()); // para que el servidor entienda los json

server.use(mainRouter)




module.exports = server;
