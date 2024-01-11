// TODO - Botón nueva partida

import "./style.css";

let puntuacion: number = 0;

type Estado = "GAME_OVER" | "PUEDE_CONTINUAR" | "ME_PLANTO" | "HA_GANADO";
const cartas = [
  "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg",
  "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg",
  "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg",
  "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg",
  "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg",
  "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg",
  "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg",
  "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg",
  "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg",
  "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg",
];

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
  } else if (puntos === 7.5) {
    return "HA_GANADO";
  } else {
    return "PUEDE_CONTINUAR";
  }
}

/* 
  Función para pedir carta.
  Genera un número aleatorio hasta que este no sea ni 8 ni 9.
  Devuelve el número de la carta para ser usado posteriormente.
*/

function pideCarta(): number {
  let numero: number;
  do {
    numero = Math.floor(Math.random() * 12) + 1;
  } while (numero === 8 || numero === 9);
  return numero;
}

/* 
  Función para mostrar carta
  Recibe el número de carta por parámetros.
*/

function mostrarCarta(numeroCarta: number): number {
  const nuevaCarta = document.createElement("img"); // Crea un nuevo elemento elemento IMG en el DOM
  let recurso: string = ""; // Creamos variable para almacenar el enlace de la imágen de la carta

  // Bucle switch para valorar el número de la carta y establecer el valor de 'recurso'

  switch (numeroCarta) {
    case 1:
      recurso = cartas[0];
      break;
    case 2:
      recurso = cartas[1];
      break;
    case 3:
      recurso = cartas[2];
      break;
    case 4:
      recurso = cartas[3];
      break;
    case 5:
      recurso = cartas[4];
      break;
    case 6:
      recurso = cartas[5];
      break;
    case 7:
      recurso = cartas[6];
      break;
    case 10:
      recurso = cartas[7];
      break;
    case 11:
      recurso = cartas[8];
      break;
    case 12:
      recurso = cartas[9];
      break;
  }
  nuevaCarta.src = recurso;
  nuevaCarta.classList.add("miMazo");
  const misCartas = document.getElementById("misCartas");

  // Añadimos el nuevo elemento IMG dentro del DIV con ID 'misCartas'

  if (misCartas && misCartas instanceof HTMLDivElement) {
    misCartas.appendChild(nuevaCarta);
  }

  // Establecemos el valor de cada carta y la función lo devuelve

  if (numeroCarta <= 12 && numeroCarta >= 10) {
    return 0.5;
  } else {
    return numeroCarta;
  }
}

// Función simple para cambiar el valor del DIV 'mensaje' según lo que le pasemos por parámetros

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

/* 
  Función para valorar el estado del Game Over.
  Recibe por parámetros el estado actual de la partida y el número de puntos.
  Devolverá un string del mensaje que será mostrado
*/
function gestionarGameOver(estado: Estado, puntosTotal: number): string {
  // Handle de los elementos del DOM

  const elementoPedir = document.getElementById("pedirCarta");
  const elementoPlanto = document.getElementById("mePlanto");
  const elementoFuturo = document.getElementById("mostrarFuturo");

  // Variable donde vamos a almacenar el mensaje que será mostrado

  let mensaje = "";

  // Valoramos que los handle sean elementos html y que existan

  if (
    elementoPedir &&
    elementoPedir instanceof HTMLButtonElement &&
    elementoPlanto &&
    elementoPlanto instanceof HTMLButtonElement &&
    elementoFuturo &&
    elementoFuturo instanceof HTMLButtonElement
  ) {
    // Si se ha recibido por parámetros es estado "GAME_OVER" solo se podrá hacer click a "Nueva partida" y mostrará al usuario el GAME OVER

    if (estado === "GAME_OVER") {
      elementoPedir.disabled = true;
      elementoPlanto.disabled = true;
      elementoFuturo.disabled = false;
      mensaje =
        'Vaya! Parece que te has pasado. Pulsa "Nueva Partida" para volver a probar suerte';
    }

    // Si el estado es "ME_PLANTO" mismo procedimiento que con GAME OVER pero valoramos como se ha quedado el usuario de lejos de 7.5
    else if (estado === "ME_PLANTO") {
      elementoPedir.disabled = true;
      elementoPlanto.disabled = true;
      elementoFuturo.disabled = false;
      if (puntosTotal < 4) {
        mensaje = "Has sido muy conservador.";
      } else if (puntosTotal === 5) {
        mensaje = "Te ha entrado el canguelo eh?";
      } else if (puntosTotal >= 6 || puntosTotal <= 7) {
        mensaje = "Casi casi...";
      } else if (puntosTotal === 7.5) {
        mensaje = "¡Lo has clavado! ¡Enhorabuena!";
      } else {
        mensaje = "No se que ha pasado pero no deberíamos estar aquí.";
      }
    }

    // Si el estado es "HA_GANADO" solo se permite hacer click en "NUEVA PARTIDA" pero almacena el mensaje de Enhorabuena
    else if (estado === "HA_GANADO") {
      elementoPedir.disabled = true;
      elementoPlanto.disabled = true;
      elementoFuturo.disabled = false;
      mensaje = mensaje = "¡Lo has clavado! ¡Enhorabuena!";
    }
  }

  // Devolvemos el valor de mensaje para ser utilizado más adelante

  return mensaje;
}

