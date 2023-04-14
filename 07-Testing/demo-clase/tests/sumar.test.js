 
 const {sumar} = require('../index');
 const {pares} = require('../index');

 describe('testeo de la función sumar', () => {
    it("Debe ser una función",() => {
        expect(typeof sumar).toBe('function')
        expect(typeof sumar).not.toBe('number')

    })
    it("Debe arrojar un error si no recibe dos números", () => {
        expect(() => sumar(1)).toThrow("los parámetros deben ser dos números")
        expect(() => sumar(1,2,3)).toThrow("los parámetros no deben ser más de dos números")
        expect(() => sumar("HOLA", 3)).toThrow('Debe recibir dos números')
        expect(() => sumar(3, "Hola")).toThrow('Debe recibir dos números')
        expect(() => sumar("Hola", "Hola")).toThrow('Debe recibir dos números')
  

    })

     it("Debe retornar la suma de los dos números", () => {
        expect(sumar(3, 3)).toBe(6)
        expect(sumar(3, 3)).not.toBe(7)
        expect(sumar(3, 3)).not.toBe(5)

     })
     
    })

    describe('testeo de la función pares', () => {
        it("Debe ser una función",() => {
            expect(typeof pares).toBe('function')
            expect(typeof pares).not.toBe('number')
    
        })
        it("Debe arrojar un error si no recibe un array con numeros", () => {
         
            expect(() => pares("HOLA")).toThrow("Debe recibir un array con numeros")
            expect(() => pares(1)).toThrow("Debe recibir un array con numeros")
            expect(() => pares(1,2,3)).toThrow("Debe recibir un array con numeros")
            expect(() => pares("HOLA", 3)).toThrow('Debe recibir un array con numeros')
            expect(() => pares(3, "Hola")).toThrow('Debe recibir un array con numeros')
            expect(() => pares("Hola", "Hola")).toThrow('Debe recibir un array con numeros')
            expect(() => pares({})).toThrow('Debe recibir un array con numeros')
            expect(() => pares([])).toThrow('Debe recibir un array con numeros')
            expect(() => pares([1,2,"Hola"])).toThrow('Debe recibir un array con numeros')
            expect(() => pares([1,2,3])).not.toThrow('Debe recibir un array con numeros')
    
        })
        it("Debe retornar un array con los numeros correctos",() => {
            // dos arrays no son iguales porque tienen diferente referencia por eso se utiliza toEqual, que compara el contenido de los arrays, con objetos es lo mismo. 
            expect(pares([1,2,3,4,5,6,7,8,9,10])).toEqual([2,4,6,8,10])
            expect(pares([1,2,3,4,5,6,7,8,9,10])).not.toEqual([2,4,6,8,10,12])

        })
    })