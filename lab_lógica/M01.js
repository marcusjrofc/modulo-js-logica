const prompt = require("prompt-sync")();
let ano = parseInt(prompt("digite o ano:"));

if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
  console.log("Bissexto");
} else {
  console.log("Não bissexto");
}
