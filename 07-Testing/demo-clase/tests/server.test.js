const server = require('../server');
const request = require('supertest');
describe("test de el servidor", () => {
    it("debe responder con un status 200 al hacer un req GET  a '/'",async () => {
        const response = await request(server).get('/');
        expect(response.statusCode).toEqual(200);
    
    })
    it("debe responder con el mensaje 'Hola mundo' cuando se haga un req GET a '/'",async () => {
        const response = await request(server).get('/');
        expect(response.text).toEqual('Hola mundo');
    })
})
