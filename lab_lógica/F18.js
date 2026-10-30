const prompt = require("prompt-sync")();
let d = Number(prompt('d: '));

if (d <= 800) {
    console.log(1);
} else if (d <= 1400) {
    console.log(2);
} else {
    console.log(3);
}