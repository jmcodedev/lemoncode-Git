import { peliculas } from "./datos";
import { pintarListaPeliculas } from "./ui";

document.addEventListener("DOMContentLoaded", () => {
  pintarListaPeliculas(peliculas, { titulo: "Todas las películas" });
  pintarListaPeliculas(peliculas, {
    titulo: "Películas de aventuras",
    filtro: { genero: "Aventuras", caracteristica: "genero" },
  });
  pintarListaPeliculas(peliculas, {
    titulo: "Películas familiares",
    filtro: { genero: "Familiar", caracteristica: "genero" },
  });
  pintarListaPeliculas(peliculas, {
    titulo: "Películas de animación",
    filtro: { genero: "Animacion", caracteristica: "genero" },
  });
  pintarListaPeliculas(peliculas, {
    titulo: "Películas mas vistas",
    filtro: { caracteristica: "masVistas" },
  });
  pintarListaPeliculas(peliculas, {
    titulo: "Películas con mejor calificación",
    filtro: { caracteristica: "calificacion" },
  });
  pintarListaPeliculas(peliculas, {
    titulo: "Películas con premios",
    filtro: { caracteristica: "premios" },
  });
});
