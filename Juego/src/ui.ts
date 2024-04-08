// IMPORTS
import "./style.css";
import {
  sonPareja,
  comprobarCarta,
  esPartidaCompleta,
  iniciaPartida,
} from "./motor";
import { tablero, cartas, Tablero, Carta } from "./model";

// DECLARACIÓN DE CONSTANTES

const elementoIniciarPartida = document.getElementById("empezarPartida");
const elementoDivCartas = document.querySelectorAll(".grid-item");

// FUNCIONES

const cambiarSrc = (
  tablero: Tablero,
  indice: number,
  imgRecibida: HTMLImageElement
): void => {
  imgRecibida.src = tablero.cartas[indice].imagen;
};

// TRIGGERS

if (
  elementoIniciarPartida &&
  elementoIniciarPartida instanceof HTMLButtonElement
) {
  elementoIniciarPartida.addEventListener("click", () => {
    iniciaPartida(tablero);
  });
}

elementoDivCartas.forEach((gridItem, index) => {
  gridItem.addEventListener("click", () => {
    const image = gridItem.querySelector("img");

    if (
      image &&
      image instanceof HTMLImageElement &&
      comprobarCarta(tablero, index)
    ) {
      cambiarSrc(tablero, index, image);
    }
  });
});
