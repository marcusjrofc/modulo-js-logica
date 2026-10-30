const prompt = require("prompt-sync")();
let n = Number(prompt("digite um número:"));
let soma = 0;

while (n > 0) {
  let algarismo = n % 10;
  soma += algarismo;
  n = Math.floor(n / 10);
}
console.log(soma);
