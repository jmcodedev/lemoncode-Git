import axios from "axios";
import { Movie } from "./pelicula-crear.model";

export const crearPelicula = async (pelicula: Movie): Promise<Movie> => {
  const URL = "http://localhost:3000/movies";
  const { data } = await axios.post<Movie>(URL, pelicula);

  return data;
};
