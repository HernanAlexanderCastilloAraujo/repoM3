```javascript
```

Ahora se prepara el servidor para  que el front haga las peticiones

recordar que el protocolo http tiene varios métodos, en este caso se trabajará con "get", "post", "put", "delete"

Conceptos
1. cada que se realiza una request, siempre se trendrá una respuesta
2. el cliente debe preparar para cuando la solicitud sale bien y para cuando sale mal
3. Node es un entorno para ejecutar JS, este está desarrollado en c++.
4. El motor v8 fue el motor de ejecución de JS puro 
5. El motor v8 no puede realizar tareas asincrónicas, no puede interactuar con el sistema.
6. Al motor v8 se le añade libuv que es un paquete de modulos que me permite leer y escribir archvios, leer y escribir en base de datos, enviar y recibir datos de internet e interpretar los formatos estándares.
7. Node es de naturaleza asincrónica gracias a libuv
8. libuv está programado en C.
9. se utiliza nodemon para que cuando ocurra un cambio en el .js, se ejecute automaticamente en node.
10. nodemon recarga cada vez que haya un cambio en el proyecto 
11. npm es un gestor de paquetes. 
