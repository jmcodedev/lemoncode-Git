/* VALIDA UN NIF
 * @param {string} numero, es de tipo string. Debe tener un tamaño de 8 carácteres y ser numérico.
 * @param {string} letra, de tipo string. Debe ser una letra mayúscula.
 * @returns {boolean}
 */

/* 

| RESTO | LETRA |
|   0   |   T   |
|   1   |   R   |
|   2   |   W   |
|   3   |   A   |
|   4   |   G   |
|   5   |   M   |
|   6   |   Y   |
|   7   |   F   |
|   8   |   P   |
|   9   |   D   |
|   10  |   X   |
|   11  |   B   |
|   12  |   N   |
|   13  |   J   |
|   14  |   Z   |
|   15  |   S   |
|   16  |   Q   |
|   17  |   V   |
|   18  |   H   |
|   19  |   L   |
|   20  |   C   |
|   21  |   K   |
|   22  |   E   |

*/

export function validarNIF(numero, letra) {
  return false;
}

function calculaResto (numero) {
    return numero % 23;
}
