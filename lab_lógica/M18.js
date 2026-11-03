const prompt = require("prompt-sync")();
let valor = Number(prompt("digite um valor:"));
let escala = prompt("digite uma escala:");

function converter(valor, escala) {
  if (escala == "C") {
    let F = (valor * 9) / 5 + 32;
    return `${F.toFixed(1)} F`;
  } else if (escala == "F") {
    let C = ((valor - 32) * 5) / 9;
    return `${C.toFixed(1)} C`;
  } else {
    return "Escala inválida";
  }
}

let resultado = converter(valor, escala);

if (resultado === "Escala inválida") {
  console.log(resultado);
} else {
  console.log("Resultado:", resultado);
}
