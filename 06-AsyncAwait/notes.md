```javascript
```

ASYNC-AWAIT

Event loop
Javascript utiliza un modelo de tiempo para ejecutar sus procesos. este modelo está basado en un bucle de eventos, que es responsable de ejecutar el código, compilarlo, y procesar y ejectuar subtareas en cola.

Generator function con async await
1. async await permite simular un comportamiento en flujo que crea una "espera"
2. una funcion generadora es un especial que se puede pausar y nos permiten producir valores a lo largo del tiempo
3. la suntaxis es como la de cualquier otra función. la palabra reservada para pausarla o continuarla es yield.
4. una funcion generadora se indica con "function*"


```javascript
function* contFrom(start){
let num = start
while(true){
yield num
num++
}

}
```
5. cuando la funcion llega a yiel, se detiene y retorna num, y cuando se vuelve a ejecutar la funcion se retoma desde el lugar donde quedó
6. en resumen, estás funciones retornan valores varias veces (valores intermedios), volviendo a llanmar la función, se continua desde donde quedó
7. las funciones generadoras también pueden tener return


ASYNC AWAIT

