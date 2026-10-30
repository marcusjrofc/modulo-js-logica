const prompt = require("prompt-sync")();
let qtdpaes = Number(prompt('pães: '));
let qtddoces = Number(prompt('doces: '));
let qtdbolos = Number(prompt('bolos: '));

const pao = 1;
const doce = 2;
const bolo = 3;

let total = (qtdbolos * bolo) + (qtddoces * doce) + (qtdpaes * pao);

let premio = '';

if (total >= 150) {
    premio = 'bolo';
} else if (total >= 120) {
    premio = 'doce';
} else if (total >= 100) {
    premio = 'pão';
} else {
    premio = 'sem prêmio';
}

console.log(premio);