import { Personaje } from "./personaje.model";
import axios from "axios";

const URL = "http://localhost:3000/personajes";

export const getPersonajes = async (): Promise<Personaje[]> => {
  try {
    const response = await axios.get(URL);
    return response.data;
  } catch (error) {
    throw new Error("Error al obtener los personajes");
  }
};

export const getPersonajePorNombre = async (
  nombre: string
): Promise<Personaje[]> => {
  try {
    const response = await axios.get(`${URL}?nombre_like=${nombre}`);
    return response.data;
  } catch (error) {
    throw new Error("Error al obtener el personaje");
  }
};
