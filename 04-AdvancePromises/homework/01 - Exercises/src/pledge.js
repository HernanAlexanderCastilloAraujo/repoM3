"use strict";
/*----------------------------------------------------------------
Promises Workshop: construye la libreria de ES6 promises, pledge.js
----------------------------------------------------------------*/
// // TU CÓDIGO AQUÍ:

function $Promise(executor) {
  if (typeof executor !== "function") {
    throw new TypeError("executor must be a function");
  }
  this._state = "pending";
  this._value = undefined;
  this._handlerGroups = [];

  executor(this._internalResolve.bind(this), this._internalReject.bind(this));
}

$Promise.prototype._callHandlers = function (value) {
  while (this._handlerGroups.length) {
    const group = this._handlerGroups.shift();

    if (this._state === "fulfilled") {
      if (group.successCb) {
        try {
          const newValue = group.successCb(value);

          if (newValue instanceof $Promise) {
            return newValue.then(
              (value) => group.downstreamPromise._internalResolve(value),
              (reason) => group.downstreamPromise._internalReject(reason)
            );
          } else {
            group.downstreamPromise._internalResolve(newValue);
          }
        } catch (error) {
          group.downstreamPromise._internalReject(error);
        }
      } else {
        group.downstreamPromise._internalResolve(value);
      }
    } 
    if (this._state === "rejected") {
      if (group.errorCb) {
        try {
          const newValue = group.errorCb(value);
          if (newValue instanceof $Promise) {
            return newValue.then(
              (value) => group.downstreamPromise._internalResolve(value),
              (reason) => group.downstreamPromise._internalReject(reason)
            );
          } else {
            group.downstreamPromise._internalResolve(newValue);
          }
        } catch (error) {
          group.downstreamPromise._internalReject(error);
        }
      } else {
        group.downstreamPromise._internalReject(value);
      }
    }
    // if(this._state === "fulfilled" && group.successCb) group.successCb(value);
    // if(this._state === "rejected" && group.errorCb) group.errorCb(value);
  }
};

$Promise.prototype._internalResolve = function (value) {
  if (this._state === "pending") {
    this._state = "fulfilled";
    this._value = value;
    this._callHandlers(value);
  }
};

$Promise.prototype._internalReject = function (reason) {
  if (this._state === "pending") {
    this._state = "rejected";
    this._value = reason;
    this._callHandlers(reason);
  }
};

$Promise.prototype.then = function (successCb, errorCb) {
  const downstreamPromise = new $Promise(() => {});
  this._handlerGroups.push({
    successCb: typeof successCb === "function" ? successCb : false,
    errorCb: typeof errorCb === "function" ? errorCb : false,
    downstreamPromise,
  });

  if (this._state !== "pending") {
    this._callHandlers(this._value);
  }

  return downstreamPromise;
};

$Promise.prototype.catch = function (errorCb) {
  return this.then(null, errorCb);
};
// El método estático `$Promise.resolve`
// es una función, y no una que ya hemos escrito
// toma un <valor plano A> y devuelve una <promesa para A>
// toma una <promesa para A> y devuelve la misma <promesa para A>
// demuestra porque "resolved" y "fulfilled" no son sinónimos

$Promise.resolve = function (value) {
    if (value instanceof $Promise) {
        return value;
    } else {
        return new $Promise((resolve) => resolve(value));
    }

}

// El método estático `$Promise.all`



$Promise.all = function (promises) {

    // es una función
// toma un solo argumento de un arreglo
// convierte un <arreglo de valores> a una <promesa para un arreglo de valores>
// convierte un <arreglo de promesas> en una <promesa para un arreglo de valores>
// convierte un <arreglo de valores y promesas> a una <promesa para un arreglo de valores>
// convierte un <arreglo de promesas async> en una <promesa para un arreglo de valores>
// convierte un <arreglo de promesas async> (completandose en orden random) en una <promesa para un arreglo de valores> (ordenadas por el index del arreglo original)
// rechaza con <razon E> cuando uno de las promesas ingresadas rechaza con <razon E>
// no es afectado por rechazos adicionales


    return new $Promise((resolve, reject) => {
        if (!Array.isArray(promises)) {
            throw new TypeError("Promise.all must be called with an array");
        }
        const values = [];
        let counter = 0;
        for (let i = 0; i < promises.length; i++) {
            const promise = promises[i];
            if (promise instanceof $Promise) {
                promise.then((value) => {
                    values[i] = value;
                    counter++;
                    if (counter === promises.length) {
                        resolve(values);
                    }
                }, reject);
            } else {
                values[i] = promise;
                counter++;
                if (counter === promises.length) {
                    resolve(values);
                }
            }
        }
    });


}

module.exports = $Promise;
/*-------------------------------------------------------
El spec fue diseñado para funcionar con Test'Em, por lo tanto no necesitamos
realmente usar module.exports. Pero aquí está para referencia:

module.exports = $Promise;

Entonces en proyectos Node podemos esribir cosas como estas:

var Promise = require('pledge');
…
var promise = new Promise(function (resolve, reject) { … });
--------------------------------------------------------*/
