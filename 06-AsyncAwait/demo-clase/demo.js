const axios = require('axios');

//  axios.get('https://jsonplaceholder.typicode.com/users')
//         .then(response => {
//             console.log(response.data);
//         })

        // console.log("FIN");


        // por qué se muestra primero el FIN?... porque es una promesa 

        // ¿Cómo se puede hacer para que se muestre primero el resultado de la petición?



const miFuncion = async () => {
    // para recibir los erroes con async await se debe utilizar try catch
    try{
        const response = await axios.get('https://jsonplaceholder.typicode.com/users/1');
        console.log(response.data);
    }
    catch(error){
        console.log(error.message);
    }

    console.log("FIN");
}

miFuncion();

// la ejecución de una funcion async me retorna una promesa de donde se observa que async solo simula la sincronia de una promesa.
console.log(miFuncion());

// la fucnion de tipo async me permite dentro de una funcion, esperar que un proceso finalice con await.

// async permite convertir el funcionamiento de una promesa en sincrono
 
// Un ejemplo en donde se puede utilizar async await 
// const miFuncion2 = async () => {
//     const data = []
//     const urls = [
//         'https://jsonplaceholder.typicode.com/users/1',
//         'https://jsonplaceholder.typicode.com/users/2',
//         'https://jsonplaceholder.typicode.com/users/3',
//         'https://jsonplaceholder.typicode.com/users/4',
//         'https://jsonplaceholder.typicode.com/users/5',
//         'https://jsonplaceholder.typicode.com/users/6',
//         'https://jsonplaceholder.typicode.com/users/7',
//         'https://jsonplaceholder.typicode.com/users/8',
//     ]

//     for (let i = 0; i < urls.length; i++) {
//         // si no se coloca el await la funcion no espera a que termine la peticion y guarda en data como promesa cada iteración sin embargo esta no es la mejor opcion ya que se demoraría mucho tiempo con una alta cantidad de usuarios, sirve simplemente para que los usuarios vayan ordenados en el array, pero es una mejor opción trabajar con promesas, en este caso, con promise all
//         const response =  await axios.get(urls[i]);
//         data.push(response.data);
//         console.log("listo usuario")

//     }

    // con promise all se espera a que todas las promesas se resuelvan y se guarda en un array y es mucho mas rapido que con async
    //     const urls = [
    //             'https://jsonplaceholder.typicode.com/users/1',
    //             'https://jsonplaceholder.typicode.com/users/2',
    //             'https://jsonplaceholder.typicode.com/users/3',
    //             'https://jsonplaceholder.typicode.com/users/4',
    //             'https://jsonplaceholder.typicode.com/users/5',
    //             'https://jsonplaceholder.typicode.com/users/6',
    //             'https://jsonplaceholder.typicode.com/users/7',
    //             'https://jsonplaceholder.typicode.com/users/8',
    //         ]
    // const data =[]
    // const promises = urls.map(url => axios.get(url));
    // Promise.all(promises) // el promise all delega las peticiones en paralelo, a diferencia del async await, que son peticiones en serie.
    // .then(results => {
    //     results.forEach(result => {
    //         data.push(result.data);
    //      console.log(result.data)
    //     })
    // })

    // console.log("FIN")
    // // en el caso de promise el console.log de data, el array va a estar vacio cuando se imprima ya que los results de las peticiones no se alncazan a guardar
    // console.log(data)
// }

// miFuncion2();