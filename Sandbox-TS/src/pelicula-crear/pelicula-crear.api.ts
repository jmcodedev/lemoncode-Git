import axios from "axios";
import { Movie } from "./pelicula-crear.model";

export const crearPelicula = async (pelicula: Movie): Promise<void> => {
  try {
    await axios.post("http://localhost:3000/movies", pelicula);
  } catch (error) {
    throw new Error(`Error al crear la película`);
  }
};
