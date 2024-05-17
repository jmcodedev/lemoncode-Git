import "./style.css";

const __CUANTAS_LETRAS = 23;

const dividendo = 23;

const resto = dividendo % __CUANTAS_LETRAS;

console.log(
  `El resto de dividir ${dividendo} entre ${__CUANTAS_LETRAS} es: ${resto}`
);
const __LETRAS = "TRWAGMYFPDXBNJZSQVHLCKE";

const letraCalculada = "T";

console.log(letraCalculada === __LETRAS[resto]);

