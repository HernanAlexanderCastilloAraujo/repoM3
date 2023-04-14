let data = require("../utils/data");


// este controller se encarga de crear un nuevo usuario en BDD
const createUser = async ({name, username, email, phone, website}) => {
    if(!name || !username || !email ){
        throw new Error("el nombre, el username y el email son obligatorios");
    }
    const newUser = {
        id: data.length + 1,
        name,
        username,
        email,
        phone: phone? phone : "",
        website: website? website : "",
    }
    data.push(newUser);
    return newUser;
}

module.exports = createUser;