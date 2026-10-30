const prompt = require("prompt-sync")();
let x = Number(prompt('x: '));
let y = Number(prompt('y: '));

if (x >= 0 && x <= 432 && y >= 0 && y <= 468) {
    console.log('Dentro');
} else {
    console.log('Fora');
}