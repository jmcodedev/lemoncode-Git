import { Cambio } from "./model";

interface Resultado {
  cuantos: number;
  restoCantidad: number;
}

export const calcularEntrada = (
  cantidad: number,
  billeteMoneda: number
): Resultado => {
  if (cantidad === 0 || billeteMoneda === 0) {
    throw new Error("Las entradas no pueden ser 0");
  }
  if (!cantidad || !billeteMoneda) {
    throw new Error("Las entradas no pueden ser null o undefined");
  }

  const cuantos = Math.floor(cantidad / billeteMoneda);
  const restoCantidad = cantidad % billeteMoneda;
  return { cuantos, restoCantidad };
};
