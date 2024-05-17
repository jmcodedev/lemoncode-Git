import {
  calculaFlag,
  eliminaUltimoDigito,
  multiplicaPorDosSaltandoUno,
  obtenerUltimoDigito,
  sumaDecenasUnidadesColecccion,
  sumaDigitos,
} from "./master-card.helper";

interface TarjetaMasterCard {
  numeroTarjetaSC: string;
  ultimoDigito: number;
}

const separaDigitoDeControl = (numeroTarjeta: string): TarjetaMasterCard => ({
  numeroTarjetaSC: eliminaUltimoDigito(numeroTarjeta),
  ultimoDigito: obtenerUltimoDigito(numeroTarjeta),
});

const formatoValido = (numeroTarjeta: string): boolean => {
  return (
    !isNaN(parseInt(numeroTarjeta)) &&
    numeroTarjeta.length === 16 &&
    !numeroTarjeta
  );
};

const calculaFlagValidacion = (masterCardSinDigitoControl: string): number => {
  const masterCardMultiplicadaPorDos = multiplicaPorDosSaltandoUno(
    masterCardSinDigitoControl
  );
  const masterCardSumaDecenasUnidades = sumaDecenasUnidadesColecccion(
    masterCardMultiplicadaPorDos
  );
  const masterCardDigitosSumados = sumaDigitos(masterCardSumaDecenasUnidades);

  return calculaFlag(masterCardDigitosSumados);
};

export const esValidaLaTarjetaMasterCard = (numeroTarjeta: string): boolean => {
  if (formatoValido(numeroTarjeta)) {
    throw new Error("El número de tarjeta no es válido");
  } else {
    const { numeroTarjetaSC, ultimoDigito } =
      separaDigitoDeControl(numeroTarjeta);

    const flagControlCalculado = calculaFlagValidacion(numeroTarjetaSC);
    return flagControlCalculado === ultimoDigito;
  }
};
