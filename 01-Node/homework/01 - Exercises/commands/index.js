// file system son funciones para manejar archvios del sistema
const fs = require("fs"); 
// utils vino con la homework  
const utils = require("../utils/request");
// process es un objeto global que se puede usar en cualquier parte del codigo
const process = require("process");

function pwd(print) {
    print(process.cwd());
}

function date(print) {
    print(Date());
}

function echo(print, args) {
    print(args);
}

function ls(print) {
     fs.readdir(".", (error, files) => {
        if (error) throw error;
        print(files.join(" "));
     })
}

const printFile = (print, file, type) => {
    fs.readFile(file, "utf-8", (error, data) => {
        if (error) throw error;
        !type && print(data);
        type === "head" && print(data.split("\n").slice(0,1).join(" "));
        type === "tail" && print(data.split("\n").at(-1).trim());
    })
}

function cat(print, args) {
    // forma convencional
    // fs.readFile(args, "utf-8", (error, data) => {
    //     if (error) throw error;
    //     else print(data);
    // })

    // hecho con funcion reutilizable
    printFile(print, args);
    
}

function head(print, args) {
    // forma convencional
    // fs.readFile(args, "utf-8", (error, data) => {
    //     if (error) throw error;
    //     else print(data.split("\n").slice(0,1).join(" "));
    //     // para colocar las 8 primeras lineas y mostrarlas como lista
    //     // else print(data.split("\n").slice(0,8).join("\n"));
    // })

    // hecho con funcion reutilizable
    printFile(print, args, "head");
}

function tail(print, args) {

    // forma convencional
    // fs.readFile(args, "utf-8", (error, data) => {
    //     if (error) throw error;
    //     else print(data.split("\n").at(-1).trim());
       
    // })

    // hecho con funcion reutilizable
    printFile(print, args, "tail");
}

function curl(print, args) {

    utils.request(`https://${args}`, (error, response) => {
        if (error) throw error;
        else print(response.data);
    })
}

module.exports = {
    pwd,
    date,
    echo,
    ls,
    cat,
    head,
    tail,
    curl,

};
