const prompt = require("prompt-sync")();
let bola = Number(prompt('diametro da bola: '));
let altura = Number(prompt('altura da caixa: '));
let largura = Number(prompt('largura da caixa: '));
let profundidade = Number(prompt('profundidade da caixa: '));

if (profundidade < bola || largura < bola || altura < bola) {
    console.log('Não cabe');
} else {
    console.log('Cabe');
}