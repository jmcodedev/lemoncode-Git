import { estadoPartida } from "./motor";
import { Estado } from "./modelo";

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
});
