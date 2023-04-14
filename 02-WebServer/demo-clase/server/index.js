const http = require('http');
const fs = require('fs');
const { restart } = require('nodemon');

const students = [
  {
    "nombre": "Juan",
    "edad": 30,
    "ciudad": "Bogotá",
    "pais": "Colombia",
    "id": 1
  },
  {
    "nombre": "Pedro",
    "edad": 25,
    "ciudad": "Bogotá",
    "pais": "Colombia",
    "id": 2
  },

  {
    "nombre": "Pablo",
    "edad": 23,
    "ciudad": "Cali",
    "pais": "Colombia",
    "id": 3 
  }
]

http.createServer(
    (req, res) => {
      res.setHeader('Access-Control-Allow-Origin', '*'); //esta linea de codigo es para que el servidor pueda ser consumido por cualquier cliente
      // Cuando vaya a la ruta /, voy a responder con un mensaje de hola mundo     
      const url = req.url;
      console.log(`está llegando una petición a la ruta ${url}`) 
      if (url === '/') {
        res.writeHead(200, {"Content-Type": "text/plain"});
       return res.end("Hola, mundo\n");
      } else if (url === '/students') {
        res.writeHead(200, {"Content-Type": "application/json"});
       return res.end(
          JSON.stringify(
            students
          )
        )} else if (url === "/html")
        {
 const html = fs. readFileSync(__dirname + "/src/index.html", "utf8")
    res.writeHead(200, {'Content-Type': 'text/html'})
    return res.end(html)
        } else if(url === "/templete"){
          const html = fs. readFileSync(__dirname + "/src/templete.html", "utf8")
          const nombre = "Mr-Hache"
    res.writeHead(200, {'Content-Type': 'text/html'})
    return res.end(html.replace("{nombre}", nombre))
        }
        else {
          res.writeHead(404, {"Content-Type": "text/plain"});
         return res.end("No encontrado\n");
        }
    //   res.writeHead(200,{"Content-Type":"text/plain"}) // estamos dando encabezado a la respuesta, text plain es el tipo de contenido que vamos a enviar
    //   res.end("Hola, mundo\n") // informacion que vamos a enviar

    //   // Cuando vaya a la ruta /students, voy a responder con un json
    //   res.writeHead(200, {"Content-Type": "application/json"})
    //   res.end(
    //     JSON.stringify(
    //       [    {
            
    //         "nombre": "Juan",
    //         "edad": 30,
    //         "ciudad": "Bogotá",
    //         "pais": "Colombia",
    //         "id": 1
  
    //       }, 
        
    //       {
    //          "nombre": "Pedro",
    //         "edad": 25,
    //         "ciudad": "Bogotá",
    //         "pais": "Colombia",
    //         "id": 2
    //       },
    //         ]
      
    //     )
      
    //   )
    
    // } 
  }).listen(3001, "localhost") // por aquí se escucha las peticiones



//estados
// 200 ok
//400 error del cliente
//500 error del servidor
//300 redireccion