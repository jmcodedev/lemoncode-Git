import "./style.css";

interface Grupo {
  nombre: string;
  fundacion: number;
  activo: boolean;
  genero: string;
}

const grupo_A: Grupo = {
  nombre: `The Beatles`,
  fundacion: 1960,
  activo: true,
  genero: "Pop Rock",
};
const grupo_B: Grupo = {
  nombre: `Queen`,
  fundacion: 1970,
  activo: false,
  genero: "Rock",
};
const grupo_C: Grupo = {
  nombre: `AC DC`,
  fundacion: 1973,
  activo: true,
  genero: "Hard Rock",
};
const grupo_D: Grupo = {
  nombre: `Ludwig van Beethoven`,
  fundacion: 1770,
  activo: false,
  genero: "Clasica",
};
const grupo_E: Grupo = {
  nombre: `The Rolling Stones`,
  fundacion: 1962,
  activo: true,
  genero: "Rock",
};

console.log(grupo_A);
console.log(grupo_B);
console.log(grupo_C);
console.log(grupo_D);
console.log(grupo_E);
