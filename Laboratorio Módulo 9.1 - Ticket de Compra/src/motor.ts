import {
  LineaTicket,
  ResultadoLineaTicket,
  ResultadoTotalTicket,
  TipoIva,
  TotalPorTipoIva,
} from "./model";

export const calculaLineaConIva = (
  totalSinIva: number,
  TipoIva: TipoIva
): number => {
  switch (TipoIva) {
    case "general":
      return parseFloat((totalSinIva * 1.21).toFixed(2));
    case "reducido":
      return parseFloat((totalSinIva * 1.1).toFixed(2));
    case "superreducidoA":
      return parseFloat((totalSinIva * 1.04).toFixed(2));
    case "superreducidoB":
      return parseFloat((totalSinIva * 1.05).toFixed(2));
    case "superreducidoC":
      return parseFloat((totalSinIva * 1.06).toFixed(2));
    case "sinIva":
      return parseFloat(totalSinIva.toFixed(2));
  }
};

export const calculaResultadoLineaTicket = (
  linea: LineaTicket
): ResultadoLineaTicket => {
  const precioSinIva = linea.producto.precio * linea.cantidad;
  return {
    nombre: linea.producto.nombre,
    cantidad: linea.cantidad,
    precionSinIva: precioSinIva,
    tipoIva: linea.producto.tipoIva,
    precioConIva: calculaLineaConIva(precioSinIva, linea.producto.tipoIva),
  };
};

export const calcultaTotalTicket = (
  lineas: ResultadoLineaTicket[]
): ResultadoTotalTicket => {
  const totalSinIva = lineas.reduce(
    (acc, linea) => parseFloat((acc + linea.precionSinIva).toFixed(2)),
    0
  );
  const totalConIva = lineas.reduce(
    (acc, linea) => parseFloat((acc + linea.precioConIva).toFixed(2)),
    0
  );
  const totalIva = parseFloat((totalConIva - totalSinIva).toFixed(2));
  return {
    totalSinIva,
    totalConIva,
    totalIva,
  };
};

export const desgloseIVA = (
  lineas: ResultadoLineaTicket[]
): TotalPorTipoIva[] => {
  let desglose: TotalPorTipoIva[] = [
    { tipoIva: "general", cuantia: 0 },
    { tipoIva: "reducido", cuantia: 0 },
    { tipoIva: "superreducidoA", cuantia: 0 },
    { tipoIva: "superreducidoB", cuantia: 0 },
    { tipoIva: "superreducidoC", cuantia: 0 },
    { tipoIva: "sinIva", cuantia: 0 },
  ];

  lineas.forEach((linea) => {
    desglose.forEach((tipoIva) => {
      if (tipoIva.tipoIva === linea.tipoIva) {
        tipoIva.cuantia += parseFloat(
          (linea.precioConIva - linea.precionSinIva).toFixed(2)
        );
      }
    });
  });

  return desglose;
};
