import {
  calculaFlag,
  eliminaUltimoDigito,
  multiplicaPorDosSaltandoUno,
  obtenerUltimoDigito,
  sumaDecenasUnidades,
  sumaDecenasUnidadesColecccion,
  sumaDigitos,
} from "./master-card.helper";
describe("eliminaUltimoDigito", () => {
  it("debe lanzar error si el argumento es undefined", () => {
    // Arrange
    const cadena: any = undefined;

    // Act
    const result = () => eliminaUltimoDigito(cadena);

    // Assert
    expect(result).toThrowError("numeros no puede ser undefined o null");
  });
  it("debe lanzar un error si el argumento es null", () => {
    // Arrange
    const cadena: any = null;

    // Act
    const result = () => eliminaUltimoDigito(cadena);

    // Assert
    expect(result).toThrowError("numeros no puede ser undefined o null");
  });

  it("debe lanzar un error si el string está vacío", () => {
    // Arrange
    const cadena: string = "";

    // Act
    const result = () => eliminaUltimoDigito(cadena);

    // Assert
    expect(result).toThrowError("la cadena no puede estar vacía");
  });
  it("debe devolver un string sin el último dígito", () => {
    // Arrange
    const cadena: string = "12345674";

    // Act
    const result = eliminaUltimoDigito(cadena);

    // Assert
    expect(result).toEqual("1234567");
  });
});
describe("obtenerUltimoDigito", () => {
  it("debería lanzar un error si el argumento es undefined", () => {
    // Arrange
    const cadena: any = undefined;

    // Act
    const result = () => obtenerUltimoDigito(cadena);

    // Assert
    expect(result).toThrowError("numeros no puede ser undefined o null");
  });
  it("debería lanzar un error si el argumento es null", () => {
    // Arrange
    const cadena: any = null;

    // Act
    const result = () => obtenerUltimoDigito(cadena);

    // Assert
    expect(result).toThrowError("numeros no puede ser undefined o null");
  });

  it("debería lanzar un error si el string está vacío", () => {
    // Arrange
    const cadena: string = "";

    // Act
    const result = () => obtenerUltimoDigito(cadena);

    // Assert
    expect(result).toThrowError("la cadena no puede estar vacía");
  });

  it("debería devolver el último dígito de un string", () => {
    // Arrange
    const cadena: string = "12345674";

    // Act
    const result = obtenerUltimoDigito(cadena);

    // Assert
    expect(result).toEqual(4);
  });
});

describe("multiplicaPorDosSaltandoUno", () => {
  it("debería lanzar un error si el argumento es undefined", () => {
    // Arrange
    const cadena: any = undefined;

    // Act
    const result = () => multiplicaPorDosSaltandoUno(cadena);

    // Assert
    expect(result).toThrowError("numeros no puede ser undefined o null");
  });
  it("debería lanzar un error si el argumento es null", () => {
    // Arrange
    const cadena: any = null;

    // Act
    const result = () => multiplicaPorDosSaltandoUno(cadena);

    // Assert
    expect(result).toThrowError("numeros no puede ser undefined o null");
  });
  it("debería lanzar un error si el string está vacío", () => {
    // Arrange
    const cadena: string = "";

    // Act
    const result = () => multiplicaPorDosSaltandoUno(cadena);

    // Assert
    expect(result).toThrowError("la cadena no puede estar vacía");
  });

  it("debería devolver un string con los dígitos multiplicados por 2", () => {
    // Arrange
    const cadena: string = "123456789";

    // Act
    const result = multiplicaPorDosSaltandoUno(cadena);

    // Assert
    expect(result).toEqual([2, 2, 6, 4, 10, 6, 14, 8, 18]);
  });

  it("debería devolver un string con los dígitos multiplicados por 2", () => {
    // Arrange
    const cadena: string = "1234";

    // Act
    const result = multiplicaPorDosSaltandoUno(cadena);

    // Assert
    expect(result).toEqual([1, 4, 3, 8]);
  });
});

