const prompt = require("prompt-sync")();
let n = parseInt(prompt("digite um nº: "));

for (let i = 1; i <= 10; i++) {
  console.log(`${n} x ${i} = ${n * i}`);
}