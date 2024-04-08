export interface Pelicula {
  titulo: string;
  resumen: string;
  genero: string;
  masVisto: boolean;
  calificacionImdb: number;
  premioGalardon: boolean;
  fechaEstreno: Date;
  imagen: string;
}

export const nombreClases = {
  peliculas: "peliculas",
  listaPeliculas: "lista-peliculas",
  peliculasContenedor: "peliculas-contenedor",
  pelicula: "pelicula",
};

export type TipoGenero = "Familiar" | "Aventuras" | "Animacion";
export type TipoFlecha = "izquierda" | "derecha";

type TipoCaracteristica = "genero" | "premios" | "masVistas" | "calificacion";

export interface FiltroPeliculas {
  genero?: TipoGenero;
  caracteristica: TipoCaracteristica;
}

export interface listaPeliculasConfiguracion {
  titulo: string;
  filtro?: FiltroPeliculas;
}
