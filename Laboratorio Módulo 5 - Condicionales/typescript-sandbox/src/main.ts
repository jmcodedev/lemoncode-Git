import "./style.css";

let mensaje = "";

let puntuacion: number = 0; // Variable para almacenar la puntuación

const elementoCartaBocaAbajo = document.getElementById("cartaBocaAbajo");
const elementoMisCartas = document.getElementById("misCartas");
const elementoPedirCarta = document.getElementById("pedirCarta");
const elementoMePlanto = document.getElementById("mePlanto");
const elementoMostrarFuturo = document.getElementById("mostrarFuturo");
const elementoNuevaPartida = document.getElementById("nuevaPartida");
const elementoPuntuacionTotal = document.getElementById("puntuacionTotal");
const elementoMensaje = document.getElementById("mensaje");

// Estados posibles en la partida

type Estado = "GAME_OVER" | "PUEDE_CONTINUAR" | "ME_PLANTO" | "HA_GANADO";

const generarNumeroAleatorio = (): number => Math.floor(Math.random() * 12) + 1;
// Funcióin que generar el número de la carta aleatoriamente.
// Devuelve: Número de la carta
const generarNumeroCarta = (numeroAleatorio: number): number => {
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

    case 2:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg";

    case 3:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg";

    case 4:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg";

    case 5:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg";

    case 6:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg";

    case 7:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg";

    case 10:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg";

    case 11:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg";

    case 12:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg";

    default:
      return "";
  }
};

// Función para interactuar con el DOM y mostrar la carta generada.
// Obtiene: URL de la carta y el estado de la partida.
const mostrarCarta = (urlCarta: string, estadoPartida: Estado): void => {
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
const gestionarPartida = (estado: Estado): void => {
  if (
    elementoMostrarFuturo &&
    elementoMostrarFuturo instanceof HTMLButtonElement &&
    elementoMePlanto &&
    elementoMePlanto instanceof HTMLButtonElement &&
    elementoPedirCarta &&
    elementoPedirCarta instanceof HTMLButtonElement &&
    estado === "GAME_OVER"
  ) {
    elementoMostrarFuturo.disabled = false;
    elementoMePlanto.disabled = true;
    elementoPedirCarta.disabled = true;
    mensaje =
      "🪦 Vaya! Parece que te has pasado. Pulsa 'Nueva Partida' para volver a probar suerte 🪦";
  } else if (estado === "HA_GANADO") {
    mensaje = "🥳 ¡Lo has clavado! ¡Enhorabuena! 🥳";
  }
};

// Función para generar el mensaje que se muestra.
// Obtiene: Puntos actuales y el estado de la partida.
// Devuelve: Mensaje a mostrar.
const generarMensajePlanto = (puntos: number): void => {
  if (puntos < 4) {
    mensaje = "Has sido muy conservador";
  } else if (puntos === 5) {
    mensaje = "Te ha entrado el canguelo eh?";
  } else if (puntos >= 6 || puntos <= 7) {
    mensaje = "Casi casi...";
  }
};

// Funcion que interactua con el DOM para mostrar el mensaje generado.
const mostrarMensaje = (mensaje: string): void => {
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
  if (
    elementoPuntuacionTotal !== null &&
    elementoPuntuacionTotal !== undefined &&
    elementoPuntuacionTotal instanceof HTMLDivElement
  ) {
    elementoPuntuacionTotal.innerHTML = `Puntuación actual: ${puntos}`;
  }
};

// Función que elimina todos los elementos del div "misCartas" y deja la puntuación a 0
// También devuelve los botones a su estado original.
const nuevaPartida = () => {
  if (
    elementoMisCartas &&
    elementoMisCartas instanceof HTMLDivElement &&
    elementoMePlanto &&
    elementoMePlanto instanceof HTMLButtonElement &&
    elementoPedirCarta &&
    elementoPedirCarta instanceof HTMLButtonElement &&
    elementoMostrarFuturo &&
    elementoMostrarFuturo instanceof HTMLButtonElement &&
    elementoCartaBocaAbajo &&
    elementoCartaBocaAbajo instanceof HTMLImageElement
  ) {
    elementoMePlanto.disabled = false;
    elementoPedirCarta.disabled = false;
    elementoMostrarFuturo.disabled = true;
    elementoCartaBocaAbajo.style.opacity = "100%";
    elementoCartaBocaAbajo.src =
      "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg";
    while (elementoMisCartas.firstChild) {
      elementoMisCartas.removeChild(elementoMisCartas.firstChild);
    }
  }
  puntuacion = 0;
};

// Se obtienen los botones del DOM

const deshabilitarPorPlantarse = () => {
  if (
    elementoPedirCarta &&
    elementoPedirCarta instanceof HTMLButtonElement &&
    elementoMostrarFuturo &&
    elementoMostrarFuturo instanceof HTMLButtonElement
  ) {
    elementoPedirCarta.disabled = true;
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
  const numeroAleatorioCarta = generarNumeroAleatorio();
  const numeroCarta: number = generarNumeroCarta(numeroAleatorioCarta);
  const urlNuevaCarta = generarUrlCarta(numeroCarta);
  mostrarCarta(urlNuevaCarta, "PUEDE_CONTINUAR");
  const puntuacionCalculada: number = sumarPuntuacion(numeroCarta, puntuacion);
  puntuacionSumada(puntuacionCalculada);
  mostrarPuntuacion(puntuacion);
  const estado = estadoPartida(puntuacion);

  gestionarPartida(estado);
  mostrarMensaje(mensaje);
};

// Función que ejecutará el botón "Me planto"
const handlePlanto = () => {
  deshabilitarPorPlantarse();
  generarMensajePlanto(puntuacion);
  mostrarMensaje(mensaje);
};

// Función que ejecutará el botón "¿Que habría pasado?"
const handleFuturo = () => {
  const futuroNumCartaAleatoria: number = generarNumeroAleatorio();
  const futuroNumCarta: number = generarNumeroCarta(futuroNumCartaAleatoria);
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

if (elementoPedirCarta && elementoPedirCarta instanceof HTMLButtonElement) {
  elementoPedirCarta.addEventListener("click", handlePedir);
}

if (elementoMePlanto && elementoMePlanto instanceof HTMLButtonElement) {
  elementoMePlanto.addEventListener("click", handlePlanto);
}

if (elementoNuevaPartida && elementoNuevaPartida instanceof HTMLButtonElement) {
  elementoNuevaPartida.addEventListener("click", handleNuevaPartida);
}
