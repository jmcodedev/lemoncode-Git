interface Partida {
  puntosIniciales: number;
  puntosObjetivo: number;
  puntuacionActual: number;
}

export const partida: Partida = {
  puntosIniciales: 0,
  puntosObjetivo: 7.5,
  puntuacionActual: 0,
};

export type Estado =
  | "GAME_OVER"
  | "PUEDE_CONTINUAR"
  | "ME_PLANTO"
  | "HA_GANADO";

// Función para generar la URL donde está almacenada la imagen de la carta
// Obtiene: Número de la carta
// Devuelve: URL de la carta
export const generarUrlCarta = (numeroCarta: number): string => {
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
