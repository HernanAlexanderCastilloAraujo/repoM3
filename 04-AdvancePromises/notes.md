```javascript


```

ADVANCE PROMISES

ETAPAS EN EL FLOW DE UNA PROMESA
1. Propiedades fundamentales de una promesa => status  y valor(respuesta o motivo de reachazo)
2. Si la promesa se rechaza el status va a ser rejected
3. .then y .catch => .then puede tener un successHandler y errorHandler, el .catch solo tiene el errorHandler
4. ambas retornan promesas
5. un then es una promesa que se resuelve al valor que retorna su successHandler 