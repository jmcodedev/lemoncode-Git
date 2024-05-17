import { calcularEntrada } from "./cambio.helper";

describe("calcularEntrada", () => {
  it("Error: Devuelve error si alguna de las entradas es null", () => {
    // Arrange
    const cantidad: any = null;
    const billeteMoneda: any = null;

    // Act
    const resultado = () => calcularEntrada(cantidad, billeteMoneda);

    // Assert
    expect(resultado).toThrowError(
      "Las entradas no pueden ser null o undefined"
    );
  });

  it("Error: Devuelve error si alguna de las entradas es undefined", () => {
    // Arrange
    const cantidad: any = undefined;
    const billeteMoneda: any = undefined;

    // Act
    const resultado = () => calcularEntrada(cantidad, billeteMoneda);

    // Assert
    expect(resultado).toThrowError(
      "Las entradas no pueden ser null o undefined"
    );
  });
  it("Error: Devuelve error si alguna de las entradas es 0", () => {
    // Arrange
    const cantidad: number = 0;
    const billeteMoneda: number = 0;

    // Act
    const resultado = () => calcularEntrada(cantidad, billeteMoneda);

    // Assert
    expect(resultado).toThrowError("Las entradas no pueden ser 0");
  });

  it("Devolver 2.5, billete 50 --> {cuantos: 0, restoCantidad: 2.5}", () => {
    // Arrange
    const cantidad: number = 2.5;
    const billeteMoneda: number = 50;

    // Act
    const resultado = calcularEntrada(cantidad, billeteMoneda);

    // Assert
    expect(resultado).toEqual({ cuantos: 0, restoCantidad: 2.5 });
  });
  it("Devolver 7.25, billete 5 --> {cuantos: 1, restoCantidad: 2.25}", () => {
    // Arrange
    const cantidad: number = 7.25;
    const billeteMoneda: number = 5;

    // Act
    const resultado = calcularEntrada(cantidad, billeteMoneda);

    // Assert
    expect(resultado).toEqual({ cuantos: 1, restoCantidad: 2.25 });
  });
  it("Devolver 2.5, billete 2 --> {cuantos: 1, restoCantidad: 0.5}", () => {
    // Arrange
    const cantidad: number = 2.5;
    const billeteMoneda: number = 2;

    // Act
    const resultado = calcularEntrada(cantidad, billeteMoneda);

    // Assert
    expect(resultado).toEqual({ cuantos: 1, restoCantidad: 0.5 });
  });
});
