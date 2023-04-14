const flag = false
const promiseA = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (flag) resolve('todo ok')
        else reject('todo mal')
    }, 1000)
})

promiseA
.then((value) => console.log(value),
(reason) =>{
    console.log("nnn")
    //return "xxx"
    throw new Error("xxx")  
}) // el retorno de console.log es undefined
.then((value) => console.log("Hola"))
.then((value) => console.log(value))
.catch((error) => {
    console.log(error)
    //return 'error'
    throw new Error("error")
})
.then((value) => console.log(value))



// promesa que se resuelve a una promesa

const promiseB = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(promiseA)
    }, 1000)
})
.then((value) => 
{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("promesa z")
        }, 1000)
    }) //promesa z
}) 
.then( 
    (value) => console.log(value)
) //este then se resuelve directamiente a la promesa z

