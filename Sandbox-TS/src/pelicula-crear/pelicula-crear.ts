import { Movie } from "./pelicula-crear.model";
import { crearPelicula } from "./pelicula-crear.api";

const obtenerValorCampo = (id: string): string => {
  const elementoCampo = document.querySelector(`#${id}`);

  if (
    (elementoCampo && elementoCampo instanceof HTMLInputElement) ||
    elementoCampo instanceof HTMLTextAreaElement
  ) {
    return elementoCampo.value;
  } else {
    throw new Error("Error al obtener el valor del campo");
  }
};

const creaPelicula = async (evento: Event): Promise<void> => {
  evento.preventDefault();
  // TODO: Implementar la creación de la película
  const pelicula: Movie = {};
};
