const prompt = require("prompt-sync")();
let n = parseInt(prompt('digite em quanto começa a contagem:'))

while( n < 1 || n > 100 || isNaN(n)){
    console.log('n° inválido!!!')
    n = parseInt(prompt("Por favor, digite um número entre 1 e 100: "))
}
for(let i = n;i >= 1; i--){
    console.log(i)
}
console.log('Decolar!!!')