const getUsers = require("../controllers/getUsers");
const createUser = require("../controllers/createUser");

const { Router } = require("express");
const usersRouter = Router();

usersRouter.get("/", async (req, res) => { // los controllers son asincronos, por lo tanto, se simula con async await para que se ejecute de forma sincrona 

  //res.send("Estoy en la ruta get /users, esta ruta devolverá la información de todos los usuarios")

  try {
    const users = await getUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({error : error.message });
  }

});

usersRouter.post("/", async (req, res) => {
 // res.send("Estoy en la ruta post /users, esta ruta creará un usuario");

    const { name, username, email, phone, website } = req.body;
    try {
        const newUser = await createUser({ name, username, email, phone, website });
        res.status(201).json(newUser);
    }
    catch (error) {
        res.status(500).json({error : error.message });
    }
 

});

usersRouter.get("/:id", (req, res) => {
  res.send(
    "Estoy en la ruta get /users/:id, esta ruta devolverá la información de un usuario"
  );
});
module.exports = usersRouter;
