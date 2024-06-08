import { Personaje } from "./personaje.model";
import { getPersonajes, getPersonajePorNombre } from "./personaje.api";

const crearElementoImagen = (imagen: string): HTMLImageElement => {
  const img = document.createElement("img");
  img.src = `http://localhost:3000/${imagen}`;

  return img;
};

const crearElementoParrafo = (
  propiedad: string,
  texto: string,
  idElemento: string
): HTMLParagraphElement => {
  const p = document.createElement("p");
  p.textContent = propiedad + texto;
  p.id = idElemento;

  return p;
};

const crearContenedorPeronsaje = (personaje: Personaje): HTMLDivElement => {
  const div = document.createElement("div");
  div.classList.add("personajes-contenedor");
  div.appendChild(crearElementoImagen(personaje.imagen));
  div.appendChild(crearElementoParrafo("Nombre: ", personaje.nombre, "nombre"));
  div.appendChild(crearElementoParrafo("Apodo: ", personaje.apodo, "apodo"));
  div.appendChild(
    crearElementoParrafo(
      "Especialidad: ",
      personaje.especialidad,
      "especialidad"
    )
  );
  div.appendChild(
    crearElementoParrafo(
      "Habilidades: ",
      personaje.habilidades.join(", "),
      "habilidades"
    )
  );
  div.appendChild(crearElementoParrafo("Amigo: ", personaje.amigo, "amigo"));

  return div;
};

const mostrarPersonajes = async () => {
  const personajes = await getPersonajes();
  const listado = document.querySelector("#listado-personajes");

  if (listado && listado instanceof HTMLDivElement) {
    personajes.forEach((personaje) => {
      listado.appendChild(crearContenedorPeronsaje(personaje));
    });
  } else {
    throw new Error("No se ha encontrado el listado de personajes");
  }
};

const buscarPersonaje = async () => {
  const input = document.querySelector("#personaje-inp");
  if (input && input instanceof HTMLInputElement) {
    const personajes = await getPersonajePorNombre(input.value);
    const listado = document.querySelector("#listado-personajes");

    if (listado && listado instanceof HTMLDivElement) {
      personajes.forEach((personaje) => {
        listado.innerHTML = "";
        listado.appendChild(crearContenedorPeronsaje(personaje));
      });
    } else {
      throw new Error("No se ha encontrado el listado de personajes");
    }
  }
};
document.addEventListener("DOMContentLoaded", mostrarPersonajes);
const formulario = document.querySelector("form");

if (formulario && formulario instanceof HTMLFormElement) {
  formulario.addEventListener("submit", (event) => {
    event.preventDefault();
    buscarPersonaje();
  });
} else {
  throw new Error("No se ha encontrado el formulario");
}
