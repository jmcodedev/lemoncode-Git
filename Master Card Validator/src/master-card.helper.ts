/*
 * @param {string} numeroTarjeta
 * @returns {string}
 */
export const eliminaUltimoDigito = (numeroTarjeta: string): string => {
  if (numeroTarjeta === undefined || numeroTarjeta === null) {
    throw new Error("numeros no puede ser undefined o null");
  }

  if (numeroTarjeta === "") {
    throw new Error("la cadena no puede estar vacía");
  }
  return numeroTarjeta.slice(0, numeroTarjeta.length - 1);
};

export const obtenerUltimoDigito = (numeroTarjeta: string): number => {
  if (numeroTarjeta === undefined || numeroTarjeta === null) {
    throw new Error("numeros no puede ser undefined o null");
  }
  if (numeroTarjeta === "") {
    throw new Error("la cadena no puede estar vacía");
  }
  return parseInt(numeroTarjeta.slice(-1));
};

export const multiplicaPorDosSaltandoUno = (
  numeroTarjeta: string
): number[] => {
  if (numeroTarjeta === undefined || numeroTarjeta === null) {
    throw new Error("numeros no puede ser undefined o null");
  }
  if (numeroTarjeta === "") {
    throw new Error("la cadena no puede estar vacía");
  }
  let arrayResultado: number[] = [];
  let porDos: boolean = true;
  for (let i = numeroTarjeta.length - 1; i >= 0; i--) {
    const digito = porDos
      ? parseInt(numeroTarjeta[i]) * 2
      : parseInt(numeroTarjeta[i]);
    arrayResultado = [digito, ...arrayResultado];

    porDos = !porDos;
  }
  return arrayResultado;
};

export const sumaDecenasUnidades = (numero: number): number => {
  if (numero < 10) return numero;

  const unidades = numero % 10;
  const decenas = Math.floor(numero / 10);
  return unidades + decenas;
};

export const sumaDecenasUnidadesColecccion = (numeros: number[]): number[] => {
  if (!numeros) {
    throw new Error("numeros no puede ser undefined o null");
  }

  if (numeros.length === 0) {
    throw new Error("la cadena no puede estar vacía");
  }

  return numeros.map(sumaDecenasUnidades);
};

export const sumaDigitos = (numeros: number[]): number => {
  if (!numeros) {
    throw new Error("numeros no puede ser undefined o null");
  }
  if (numeros.length === 0) {
    throw new Error("la cadena no puede estar vacía");
  }
  return numeros.reduce((acc, num) => acc + num, 0);
};

export const calculaFlag = (numero: number): number => {
  if (!numero) {
    throw new Error("numero no puede ser undefined o null");
  }
  if (numero < 0) {
    throw new Error("numero no puede ser negativo");
  }
  return 10 - (numero % 10);
};
