const {Router} = require('express');
const apiRouter = require('./apiRouter');

const mainRouter = Router();

// Funcion controlador de la ruta raiz
mainRouter.get('/', (req, res) => {
    console.log('Hola mundo');
    res.status(200).json({massage: 'Hola mundo'}); //json es para enviar un objeto json
    
    })
    
    mainRouter.use("/api", apiRouter)

module.exports = mainRouter;