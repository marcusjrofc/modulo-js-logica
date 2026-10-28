const prompt = require("prompt-sync")();
let n1 = parseInt(prompt("digite um número:"));
let n2 = parseInt(prompt("digite um número:"));
let n3 = parseInt(prompt("digite um número:"));

if ((n1 >= -1000 && n2 >= -1000 && n3 >= -1000 && n1 <= 1000 && n2 <= 1000 && n3 <= 1000)) {
  if (n1 > n2 && n1 > n3) {
    console.log(n1);
  } else if (n2 > n1 && n2 > n3) {
    console.log(n2);
  } else if (n3 > n1 && n3 > n2) {
    console.log(n3);
  } else {
    console.log("todos os números são iguais");
  }
} else {
  console.log("digite números entre -1000 e 1000");
}
