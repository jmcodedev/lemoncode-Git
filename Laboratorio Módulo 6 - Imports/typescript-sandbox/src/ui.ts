import "./style.css";
import {
  generarMensaje,
  estadoPartida,
  generarNumeroCarta,
  sumarPuntuacion,
} from "./motor";
import { Estado, partida, generarUrlCarta } from "./modelo";

// Se obtienen los botones del DOM
const elementoPedir = document.getElementById("pedirCarta");
const elementoMePlanto = document.getElementById("mePlanto");
const elementoMostrarFuturo = document.getElementById("mostrarFuturo");
const elementoNuevaPartida = document.getElementById("nuevaPartida");
// Función para interactuar con el DOM y mostrar la carta generada.
// Obtiene: URL de la carta y el estado de la partida.
export const mostrarCarta = (urlCarta: string, estadoPartida: Estado): void => {
  const elementoCartaBocaAbajo = document.getElementById("cartaBocaAbajo");

  // En caso de que el estado obtenido sea "ME_PLANTO" mostrará la carta con baja opacidad para que el usuario
  // sepa que es lo que hubiera pasado si se hubieran pedido más cartas.

  if (
    estadoPartida === "ME_PLANTO" &&
    elementoCartaBocaAbajo &&
    elementoCartaBocaAbajo instanceof HTMLImageElement
  ) {
    elementoCartaBocaAbajo.src = urlCarta;
    elementoCartaBocaAbajo.style.opacity = "50%";
  }

  // En caso de que el estado no sea "ME_PLANTO" se muestra la carta nueva en nuestro mazo personal
  else {
    const nuevaCarta = document.createElement("img");
    nuevaCarta.src = urlCarta;
    nuevaCarta.classList.add("miMazo");
    const misCartas = document.getElementById("misCartas");
    if (misCartas && misCartas instanceof HTMLDivElement) {
      misCartas.appendChild(nuevaCarta);
    }
  }
};

// Función para interactuar con los botones del DOM y permitir únicamente que se pulse el botón "¿Que habría pasado?" y "Nueva partida"
export const gestionarGameOver = (): void => {
  const elementoPedirCarta = document.getElementById("pedirCarta");
  const elementoGOMePlanto = document.getElementById("mePlanto");
  const elementoFuturo = document.getElementById("mostrarFuturo");

  if (
    elementoFuturo &&
    elementoFuturo instanceof HTMLButtonElement &&
    elementoGOMePlanto &&
    elementoGOMePlanto instanceof HTMLButtonElement &&
    elementoPedirCarta &&
    elementoPedirCarta instanceof HTMLButtonElement
  ) {
    elementoFuturo.disabled = false;
    elementoPedirCarta.disabled = true;
    elementoGOMePlanto.disabled = true;
  }
};

// Funcion que interactua con el DOM para mostrar el mensaje generado.
export const mostrarMensaje = (mensaje: string): void => {
  const elementoMensaje = document.getElementById("mensaje");
  if (
    elementoMensaje !== null &&
    elementoMensaje !== undefined &&
    elementoMensaje instanceof HTMLDivElement
  ) {
    elementoMensaje.innerHTML = mensaje;
  }
};

