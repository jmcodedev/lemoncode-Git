import "./style.css";

let puntuacion: number = 0;

function gestionarGameOver(puntos: number): boolean {
  if (puntos < 7.5) {
    return false;
  } else if (puntos > 7.5) {
    return true;
  } else {
    return false;
  }
}

function muestraPuntuacion(puntos: number): void {
  const handlePuntuacion = document.getElementById("puntuacionTotal");
  if (
    handlePuntuacion !== null &&
    handlePuntuacion !== undefined &&
    handlePuntuacion instanceof HTMLDivElement
  ) {
    handlePuntuacion.innerHTML = `Puntuación actual: ${puntos}`;
  }
}

function pideCarta(): void {
  let numero: number;
  do {
    numero = Math.floor(Math.random() * 12) + 1;
  } while (numero === 8 || numero === 9);

  mostrarCarta(numero);
}

function mostrarCarta(numeroCarta: number): void {
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
  if (numeroCarta <= 12 && numeroCarta >= 10) {
    puntuacion = puntuacion + 0.5;
    muestraPuntuacion(puntuacion);
  } else {
    puntuacion = puntuacion + numeroCarta;
    muestraPuntuacion(puntuacion);
  }
  nuevaCarta.src = recurso;
  const misCartas = document.getElementById("misCartas");

  if (misCartas && misCartas instanceof HTMLDivElement) {
    misCartas.appendChild(nuevaCarta);
  }
}
const handlePedirCarta = document.getElementById("pedirCarta");

if (handlePedirCarta && handlePedirCarta instanceof HTMLButtonElement) {
  handlePedirCarta.addEventListener("click", pideCarta);
}
document.addEventListener("DOMContentLoaded", () => {
  muestraPuntuacion(puntuacion);
});
