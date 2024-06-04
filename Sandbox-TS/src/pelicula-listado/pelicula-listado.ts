import { CrearBotonParams, Movie } from "./pelicula-listado.model";
import { obtenerPeliculas } from "./pelicula-listado.api";
const editaPelicula = (id: string): void => {
  window.location.href = `../pelicula-editar/index.html?id=${encodeURIComponent(
    id
  )}`;
};

const borraPelicula = (id: string): void => {
  console.log("Borrando película con id", id);
};

const crearElementoImagen = (
  portada: string,
  titulo: string
): HTMLImageElement => {
  const imagen = document.createElement("img");
  imagen.src = portada;
  imagen.alt = titulo;
  return imagen;
};

const crearElementoParrafo = (texto: string): HTMLParagraphElement => {
  const parrafo = document.createElement("p");
  parrafo.textContent = texto;
  return parrafo;
};

const crearBoton = (crearBotonParams: CrearBotonParams): HTMLButtonElement => {
  const { texto, id, nombreClase, onClick } = crearBotonParams;

  const boton = document.createElement("button");
  boton.textContent = texto;
  boton.addEventListener("click", () => onClick(id));
  boton.classList.add(nombreClase);

  return boton;
};

const crearGrupoBotones = (id: string): HTMLDivElement => {
  const grupoBotones = document.createElement("div");
  grupoBotones.classList.add("grupo-botones");

  const botonEditar = crearBoton({
    texto: "Editar",
    id,
    nombreClase: "boton-editar",
    onClick: (id) => editaPelicula(id),
  });

  const botonBorrar = crearBoton({
    texto: "Borrar",
    id,
    nombreClase: "boton-borrar",
    onClick: (id) => borraPelicula(id),
  });

  grupoBotones.appendChild(botonEditar);
  grupoBotones.appendChild(botonBorrar);

  return grupoBotones;
};

const crearContenedorPelicula = (pelicula: Movie): HTMLDivElement => {
  const elementoPelicula = document.createElement("div");
  elementoPelicula.classList.add("pelicula-contenedor");

  const imagen = crearElementoImagen(pelicula.cover_url, pelicula.title);
  elementoPelicula.appendChild(imagen);

  const titulo = crearElementoParrafo(pelicula.title);
  elementoPelicula.appendChild(titulo);

  const director = crearElementoParrafo(pelicula.director);
  elementoPelicula.appendChild(director);

  const anio = crearElementoParrafo(pelicula.year.toString());
  elementoPelicula.appendChild(anio);

  const grupoBotones = crearGrupoBotones(pelicula.id.toString());
  elementoPelicula.appendChild(grupoBotones);

  return elementoPelicula;
};

const renderizaPeliculas = async () => {
  const peliculas = await obtenerPeliculas();
  const listado = document.getElementById("listado-peliculas");

  if (listado && listado instanceof HTMLDivElement) {
    peliculas.forEach((pelicula) => {
      const elementoPelicula = crearContenedorPelicula(pelicula);
      listado.appendChild(elementoPelicula);
    });
  } else {
    throw new Error("No se ha encontrado el elemento listado-peliculas");
  }
};

document.addEventListener("DOMContentLoaded", renderizaPeliculas);
