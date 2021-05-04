/**
 * Escribe una funcion llamada reverse que acepte un string.
 * Debe retornar el string a la inversa.

 * @param {String} str - esto es un string.
 * @returns {String} - deberia retornar un string.
 */

function reverse(str) {
    let inverseString = str.split('').reverse().join('');
    return inverseString;
}
