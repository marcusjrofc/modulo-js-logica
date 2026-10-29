const prompt = require("prompt-sync")();
let nota1 = parseFloat(prompt('digite a 1º nota:'))
let nota2 = parseFloat(prompt('digite a 2º nota:'))
let nota3 = parseFloat(prompt('digite a 3º nota:'))
let media = (nota1+nota2+nota3)/3

console.log('Média:'+media.toFixed(2))