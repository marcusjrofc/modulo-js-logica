const prompt = require("prompt-sync")();
let n = Number(prompt("número de trechos: "));
let distanciaTotal = 0;

for (let i = 0; i < n; i++) {
    let t = Number(prompt("tempo: "));
    let vm = Number(prompt("velocidade média: "));
    distanciaTotal += (t * vm); 
}
console.log(distanciaTotal);