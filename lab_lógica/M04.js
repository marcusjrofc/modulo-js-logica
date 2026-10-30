const prompt = require("prompt-sync")();
let a = parseInt(prompt("1º segmento:"));
let b = parseInt(prompt("2º segmento:"));
let c = parseInt(prompt("3º segmento:"));

if (a < b + c && b < a + c && c < a + b) {
  if (a === b && b === c) {
    console.log("Equilátero");
  } else if (a !== b && a !== c && b !== c) {
    console.log("Escaleno");
  } else {
    console.log("Isósceles");
  }
} else {
  console.log("Não forma triângulo");
}
