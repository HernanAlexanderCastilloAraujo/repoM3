const data = require('../utils/data')

const deleteUser = (id) => {
    const user = data.find(user => user.id == id)

        const index = data.indexOf(user)
        data.splice(index, 1)
        return user

}

module.exports = deleteUser