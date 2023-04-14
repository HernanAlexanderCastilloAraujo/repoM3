const data = require('../utils/data')

const updateUser = (id, userData) => {
    const user = data.find(user => user.id == id)

        const {name, username, email, phone, website} = userData
        user.name = name? name : user.name
        user.username = username ? username : user.username
        user.email = email ? email : user.email
        user.phone = phone ? phone : user.phone
        user.website = website ? website : user.website
        return user

}

module.exports = updateUser