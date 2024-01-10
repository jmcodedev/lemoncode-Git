// TODO - Botón nueva partida

import "./style.css";

let puntuacion: number = 0;

type Estado = "GAME_OVER" | "PUEDE_CONTINUAR" | "ME_PLANTO";

// Función para mostrar la puntuación en todo momento

function muestraPuntuacion(puntos: number): Estado {
  const handlePuntuacion = document.getElementById("puntuacionTotal");
  if (
    handlePuntuacion !== null &&
    handlePuntuacion !== undefined &&
    handlePuntuacion instanceof HTMLDivElement
  ) {
    handlePuntuacion.innerHTML = `Puntuación actual: ${puntos}`;
  }

  if (puntos < 7.5) {
    return "PUEDE_CONTINUAR";
  } else if (puntos > 7.5) {
    return "GAME_OVER";
  } else {
    return "PUEDE_CONTINUAR";
  }
}

/* Función para pedir carta.
    Genera un número aleatorio hasta que este no sea ni 8 ni 9.
    Encadena con la funcion de mostrar carta.
*/

function pideCarta(): number {
  let numero: number;
  do {
    numero = Math.floor(Math.random() * 12) + 1;
  } while (numero === 8 || numero === 9);
  return numero;
}

/* Función para mostrar carta
    Recibe el número de carta
*/

function mostrarCarta(numeroCarta: number): number {
  const nuevaCarta = document.createElement("img");
  nuevaCarta.classList.add("miMazo");
  let recurso: string = "";
  switch (numeroCarta) {
    case 1:
      recurso =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg";
      break;
    case 2:
      recurso =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg";
      break;
    case 3:
      recurso =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg";
      break;
    case 4:
      recurso =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg";
      break;
    case 5:
      recurso =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg";
      break;
    case 6:
      recurso =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg";
      break;
    case 7:
      recurso =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg";
      break;
    case 10:
      recurso =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg";
      break;
    case 11:
      recurso =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg";
      break;
    case 12:
      recurso =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg";
      break;
  }
  nuevaCarta.src = recurso;
  const misCartas = document.getElementById("misCartas");

  if (misCartas && misCartas instanceof HTMLDivElement) {
    misCartas.appendChild(nuevaCarta);
  }
  if (numeroCarta <= 12 && numeroCarta >= 10) {
    return 0.5;
  } else {
    return numeroCarta;
  }
}

function muestraMensaje(mensaje: string): void {
  const divMensaje = document.getElementById("mensaje");
  if (
    divMensaje !== null &&
    divMensaje !== undefined &&
    divMensaje instanceof HTMLDivElement
  ) {
    divMensaje.innerHTML = mensaje;
  }
}

function gestionarGameOver(estado: Estado, puntosTotal: number): string {
  const elementoPedir = document.getElementById("pedirCarta");
  const elementoPlanto = document.getElementById("mePlanto");
  let mensaje = "";
  if (
    elementoPedir &&
    elementoPedir instanceof HTMLButtonElement &&
    elementoPlanto &&
    elementoPlanto instanceof HTMLButtonElement
  ) {
    if (estado === "GAME_OVER") {
      elementoPedir.disabled = true;
      elementoPlanto.disabled = true;
      mensaje =
        'Vaya! Parece que te has pasado. Pulsa "Nueva Partida" para volver a probar suerte';
    } else if (estado === "ME_PLANTO") {
      elementoPedir.disabled = true;
      elementoPlanto.disabled = true;
      if (puntosTotal < 4) {
        mensaje = "Has sido muy conservador.";
      } else if (puntosTotal === 5) {
        mensaje = "Te ha entrado el canguelo eh?";
      } else if (puntosTotal === 6 || puntosTotal === 7) {
        mensaje = "Casi casi...";
      } else if (puntosTotal === 7.5) {
        mensaje = "¡Lo has clavado! ¡Enhorabuena!";
      } else {
        mensaje = "No se que ha pasado pero no deberíamos estar aquí.";
      }
    }
  }

  return mensaje;
}

document.addEventListener("DOMContentLoaded", () => {
  muestraPuntuacion(puntuacion);
});

const handleCompruebaClick = () => {
  puntuacion = puntuacion + mostrarCarta(pideCarta());
  const estado: Estado = muestraPuntuacion(puntuacion);
  const mensajeMuestra = gestionarGameOver(estado, puntuacion);
  const handleMensaje = document.getElementById("mensaje");

  if (
    handleMensaje !== null &&
    handleMensaje !== undefined &&
    handleMensaje instanceof HTMLDivElement
  ) {
    handleMensaje.innerHTML = mensajeMuestra;
  }
};

const handlePlantar = document.getElementById("mePlanto");
const handleClickPedir = document.getElementById("pedirCarta");

if (
  handleClickPedir &&
  handleClickPedir instanceof HTMLButtonElement &&
  handlePlantar &&
  handlePlantar instanceof HTMLButtonElement
) {
  handleClickPedir.addEventListener("click", handleCompruebaClick);
  handlePlantar.addEventListener("click", () => {
    const mensajeMuestra = gestionarGameOver("ME_PLANTO", puntuacion);
    const handleMensaje = document.getElementById("mensaje");
    if (
      handleMensaje !== null &&
      handleMensaje !== undefined &&
      handleMensaje instanceof HTMLDivElement
    ) {
      handleMensaje.innerHTML = mensajeMuestra;
    }
  });
}
