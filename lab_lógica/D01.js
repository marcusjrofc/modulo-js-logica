const prompt = require("prompt-sync")();
let n = parseInt(prompt("digite um número:"));
let ePrimo = true;

if (n === 1) {
  ePrimo = false;
} else {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      ePrimo = false;
      break;
    }
  }
}
if (ePrimo) {
  console.log("Primo");
} else {
  console.log("Não é primo");
}
