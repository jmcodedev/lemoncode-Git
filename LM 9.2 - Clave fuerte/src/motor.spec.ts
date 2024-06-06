import {
  tieneCaracteresESpeciales,
  tieneLongitudMinima,
  tieneMayusculasYMinsculas,
  tieneNombreUsuario,
  tieneNumeros,
} from "./motor";

describe("tieneMayusculasYMinsculas", () => {
  it.each([
    ["ClaveFuerte", true],
    ["clavefuerte", false],
    ["CLAVEFUERTE", false],
  ])(
    "debería devolver %s si la clave tiene o no mayúsculas y minúsculas",
    (clave, expected) => {
      // Act
      const resultado = tieneMayusculasYMinsculas(clave);

      // Assert
      expect(resultado).toBe(expected);
    }
  );
});

describe("tieneNumeros", () => {
  it.each([
    ["ClaveFuerte123", true],
    ["clavefuerte", false],
    ["CLAVEFUERTE", false],
  ])(
    "debería devolver %s si la clave tiene o no números",
    (clave, expected) => {
      // Act
      const resultado = tieneNumeros(clave);

      // Assert
      expect(resultado).toBe(expected);
    }
  );
});

describe("tieneCaracteresESpeciales", () => {
  it.each([
    ["ClaveFuerte123!", true],
    ["clavefuerte", false],
    ["CLAVEFUERTE", false],
  ])(
    "debería devolver %s si la clave tiene o no caracteres especiales",
    (clave, expected) => {
      // Act
      const resultado = tieneCaracteresESpeciales(clave);

      // Assert
      expect(resultado).toBe(expected);
    }
  );
});

describe("tieneLongitudMinima", () => {
  it.each([
    ["ClaveFuerte123!", true],
    ["clavefuerte", false],
    ["CLAVEFUERTE", false],
  ])(
    "debería devolver %s si la clave tiene o no longitud mínima",
    (clave, expected) => {
      // Act
      const resultado = tieneLongitudMinima(clave);

      // Assert
      expect(resultado).toBe(expected);
    }
  );
});

describe("tieneNombreUsuario", () => {
  it.each([
    ["usuario", "usuario", true],
    ["usuario", "clavefuerte", false],
  ])(
    "debería devolver %s si la clave contiene o no el nombre de usuario",
    (nombreUsuario, clave, expected) => {
      // Act
      const resultado = tieneNombreUsuario(nombreUsuario, clave);

      // Assert
      expect(resultado).toBe(expected);
    }
  );
});
