const prompt = require("prompt-sync")();
let p = parseInt(prompt("digite o número de pessoas:"));
let c = parseInt(prompt("digite o número de lugares:"));

if (p >= 1 && p <= 10000 && c >= 1 && c <= 10000) {
  let onibus = Math.floor(p / c);
  if (p % c == 0) {
    console.log(onibus);
  } else {
    console.log(onibus + 1);
  }
}
