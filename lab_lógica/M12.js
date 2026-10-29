const prompt = require("prompt-sync")();
let nota1 = parseFloat(prompt("digite a 1º nota:"));
let nota2 = parseFloat(prompt("digite a 2º nota:"));
let nota3 = parseFloat(prompt("digite a 3º nota:"));

let media = (nota1 + nota2 + nota3) / 3;

if (media >= 7) {
  console.log("Aprovado");
} else if (media >= 5 && media < 7) {
  let nota4 = parseFloat(prompt("digite a 4º nota:"));
  let recuperação = (media + nota4) / 2;
  if (recuperação >= 5) {
    console.log("Aprovado na recuperação");
  } else {
    console.log("Reprovado");
  }
} else {
  console.log("Reprovado");
}
