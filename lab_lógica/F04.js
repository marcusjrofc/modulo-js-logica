const prompt = require("prompt-sync")();
let n = Number(prompt('digite um número:'))

if(n %2 == 0){
    console.log('par')
}else{
    console.log('ímpar')
}