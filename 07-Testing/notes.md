```javascript
```

TESTING 
1. El testing sirve para construir una aplicación basandose en resultados.
2. en este bootcamp se utiliza la librería "jest"
3. Unit Testing hace referencia a test unitarios, estos deben ser completamente automatizable, se debe poder ejecutar el cualquier orden, siempre retorna el mismo resultado, es rápido y fácil de entender y mantener, además, testea un solo concepto lógico del sistema.
4. Test Driven Development (TDD), se crea el test, no funciona, se resuleve, y por último se refactoriza.
5. Jest es una biblioteca de aserciones, tambien existe Mocha.
6. Mocha necesita de otras librerías para realizar diferentes funciones, aunque tiene mayor flexibilidad.
7. para poder instalar jest se debe tener en cuenta las dependencias de desarrollo, lo que quiere decir que estas librerías no se necesitan en producción, otro ejemplo de librería de desarrollo es morgan o nodemon, para esto se coloca "npm install -D 'nombre de la librería'"
8. para que los test se ejecuten se debe modificar el comando test en el package.json
9. Matchers de jest
    . toBe => igualdad exacta
    . toEqual => verificación recursiva de cada propiedad
    . toBeNull => igual a null
    . toBeDefined => debe estar definido
    . toBeUndefined => no debe estar definido
    . toBeTruthy & toBeFalsy => buscan que el valor de veracidad sea verdadero o falso sin ser necesariamente ser literalmente true o false
    . toBeGreaterThan & toBeLessThan => que el valor sea menor o mayor que...
    . toBeCloseTo => que el numero decimal sea cercano a... 
    . toContain => verifica que un arreglo contenga un elemento
    .toThrow => verifica que llegue un error
10. Running Options
    . it => test unitario
    . xit => evita que el test unitario corra
    . describe => permite agrupar varios test unitarios de la misma categoría o temática (y se pueden anidar)
    . xdescribe => evita que todos los test de este grupo corran
    . it.only => hace que este sea el único test unitario en correr
11. El testing de front tiene una complicación extra, ya que hace una simulación de renderizado, y hace el test al front corriendo


TEST CON CÓDIGO ASYNC Y HOOKS
1. para manejar codigo asincrono hay que retornar la ejecución de la funcion que nos devuelve la promesa, y manejar la respuesta.
2. Hooks
    . beforeAll() => {}) => se ejecuta antes de que corran todos los test.
    . beforeEach() => {}) => se ejecuta antes de que corra cada uno de los test
    . afterAll() => {}) => se ejecuta después de que corran todos los test
    . afterEach() => {}) => se ejecuta después de que corra cada uno de los test
3. los Hooks sirven por ejemplo, cuando se requiere la conexión a una base de datos al empezar y también hay que cerrar la conexión, entonces vamos a utilizar beforeAll() y afterAll().


SUPERTEST
1. Permite testear los requests a nuestro servidor de forma autocontenida sin necesidad de levantar la aplicación
    . statusCode => podemos verificar si el código de respuesta fue el indicado
    . respose => podemos verificar si la respuesta del endpoint coincide con lo esperado
    . type => podemos verificar si el content-type devuelto es el correcto.

si el .listen() de express se encuentra en el archivo requerido en el testing va a generar que el test no termine de ejecutar nunca

2. para acceder a datos del servidor
    . response.statusCode => status
    . response.text => respuesta en texto
    . response.body => respuesta de un json  

3. Por lo general, cuando se hace testing con base de datos, se hace con una BDD local mucho más pequeña que la que se utiliza en producción.

4. 


