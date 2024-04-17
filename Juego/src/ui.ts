// IMPORTS
import "./style.css";
import { comprobarCarta, iniciaPartida, sonPareja } from "./motor";
import { tablero, Tablero } from "./model";

// DECLARACIÓN DE VARIABLES

const elementoIniciarPartida = document.getElementById("empezarPartida");
const elementoDivCartas = document.querySelectorAll(".grid-item");
let primeraCarta: number | null = null;

// FUNCIONES

const cambiarSrc = (
  tablero: Tablero,
  indice: number,
  imgRecibida: HTMLImageElement,
  voltear: boolean,
  segundaCarta?: HTMLImageElement
): void => {
  if (voltear) {
    imgRecibida.src = tablero.cartas[indice].imagen;
    imgRecibida.style.display = "block";
  } else {
    setTimeout(() => {
      imgRecibida.src = "";
      if (segundaCarta) {
        segundaCarta.src = "";
      }
    }, 1000);
  }
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

elementoDivCartas.forEach((gridItem, index) => {
  gridItem.addEventListener("click", () => {
    const image = gridItem.querySelector("img");

    if (
      image &&
      image instanceof HTMLImageElement &&
      comprobarCarta(tablero, index)
    ) {
      primeraCarta = primeraCarta ? null : index;
      cambiarSrc(tablero, index, image, true);

      if (!primeraCarta) {
        sonPareja(primeraCarta?, index, tablero)
      }
    }
  });
});
