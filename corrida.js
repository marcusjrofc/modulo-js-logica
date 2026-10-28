/* 

const tarifaBase = 5;
const precoPorMinuto = 0.5;


let km = 8;
km = km + 20;

let total = tarifaBase + km * precoPorKm + minutos * precoPorMinuto
console.log("R$: ", total.toFixed(2))
console.log(typeof tarifaBase)

*/
//
// Questão 1? O valor, que deu 45; Bateu com minha conta de cabeça.

// const tarifaBase = 5;
// const precoPorMinuto = 0.5;
// const precoPorKm = 2;

// let km = 8;
// km = km + 20;

// let total = tarifaBase + km * precoPorKm + minutos * precoPorMinuto
// console.log("R$: ", total.toFixed(2))
// const tarifaBase = 6;

// Questão 2? SyntaxError: O identificador 'tarifaBase' já foi declarado.

const tarifaBase = 5;
const precoPorMinuto = 0.5;
const precoPorKm = 2;

let km = 3;
let minutos = 45;

let total = tarifaBase + km * precoPorKm + minutos * precoPorMinuto;

console.log("R$:", total.toFixed(2));

// Questão 3? R$:33.50; Deu resultado igual.
