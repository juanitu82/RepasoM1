/**
 * Escribe una funcion llamada powers que reciba una base y un exponente.
 * Debera retornar la base por el exponente. Similar a como funciona 
 * Math.pow();
 * No deberia fijarme los casos negativos

 * @param {Array} arr1 - esto es un array.
 * @returns {Array || undefined} - deberia retornar un array o undefined.
 */

 function power(base, exp) {
    let result = base;
    for(let i = exp - 1; i > 0; i--){
        result *= base;
        console.log(result)

    }
    return result;
}

// function power(base, exp) {
//     if (exp === 0) return 1;
//     return base * power(base, exp - 1);
//   }