// Función para comenzar una nueva partida. No devuelve nada.

const nuevaPartida = (): void => {
  // Handle del elemento DIV 'misCartas' y la futura carta

  const misCartasDiv = document.getElementById("misCartas");
  const miFuturaCarta = document.getElementById("futuraCarta");

  // Vaciamos el DIV y ocultamos la futura carta

  if (
    misCartasDiv &&
    misCartasDiv instanceof HTMLDivElement &&
    miFuturaCarta &&
    miFuturaCarta instanceof HTMLImageElement
  ) {
    miFuturaCarta.style.display = "none";
    while (misCartasDiv.firstChild) {
      misCartasDiv.removeChild(misCartasDiv.firstChild);
    }
  }
};

/*
  Función para que el usuario sepa que hubiera pasado en caso de seguir jugando.
  Interactua con la imagen "futuraCarta".
  Le asigna un src aleatorio del array de cartas establecido arriba.
  No se utilizan las funciones pideCarta ni mostrarCarta porque el resultado de la futura carta no va a computar en la puntuación.
*/

function queHabriaPasado(): void {
  const futuraCarta = document.getElementById("futuraCarta");
  if (futuraCarta && futuraCarta instanceof HTMLImageElement) {
    futuraCarta.style.display = "flex";
    futuraCarta.src = cartas[Math.floor(Math.random() * cartas.length)];
  }
}

// Cuando termine de cargar el DOM muestra la puntuación que será 0 inicialmente.

document.addEventListener("DOMContentLoaded", () => {
  muestraPuntuacion(puntuacion);
});

// Función que ejecutará el botón "Pedir carta"

const handleCompruebaClick = () => {
  puntuacion = puntuacion + mostrarCarta(pideCarta());
  const estado: Estado = muestraPuntuacion(puntuacion);
  const mensajeMuestra = gestionarGameOver(estado, puntuacion);
  muestraMensaje(mensajeMuestra);
};

// Función que ejecutará el botón

const handleCompruebaPlanto = () => {
  const mensajeMuestra = gestionarGameOver("ME_PLANTO", puntuacion);
  const handleMensaje = document.getElementById("mensaje");
  if (
    handleMensaje !== null &&
    handleMensaje !== undefined &&
    handleMensaje instanceof HTMLDivElement
  ) {
    handleMensaje.innerHTML = mensajeMuestra;
  }
};

// Handle de los botones

const handlePlantar = document.getElementById("mePlanto");
const handleClickPedir = document.getElementById("pedirCarta");
const handleNuevaPartida = document.getElementById("nuevaPartida");
const handleFuturo = document.getElementById("mostrarFuturo");

/* 
  Valoramos si los botones existen y si son elementos HTML.
  Quedamos a la espera de que se haga click en alguno de los botones.
*/

if (
  handleClickPedir &&
  handleClickPedir instanceof HTMLButtonElement &&
  handlePlantar &&
  handlePlantar instanceof HTMLButtonElement &&
  handleNuevaPartida &&
  handleNuevaPartida instanceof HTMLButtonElement
) {
  handleFuturo?.addEventListener("click", queHabriaPasado);
  handleClickPedir.addEventListener("click", handleCompruebaClick);
  handlePlantar.addEventListener("click", handleCompruebaPlanto);
  handleNuevaPartida.addEventListener("click", () => {
    nuevaPartida();
    puntuacion = 0;
    muestraPuntuacion(puntuacion);
    handleClickPedir.disabled = false;
    handlePlantar.disabled = false;
    muestraMensaje("");
  });
}
