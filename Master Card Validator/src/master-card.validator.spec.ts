/*
Validas
- 5506927427317625;
- 5553042241984105;
- 5555553753048194;
- 5555555555554444;
*/

/*
No validas
- 5506927627317626;
- 5525553753048195;
- 5553042241944106;
- 5554555555554445;
*/
import { esValidaLaTarjetaMasterCard } from "./master-card.validator";
describe("esValidaLaTarjetaMasterCard", () => {
  it("Error: String es undefined", () => {
    // Arrange
    const cadena: any = undefined;

    // Act
    const resultado = () => esValidaLaTarjetaMasterCard(cadena);

    // Assert
    expect(resultado).toThrowError("El número de tarjeta no es válido");
  });
  it("Error: String es null", () => {
    // Arrange
    const cadena: any = null;

    // Act
    const resultado = () => esValidaLaTarjetaMasterCard(cadena);

    // Assert
    expect(resultado).toThrowError("El número de tarjeta no es válido");
  });
  it("Error: String vacío", () => {
    // Arrange
    const cadena: string = "";

    // Act
    const resultado = () => esValidaLaTarjetaMasterCard(cadena);

    // Assert
    expect(resultado).toThrowError("El número de tarjeta no es válido");
  });
  it("Error: No es válida", () => {
    // Arrange
    const cadena: string = "5555555555554444";

    // Act
    const resultado = esValidaLaTarjetaMasterCard(cadena);

    // Assert
    expect(resultado).toEqual(true);
  });

  it("Error: Número de tarjeta no es un número", () => {
    // Arrange
    const cadena: string = "abalkajdañlkdjseo";

    // Act
    const resultado = () => esValidaLaTarjetaMasterCard(cadena);

    // Assert
    expect(resultado).toThrowError("El número de tarjeta no es válido");
  });
  it("Error: No tiene 16 números", () => {
    // Arrange
    const cadena: string = "1234567890";

    // Act
    const resultado = () => esValidaLaTarjetaMasterCard(cadena);

    // Assert
    expect(resultado).toThrowError("El número de tarjeta no es válido");
  });
  it.each([
    ["5506927427317625", true],
    ["5553042241984105", true],
    ["5555553753048194", true],
    ["5506927627317626", false],
    ["5525553753048195", false],
  ])(
    "Si la entrada es %s debería devolver %s",
    (numeroTarjeta: string, valorEsperado: boolean) => {
      // Act
      const resultado = esValidaLaTarjetaMasterCard(numeroTarjeta);

      // Assert
      expect(resultado).toBe(valorEsperado);
    }
  );
});
