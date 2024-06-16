import { isValidIBAN } from "ibantools";
const $ = (selector: string) => document.querySelector(selector);

const $formulario = $("#form");
const $input = $("#iban");
const $bienformado = $("#bienformado");
const $valido = $("#valido");
const $banco = $("#banco");
const $sucursal = $("#sucursal");
const $dc = $("#dc");
const $cuenta = $("#cuenta");

const ibanBienFormado = (iban: string) => {
  const regex =
    /^(ES\d{2})(\s|.|-|_)?(?<codigoBanco>\d{4})(\s|.|-|_)?(?<codigoSucursal>\d{4})(\s|.|-|_)?(?<codigoControl>\d{2})(\s|.|-|_)?(?<numeroCuenta>\d{10})$/;

  return regex.exec(iban) === null ? false : regex.exec(iban);
};

const escribirDatos = (iban: string) => {
  const datos = ibanBienFormado(iban);
  if (
    !ibanBienFormado(iban) &&
    $bienformado &&
    $bienformado instanceof HTMLDivElement
  ) {
    $bienformado.textContent = "IBAN mal formado";
  }
  if (datos) {
    const { groups } = datos;
    const { codigoBanco, codigoSucursal, codigoControl, numeroCuenta } =
      groups as any;

    if ($bienformado && $bienformado instanceof HTMLDivElement) {
      $bienformado.textContent = "IBAN bien formado";
    }
    if ($banco && $banco instanceof HTMLDivElement) {
      $banco.textContent = `Código de banco: ${codigoBanco}`;
    }
    if ($sucursal && $sucursal instanceof HTMLDivElement) {
      $sucursal.textContent = `Código de sucursal: ${codigoSucursal}`;
    }
    if ($dc && $dc instanceof HTMLDivElement) {
      $dc.textContent = `Dígitos de control: ${codigoControl}`;
    }
    if ($cuenta && $cuenta instanceof HTMLDivElement) {
      $cuenta.textContent = `Número de cuenta: ${numeroCuenta}`;
    }
    if ($banco && $banco instanceof HTMLDivElement) {
      let nombreBanco = "";
      switch (codigoBanco) {
        case "2080":
          nombreBanco = "Abanca Corporación Bancaria";
          break;
        case "0061":
          nombreBanco = "Banca March";
          break;
        case "0188":
          nombreBanco = "Banco Alcalá";
          break;
        case "0182":
          nombreBanco = "Banco Bilbao Vizcaya Argentaria";
          break;
        case "0130":
          nombreBanco = "Banco Caixa Geral";
          break;
        case "0234":
          nombreBanco = "Banco Caminos";
          break;
        case "2105":
          nombreBanco = "Banco Castilla-La Mancha";
          break;
        case "0240":
          nombreBanco = "Banco de Crédito Social Cooperativo";
          break;
        case "0081":
          nombreBanco = "Banco de Sabadell";
          break;
        case "0487":
          nombreBanco = "Banco Mare Nostrum";
          break;
        case "0186":
          nombreBanco = "Banco Mediolanum";
          break;
        case "0238":
          nombreBanco = "Banco Pastor";
          break;
        case "0075":
          nombreBanco = "Banco Popular Español";
          break;
        case "0049":
          nombreBanco = "Banco Santander";
          break;
        case "3873":
          nombreBanco = "Banco Santander Totta";
          break;
        case "2038":
          nombreBanco = "Bankia";
          break;
        case "0128":
          nombreBanco = "Bankinter";
          break;
        case "0138":
          nombreBanco = "Bankoa";
          break;
        case "0152":
          nombreBanco = "Barclays Bank PLC";
          break;
        case "3842":
          nombreBanco = "BNP Paribas Paris";
          break;
        case "3025":
          nombreBanco = "Caixa de Credit del Enginyers";
          break;
        case "2100":
          nombreBanco = "Caixabank";
          break;
        case "2045":
          nombreBanco = "Caja de Ahorros y Monte de Piedad de Ontinyent";
          break;
        case "3035":
          nombreBanco = "Caja Laboral Popular CC";
          break;
        case "3081":
          nombreBanco = "Caja Rural Castilla-La Mancha";
          break;
        case "3058":
          nombreBanco = "Cajamar Caja Rural";
          break;
        case "2000":
          nombreBanco = "Cecabank";
          break;
        case "1474":
          nombreBanco = "Citibank Europe PLC";
          break;
        case "3821":
          nombreBanco = "Commerzbank AG";
          break;
        case "3877":
          nombreBanco = "Danske Bank A/S";
          break;
        case "0019":
          nombreBanco = "Deutsche Bank SAE";
          break;
        case "0239":
          nombreBanco = "EVO Banco";
          break;
        case "2085":
          nombreBanco = "Ibercaja Banco";
          break;
        case "1465":
          nombreBanco = "ING Bank NV";
          break;
        case "2095":
          nombreBanco = "Kutxabank";
          break;
        case "2048":
          nombreBanco = "Liberbank";
          break;
        case "0131":
          nombreBanco = "Novo Banco";
          break;
        case "0073":
          nombreBanco = "Open Bank";
          break;
        case "0108":
          nombreBanco = "Société Générale";
          break;
        case "2103":
          nombreBanco = "Unicaja Banco";
          break;
        default:
          nombreBanco = "Código de banco desconocido";
          break;
      }
      $banco.textContent = "Banco: " + nombreBanco;
    }

    if ($valido && $valido instanceof HTMLDivElement) {
      $valido.textContent = isValidIBAN(iban)
        ? "IBAN es válido"
        : "IBAN es inválido";
    }
  }
};

const iniciarFormulario = () => {
  if (
    $formulario &&
    $formulario instanceof HTMLFormElement &&
    $input &&
    $input instanceof HTMLInputElement &&
    $bienformado &&
    $bienformado instanceof HTMLDivElement
  ) {
    $formulario.addEventListener("submit", (event: Event) => {
      event.preventDefault();
      escribirDatos($input.value);
      console.log(isValidIBAN($input.value));
    });
  }
};

document.addEventListener("DOMContentLoaded", () => {
  iniciarFormulario();
});
