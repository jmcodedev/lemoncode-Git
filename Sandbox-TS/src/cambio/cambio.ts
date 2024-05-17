import { Cambio } from "./model";
import { calcularEntrada } from "./cambio.helper";

const arrayBilletesMonedas: number[] = [
  50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01,
];

export const calcularCambio = (compra: number, pago: number): Cambio[] => {
  if (compra === 0 || pago === 0) {
    throw new Error("Las entradas no pueden ser 0");
  }
  if (!compra || !pago) {
    throw new Error("Las entradas no pueden ser null o undefined");
  }

  let cambioRestante = pago - compra;

  let resultado: Cambio[] = arrayBilletesMonedas.reduce(
    (acc :Cambio[], billeteMoneda: number) => {
      if (cambioRestante === 0) {
        return acc;
      }

      const { cuantos, restoCantidad } = calcularEntrada(cambioRestante, billeteMoneda);

      cambioRestante = restoCantidad;

      return cuantos > 0 ? [...acc, { moneda: billeteMoneda, cuantos }] : acc;
    }, []);

  // for (let i = 0; i < arrayBilletesMonedas.length; i++) {
  //   const billeteMoneda = arrayBilletesMonedas[i];
  //   const { cuantos, restoCantidad } = calcularEntrada(
  //     cambioRestante,
  //     billeteMoneda
  //   );

  //   if (cuantos > 0) {
  //     resultado = [...resultado, { moneda: billeteMoneda, cuantos }];
  //     cambioRestante = restoCantidad;
  //   }

  //   if (cambioRestante === 0) {
  //     break;
  //   }
  // }
  return resultado;
};
