import { Tablero, Carta, cartas } from "./model";

// TODO : tablero.indiceCartaVolteadaX está guardando la posición del array de divs.
// ! CORREGIR

const barajarCartas = (cartas: Carta[]): Carta[] => {
  for (let i = cartas.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [cartas[i], cartas[j]] = [cartas[j], cartas[i]];
  }

  return cartas;
};

const sePuedeVoltearLaCarta = (tablero: Tablero, indice: number): boolean => {
  if (
    !tablero.cartas[indice].encontrada &&
    !tablero.cartas[indice].estaVuelta &&
    (tablero.indiceCartaVolteadaA === undefined ||
      tablero.indiceCartaVolteadaB === undefined)
  ) {
    voltearCarta(tablero, indice);
    return true;
  } else {
    return false;
  }
};

const voltearCarta = (tablero: Tablero, indice: number): void => {
  tablero.cartas[indice].estaVuelta = true;
  if (tablero.estadoPartida === "CeroCartasLevantadas") {
    tablero.indiceCartaVolteadaA = indice;
    tablero.estadoPartida = "UnaCartaLevantada";
  } else if (tablero.estadoPartida === "UnaCartaLevantada") {
    tablero.indiceCartaVolteadaB = indice;
    tablero.estadoPartida = "DosCartasLevantadas";
  }
  console.log(tablero.estadoPartida);
  console.log(tablero.cartas);
};

export const sonPareja = (
  indiceA: number,
  indiceB: number,
  tablero: Tablero
): boolean => {
  if (indiceA === indiceB) {
    parejaEncontrada(tablero, indiceA, indiceB);
    return true;
  } else {
    parejaNoEncontrada(tablero, indiceA, indiceB);
    return false;
  }
};

const parejaEncontrada = (
  tablero: Tablero,
  indiceA: number,
  indiceB: number
): void => {
  tablero.cartas[indiceA].encontrada = true;
  tablero.cartas[indiceB].encontrada = true;
  tablero.estadoPartida = "CeroCartasLevantadas";
  tablero.indiceCartaVolteadaA = undefined;
  tablero.indiceCartaVolteadaB = undefined;
};

const parejaNoEncontrada = (
  tablero: Tablero,
  indiceA: number,
  indiceB: number
): void => {
  tablero.estadoPartida = "CeroCartasLevantadas";
  tablero.cartas[indiceA].estaVuelta = false;
  tablero.cartas[indiceB].estaVuelta = false;
  tablero.indiceCartaVolteadaA = undefined;
  tablero.indiceCartaVolteadaB = undefined;
};

export const esPartidaCompleta = (tablero: Tablero): boolean =>
  tablero.cartas.every((cartas) => cartas.encontrada);

export const iniciaPartida = (tablero: Tablero): void => {
  tablero.estadoPartida = "CeroCartasLevantadas";
  tablero.cartas = barajarCartas(cartas);
};

export const comprobarCarta = (tablero: Tablero, indice: number): boolean => {
  return sePuedeVoltearLaCarta(tablero, indice);
};
