const prompt = require("prompt-sync")();
let p1 = Number(prompt('idade da pessoa 1: '));
let p2 = Number(prompt('idade da pessoa 2: '));
let preco1 = 0;
let preco2 = 0;

if (p1 <= 17) {
    preco1 = 14;
} else if (p1 <= 59) {
    preco1 = 28;
} else {
    preco1 = 18;
}
if (p2 <= 17) {
    preco2 = 14;
} else if (p2 <= 59) {
    preco2 = 28;
} else {
    preco2 = 18;
}
let total = preco1 + preco2;

console.log(total);