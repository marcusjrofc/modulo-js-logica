const prompt = require("prompt-sync")();
let ovos = Number(prompt('quantos ovos?'))
let caixas = Math.floor(ovos / 12)
let soltos  = ovos % 12

console.log('Caixas:'+caixas,'\n Soltos:'+soltos)
