const prompt = require("prompt-sync")();
let horas = Number(prompt("digite a(s) hora(s):"));
let minutos = Number(prompt("digite o(s) minuto(s):"));
let hora_minuto = horas * 60;
let total = hora_minuto + minutos;

console.log(total);
