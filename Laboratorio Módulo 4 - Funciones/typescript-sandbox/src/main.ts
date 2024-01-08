import "./style.css";

const turno = document.getElementById("turno");
function setTurn(turnoAnterior: string): string {
  return turnoAnterior.padStart(2, "0");
}

if (turno !== null && turno !== undefined) {
  function siguienteTurno(turnoPrev: string): string {
    const sumarTurno: number = parseInt(turnoPrev) + 1;
    const resultado: string = setTurn(sumarTurno.toString());
    return resultado;
  }
  function turnoAnterior(turnoPrev: string): string {
    const reducirTurno: number = parseInt(turnoPrev) - 1;
    if (reducirTurno <= 0) {
      alert("No se puede reducir más");
      return "01";
    } else {
      const resultado: string = setTurn(reducirTurno.toString());
      return resultado;
    }
  }

  // INICIO Llamada al reset

  function clickReset(): void {
    if (turno !== null && turno !== undefined) {
      turno.innerHTML = "01";
    }
  }
  const reset = document.getElementById("reset");

  if (reset !== null && reset !== undefined) {
    reset.addEventListener("click", clickReset);
  }

  // FIN Llamada al reset

  // INICIO Llamada avanzar

  function clickNext(): void {
    if (turno !== null && turno !== undefined) {
      turno.innerHTML = siguienteTurno(turno.innerHTML);
    }
  }

  const avanzar = document.getElementById("siguiente");

  if (avanzar !== null && avanzar !== undefined) {
    avanzar.addEventListener("click", clickNext);
  }

  // FIN Llamada avanzar

  // INICIO Llamada retroceder

  function clickPrev(): void {
    if (turno !== null && turno !== undefined) {
      turno.innerHTML = turnoAnterior(turno.innerHTML);
    }
  }

  const retroceder = document.getElementById("anterior");

  if (retroceder !== null && retroceder !== undefined) {
    retroceder.addEventListener("click", clickPrev);
  }

  // FIN Llamada retroceder

  // INICIO Llamada a cambio

  function changeTurn(): void {
    if (turno !== null && turno !== undefined) {
      const turnoNuevo = document.getElementById(
        "nuevoTurno"
      ) as HTMLInputElement;
      const formateoNuevo = setTurn(turnoNuevo.value);
      turno.innerHTML = formateoNuevo;
    }
  }

  const cambiarTurno = document.getElementById("cambiar");

  if (cambiarTurno !== null && cambiarTurno !== undefined) {
    cambiarTurno.addEventListener("click", changeTurn);
  }
  //FIN Llamada a cambio
}
