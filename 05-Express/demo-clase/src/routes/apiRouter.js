const { Router } = require("express");

const apiRouter = Router();

const database = require("../databaseExample");

apiRouter.get("/", (req, res) => {
    const {name} = req.query
    if(name) {
const searchResult = database.filter((character) => character.name.toLowerCase().includes(name.toLowerCase()))
res.status(200).json(searchResult)
    } else{
        res.status(200).json(database); //send es para enviar texto plano
    }
  
});

apiRouter.get("/:id", (req, res) => {
    try {
        const { id } = req.params;
        const character = database.find((character) => character.id == id);
        if(!character) {
         throw new Error('character does not exist')
        }
        res.status(200).json(character); //send es para enviar texto plano 
    } catch (error) {
        res.status(404).json({error: error.message})
    }
  
});

apiRouter.post("/", (req, res) => {
   const {name, gender} = req.body
    const newCharacter = {
        id: database.length + 1,
        name,
        gender,
        species: "Human",
        status: "Alive",
    }
    database.push(newCharacter)
    res.status(201).json(newCharacter)
})

// apiRouter.get('/episodies ', (req, res) => {
//     console.log('esto es una api');
//     res.status(200).send("esto es una api"); //send es para enviar texto plano

// })

// apiRouter.get('/characters', (req, res) => {

//     console.log('esto es una api');
//     res.status(200).send("esto es una api"); //send es para enviar texto plano

// })

// apiRouter.get('/location', (req, res) => {

//     console.log('esto es una api');
//     res.status(200).send("esto es una api"); //send es para enviar texto plano

// })

module.exports = apiRouter;
