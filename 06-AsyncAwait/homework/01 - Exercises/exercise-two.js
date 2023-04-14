"use strict";

let exerciseUtils = require("./utils");

let args = process.argv.slice(2).map(function (st) {
  return st.toUpperCase();
});

module.exports = {
  problemAx: problemA,
  problemBx: problemB,
  problemCx: problemC,
  problemDx: problemD,
};

// corre cada problema dado como un argumento del command-line para procesar
args.forEach(function (arg) {
  let problem = module.exports["problem" + arg];
  if (problem) problem();
});

async function problemA() {
  // callback version
  // exerciseUtils.readFile("poem-one/stanza-01.txt", function (err, stanza) {
  //   exerciseUtils.blue(stanza);
  // });
  // exerciseUtils.readFile("poem-one/stanza-02.txt", function (err, stanza) {
  //   exerciseUtils.blue(stanza);
  // });

  // async await version
  // Tu código acá:
const stanzas = await Promise.all(
  [
    exerciseUtils.promisifiedReadFile("poem-two/stanza-01.txt"),
    exerciseUtils.promisifiedReadFile("poem-two/stanza-02.txt"),
  
  ]
)
stanzas.forEach(stanza => exerciseUtils.blue(stanza))

 console.log("done")



}

async function problemB() {
  // let filenames = [1, 2, 3, 4, 5, 6, 7, 8].map(function (n) {
  //   return "poem-two/" + "stanza-0" + n + ".txt";
  // });

  // // callback version
  // filenames.forEach((filename) => {
  //   exerciseUtils.readFile(filename, function (err, stanza) {
  //     exerciseUtils.blue(stanza);
  //   });
  // });

  // async await version
  // Tu código acá:
  let filenames = [1, 2, 3, 4, 5, 6, 7, 8].map(function (n) {
    return "poem-two/" + "stanza-0" + n + ".txt";
  });
const stanzas = await Promise.all(
  filenames.map(filename => exerciseUtils.promisifiedReadFile(filename))
)
stanzas.forEach(stanza => exerciseUtils.blue(stanza))

  console.log("done")
}

 function problemC() {
  // let filenames = [1, 2, 3, 4, 5, 6, 7, 8].map(function (n) {
  //   return "poem-two/" + "stanza-0" + n + ".txt";
  // });

  // // callback version
  // filenames.forEach((filename) => {
  //   exerciseUtils.readFile(filename, function (err, stanza) {
  //     exerciseUtils.blue(stanza);
  //   });
  // });

  // async await version
  // Tu código acá:

  let filenames = [1, 2, 3, 4, 5, 6, 7, 8].map(function (n) {
    return "poem-two/" + "stanza-0" + n + ".txt";
  });

  // si se trabaja con el foreach, se debe usar la promesa dentro de la funcion callback
// filenames = filenames.map(filename => exerciseUtils.promisifiedReadFile(filename))

filenames.forEach(async (filename) => { // el foreach puede tener problemas con async await, no se puede utilizar foreach y async await con un array de promesas.
  const stanza = await exerciseUtils.promisifiedReadFile(filename);
  exerciseUtils.blue(stanza);
})

  console.log("done")
}

async function problemD() {
  // let filenames = [1, 2, 3, 4, 5, 6, 7, 8].map(function (n) {
  //   return "poem-two/" + "stanza-0" + n + ".txt";
  // });
  // let randIdx = Math.floor(Math.random() * filenames.length);
  // filenames[randIdx] = "wrong-file-name-" + (randIdx + 1) + ".txt";

  // // callback version
  // filenames.forEach((filename) => {
  //   exerciseUtils.readFile(filename, function (err, stanza) {
  //     exerciseUtils.blue(stanza);
  //     if (err) exerciseUtils.magenta(new Error(err));
  //   });
  // });

  // async await version
  // Tu código acá:
  let filenames = [1, 2, 3, 4, 5, 6, 7, 8].map(function (n) {
    return "poem-two/" + "stanza-0" + n + ".txt";
  });

  try {
     for (let i = 0; i < filenames.length; i++) {
    const stanza = await exerciseUtils.promisifiedReadFile(filenames[i]);
    exerciseUtils.blue(stanza);
     }
  } catch (error) {
    exerciseUtils.magenta(error);
  }
  console.log("done")
}
