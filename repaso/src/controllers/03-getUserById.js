const data = require('../utils/data')

const getUserById = (id) => {
    const user = data.find(user => user.id == id)
    if(user){
        return user
    } else {
        throw new Error("User not found")
    }
}

module.exports = getUserById