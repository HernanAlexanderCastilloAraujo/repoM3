"use strict";

let exerciseUtils = require("./utils");

let args = process.argv.slice(2).map(function (st) {
  return st.toUpperCase();
});

module.exports = {
  problemAx: problemA,
  problemBx: problemB
};

// corre cada problema dado como un argumento del command-line para procesar
args.forEach(function (arg) {
  let problem = module.exports["problem" + arg];
  if (problem) problem();
});

function problemA() {
  // callback version
  // exerciseUtils.readFile("poem-two/stanza-01.txt", function (err, stanza) {
  //   exerciseUtils.blue(stanza);
  // });
  // exerciseUtils.readFile("poem-two/stanza-02.txt", function (err, stanza) {
  //   exerciseUtils.blue(stanza);
  // });

  // promise version
  // Tu código acá:
  //Promise all ejecuta succes handler cuando todas las promesas se hayan resuelto o ejecuta un error handler si alguna de las promesas falla
  Promise.all([
    exerciseUtils.promisifiedReadFile("./poem-two/stanza-01.txt"), 
    exerciseUtils.promisifiedReadFile("./poem-two/stanza-02.txt")
  ])
  .then((stanzas) => {
    stanzas.forEach((stanza) => {
      exerciseUtils.blue(stanza);
    })
    
     
  }).finally(() => {
    console.log("done")
  })
  

}


function problemB() {
  // let filenames = [1, 2, 3, 4, 5, 6, 7, 8].map(function (n) {
  //   return "poem-two/" + "stanza-0" + n + ".txt";
  // });
  // let randIdx = Math.floor(Math.random() * filenames.length);
  // filenames[randIdx] = "wrong-file-name-" + (randIdx + 1) + ".txt";

  // callback version
  // filenames.forEach((filename) => {
  //   exerciseUtils.readFile(filename, function (err, stanza) {
  //     exerciseUtils.blue(stanza);
  //     if (err) exerciseUtils.magenta(new Error(err));
  //   });
  // });

  // promise version
  // Tu código acá:
 const filenames = [1, 2, 3, 4, 5, 6, 7, 8].map(function (n) { return "./pem-two/" + "stanza-0" + n + ".txt"; });




 
  for(let i = 1, promesa = exerciseUtils.promisifiedReadFile(filenames[0]); i <= filenames.length; i++){

     promesa = promesa.then((stanza) => {
      exerciseUtils.blue(stanza);
  if(i == filenames.length){
    return console.log("done")
  } else {
    return exerciseUtils.promisifiedReadFile(filenames[i]);
  }
    },
    )
    if(i == filenames.length){
      promesa.catch((err) => {
        exerciseUtils.magenta(new Error(err));
        console.error("done");
      })
    }

   
  }

} 



// EJERCICIO EXTRA
function problemC() {
  let fs = require("fs");
  function promisifiedWriteFile(filename, str) {
    // tu código acá:
    return new Promise((resolve, reject) => {
fs.writeFile(filename, str, (err) => {
  if(err){
   return reject(err);
  } else {
    return resolve();
  }
})
    })
  }
}

