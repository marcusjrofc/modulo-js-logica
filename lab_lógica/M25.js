const times = [
  { vitorias: 12, empates: 4, saldo_gols: 10 },
  { vitorias: 9, empates: 13, saldo_gols: 10 },
];
let pontosA = times[0].vitorias * 3 + times[0].empates * 1;
let pontosB = times[1].vitorias * 3 + times[1].empates * 1;
let saldo_golsA = times[0].saldo_gols;
let saldo_golsB = times[1].saldo_gols;

if (pontosA > pontosB) {
  console.log("Time A");
} else if (pontosB > pontosA) {
  console.log("Time B");
} else if (pontosA == pontosB && saldo_golsA > saldo_golsB) {
  console.log("Time A");
} else if (pontosA == pontosB && saldo_golsA < saldo_golsB) {
  console.log("Time B");
} else {
  console.log("Empate");
}
