import "./style.css";

const peliculasOriginales: string[] = ["El caballero oscuro", "IT 2", "Matrix"];

const insertarPelicula = <T>(
  arrayEntrada: T[],
  cabeza: boolean,
  elemento: T
): T[] => {
  return cabeza ? [elemento, ...arrayEntrada] : [...arrayEntrada, elemento];
};

const nuevasPeliculas = insertarPelicula(
  peliculasOriginales,
  false,
  "Harry Potter"
);

console.log(nuevasPeliculas);
