import "./style.css";
import {
  estadoPartida,
  generarNumeroCarta,
  sumarPuntuacion,
  puntuacionSumada,
  generarNumeroAleatorio,
} from "./motor";
import { Estado, partida, generarUrlCarta } from "./modelo";

// Se obtienen los botones del DOM
const elementoPedir = document.getElementById("pedirCarta");
const elementoMePlanto = document.getElementById("mePlanto");
const elementoMostrarFuturo = document.getElementById("mostrarFuturo");
const elementoNuevaPartida = document.getElementById("nuevaPartida");
const elementoCartaBocaAbajo = document.getElementById("cartaBocaAbajo");
const elementoMisCartas = document.getElementById("misCartas");
let mensaje = "";
// Función para interactuar con el DOM y mostrar la carta generada.
// Obtiene: URL de la carta y el estado de la partida.
export const mostrarCarta = (urlCarta: string, estadoPartida: Estado): void => {
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

    if (elementoMisCartas && elementoMisCartas instanceof HTMLDivElement) {
      elementoMisCartas.appendChild(nuevaCarta);
    }
  }
};

const deshabilitarPorPlantarse = () => {
  if (
    elementoPedir &&
    elementoPedir instanceof HTMLButtonElement &&
    elementoMostrarFuturo &&
    elementoMostrarFuturo instanceof HTMLButtonElement
  ) {
    elementoPedir.disabled = true;
    elementoMostrarFuturo.disabled = false;
  }
};

// Función para interactuar con los botones del DOM y permitir únicamente que se pulse el botón "¿Que habría pasado?" y "Nueva partida"
export const gestionarPartida = (estado: Estado): void => {
  if (
    elementoMostrarFuturo &&
    elementoMostrarFuturo instanceof HTMLButtonElement &&
    elementoMePlanto &&
    elementoMePlanto instanceof HTMLButtonElement &&
    elementoPedir &&
    elementoPedir instanceof HTMLButtonElement &&
    estado === "GAME_OVER"
  ) {
    elementoMostrarFuturo.disabled = false;
    elementoMePlanto.disabled = true;
    elementoPedir.disabled = true;
    mensaje =
      "🪦 Vaya! Parece que te has pasado. Pulsa 'Nueva Partida' para volver a probar suerte 🪦";
  } else if (estado === "HA_GANADO") {
    mensaje = "🥳 ¡Lo has clavado! ¡Enhorabuena! 🥳";
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

export const generarMensajePlanto = (puntos: number): void => {
  if (puntos < 4) {
    mensaje = "Has sido muy conservador";
  } else if (puntos === 5) {
    mensaje = "Te ha entrado el canguelo eh?";
  } else if (puntos >= 6 || puntos <= 7) {
    mensaje = "Casi casi...";
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
  if (
    elementoMisCartas &&
    elementoMisCartas instanceof HTMLDivElement &&
    elementoMePlanto &&
    elementoMePlanto instanceof HTMLButtonElement &&
    elementoPedir &&
    elementoPedir instanceof HTMLButtonElement &&
    elementoMostrarFuturo &&
    elementoMostrarFuturo instanceof HTMLButtonElement &&
    elementoCartaBocaAbajo &&
    elementoCartaBocaAbajo instanceof HTMLImageElement
  ) {
    elementoMePlanto.disabled = false;
    elementoPedir.disabled = false;
    elementoMostrarFuturo.disabled = true;
    elementoCartaBocaAbajo.src =
      "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg";
    elementoCartaBocaAbajo.style.opacity = "100%";
    while (elementoMisCartas.firstChild) {
      elementoMisCartas.removeChild(elementoMisCartas.firstChild);
    }
  }
  partida.puntuacionActual = 0;
};

// Función que ejecutará el botón "Me planto"
const handlePlanto = () => {
  deshabilitarPorPlantarse();
  generarMensajePlanto(partida.puntuacionActual);
  mostrarMensaje(mensaje);
};

// Función que ejecutará el botón "¿Que habría pasado?"
export const handleFuturo = () => {
  const numeroAleatorio = generarNumeroAleatorio();
  const futuroNumCarta: number = generarNumeroCarta(numeroAleatorio);
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
  const numeroAleatorioCarta = generarNumeroAleatorio();
  const numeroCarta: number = generarNumeroCarta(numeroAleatorioCarta);
  const urlNuevaCarta = generarUrlCarta(numeroCarta);
  mostrarCarta(urlNuevaCarta, "PUEDE_CONTINUAR");
  const puntuacionCalculada: number = sumarPuntuacion(
    numeroCarta,
    partida.puntuacionActual
  );
  puntuacionSumada(puntuacionCalculada);
  mostrarPuntuacion(partida.puntuacionActual);
  const estado = estadoPartida(partida.puntuacionActual);

  gestionarPartida(estado);
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
