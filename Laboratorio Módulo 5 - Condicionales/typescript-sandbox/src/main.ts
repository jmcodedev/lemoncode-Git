import "./style.css";

let puntuacion: number = 0; // Variable para almacenar la puntuación

// Estados posibles en la partida

type Estado = "GAME_OVER" | "PUEDE_CONTINUAR" | "ME_PLANTO" | "HA_GANADO";

// Funcióin que generar el número de la carta aleatoriamente.
// Devuelve: Número de la carta
const generarNumeroCarta = (): number => {
  let numeroAleatorio: number = Math.floor(Math.random() * 12) + 1;

  if (numeroAleatorio === 8) {
    numeroAleatorio += 2;
  } else if (numeroAleatorio === 9) {
    numeroAleatorio++;
  }
  return numeroAleatorio;
};

// Función para generar la URL donde está almacenada la imagen de la carta
// Obtiene: Número de la carta
// Devuelve: URL de la carta
const generarUrlCarta = (numeroCarta: number): string => {
  switch (numeroCarta) {
    case 1:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg";
      break;
    case 2:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg";
      break;
    case 3:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg";
      break;
    case 4:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg";
      break;
    case 5:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg";
      break;
    case 6:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg";
      break;
    case 7:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg";
      break;
    case 10:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg";
      break;
    case 11:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg";
      break;
    case 12:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg";
      break;
    default:
      return "";
      break;
  }
};

// Función para interactuar con el DOM y mostrar la carta generada.
// Obtiene: URL de la carta y el estado de la partida.
const mostrarCarta = (urlCarta: string, estadoPartida: Estado): void => {
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

// Función para sumar la puntuación.
// Obtiene: Número de la nueva carta y los puntos actuales.
// Devuelve: Puntos sumados.
const sumarPuntuacion = (numeroCarta: number, puntosActuales: number): number =>
  // Ternario que devuelve los puntos + el valor de la carta teniendo en cuenta si es inferior a 10.
  numeroCarta < 10 ? puntosActuales + numeroCarta : puntosActuales + 0.5;

const puntuacionSumada = (puntosSumados: number): void => {
  puntuacion = puntosSumados;
};

// Función que valor el estado actual de la partida.
// Obtiene: Puntos actuales de la partida.
// Devuelve: Valor tipo Estado, teniendo en cuenta los puntos que se han obtenido por parámetros
const estadoPartida = (puntos: number): Estado => {
  if (puntos === 7.5) {
    return "HA_GANADO";
  } else if (puntos < 7.5) {
    return "PUEDE_CONTINUAR";
  } else {
    return "GAME_OVER";
  }
};

// Función para interactuar con los botones del DOM y permitir únicamente que se pulse el botón "¿Que habría pasado?" y "Nueva partida"
const gestionarGameOver = (estado: Estado): void => {
  const elementoPedirCarta = document.getElementById("pedirCarta");
  const elementoGOMePlanto = document.getElementById("mePlanto");
  const elementoFuturo = document.getElementById("mostrarFuturo");

  if (
    elementoFuturo &&
    elementoFuturo instanceof HTMLButtonElement &&
    elementoGOMePlanto &&
    elementoGOMePlanto instanceof HTMLButtonElement &&
    elementoPedirCarta &&
    elementoPedirCarta instanceof HTMLButtonElement &&
    estado === "GAME_OVER"
  ) {
    elementoFuturo.disabled = false;
    elementoPedirCarta.disabled = true;
    elementoGOMePlanto.disabled = true;
  }
};

// Función para generar el mensaje que se muestra.
// Obtiene: Puntos actuales y el estado de la partida.
// Devuelve: Mensaje a mostrar.
const generarMensaje = (puntos: number, estadoPartida: Estado): string => {
  let mensaje = "";
  if (estadoPartida === "ME_PLANTO") {
    if (puntos < 4) {
      mensaje = "Has sido muy conservador";
    } else if (puntos === 5) {
      mensaje = "Te ha entrado el canguelo eh?";
    } else if (puntos >= 6 || puntos <= 7) {
      mensaje = "Casi casi...";
    }
  } else if (estadoPartida === "GAME_OVER") {
    mensaje =
      '🪦 Vaya! Parece que te has pasado. Pulsa "Nueva Partida" para volver a probar suerte 🪦';
  } else if (estadoPartida === "HA_GANADO") {
    mensaje = "🥳 ¡Lo has clavado! ¡Enhorabuena! 🥳";
  }
  return mensaje;
};

// Funcion que interactua con el DOM para mostrar el mensaje generado.
const mostrarMensaje = (mensaje: string): void => {
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
const mostrarPuntuacion = (puntos: number): void => {
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
const nuevaPartida = () => {
  const elementoMisCartas = document.getElementById("misCartas");
  const elementoBtnPedir = document.getElementById("pedirCarta");
  const elementoBtnMePlanto = document.getElementById("mePlanto");
  const elementoBtnFuturo = document.getElementById("mostrarFuturo");

  if (
    elementoMisCartas &&
    elementoMisCartas instanceof HTMLDivElement &&
    elementoBtnMePlanto &&
    elementoBtnMePlanto instanceof HTMLButtonElement &&
    elementoBtnPedir &&
    elementoBtnPedir instanceof HTMLButtonElement &&
    elementoBtnFuturo &&
    elementoBtnFuturo instanceof HTMLButtonElement
  ) {
    elementoBtnMePlanto.disabled = false;
    elementoBtnPedir.disabled = false;
    elementoBtnFuturo.disabled = true;
    while (elementoMisCartas.firstChild) {
      elementoMisCartas.removeChild(elementoMisCartas.firstChild);
    }
  }
  puntuacion = 0;
};

// Se obtienen los botones del DOM
const elementoPedir = document.getElementById("pedirCarta");
const elementoMePlanto = document.getElementById("mePlanto");
const elementoMostrarFuturo = document.getElementById("mostrarFuturo");
const elementoNuevaPartida = document.getElementById("nuevaPartida");

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

// Función que ejecutará el botón "Nueva partida"
const handleNuevaPartida = () => {
  nuevaPartida();
  mostrarPuntuacion(0);
  mostrarMensaje("");
};

// Función que ejecutará el botón "Pedir carta"
const handlePedir = () => {
  const numeroCarta: number = generarNumeroCarta();
  const urlNuevaCarta = generarUrlCarta(numeroCarta);
  mostrarCarta(urlNuevaCarta, "PUEDE_CONTINUAR");
  const puntuacionCalculada: number = sumarPuntuacion(numeroCarta, puntuacion);
  puntuacionSumada(puntuacionCalculada);
  mostrarPuntuacion(puntuacion);
  const estado = estadoPartida(puntuacion);

  gestionarGameOver(estado);

  const mensaje: string = generarMensaje(puntuacion, estado);
  mostrarMensaje(mensaje);
};

// Función que ejecutará el botón "Me planto"
const handlePlanto = () => {
  deshabilitarPorPlantarse();
  const mensajePlanto: string = generarMensaje(puntuacion, "ME_PLANTO");
  mostrarMensaje(mensajePlanto);
};

// Función que ejecutará el botón "¿Que habría pasado?"
const handleFuturo = () => {
  const futuroNumCarta: number = generarNumeroCarta();
  const urlFuturaCarta = generarUrlCarta(futuroNumCarta);
  mostrarCarta(urlFuturaCarta, "ME_PLANTO");
  puntuacion = sumarPuntuacion(futuroNumCarta, puntuacion);
  mostrarPuntuacion(puntuacion);
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
