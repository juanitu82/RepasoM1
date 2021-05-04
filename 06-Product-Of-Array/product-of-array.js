/**
 * Escribe una funcion llamada productOfArray que reciba un array y 
 * mutiplique cada elemento con el siguiente.
 * Debe retornar el total de la multiplicacion de todos los elementos.

 * @param {Array} arr - esto es un array.
 * @returns {Number} - deberia retornar un number.
 */

function productOfArray(arr) {
    let result = arr[0];
    for(let i = 1; i < arr.length; i++){
        result *= arr[i];
        
    }
    return result;
}
