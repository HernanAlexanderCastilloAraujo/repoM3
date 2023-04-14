const express = require("express");

let publications = [];

const server = express();

server.use(express.json());

//***********CONTROLADORES O CONTROLLERS***************//
const createPublication = (author, title, contents) => {
    const newPublication = {
        id : publications.length + 1,
        author,
        title,
        contents,

    }
    publications.push(newPublication);
    return newPublication;
}

const publicationsByAuthorAndTitle = (author, title) => {
    const publicationsByAuthorAndTitle = publications.filter(publication => publication.author === author && publication.title === title);
    return publicationsByAuthorAndTitle;
}

const publicationsByAuthor = (author) => {
    const publicationsByAuthor = publications.filter(publication => publication.author === author);
    return publicationsByAuthor;
}

const publicationToUpdate = (id) => {
   const publicationTU = publications.find(publication => publication.id == id);
    if(publicationTU){
        publicationTU.title = title;
        publicationTU.contents = contents;
        return publicationTU;
}else {
    throw new Error("No se recibió el id correcto necesario para modificar la publicación");
}
}

const publicationToDelete = (id) => {
    const publicationTD = publications.find(publication => publication.id == id);
    if(publicationTD){
       publications = publications.filter(publication => publication.id != id);
       return {success: true}
}else {
    throw new Error("No se recibió el id correcto necesario para eliminar la publicación");

}
}
//***********RUTAS O ROUTES***************//
server.post("/posts", (req,res) => {

    const {author, title, contents} = req.body;

    if(!author || !title || !contents){
        return res.status(400).json({error: "No se recibieron los parámetros necesarios para crear la publicación"});
    }else{
       const newPublication = createPublication(author, title, contents);
        return res.status(200).json(newPublication);
    }

})

server.get("/posts", (req,res) => {
    const {author, title} = req.query;
    console.log(author, title);
    if(author&&title){
        const publicationsBAT = publicationsByAuthorAndTitle(author, title)

        if(publicationsBAT.length > 0){
            return res.status(200).json(publicationsBAT);
        } else {
            return res.status(400).json({error: "No existe ninguna publicación con dicho título y autor indicado"});
        }
    }else{
        return res.status(400).json({error: "No existe ninguna publicación con dicho título y autor indicado"});
    }
})


server.get("/posts/:author", (req,res) => {
    const {author} = req.params;


    const publicationsBA =  publicationsByAuthor(author);
 
    if(publicationsBA.length > 0){
        return res.status(200).json(publicationsBA);
    } else {
        return res.status(404).json({error: "No existe ninguna publicación del autor indicado"});
    }
})

server.put("/posts/:id", (req,res) => {
    const {id} = req.params;
    const {title, contents} = req.body;

    if(!id || !title || !contents){
        return res.status(400).json({error: "No se recibieron los parámetros necesarios para modificar la publicación"});
    }else{
        try {
            const publicationTU = publicationToUpdate(id);
            return res.status(200).json(publicationTU);
        } catch (error) {
            return res.status(400).json({error: error.message});
        }
        } 
    
})

server.delete("/posts/:id", (req,res) => {
    const {id} = req.params;

    if(!id){
        return res.status(400).json({error: "No se recibió el id de la publicación a eliminar"});
    }else{
        try {
            const publicationTD = publicationToDelete(id);
            return res.status(200).json(publicationTD);
        } catch (error) {
            return res.status(400).json({error: error.message});
        }
        
    }
})
//NO MODIFICAR EL CODIGO DE ABAJO. SE USA PARA EXPORTAR EL SERVIDOR Y CORRER LOS TESTS
module.exports = { publications, server };