// Función que interactua con el DOM para mostrar la puntuación actual.
export const mostrarPuntuacion = (puntos: number): void => {
  const elementoPuntuacion = document.getElementById("puntuacionTotal");

  if (
    elementoPuntuacion !== null &&
    elementoPuntuacion !== undefined &&
    elementoPuntuacion instanceof HTMLDivElement
  ) {
    elementoPuntuacion.innerHTML = `Puntuación actual: ${puntos}`;
  }
};
// Función que elimina todos los elementos del div "misCartas" y deja la puntuación a 0
// También devuelve los botones a su estado original.
export const nuevaPartida = () => {
  const elementoMisCartas = document.getElementById("misCartas");
  const elementoBtnPedir = document.getElementById("pedirCarta");
  const elementoBtnMePlanto = document.getElementById("mePlanto");
  const elementoBtnFuturo = document.getElementById("mostrarFuturo");
  const elementoMazo = document.getElementById("cartaBocaAbajo");

  if (
    elementoMisCartas &&
    elementoMisCartas instanceof HTMLDivElement &&
    elementoBtnMePlanto &&
    elementoBtnMePlanto instanceof HTMLButtonElement &&
    elementoBtnPedir &&
    elementoBtnPedir instanceof HTMLButtonElement &&
    elementoBtnFuturo &&
    elementoBtnFuturo instanceof HTMLButtonElement &&
    elementoMazo &&
    elementoMazo instanceof HTMLImageElement
  ) {
    elementoBtnMePlanto.disabled = false;
    elementoBtnPedir.disabled = false;
    elementoBtnFuturo.disabled = true;
    elementoMazo.src =
      "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg";
    elementoMazo.style.opacity = "100%";
    while (elementoMisCartas.firstChild) {
      elementoMisCartas.removeChild(elementoMisCartas.firstChild);
    }
  }
  partida.puntuacionActual = 0;
};

// Función que ejecutará el botón "Me planto"
export const handlePlanto = () => {
  if (
    elementoPedir &&
    elementoPedir instanceof HTMLButtonElement &&
    elementoMostrarFuturo &&
    elementoMostrarFuturo instanceof HTMLButtonElement
  ) {
    elementoPedir.disabled = true;
    elementoMostrarFuturo.disabled = false;
  }
  const mensajePlanto: string = generarMensaje(
    partida.puntuacionActual,
    "ME_PLANTO"
  );
  mostrarMensaje(mensajePlanto);
};

// Función que ejecutará el botón "¿Que habría pasado?"
export const handleFuturo = () => {
  const futuroNumCarta: number = generarNumeroCarta();
  const urlFuturaCarta = generarUrlCarta(futuroNumCarta);
  mostrarCarta(urlFuturaCarta, "ME_PLANTO");
  partida.puntuacionActual = sumarPuntuacion(
    futuroNumCarta,
    partida.puntuacionActual
  );
  mostrarPuntuacion(partida.puntuacionActual);
};
// Función que ejecutará el botón "Nueva partida"
export const handleNuevaPartida = () => {
  nuevaPartida();
  mostrarPuntuacion(0);
  mostrarMensaje("");
};

// Función que ejecutará el botón "Pedir carta"
const handlePedir = () => {
  const numeroCarta: number = generarNumeroCarta();
  const urlNuevaCarta = generarUrlCarta(numeroCarta);
  mostrarCarta(urlNuevaCarta, "PUEDE_CONTINUAR");
  partida.puntuacionActual = sumarPuntuacion(
    numeroCarta,
    partida.puntuacionActual
  );
  mostrarPuntuacion(partida.puntuacionActual);
  const estado = estadoPartida(partida.puntuacionActual);

  if (estado === "GAME_OVER" || estado === "HA_GANADO") {
    gestionarGameOver();
  }

  const mensaje: string = generarMensaje(partida.puntuacionActual, estado);
  mostrarMensaje(mensaje);
};

// Aseguramos que los botones existen y son instancias de HTMLButtonElement
if (
  elementoMostrarFuturo &&
  elementoMostrarFuturo instanceof HTMLButtonElement
) {
  elementoMostrarFuturo.addEventListener("click", handleFuturo);
}

if (elementoPedir && elementoPedir instanceof HTMLButtonElement) {
  elementoPedir.addEventListener("click", handlePedir);
}

if (elementoMePlanto && elementoMePlanto instanceof HTMLButtonElement) {
  elementoMePlanto.addEventListener("click", handlePlanto);
}

if (elementoNuevaPartida && elementoNuevaPartida instanceof HTMLButtonElement) {
  elementoNuevaPartida.addEventListener("click", handleNuevaPartida);
}
