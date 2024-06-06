import "./style.css";
import {
  tieneCaracteresESpeciales,
  tieneLongitudMinima,
  tieneMayusculasYMinsculas,
  tieneNombreUsuario,
  tieneNumeros,
} from "./motor";
import { ValidacionClave } from "./model";

export const validarClave = (
  nombreUsuario: string,
  clave: string,
  commonPasswords: string[]
): ValidacionClave => {
  if (commonPasswords.includes(clave)) {
    return { esValida: false, error: "La clave es muy común" };
  }

  if (!tieneLongitudMinima(clave)) {
    return { esValida: false, error: "La clave no tiene la longitud mínima" };
  }

  if (!tieneMayusculasYMinsculas(clave)) {
    return {
      esValida: false,
      error: "La clave no tiene mayúsculas y minúsculas",
    };
  }

  if (!tieneNumeros(clave)) {
    return { esValida: false, error: "La clave no tiene números" };
  }

  if (!tieneCaracteresESpeciales(clave)) {
    return {
      esValida: false,
      error: "La clave no tiene caracteres especiales",
    };
  }

  if (tieneNombreUsuario(nombreUsuario, clave)) {
    return { esValida: false, error: "La clave contiene el nombre de usuario" };
  }

  return { esValida: true };
};
