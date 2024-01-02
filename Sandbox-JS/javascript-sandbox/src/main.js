import "./style.css";

function cambiarFotoPrincipal(idMiniatura) {
  const fotoPrincipal = document.getElementById("foto-principal");
  const miniatura = document.getElementById(idMiniatura);

  fotoPrincipal.src = miniatura.src;
}

const miniatura1 = document.getElementById("miniatura1");
const miniatura2 = document.getElementById("miniatura2");
const miniatura3 = document.getElementById("miniatura3");

miniatura1.addEventListener("click", () => cambiarFotoPrincipal("miniatura1"));
