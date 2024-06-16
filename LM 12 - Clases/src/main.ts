interface Reserva {
  tipoHabitacion: "standard" | "suite";
  desayuno: boolean;
  pax: number;
  noches: number;
}

const reservas: Reserva[] = [
  {
    tipoHabitacion: "standard",
    desayuno: false,
    pax: 1,
    noches: 3,
  },
  {
    tipoHabitacion: "standard",
    desayuno: false,
    pax: 1,
    noches: 4,
  },
  {
    tipoHabitacion: "suite",
    desayuno: true,
    pax: 2,
    noches: 1,
  },
];

// CASO 1
class TotalReservasCliente {
  reservas: Reserva[];
  constructor(reservas: Reserva[]) {
    this.reservas = reservas;
  }

  calcularSubTotal(): number {
    let subtotal = 0;

    this.reservas.forEach((reserva) => {
      let precioPorNoche = 100;
      if (reserva.tipoHabitacion === "suite") {
        precioPorNoche = 150;
      }
      subtotal += precioPorNoche + reserva.pax * 40;

      // EJERCICIO ADICIONAL
      if (reserva.desayuno) {
        subtotal += reserva.pax * 15 * reserva.noches;
      }
      // FIN EJERCICIO ADICIONAL
    });

    return subtotal;
  }

  calcularTotal(): number {
    return this.calcularSubTotal() * 1.21;
  }
}

// CASO 2
class TourOperador extends TotalReservasCliente {
  precioNoche: number;

  constructor(reservas: Reserva[]) {
    super(reservas);
    this.precioNoche = 100;
  }

  calcularSubTotal(): number {
    let subtotal: number = 0;

    this.reservas.forEach((reserva) => {
      subtotal += this.precioNoche + reserva.pax * 40;
      // EJERCICIO ADICIONAL
      if (reserva.desayuno) {
        subtotal += reserva.pax * 15 * reserva.noches;
      }
      // FIN EJERCICIO ADICIONAL
    });

    return subtotal;
  }

  calcularTotal(): number {
    return this.calcularSubTotal() * 1.15;
  }
}

const caso1 = new TotalReservasCliente(reservas);
console.log(caso1.calcularTotal());

const caso2 = new TourOperador(reservas);
console.log(caso2.calcularTotal());
