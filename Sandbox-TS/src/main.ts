// Definir el costo total del ticket y el costo de las bebidas incluidas
const costoTotal = 120;
const costoBebidasIncluidas = 18;

// Número de amigos
const numeroAmigos = 6;

// Calcular el costo total sin las bebidas
const costoCena = costoTotal - costoBebidasIncluidas;

// Calcular el costo por persona
const costoPorPersona = costoCena / numeroAmigos;

console.log(`Cada comensal debe pagar ${costoPorPersona.toFixed(2)}€ para dividir los costos de manera equitativa.`);
