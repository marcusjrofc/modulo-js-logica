const prompt = require("prompt-sync")();
let L = Number(prompt('km rodado: '));
let D = Number(prompt('pedagio a cada quantos km? '));
let K = Number(prompt('custo por km: '));
let P = Number(prompt('valor do pedagio: '));

let custoKm = L * K;
let qntPedagios = Math.floor(L / D);
let custoPedagios = qntPedagios * P;
let total = custoKm + custoPedagios;

console.log(total);