const server = require("./src/app")

const port = 3001;
server.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
}); // el servidor escucha en el puerto 3001 