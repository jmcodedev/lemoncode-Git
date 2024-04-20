import { Tablero, Carta, cartas } from "./model";

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
    (tablero.estadoPartida === "CeroCartasLevantadas" ||
      tablero.estadoPartida === "UnaCartaLevantada")
  ) {
    voltearCarta(tablero, indice);
    return true;
  } else {
    tablero.estadoPartida = "CeroCartasLevantadas";
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
};

export const sonPareja = (
  indiceA: number,
  indiceB: number,
  tablero: Tablero
): boolean => {
  if (indiceA === indiceB) {
    parejaEncontrada(tablero);
    return true;
  } else {
    parejaNoEncontrada(tablero);
    return false;
  }
};

const resetearCartas = (tablero: Tablero): void => {
  tablero.cartas.forEach((carta) => {
    if (!carta.encontrada) {
      carta.estaVuelta = false;
    }
  });
  tablero.indiceCartaVolteadaA = undefined;
  tablero.indiceCartaVolteadaB = undefined;
};

const parejaEncontrada = (tablero: Tablero): void => {
  if (tablero.indiceCartaVolteadaA && tablero.indiceCartaVolteadaB) {
    console.log("Son pareja");
    tablero.cartas[tablero.indiceCartaVolteadaA].encontrada = true;
    tablero.cartas[tablero.indiceCartaVolteadaB].encontrada = true;
    tablero.cartas[tablero.indiceCartaVolteadaA].estaVuelta = true;
    tablero.cartas[tablero.indiceCartaVolteadaB].estaVuelta = true;
    tablero.estadoPartida = "CeroCartasLevantadas";
  }
};

const parejaNoEncontrada = (tablero: Tablero): void => {
  if (tablero.indiceCartaVolteadaA && tablero.indiceCartaVolteadaB) {
    console.log("No son pareja");
    tablero.estadoPartida = "CeroCartasLevantadas";
    resetearCartas(tablero);
  }
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
