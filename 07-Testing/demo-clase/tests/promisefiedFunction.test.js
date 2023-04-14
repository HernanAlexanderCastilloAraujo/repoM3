const {promisefiedFunction} = require('../index')

describe('testeo de la función promisefiedFunction', () => {
    it("Debe resolverse al valor ok", () => {
// siempre que se trate codigo asincrono hay que retornar la promesa,  y se debe manejar la respuesta, hay que manejar la respuesta de la promesa
       return promisefiedFunction().then((data) => {
            expect(data).toEqual('ok')
        })
    })
})