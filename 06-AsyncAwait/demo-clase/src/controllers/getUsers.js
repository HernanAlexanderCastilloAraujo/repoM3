let data = require("../utils/data");

// este controller se encarga de obtener y retornar la información de todos los usuarios
const getUsers = async () => {

    const verification = false;
    if(verification){
        throw new Error("Error de prueba");
    }
  return data;
};

module.exports = getUsers;