describe("sumaDecenasUnidadesColecccion", () => {
  it("Debería lanzar un error si el argumento es undefined", () => {
    // Arrange
    const numeros: any = undefined;

    // Act
    const result = () => sumaDecenasUnidadesColecccion(numeros);

    // Assert
    expect(result).toThrowError("numeros no puede ser undefined o null");
  });

  it("Debería lanzar un error si el argumento es null", () => {
    // Arrange
    const numeros: any = null;

    // Act
    const result = () => sumaDecenasUnidadesColecccion(numeros);

    // Assert
    expect(result).toThrowError("numeros no puede ser undefined o null");
  });

  it("Debería lanzar un error si el array está vacío", () => {
    // Arrange
    const numeros: number[] = [];

    // Act
    const result = () => sumaDecenasUnidadesColecccion(numeros);

    // Assert
    expect(result).toThrowError("la cadena no puede estar vacía");
  });

  it("Debería devolver un array con la suma de las decenas y unidades", () => {
    // Arrange
    const numeros: number[] = [1, 15, 25];

    // Act
    const result = sumaDecenasUnidadesColecccion(numeros);

    // Assert
    expect(result).toEqual([1, 6, 7]);
  });
  it("Debería devolver un array con la suma de las decenas y unidades", () => {
    // Arrange
    const coleccion: number[] = [1, 2, 18, 4, 5, 12, 7, 14, 9];

    // Act
    const result = sumaDecenasUnidadesColecccion(coleccion);

    // Assert
    expect(result).toEqual([1, 2, 9, 4, 5, 3, 7, 5, 9]);
  });
  it("Debería devolver un array con la suma de las decenas y unidades", () => {
    // Arrange
    const coleccion: number[] = [12, 25, 18, 4, 8, 1, 7, 4, 9];

    // Act
    const result = sumaDecenasUnidadesColecccion(coleccion);

    // Assert
    expect(result).toEqual([3, 7, 9, 4, 8, 1, 7, 4, 9]);
  });
});

describe("sumaDecenasUnidades", () => {
  it("Debería devolver el mismo número si es menor que 10", () => {
    // Arrange
    const numero: number = 5;

    // Act
    const result = sumaDecenasUnidades(numero);

    // Assert
    expect(result).toEqual(5);
  });
  it("Debería devolver 3 si se le pasa 12", () => {
    // Arrange
    const numero: number = 12;

    // Act
    const result = sumaDecenasUnidades(numero);

    // Assert
    expect(result).toEqual(3);
  });
  it("Debería devolver 8 si se le pasa 62", () => {
    // Arrange
    const numero: number = 62;

    // Act
    const result = sumaDecenasUnidades(numero);

    // Assert
    expect(result).toEqual(8);
  });
});

describe("sumaDigitos", () => {
  it("Debería lanzar un error si el argumento es undefined", () => {
    // Arrange
    const numeros: any = undefined;

    // Act
    const result = () => sumaDigitos(numeros);

    // Assert
    expect(result).toThrowError("numeros no puede ser undefined o null");
  });
  it("Debería lanzar un error si el argumento es null", () => {
    // Arrange
    const numeros: any = null;

    // Act
    const result = () => sumaDigitos(numeros);

    // Assert
    expect(result).toThrowError("numeros no puede ser undefined o null");
  });
  it("Debería lanzar un error si el array está vacío", () => {
    // Arrange
    const numeros: number[] = [];

    // Act
    const result = () => sumaDigitos(numeros);

    // Assert
    expect(result).toThrowError("la cadena no puede estar vacía");
  });
  it("Debería devolver la suma de los dígitos de un array", () => {
    // Arrange
    const numeros: number[] = [1, 2, 9, 4, 5, 3, 7, 5, 9];

    // Act
    const result = sumaDigitos(numeros);

    // Assert
    expect(result).toEqual(45);
  });
  it("Debería devolver la suma de los dígitos de un array", () => {
    // Arrange
    const numeros: number[] = [3, 7, 9, 4, 8, 1, 7, 4, 9];

    // Act
    const result = sumaDigitos(numeros);

    // Assert
    expect(result).toEqual(52);
  });
});

describe("calculaFlag", () => {
  it("Debería lanzar un error si el argumento es undefined", () => {
    // Arrange
    const numero: any = undefined;

    // Act
    const result = () => calculaFlag(numero);

    // Assert
    expect(result).toThrowError("numero no puede ser undefined o null");
  });
  it("Debería lanzar un error si el argumento es null", () => {
    // Arrange
    const numero: any = null;

    // Act
    const result = () => calculaFlag(numero);

    // Assert
    expect(result).toThrowError("numero no puede ser undefined o null");
  });

  it("Debería lanzar un error si el número es negativo", () => {
    // Arrange
    const numero: number = -1;

    // Act
    const result = () => calculaFlag(numero);

    // Assert
    expect(result).toThrowError("numero no puede ser negativo");
  });

  it("Debería devolver el flag de un número", () => {
    // Arrange
    const numero: number = 23;

    // Act
    const result = calculaFlag(numero);

    // Assert
    expect(result).toEqual(7);
  });
});
