const prompt = require("prompt-sync")();
let n1 = Number(prompt("digite um número:"));
let n2 = Number(prompt("digite outro número:"));
let pares = 0;
let soma = 0;

for (let i = n1; i <= n2; i++) {
  if (i % 2 === 0) {
    pares += 1;
    soma += i;
  }
}
console.log("Pares: " + pares);
console.log("Soma: " + soma);