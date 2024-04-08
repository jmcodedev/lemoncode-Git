import { FiltroPeliculas, Pelicula, TipoGenero } from "./modelo";
export const filtrarPeliculasPorGenero = (
  peliculas: Pelicula[],
  genero?: TipoGenero
): Pelicula[] => peliculas.filter((pelicula) => pelicula.genero === genero);

export const filtrarPeliculasPorPremio = (peliculas: Pelicula[]): Pelicula[] =>
  peliculas.filter((pelicula) => pelicula.premioGalardon);

const filtrarPeliculasMasVistas = (peliculas: Pelicula[]): Pelicula[] =>
  peliculas.filter((pelicula) => pelicula.masVisto);

const ordenadrPeliculasPorCalificacion = (peliculas: Pelicula[]): Pelicula[] =>
  peliculas.sort(
    (peliculaA, peliculaB) =>
      peliculaB.calificacionImdb - peliculaA.calificacionImdb
  );

export const filtrarPeliculas = (
  peliculas: Pelicula[],
  filtro?: FiltroPeliculas
): Pelicula[] => {
  if (!filtro) return peliculas;

  switch (filtro.caracteristica) {
    case "genero":
      return filtrarPeliculasPorGenero(peliculas, filtro.genero);
    case "premios":
      return filtrarPeliculasPorPremio(peliculas);
    case "masVistas":
      return filtrarPeliculasMasVistas(peliculas);
    case "calificacion":
      return ordenadrPeliculasPorCalificacion(peliculas);
    default:
      return peliculas;
  }
};
