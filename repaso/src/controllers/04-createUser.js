const data = require('../utils/data')


const createUser = (userData) => {
    // la validación no debe ir en un controlador como este, ya que inserta en la base de datos, por eso, se hace dicha validación con un midleware en el router, para que se ejecute el controlador solo si la validación es correcta
    const {name, username, email, phone, website} = userData
    const newUser = {
        id: data.length + 1,
        name,
        username,
        email,
        phone: phone? phone : "",
        website: website? website : ""
    }
    data.push(newUser)
    return newUser
}

module.exports = createUser