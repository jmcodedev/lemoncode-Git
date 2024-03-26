import { peliculas } from "./datos";
import { Pelicula, TipoGenero } from "./modelo";
export const filtrarPeliculasPorGenero = (
  peliculas: Pelicula[],
  genero?: TipoGenero
): Pelicula[] => peliculas.filter((pelicula) => pelicula.genero === genero);
