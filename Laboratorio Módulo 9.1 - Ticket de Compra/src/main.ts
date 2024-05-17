import "./style.css";
import {
  calculaResultadoLineaTicket,
  calcultaTotalTicket,
  desgloseIVA,
} from "./motor";
import { LineaTicket, TicketFinal } from "./model";

const productos: LineaTicket[] = [
  {
    producto: {
      nombre: "Legumbres",
      precio: 2,
      tipoIva: "general",
    },
    cantidad: 2,
  },
  {
    producto: {
      nombre: "Perfume",
      precio: 20,
      tipoIva: "general",
    },
    cantidad: 3,
  },
  {
    producto: {
      nombre: "Leche",
      precio: 1,
      tipoIva: "superreducidoC",
    },
    cantidad: 6,
  },
  {
    producto: {
      nombre: "Lasaña",
      precio: 5,
      tipoIva: "superreducidoA",
    },
    cantidad: 1,
  },
];

const ticket: TicketFinal = {
  lineas: productos.map(calculaResultadoLineaTicket),
  total: calcultaTotalTicket(productos.map(calculaResultadoLineaTicket)),
  desgloseIva: desgloseIVA(productos.map(calculaResultadoLineaTicket)),
};

console.log("Laboratorio Módulo 9.1 - Ticket de Compra");
console.log("===========================================");
console.log("");
console.log("Creando ticket de compra...");
console.log("");
console.log("===========================================");
console.log("");
console.log("Ticket de compra:");
console.log("");
console.log(ticket);
