/**
 * Escribe una function llamada same que acepte dos arrays.
 * La funcion deberia retornar true si cada valor del primer array es 
 * igual al cuadrado de valor del segundo array. 
 * La frecuencia debe ser la misma.

 * @param {Array} arr1 - esto es un array.
 * @param {Array} arr1 - esto es un array.
 * @returns {boolean} - deberia retornar true o false.
 */

function same(arr1, arr2) {
    if(arr1.length !== arr2.length) return false;
    let potencia = true;
    for(let i= 0; i < arr1.length; i++){
        if(Math.pow(arr2[i], 2) === arr1[i]) potencia = true;
        else return potencia = false;
    }
    return potencia
}


