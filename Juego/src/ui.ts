// IMPORTS
import "./style.css";
import { comprobarCarta, iniciaPartida, sonPareja } from "./motor";
import { tablero, Tablero } from "./model";

// DECLARACIÓN DE VARIABLES

const elementoIniciarPartida = document.getElementById("empezarPartida");
const elementoDivCartas = document.querySelectorAll(".grid-item");

// FUNCIONES

const cambiarSrc = (
  tablero: Tablero,
  indice: number,
  carta: HTMLImageElement
): void => {
  carta.src = tablero.cartas[indice].imagen;
  carta.style.display = "block";
};

const girarAbajo = (
  carta1: HTMLImageElement,
  carta2: HTMLImageElement
): void => {
  carta1.src = "";
  carta2.src = "";
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

let elementoPrimeraCarta: HTMLImageElement | null = null;

elementoDivCartas.forEach((gridItem, index) => {
  gridItem.addEventListener("click", () => {
    const image = gridItem.querySelector("img");

    if (
      image &&
      image instanceof HTMLImageElement &&
      comprobarCarta(tablero, index)
    ) {
      cambiarSrc(tablero, index, image);
      console.log(elementoPrimeraCarta);
      console.log(image);
      if (
        tablero.estadoPartida === "DosCartasLevantadas" &&
        tablero.indiceCartaVolteadaA &&
        tablero.indiceCartaVolteadaB
      ) {
        if (
          !sonPareja(
            tablero.cartas[tablero.indiceCartaVolteadaA].idFoto,
            tablero.cartas[tablero.indiceCartaVolteadaB].idFoto,
            tablero
          ) &&
          elementoPrimeraCarta
        ) {
          girarAbajo(elementoPrimeraCarta, image);
        }
      }
    }
  });
});
