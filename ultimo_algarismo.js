const prompt = require("prompt-sync")();
let n = Number(prompt("Digite um n°:"));
let ultimo_algarismo = n % 10; //Qualquer número inteiro dividido por 10 deixa como resto exatamente o seu último algarismo
console.log(ultimo_algarismo);
