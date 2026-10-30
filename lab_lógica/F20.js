const prompt = require("prompt-sync")();
let qtdpaes = Number(prompt('pães: '));
let qtddoces = Number(prompt('doces: '));
let qtdbolos = Number(prompt('bolos: '));

const pao = 1;
const doce = 2;
const bolo = 3;

let total = (qtdbolos * bolo) + (qtddoces * doce) + (qtdpaes * pao);

if (total >= 150) {
    console.log('Bolo');
} else if (total >= 120) {
    console.log('Doce');
} else if (total >= 100) {
    console.log('Pão');
} else {
    console.log('Sem prêmio');
}