const prompt = require("prompt-sync")();
let saque = parseInt(prompt("digite o valor do saque:"));

if (saque > 0 && saque % 10 == 0) {
  let nota100 = Math.floor(saque / 100);
  let resto = saque % 100;
  let nota50 = Math.floor(resto / 50);
  resto = resto % 50;
  let nota20 = Math.floor(resto / 20);
  resto = resto % 20;
  let nota10 = Math.floor(resto / 10);

  console.log('Nota de 100:'+nota100,'\n Nota de 50:'+nota50,'\n Nota de 20:'+nota20,'\n Nota de 10:'+nota10)
}else{
    console.log('valor inválido')
}
