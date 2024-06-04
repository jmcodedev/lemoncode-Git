import axios from "axios";
import { Movie } from "./pelicula-listado.model";

const MOVIE_ENDPOINT = "http://localhost:3000/movies";

export const obtenerPeliculas = async (): Promise<Movie[]> => {
  try {
    const { data } = await axios.get(MOVIE_ENDPOINT);
    return data;
  } catch (error) {
    throw new Error("Error al obtener las películas");
  }
};

export const borrarPelicula = async (id: string): Promise<void> => {
  try {
    await axios.delete(`${MOVIE_ENDPOINT}/${id}`);
  } catch (error) {
    throw new Error("Error al borrar la película");
  }
};