const data = require('../utils/data')

const getUsers = (name) => {
 
    if(name){
      // toLowerCase() is a method that returns the string in lowercase 
        const users = data.filter(user => user.name.toLowerCase().includes(name.toLowerCase()))
        return users
    }
    return data
  // simulation error in the get data
  // throw new Error("Error in the server")
}

module.exports = getUsers