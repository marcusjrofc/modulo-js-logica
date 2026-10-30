const prompt = require("prompt-sync")();
let n = parseInt(prompt("digite um nº:"));

let soma = 0;

for (let i = 1; i <= n; i++) {
  soma += i;
}
console.log(soma);
