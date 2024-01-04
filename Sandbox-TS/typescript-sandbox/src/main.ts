import "./style.css";

const turno = document.getElementById("turno");
const formatearTurno = (num: string): string => num.padStart(2, "0");

if (turno !== null && turno !== undefined) {
  function nextNum(numero: string): string {
    const resultado = parseInt(numero) + 1;
    return resultado.toString();
  }
  function prevNum(numero: string): string {
    const resultado = parseInt(numero) - 1;
    if (resultado >= 0) {
      alert("No se puede reducir el número 00");
      return "00";
    } else {
      return resultado.toString();
    }
  }
}
