import axios from "axios";
import { Movie } from "./pelicula-editar.model";

export const obtenerPelicula = async (id: string): Promise<Movie> => {
  try {
    const { data } = await axios.get<Movie>(
      `http://localhost:3000/movies/${id}`
    );
    return data;
  } catch (error) {
    throw new Error(`Error al obtener la película`);
  }
};

export const editarPelicula = async (pelicula: Movie): Promise<void> => {
  try {
    await axios.put(`http://localhost:3000/movies/${pelicula.id}`, pelicula);
  } catch (error) {
    throw new Error(`Error al editar la película`);
  }
}