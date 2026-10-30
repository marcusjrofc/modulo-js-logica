const prompt = require("prompt-sync")();
let n = Number(prompt('digite o número:'))

let atual = 0
let proximo = 1
let resultado = ''

while(atual <= n){
    resultado += atual + " "
    let soma = n + atual + proximo
    atual = proximo
    proximo = soma
}
console.log(resultado.trim());