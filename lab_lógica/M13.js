const movimentos = [-50, -20];
const saldoInicial = 100;
let soma_entrada = 0;
let soma_saida = 0;

for (let i = 0; i < movimentos.length; i++) {
  if (movimentos[i] >= 0) {
    soma_entrada += movimentos[i];
    console.log("Entrada: R$", movimentos[i].toFixed(2));
  } else if (movimentos[i] < 0) {
    let valorSaida = Math.abs(movimentos[i]);
    soma_saida += valorSaida;
    console.log("Saída: R$", valorSaida.toFixed(2));
  }
}
let saldo_final = saldoInicial + soma_entrada - soma_saida;

console.log("Entradas: R$", soma_entrada.toFixed(2));
console.log("Saídas: R$", soma_saida.toFixed(2));
console.log("Saldo Final: R$", saldo_final.toFixed(2));
