import { estadoPartida, generarNumeroCarta } from "./motor";
import { Estado } from "./modelo";
import { describe, expect, it } from "vitest";

describe("estadoPartida", () => {
  it("Debería devolver HA_GANADO cuando puntos es 7.5", () => {
    // Arrange
    const resultadoEsperado: Estado = "HA_GANADO";
    const puntos: number = 7.5;

    // Act
    const resultado: Estado = estadoPartida(puntos);

    // Assert

    expect(resultado).toBe(resultadoEsperado);
  });
  it("Debería devolver PUEDE_CONTINUAR cuando puntos es menor de 7.5", () => {
    // Arrange
    const resultadoEsperado: Estado = "PUEDE_CONTINUAR";
    const puntos: number = 5;

    // Act
    const resultado: Estado = estadoPartida(puntos);

    // Assert

    expect(resultado).toBe(resultadoEsperado);
  });
  it("Debería devolver GAME_OVER cuando puntos es mayor de 7.5", () => {
    // Arrange
    const resultadoEsperado: Estado = "GAME_OVER";
    const puntos: number = 10;

    // Act
    const resultado: Estado = estadoPartida(puntos);

    // Assert

    expect(resultado).toBe(resultadoEsperado);
  });
});

describe("generarNumeroCarta", () => {
  it("Debería devolver 10 al introducir 8 por parámetros a la función generarNumeroCarta", () => {
    // Arrange

    const numeroCarta: number = 8;
    const resultadoEsperado: number = 10;

    // Act

    const resultado: number = generarNumeroCarta(numeroCarta);

    // Assert

    expect(resultado).toBe(resultadoEsperado);
  });
  it("Debería devolver 10 al introducir 9 por parámetros a la función generarNumeroCarta", () => {
    // Arrange

    const numeroCarta: number = 9;
    const resultadoEsperado: number = 10;

    // Act

    const resultado: number = generarNumeroCarta(numeroCarta);

    // Assert

    expect(resultado).toBe(resultadoEsperado);
  });
});
