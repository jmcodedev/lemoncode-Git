// IMPORTS
import "./style.css";
import {
  comprobarCarta,
  esPartidaCompleta,
  iniciaPartida,
  sonPareja,
} from "./motor";
import { tablero, Tablero } from "./model";

// DECLARACIÓN DE VARIABLES

const elementoIniciarPartida = document.getElementById("empezarPartida");
const elementoDivCartas = document.querySelectorAll(".grid-item");
let primeraCarta: HTMLDivElement | null = null;
let segundaCarta: HTMLDivElement | null = null;

// FUNCIONES

const voltearCarta = (
  carta: HTMLDivElement,
  tablero: Tablero,
  indice: number
): void => {
  const img = carta.querySelector("img");
  if (img) {
    img.src = tablero.cartas[indice].imagen;
  }
};

const bajarCartas = (carta1: HTMLDivElement, carta2: HTMLDivElement) => {
  const img1 = carta1.querySelector("img");
  const img2 = carta2.querySelector("img");
  setTimeout(() => {
    if (img1 && img2) {
      img1.src = "";
      img2.src = "";
    }
  }, 1000);
};

// TRIGGERS

if (
  elementoIniciarPartida &&
  elementoIniciarPartida instanceof HTMLButtonElement
) {
  elementoIniciarPartida.addEventListener("click", () => {
    iniciaPartida(tablero);
    elementoDivCartas.forEach((cartaDiv) => {
      if (cartaDiv && cartaDiv instanceof HTMLDivElement) {
        cartaDiv.style.backgroundColor = "#aee2ff";
        cartaDiv.style.pointerEvents = "auto";
      }
    });
  });
}

elementoDivCartas.forEach((carta, indice) => {
  carta.addEventListener("click", () => {
    if (comprobarCarta(tablero, indice)) {
      if (!primeraCarta) {
        primeraCarta = carta as HTMLDivElement;
        voltearCarta(primeraCarta, tablero, indice);
      } else if (!segundaCarta) {
        segundaCarta = carta as HTMLDivElement;
        voltearCarta(segundaCarta, tablero, indice);

        if (
          tablero.indiceCartaVolteadaA !== undefined &&
          tablero.indiceCartaVolteadaB !== undefined
        ) {
          if (
            sonPareja(
              tablero.cartas[tablero.indiceCartaVolteadaA].idFoto,
              tablero.cartas[tablero.indiceCartaVolteadaB].idFoto,
              tablero
            )
          ) {
            if (esPartidaCompleta(tablero)) {
              console.log("PARTIDA FINALIZADA");
              tablero.estadoPartida = "PartidaCompleta";
            }
          } else if (primeraCarta && segundaCarta) {
            bajarCartas(primeraCarta, segundaCarta);
          }
        }

        primeraCarta = null;
        segundaCarta = null;
      }
    } else {
      console.log(tablero);
      console.log("No se puede levantar");
    }
  });
});
