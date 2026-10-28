const prompt = require("prompt-sync")();
let n = Number(prompt('digite um número(até 1 milhão):'))
let algarismo = n % 10
console.log(algarismo)
