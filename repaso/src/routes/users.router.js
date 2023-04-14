const {Router} = require('express')
 
const usersRouter = Router()
const getUsers = require('../controllers/01-getUsers')
const getUserById = require('../controllers/03-getUserById')
const getUsersWithPhones = require('../controllers/02-getUsersWithPhone')
const createUser = require('../controllers/04-createUser')
const updateUser = require('../controllers/05-updateUser')
const deleteUser = require('../controllers/06-deleteUser')
// => GET /users => devuelve todos los usuarios, salvo que reciba un query "name", en cuyo caso devuelve los usuarios que coincidan con el nombre
// => GET /users/:id => devuelve el usuario con el id pasado por parámetro
// => GET /users/phone => devuelve los usuarios que tienen el teléfono registrado.
// => POST /users => crea un usuario con los datos recibidos en el body
// => PUT /users/:id => actualiza los datos del usuario con el id pasado por parámetro, los datos a actualizar vienen en el body
// => DELETE /users/:id => elimina el usuario con el id pasado por parámetro

usersRouter.get('/', (req, res) => {
   // res.status(200).send('the path for GET /useres works correctly')
    const {name} = req.query
    const users = getUsers(name)
try{
    res.status(200).json(users)
}catch(error){
    res.status(500).json({error: error.message})
}
})

usersRouter.get('/phone', (req, res) => {
    //res.status(200).send('the path for GET /useres/phone works correctly')
    // se requiere obtener los datos de la base de datos y enviar los datos, si viene un query name, filtrar los datos por ese nombre
    const users = getUsersWithPhones()
    try{
        res.status(200).json(users)
    }catch(error){
        res.status(500).json({error: error.message})
    }
})

usersRouter.get('/:id', (req, res) => {
   // res.status(200).send('the path for GET /useres/:id works correctly')
   // se requiere obetener los datos del usuario del id pasado por parámetro, si no existe, devolver un error 404
    const {id} = req.params
    const user = getUserById(id)
    try{
        res.status(200).json(user)
    }catch(error){
        res.status(404).json({error: error.message})
    }

})

const validate = (req, res, next) => {
    const {name, username, email} = req.body
    if(!name || !username || !email) {
        return res.status(400).json({error: "Incomplete data"})
    }else{
        next()
    }
}

usersRouter.post('/',validate, (req, res) => {
    //res.status(200).send('the path for POST /useres works correctly')
    const {name, username, email, phone, website,} = req.body
    const newUser = createUser({name, username, email, phone, website})
    try{
        res.status(201).json(newUser)
    }catch(error){
        res.status(400).json({error: error.message})
    }
}) 
const validateId = (req, res, next) => {
    const {id} = req.params
    const user = getUserById(id)
    if(!user){
        return res.status(404).json({error: "User not found"})
    }else{
        next()
    }
}
usersRouter.put('/:id',validateId, (req, res) => {
    //res.status(200).send('the path for PUT /useres/:id works correctly')
    const {id} = req.params
    const {name, username, email, phone, website} = req.body
    const updatedUser = updateUser(id, {name, username, email, phone, website})
    try{
        res.status(200).json(updatedUser)
    }catch(error){
        res.status(400).json({error: error.message})
    }

})


usersRouter.delete('/:id',validateId, (req, res) => {
    //res.status(200).send('the path for DELETE /useres/:id works correctly')
    const {id} = req.params
    const deletedUser = deleteUser(id)
    try{
        res.status(200).json(deletedUser)
    }catch(error){
        res.status(400).json({error: error.message})
    }

})

module.exports = usersRouter