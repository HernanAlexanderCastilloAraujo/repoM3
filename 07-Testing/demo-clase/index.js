

// function sumar(a, b){

//     // contar los parametros de una funcion

//     if (arguments.length > 2) {
//         throw new Error('los parámetros no deben ser más de dos números')
//     }
//    else if(a === undefined || b === undefined) {
//         throw new Error('los parámetros deben ser dos números')
//     } 
//     if (typeof a !== 'number' || typeof b !== 'number') {
//         throw new Error('Debe recibir dos números')
//     }
//     return a + b

// };
// las funciones flecha no permiten acceder al objeto arguments de la función, para ingresar a los arguments en una funcion flecha se debe usar el operador rest (...args)

const sumar = (...args) => {
    if (args.length > 2) {
        throw new Error('los parámetros no deben ser más de dos números')
    }
   else if(args[0] === undefined || args[1] === undefined) {
        throw new Error('los parámetros deben ser dos números')
    } 
    if (typeof args[0] !== 'number' || typeof args[1] !== 'number') {
        throw new Error('Debe recibir dos números')
    }
    return args[0] + args[1]
}


const pares = (array) => {
   if(array.length === 0 || !Array.isArray(array) || array.some((element) => typeof element !== 'number')) {
       throw new Error('Debe recibir un array con numeros')
   }
    return array.filter((element) => element % 2 === 0)
}


const promisefiedFunction = () => {
    const promiseA = new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve("ok")
        },1000)
    })
    return promiseA
}

module.exports = {
    sumar,
    pares,
    promisefiedFunction
}



// que quiero testear ?
// que sea una función
// que reciba dos números
// que retorne la suma de esos dos números
