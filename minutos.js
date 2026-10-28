const prompt = require("prompt-sync")();
let h = Number(prompt("digite a(s) hora(s): "));
let m = Number(prompt("digite o(s) minuto(s):"));
let hora_minuto = h * 60;
let total = hora_minuto + m;
if (0 < h < 24 && 0 < m < 59) {
    console.log(total);
} else {
    console.log("digite hora ou minuto válido!!!");
}
