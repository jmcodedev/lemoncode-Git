import { Personaje } from "./personaje.model";
import axios from "axios";

const URL = "http://localhost:3000/personajes";

export const getPersonajes = async (): Promise<Personaje[]> => {
  const response = await axios.get(URL);
  return response.data;
};

export const getPersonajePorNombre = async (
  nombre: string
): Promise<Personaje> => {
  const response = await axios.get(`${URL}?nombre_like=${nombre}`);
  return response.data;
};
