const prompt = require("prompt-sync")();
let dias = parseInt(prompt("quantos dias de atraso? "));
let multa = 2;
let limite = 50;
let total = dias * multa;

if (dias >= 0 && dias <= 365) {
  if (dias <= 5) {
    console.log("Multa:" + total);
  }
  if (dias >= 6) {
    multa = 3.5;
    total = dias * multa;
    if (total < limite) {
      console.log("Multa:" + total);
    } else {
      total = 50;
      console.log("Multa:" + total);
    }
  }
} else {
  console.log("Digite o número de dias entre 0 e 365");
}
