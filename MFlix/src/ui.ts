import { Pelicula, TipoFlecha, nombreClases } from "./modelo";
import { flechas } from "./constantes";

const anadirFlecha = (contenedor: HTMLDivElement, tipo: TipoFlecha): void => {
  const divFlecha = document.createElement("div");
  divFlecha.className = `flecha-${tipo}`;

  const imgFlecha = document.createElement("img");
  imgFlecha.src = tipo === "izquierda" ? flechas.left : flechas.right;
  divFlecha.appendChild(imgFlecha);

  divFlecha.addEventListener("click", () => {
    if (tipo === "izquierda") {
      contenedor.scrollBy({
        left: -contenedor.clientWidth,
        behavior: "smooth",
      });
    } else {
      contenedor.scrollBy({
        left: contenedor.clientWidth,
        behavior: "smooth",
      });
    }
  });

  contenedor.appendChild(divFlecha);
};

const crearTitulo = (tituloSeccion: string): HTMLHeadingElement => {
  const titulo = document.createElement("h2");
  titulo.textContent = tituloSeccion;
  return titulo;
};

const crearContenedor = (
  nombreClase: string,
  contenedor: HTMLDivElement
): HTMLDivElement => {
  const div = document.createElement("div");
  div.classList.add(nombreClase);
  div.id = nombreClase;
  contenedor.appendChild(div);
  return div;
};

const agregarTitulo = (
  tituloSeccion: string,
  contenedor: HTMLDivElement
): void => {
  const titulo = crearTitulo(tituloSeccion);
  contenedor.appendChild(titulo);
};

const pintarFlechas = (peliculaContenedor: HTMLDivElement): void => {
  anadirFlecha(peliculaContenedor, "izquierda");
  anadirFlecha(peliculaContenedor, "derecha");
};

const pintarPelicula = (
  pelicula: Pelicula,
  peliculaContenedor: HTMLDivElement
): void => {
  const divPelicula = crearContenedor(
    nombreClases.pelicula,
    peliculaContenedor
  );
  divPelicula.innerHTML = `
  <img src="${pelicula.imagen}" alt="${pelicula.titulo}"/>
  <h3>${pelicula.titulo}</h3>
  `;
};

const pintarPeliculas = (
  peliculas: Pelicula[],
  peliculaContenedor: HTMLDivElement
): void => {
  peliculas.forEach((pelicula) => {
    pintarPelicula(pelicula, peliculaContenedor);
  });
};

export const pintarListaPeliculas = (
  tituloSeccion: string,
  listaPeliculas: Pelicula[]
): void => {
  // Obtenemos el div principal
  const appDiv = document.getElementById("principal");
  // Comprobamos que existe

  if (appDiv && appDiv instanceof HTMLDivElement) {
    //Creamos div para las peliculas
    const creaDivPeliculas = crearContenedor(nombreClases.peliculas, appDiv);

    // Creamos titulo
    agregarTitulo(tituloSeccion, creaDivPeliculas);

    // Crear un div list de peliculas
    const divListaPeliculas = crearContenedor(
      nombreClases.listaPeliculas,
      creaDivPeliculas
    );

    // Creamos div contenedor de peliculas
    const divPeliculasContenedor = crearContenedor(
      nombreClases.peliculasContenedor,
      divListaPeliculas
    );
    // Añadir flechas
    pintarFlechas(divPeliculasContenedor);

    pintarPeliculas(listaPeliculas, divPeliculasContenedor);
  } else {
    console.error("No se encontró el elemento");
  }
};
