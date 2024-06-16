const $ = (selector: string) => document.querySelector(selector);

const $formulario = $("#form");
const $html = $("#html-code");
const $resultado = $(".contenedor-resultados");

const extraerImg = (cadena: string): string[] => {
  const regex = /<img[^>]+src="([^">]+)"/gm;
  let match;
  const imagenes: string[] = [];
  while ((match = regex.exec(cadena))) {
    imagenes.push(match[1]);
  }

  return imagenes;
};

const mostrarResultado = (imagenes: string[]) => {
  console.log(imagenes);
  if ($resultado && $resultado instanceof HTMLPreElement) {
    if (imagenes.length === 0) {
      $resultado.textContent = "No se encontraron imágenes";
      return;
    }
    if ($resultado && $resultado instanceof HTMLPreElement) {
      if (imagenes.length === 0) {
        $resultado.textContent = "No se encontraron imágenes";
        return;
      }
      $resultado.textContent = imagenes.join("\n");
    }
  }
};

const iniciarFormulario = () => {
  if (
    $formulario &&
    $html &&
    $formulario instanceof HTMLFormElement &&
    $html instanceof HTMLTextAreaElement
  ) {
    $formulario.addEventListener("submit", (evento) => {
      evento.preventDefault();
      console.log($html.value);
      const imagenes = extraerImg($html.value);
      console.log(imagenes);
      mostrarResultado(imagenes);
    });
  }
};

document.addEventListener("DOMContentLoaded", () => {
  iniciarFormulario();
});
