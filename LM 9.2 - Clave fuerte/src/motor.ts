

export const tieneMayusculasYMinsculas = (clave: string): boolean =>
  clave !== clave.toLowerCase() && clave !== clave.toUpperCase();

export const tieneNumeros = (clave: string): boolean => {
  for (let i = 0; i < clave.length; i++) {
    if (!isNaN(Number(clave[i]))) {
      return true;
    }
  }
  return false;
};

export const tieneCaracteresESpeciales = (clave: string): boolean => {
  const caracteresEspeciales = "!@#$%^+-_€~";
  for (let i = 0; i < clave.length; i++) {
    if (caracteresEspeciales.includes(clave[i])) {
      return true;
    }
  }
  return false;
};

export const tieneLongitudMinima = (clave: string): boolean =>
  clave.length >= 8;

export const tieneNombreUsuario = (
  nombreUsuario: string,
  clave: string
): boolean => clave.includes(nombreUsuario);
