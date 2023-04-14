var fs = require("fs");
var http = require("http");
const { endianness } = require("os");
/* ⚠️ NO MODIFICAR NADA POR ENCIMA DE ESTA LÍNEA ⚠️ */
/* AQUÍ DEBAJO PUEDES ESCRIBIR LA CONSTANTE DEL PUERTO */
const PORT = 3001;

http.createServer((req,res) => {
  console.log(`Server raised in port ${PORT}`)
  const {url} = req;

  //Forma según el readme
//   if(url === "/api"){
//     fs.readFile("./utils/dogsData.json", (err, data) => {
//     if(err)
//     {res.writeHead(404, {"Content-Type": "text/plain"});
//     return res.end("json not found");}
//     else{
//       res.writeHead(200, {"Content-Type": "application/json"});
//       return res.end(data)
//     } 
    
//   }
//     )

//   }else if(url === "/allDogs"){
//  fs.readFile("./utils/allDogs.html","utf8", (err, data) => {
//  if(err) {
//     res.writeHead(404, {"Content-Type": "text/plain"});
//     return res.end("html not found");
//  } else {
//     res.writeHead(200, {"Content-Type": "text/html"});
//     return res.end(data)
//   } 
// })
// return
// }else{
//     res.writeHead(404, {"Content-Type": "text/plain"});
//     return res.end("Route not found");
// }

// Otra forma
switch(url){
  case "/api":
    try {
      const data = fs.readFileSync("./utils/dogsData.json")
      res.writeHead(200, {"Content-Type": "application/json"});
      return res.end(data)
    } catch (error) {
      res.writeHead(404, {"Content-Type": "text/plain"});
      return res.end("json not found");
    }
  case "/allDogs":
    try {
      const data = fs.readFileSync("./utils/allDogs.html","utf8")
      res.writeHead(200, {"Content-Type": "text/html"});
      return res.end(data)
    } catch (error) {
      res.writeHead(404, {"Content-Type": "text/plain"});
      return res.end("html not found");   
    }

  
  default:
    res.writeHead(404, {"Content-Type": "text/plain"});
    return res.end("Route not found");


}
}).listen(PORT, "localhost")

/* ⚠️ LA LÍNEA SIGUIENTE TIENE QUE QUEDAR COMO ESTÁ PARA PODER EXPORTAR EL SERVIDOR ⚠️ */
module.exports =
  /* AQUÍ DEBAJO YA PUEDES ESCRIBIR TÚ CÓDIGO REEMPLAZANDO EL VALOR DE NULL POR EL SERVIDOR */
  null;
