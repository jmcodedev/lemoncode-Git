/* 
- Caso 1: 12345678Z, debería devolver true.
- Caso 2: 73536276D, debería devolver true.
- Caso 3: 72184153X, debería devolver true.
- Caso 4: 36218255V, debería devolver true.
- Caso 5: 12345678A, debería devolver false.
- Caso 6: 98765432A, debería devolver false.
- Caso 7: 33333333C, debería devolver false.
*/
import { validarNIF } from "./validarnif";

describe("validarNIF", () => {
  it.each([
    ["12345678", "Z", true],
    ["73536276", "D", true],
    ["72184153", "X", true],
    ["36218255", "V", true],
    ["12345678", "A", false],
    ["98765432", "A", false],
    ["33333333", "C", false],
  ])("El NIF %s%s es válido: %s", (numero, letra, resultadoEsperado) => {
    // Act
    const resultado = validarNIF(numero, letra);

    // Assert
    expect(resultado).toBe(resultadoEsperado);
  });
});
