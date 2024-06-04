import { Movie } from "./pelicula-editar.model";
import { obtenerPelicula, editarPelicula } from "./pelicula-editar.api";

const capturarIdURL = (): string => {
  const parametrosURL = new URLSearchParams(window.location.search);
  const id = parametrosURL.get("id") || "";

  return decodeURIComponent(id);
};

const obtenPelicula = async (): Promise<Movie> => {
  const id = capturarIdURL();
  const pelicula: Movie = await obtenerPelicula(id);

  return pelicula;
};

const pintarDatosPelicula = async (): Promise<void> => {
  const pelicula: Movie = await obtenPelicula();
  const titulo = document.getElementById("titulo");
  const director = document.getElementById("director");
  const year = document.getElementById("year");
  const description = document.getElementById("description");
  const cover_url = document.getElementById("cover_url");

  if (titulo && titulo instanceof HTMLInputElement) {
    titulo.value = pelicula.title;
  } else {
    throw new Error("Error al renderizar el título");
  }
  if (director && director instanceof HTMLInputElement) {
    director.value = pelicula.director;
  } else {
    throw new Error("Error al renderizar el director");
  }
  if (year && year instanceof HTMLInputElement) {
    year.value = pelicula.year.toString();
  } else {
    throw new Error("Error al renderizar el año");
  }
  if (description && description instanceof HTMLTextAreaElement) {
    description.value = pelicula.description;
  } else {
    throw new Error("Error al renderizar la descripción");
  }
  if (cover_url && cover_url instanceof HTMLInputElement) {
    cover_url.value = pelicula.cover_url;
  } else {
    throw new Error("Error al renderizar la URL de la imagen");
  }
};

const obtenerValorCampo = (id: string): string => {
  const elementoCampo = document.querySelector(`#${id}`);

  if (
    (elementoCampo && elementoCampo instanceof HTMLInputElement) ||
    elementoCampo instanceof HTMLTextAreaElement
  ) {
    return elementoCampo.value;
  } else {
    throw new Error(`Error al obtener el campo ${id}`);
  }
};

const actualizaPelicula = async (evento: Event): Promise<void> => {
  evento.preventDefault();
  const pelicula: Movie = {
    id: capturarIdURL(),
    title: obtenerValorCampo("titulo"),
    director: obtenerValorCampo("director"),
    year: parseInt(obtenerValorCampo("year")),
    description: obtenerValorCampo("description"),
    cover_url: obtenerValorCampo("cover_url"),
  };

  try {
    await editarPelicula(pelicula);
    alert("Película actualizada correctamente");
  } catch (error) {
    alert(error);
  }

  window.location.href = "../pelicula-listado/index.html";
};

document.addEventListener("DOMContentLoaded", () => {
  const formulario = document.getElementById("formulario");
  if (formulario && formulario instanceof HTMLFormElement) {
    formulario.addEventListener("submit", actualizaPelicula);
  } else {
    throw new Error("Error al obtener el formulario");
  }
  pintarDatosPelicula();
});
