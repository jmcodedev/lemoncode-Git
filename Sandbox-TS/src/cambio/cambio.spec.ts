import { calcularCambio } from "./cambio";
import { Cambio } from "./model";

describe("calcularCambio", () => {
  it("Error: Devuelve error si alguna de las entradas es null", () => {
    // Arrange
    const compra: any = null;
    const pago: any = null;

    // Act
    const resultado = () => calcularCambio(compra, pago);

    // Assert
    expect(resultado).toThrowError(
      "Las entradas no pueden ser null o undefined"
    );
  });
  it("Error: Devuelve error si alguna de las entradas es undefined", () => {
    // Arrange
    const compra: any = undefined;
    const pago: any = undefined;

    // Act
    const resultado = () => calcularCambio(compra, pago);

    // Assert
    expect(resultado).toThrowError(
      "Las entradas no pueden ser null o undefined"
    );
  });
  it("Error: Devuelve error si alguna de las entradas es 0", () => {
    // Arrange
    const compra: number = 0;
    const pago: number = 0;

    // Act
    const resultado = () => calcularCambio(compra, pago);

    // Assert
    expect(resultado).toThrowError("Las entradas no pueden ser 0");
  });
  it("2.5€, usuario paga 50€ --> devolución [20€ x2, 5€ x1, 2€ x1, 0.5€ x1]", () => {
    // Arrange
    const compra: number = 2.5;
    const pago: number = 50;

    // Act
    const resultado = calcularCambio(compra, pago);

    // Assert
    const expected: Cambio[] = [
      { moneda: 20, cuantos: 2 },
      { moneda: 5, cuantos: 1 },
      { moneda: 2, cuantos: 1 },
      { moneda: 0.5, cuantos: 1 },
    ];

    expect(resultado).toEqual(expected);
  });
  it("4.82€, usuario paga 5.32€ --> devolución [0.5€ x1]", () => {
    // Arrange
    const compra: number = 4.82;
    const pago: number = 5.32;

    // Act
    const resultado = calcularCambio(compra, pago);

    // Assert
    const expected: Cambio[] = [{ moneda: 0.5, cuantos: 1 }];

    expect(resultado).toEqual(expected);
  });
  it("2€, usuario paga 6€ --> devolución [2€ x2]", () => {
    // Arrange
    const compra: number = 2;
    const pago: number = 6;

    // Act
    const resultado = calcularCambio(compra, pago);

    // Assert
    const expected: Cambio[] = [{ moneda: 2, cuantos: 2 }];

    expect(resultado).toEqual(expected);
  });
});
