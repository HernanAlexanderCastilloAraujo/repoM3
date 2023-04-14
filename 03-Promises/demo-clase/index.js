const axios = require('axios');


// axios.get("https://rickandmortyapi.com/api/character")
// //.then es una metodo de promesas
// .then(
//     // succes handler: que voy a hacer cuando todo salga bien
//     (response) => {
//         console.log(response.data);
//     },
//     // error handler: que voy a hacer cuando algo salga mal
//     (reason) => {
//         console.log(reason);
//     }
// )

// fetch("https://rickandmortyapi.com/api/character") //fetch me devuelve una promesa
// .then((response) => response.json()) //este .then me devuelve una nueva promesa
// .then((data) => console.log(data))



// creando una clase promesa

const promesa = new Promise((resolve, reject) => {
reject("corecto")
})
promesa.then(
    (response) => console.log(response),// 
    //(reason) => console.log(reason) // correcto 
    ).then(response => console.log(response)) // undefined
    .catch(reason => console.log("Error")) // el .catch recibe el error de cualquier .then anterior pero para que salte a este catch no se tiene que manejar el error en el then donde sucedió