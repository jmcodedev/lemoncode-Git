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
      return "00";
    } else {
      const resultado: string = setTurn(reducirTurno.toString());
      return resultado;
    }
  }

  const avanzar = document.getElementById("siguiente");
  avanzar?.addEventListener("click", function () {
    turno.innerHTML = siguienteTurno(turno.innerHTML);
  });
  const retroceder = document.getElementById("anterior");
  retroceder?.addEventListener("click", function () {
    turno.innerHTML = turnoAnterior(turno.innerHTML);
  });

  const reset = document.getElementById("reset");
  reset?.addEventListener("click", () => (turno.innerHTML = "00"));

  const cambiarTurno = document.getElementById("cambiar");
  cambiarTurno?.addEventListener("click", function () {
    const turnoNuevo = document.getElementById(
      "nuevoTurno"
    ) as HTMLInputElement;

    const formateoNuevo = setTurn(turnoNuevo.value);
    turno.innerHTML = formateoNuevo;
  });
}
