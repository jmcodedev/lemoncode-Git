import { Estado, partida } from "./modelo";

export const generarNumeroAleatorio = (): number =>
  Math.floor(Math.random() * 12) + 1;

// Funcióin que generar el número de la carta aleatoriamente.
// Devuelve: Número de la carta
export const generarNumeroCarta = (numeroAleatorio: number): number => {
  if (numeroAleatorio === 8) {
    numeroAleatorio += 2;
  } else if (numeroAleatorio === 9) {
    numeroAleatorio++;
  }
  return numeroAleatorio;
};
// Función para sumar la puntuación.
// Obtiene: Número de la nueva carta y los puntos actuales.
// Devuelve: Puntos sumados.
export const sumarPuntuacion = (
  numeroCarta: number,
  puntosActuales: number
): number =>
  // Ternario que devuelve los puntos + el valor de la carta teniendo en cuenta si es inferior a 10.
  numeroCarta < 10 ? puntosActuales + numeroCarta : puntosActuales + 0.5;

export const puntuacionSumada = (puntosSumados: number): void => {
  partida.puntuacionActual = puntosSumados;
};

// Función que valor el estado actual de la partida.
// Obtiene: Puntos actuales de la partida.
// Devuelve: Valor tipo Estado, teniendo en cuenta los puntos que se han obtenido por parámetros
export const estadoPartida = (puntos: number): Estado => {
  if (puntos === partida.puntosObjetivo) {
    return "HA_GANADO";
  } else if (puntos < partida.puntosObjetivo) {
    return "PUEDE_CONTINUAR";
  } else {
    return "GAME_OVER";
  }
};
// Función para generar el mensaje que se muestra.
// Obtiene: Puntos actuales y el estado de la partida.
// Devuelve: Mensaje a mostrar.
export const generarMensaje = (
  puntos: number,
  estadoPartida: Estado
): string => {
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
