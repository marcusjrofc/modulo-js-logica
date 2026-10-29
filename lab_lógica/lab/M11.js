const prompt = require("prompt-sync")();
let dias = parseInt(prompt("quantos dias de atraso? "));

if (dias >= 0 && dias <= 365) {
  if (dias <= 5) {
    let multa = 2;
    let total = dias * multa;
    console.log("Multa:" + total);
  }
  if (dias >= 6) {
    multa = 3.5;
    total = dias * multa;
    let limite = 50;
    total > limite;
    if (total < limite) {
      total = dias * multa;
      console.log("Multa:" + total);
    } else {
      total = 50;
      console.log("Multa:" + total);
    }
  }
} else {
  console.log("digite o número de dias entre 0 e 365!!!");
}
