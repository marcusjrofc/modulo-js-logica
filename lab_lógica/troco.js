const prompt = require("prompt-sync")();
let p = parseFloat(prompt("quanto custa? "));
let v = parseFloat(prompt("quanto o cliente deu? "));
let pagamento = 0;
if ((p, v <= 10000 && p, v > 0)) {
  if (p < v) {
    pagamento = v - p;
    console.log("Troco:" + pagamento);
  }
  if (p > v) {
    pagamento = p - v;
    console.log("Faltam:" + pagamento);
  }else{
    console.log('pagamento exato')
  }
} else {
  console.log("digite um valor maior que 0 e menor que 10 mil!!!");
}
